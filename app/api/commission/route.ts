import {NextResponse} from 'next/server';

export const runtime='nodejs';

function clean(v:any,max=500){return String(v??'').trim().slice(0,max)}

export async function POST(req:Request){
 try{
  const secret=process.env.STRIPE_SECRET_KEY;
  if(!secret)return NextResponse.json({error:'Payments are not connected yet. Please try again soon.'},{status:503});

  const b=await req.json();
  const title=clean(b.title,180), creator=clean(b.creator,180), year=clean(b.year,20), type=clean(b.type,100);
  const notes=clean(b.notes,900), name=clean(b.name,120)||'Anonymous', email=clean(b.email,180);
  if(!title||!creator||!type||!email)return NextResponse.json({error:'Please complete the required fields.'},{status:400});

  const origin=new URL(req.url).origin;
  const form=new URLSearchParams();
  form.set('mode','payment');
  form.set('success_url',`${origin}/commission/success?session_id={CHECKOUT_SESSION_ID}`);
  form.set('cancel_url',`${origin}/commission?cancelled=1`);
  form.set('customer_email',email);
  form.set('line_items[0][price_data][currency]','usd');
  form.set('line_items[0][price_data][unit_amount]','999');
  form.set('line_items[0][price_data][product_data][name]','TORC Archive — Artifact Commission');
  form.set('line_items[0][price_data][product_data][description]',`${title} — ${creator}`.slice(0,500));
  form.set('line_items[0][quantity]','1');
  form.set('metadata[artifact_title]',title);
  form.set('metadata[creator]',creator);
  form.set('metadata[year]',year);
  form.set('metadata[artifact_type]',type);
  form.set('metadata[commissioner]',name);
  form.set('metadata[commissioner_email]',email);
  form.set('metadata[notes]',notes);
  form.set('metadata[public_attribution]',b.anonymous?'anonymous':'named');
  form.set('payment_intent_data[metadata][artifact_title]',title);
  form.set('payment_intent_data[metadata][creator]',creator);
  form.set('payment_intent_data[metadata][commissioner]',name);

  const stripe=await fetch('https://api.stripe.com/v1/checkout/sessions',{
    method:'POST',
    headers:{Authorization:`Bearer ${secret}`,'Content-Type':'application/x-www-form-urlencoded'},
    body:form.toString()
  });
  const data=await stripe.json();
  if(!stripe.ok)return NextResponse.json({error:data?.error?.message||'Stripe could not create checkout.'},{status:502});
  return NextResponse.json({url:data.url});
 }catch(e){
  console.error(e);
  return NextResponse.json({error:'Could not create checkout.'},{status:500});
 }
}