import {getArtifact} from '@/lib/artifacts';
import {notFound} from 'next/navigation';

import SpaceOdysseyPage from '../2001-a-space-odyssey/page';
import DasKapitalPage from '../das-kapital-volume-i/page';
import JobPage from '../job/page';
import PaleFirePage from '../pale-fire/page';
import SynecdochePage from '../synecdoche-new-york/page';
import PulpFictionPage from '../pulp-fiction/page';
import GospelOfJohnPage from '../gospel-of-john/page';
import RomansPage from '../romans/page';
import NagarjunaPage from '../mulamadhyamakakarika/page';
import DependentArisingPage from '../dependent-arising/page';

export default async function ArtifactPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const a=getArtifact(slug);
  if(!a)notFound();

  switch(slug){
    case '2001-a-space-odyssey': return <SpaceOdysseyPage/>;
    case 'das-kapital-volume-i': return <DasKapitalPage/>;
    case 'job': return <JobPage/>;
    case 'pale-fire': return <PaleFirePage/>;
    case 'synecdoche-new-york': return <SynecdochePage/>;
    case 'pulp-fiction': return <PulpFictionPage/>;
    case 'gospel-of-john': return <GospelOfJohnPage/>;
    case 'romans': return <RomansPage/>;
    case 'mulamadhyamakakarika': return <NagarjunaPage/>;
    case 'dependent-arising': return <DependentArisingPage/>;
    default: notFound();
  }
}
