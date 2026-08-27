import {NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

// Vercel Functions currently reject request bodies above 4.5 MB, so keep
// the client/file limit safely below that boundary for direct uploads.
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.txt', '.md'];

const clean = (value: FormDataEntryValue | null, max = 1200) =>
  String(value ?? '').trim().slice(0, max);

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) =>
    ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'}[char] || char),
  );

const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req: Request) {
  try {
    const mailUser = process.env.TORC_MAIL_USER;
    const mailPassword = process.env.TORC_MAIL_PASSWORD;
    const destination = process.env.TORC_SUBMISSIONS_EMAIL || mailUser;

    if (!mailUser || !mailPassword || !destination) {
      return NextResponse.json(
        {error: 'Online submissions are not connected yet. Please contact TORC directly.'},
        {status: 503},
      );
    }

    const form = await req.formData();

    // Quiet honeypot for simple bots. Real users never see/fill this field.
    if (clean(form.get('website'), 200)) {
      return NextResponse.json({ok: true});
    }

    const name = clean(form.get('name'), 120);
    const email = clean(form.get('email'), 180);
    const title = clean(form.get('title'), 220);
    const type = clean(form.get('type'), 100);
    const requestedPackage = clean(form.get('package'), 160);
    const notes = clean(form.get('notes'), 4000);

    if (
      !name ||
      !validEmail(email) ||
      !title ||
      !type ||
      !requestedPackage ||
      form.get('permission') !== 'yes'
    ) {
      return NextResponse.json({error: 'Please complete the required fields.'}, {status: 400});
    }

    const artifact = form.get('artifact');
    if (!(artifact instanceof File) || !artifact.size) {
      return NextResponse.json({error: 'Please attach the artifact.'}, {status: 400});
    }

    if (artifact.size > MAX_FILE_BYTES) {
      return NextResponse.json(
        {error: 'The file is larger than 4 MB. Please use a smaller file or contact TORC directly.'},
        {status: 413},
      );
    }

    const lowerName = artifact.name.toLowerCase();
    if (!ALLOWED_EXTENSIONS.some((extension) => lowerName.endsWith(extension))) {
      return NextResponse.json(
        {error: 'Please upload a PDF, DOC, DOCX, TXT, or MD file.'},
        {status: 400},
      );
    }

    const attachment = Buffer.from(await artifact.arrayBuffer());

    const transporter = nodemailer.createTransport({
      host: 'mail.privateemail.com',
      port: 465,
      secure: true,
      auth: {user: mailUser, pass: mailPassword},
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeTitle = escapeHtml(title);
    const safeType = escapeHtml(type);
    const safePackage = escapeHtml(requestedPackage);
    const safeNotes = escapeHtml(notes || '—').replace(/\n/g, '<br/>');

    // Deliver the actual artifact to TORC.
    await transporter.sendMail({
      from: `TORC Submissions <${mailUser}>`,
      to: destination,
      replyTo: email,
      subject: `TORC submission — ${title}`.slice(0, 240),
      text: [
        'New TORC artifact submission',
        '',
        `Name: ${name}`,
        `Email: ${email}`,
        `Artifact: ${title}`,
        `Type: ${type}`,
        `Requested analysis: ${requestedPackage}`,
        '',
        'What they want to understand:',
        notes || '—',
        '',
        'No payment has been taken. This is a scope request.',
      ].join('\n'),
      html: `<h2>New TORC artifact submission</h2>
        <p><b>Name:</b> ${safeName}<br/>
        <b>Email:</b> ${safeEmail}<br/>
        <b>Artifact:</b> ${safeTitle}<br/>
        <b>Type:</b> ${safeType}<br/>
        <b>Requested analysis:</b> ${safePackage}</p>
        <h3>What they want to understand</h3>
        <p>${safeNotes}</p>
        <p><small>No payment has been taken. This is a scope request.</small></p>`,
      attachments: [
        {
          filename: artifact.name.replace(/[\r\n]/g, '').slice(0, 180),
          content: attachment,
          contentType: artifact.type || undefined,
        },
      ],
    });

    // Confirm receipt to the person who submitted the work.
    await transporter.sendMail({
      from: `TORC <${mailUser}>`,
      to: email,
      replyTo: destination,
      subject: `TORC received “${title}”`.slice(0, 240),
      text: `Hi ${name},\n\nTORC has received your submission, “${title}”.\n\nRequested analysis: ${requestedPackage}\n\nWe will review the artifact and confirm scope, price, and turnaround before any evaluation begins. No payment has been taken.\n\nYour work is treated as private evaluation material unless you separately agree to public inclusion.\n\nTORC\n${destination}`,
      html: `<p>Hi ${safeName},</p>
        <p>TORC has received your submission, <b>“${safeTitle}”</b>.</p>
        <p><b>Requested analysis:</b> ${safePackage}</p>
        <p>We will review the artifact and confirm scope, price, and turnaround before any evaluation begins. No payment has been taken.</p>
        <p>Your work is treated as private evaluation material unless you separately agree to public inclusion.</p>
        <p>TORC<br/><a href="mailto:${escapeHtml(destination)}">${escapeHtml(destination)}</a></p>`,
    });

    return NextResponse.json({ok: true});
  } catch (error) {
    console.error('TORC artifact submission error', error);
    return NextResponse.json(
      {error: 'The submission could not be delivered. Please try again or contact TORC directly.'},
      {status: 500},
    );
  }
}
