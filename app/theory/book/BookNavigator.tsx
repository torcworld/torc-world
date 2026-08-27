"use client";
import { useEffect, useRef, useState } from 'react';
import styles from './book.module.css';

const items=[
 ["Personal Motivation", "personal-motivation", "chapter"],
 ["Part I --- The Map", "part-i-the-map", "part"],
 ["Chapter One --- False Depth", "chapter-one-false-depth", "chapter"],
 ["Chapter Two --- The Map and the Mirror", "chapter-two-the-map-and-the-mirror", "chapter"],
 ["Part II --- The History of the Mirror", "part-ii-the-history-of-the-mirror", "part"],
 ["Chapter Three --- From Belonging to Recursion", "chapter-three-from-belonging-to-recursion", "chapter"],
 ["Chapter Four --- The Infinite Mirror", "chapter-four-the-infinite-mirror", "chapter"],
 ["Part III --- Smoke Without Fire", "part-iii-smoke-without-fire", "part"],
 ["Chapter Five --- When the Signal Separates from the Source", "chapter-five-when-the-signal-separates-from-the-source", "chapter"],
 ["Part IV --- What Happened Here?", "part-iv-what-happened-here", "part"],
 ["Chapter Six --- Frozen Consciousness", "chapter-six-frozen-consciousness", "chapter"],
 ["Chapter Seven --- Operational Order", "chapter-seven-operational-order", "chapter"],
 ["Chapter Eight --- Cognitive Magnitude", "chapter-eight-cognitive-magnitude", "chapter"],
 ["Chapter Nine --- The Generator and the Test", "chapter-nine-the-generator-and-the-test", "chapter"],
 ["Epilogue --- What Still Burns", "epilogue-what-still-burns", "chapter"]
] as const;

export default function BookNavigator(){
 const [awake,setAwake]=useState(true);
 const [introOpen,setIntroOpen]=useState(true);
 const fadeTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const introTimer=useRef<ReturnType<typeof setTimeout>|null>(null);
 const navRef=useRef<HTMLElement|null>(null);

 useEffect(()=>{
  const wake=()=>{
   setAwake(true);
   if(fadeTimer.current) clearTimeout(fadeTimer.current);
   fadeTimer.current=setTimeout(()=>setAwake(false),1800);
  };
  const closeIntro=(event:PointerEvent)=>{
   if(navRef.current && !navRef.current.contains(event.target as Node)) setIntroOpen(false);
  };

  introTimer.current=setTimeout(()=>setIntroOpen(false),5000);
  window.addEventListener('mousemove',wake,{passive:true});
  window.addEventListener('touchstart',wake,{passive:true});
  window.addEventListener('scroll',wake,{passive:true});
  document.addEventListener('pointerdown',closeIntro,{passive:true});
  wake();

  return()=>{
   window.removeEventListener('mousemove',wake);
   window.removeEventListener('touchstart',wake);
   window.removeEventListener('scroll',wake);
   document.removeEventListener('pointerdown',closeIntro);
   if(fadeTimer.current) clearTimeout(fadeTimer.current);
   if(introTimer.current) clearTimeout(introTimer.current);
  };
 },[]);

 return <nav ref={navRef} className={`${styles.readerNav} ${awake?styles.readerNavAwake:''} ${introOpen?styles.readerNavIntroOpen:''}`} aria-label="Book contents">
   <button className={styles.readerNavTab} aria-label="Open table of contents" onClick={()=>setIntroOpen(v=>!v)}>Contents</button>
   <div className={styles.readerNavPanel}>
    <div className={styles.readerNavTitle}>The Age of False Depth</div>
    {items.map(([label,id,kind])=> kind==='part'
      ? <div key={id} className={styles.readerNavPart}>{label}</div>
      : <a key={id} href={`#${id}`} onClick={()=>setIntroOpen(false)}>{label}</a>)}
   </div>
  </nav>;
}
