import './globals.css';
import './site-polish.css';

import TorcNav from './TorcNav';

export const metadata={title:'TORC — Demonstrated Intelligence in Artifacts',description:'A framework for evaluating demonstrated intelligence in artifacts.'};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><div className="shell">
    <TorcNav />

    {children}
  </div></body></html>
}
