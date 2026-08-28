import {getArtifact} from '@/lib/artifacts';
import {WarAndPeaceAnalysis} from '../[slug]/page';

export default function WarAndPeacePage(){
  const artifact=getArtifact('war-and-peace');
  return <WarAndPeaceAnalysis a={artifact}/>;
}
