import {NextResponse} from 'next/server';
export const runtime='nodejs';

const MAX=8*1024*1024;
const clean=(v:FormDataEntryValue|null,max=1200)=>String(v??'').trim().slice(0,max);
const escapeHtml=(s:string)=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]||c));

export async function POST(req:Request){
 try{
  const apiKey=process.env.RESEND_API_KEY;
  const to=process.env.TORC_SUBMISSIONS_EMAIL;
  const from=process.env.TORC_SUBMISSIONS_FROM || 'TORC Submissions <submissions@torc.world>';
  if(!apiKey||!to) return NextResponse.json({error:'Online submissions are not connected yet. Please use the inquiry email until submission delivery is activated.'},{status:503});
  const fd=await req.formData();
  const name=clean(fd.get('name'),120), email=clean(fd.get('email'),180), title=clean(fd.get('title'),220), type=clean(fd.get('type'),100), pack=clean(fd.get('package'),140), notes=clean(fd.get('notes'),3000);
  if(!name||!email||!title||!type||!pack||fd.get('permission')!=='yes') return NextResponse.json({error:'Please complete the required fields.'},{status:400});
  const file=fd.get('artifact');
  if(!(file instanceof File)||!file.size) return NextResponse.json({error:'Please attach the artifact.'},{status:400});
  if(file.size>MAX) return NextResponse.json({error:'The file is larger than 8 MB. Please send a smaller file or contact TORC directly.'},{status:413});
  const ext=file.name.toLowerCase();
  if(!['.pdf','.doc','.docx','.txt','.md'].some(x=>ext.endsWith(x))) return NextResponse.json({error:'Please upload a PDF, DOC, DOCX, TXT, or MD file.'},{status:400});
  const content=Buffer.from(await file.arrayBuffer()).toString('base64');
  const html=`<h2>New TORC artifact submission</h2><p><b>Name:</b> ${escapeHtml(name)}<br/><b>Email:</b> ${escapeHtml(email)}<br/><b>Artifact:</b> ${escapeHtml(title)}<br/><b>Type:</b> ${escapeHtml(type)}<br/><b>Requested analysis:</b> ${escapeHtml(pack)}</p><h3>What they want to understand</h3><p>${escapeHtml(notes||'—').replace(/\n/g,'<br/>')}</p><p><small>Submission is a scope request. No payment has been taken.</small></p>`;
  const sent=await fetch('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${apiKey}`,'Content-Type':'application/json'},body:JSON.stringify({from,to:[to],reply_to:email,subject:`TORC submission — ${title}`.slice(0,240),html,attachments:[{filename:file.name,content}]})});
  const body=await sent.json().catch(()=>({}));
  if(!sent.ok){console.error('Resend submission error',body);return NextResponse.json({error:'The submission could not be delivered. Please try again or contact TORC directly.'},{status:502});}
  return NextResponse.json({ok:true});
 }catch(e){console.error(e);return NextResponse.json({error:'The submission could not be delivered.'},{status:500});}
}
