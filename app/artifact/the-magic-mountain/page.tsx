import ArtifactAnalysis from '../components/ArtifactAnalysis';
import {getArtifact} from '@/lib/artifacts';
import {featuredAnalyses} from '../[slug]/featuredAnalyses';

const orderNames:Record<string,string>={
  '1':'Direct consciousness','2':'Symbolic consciousness','3a':'Corrective recursive consciousness','3b':'Fractured recursive consciousness','3c':'Integrated recursive consciousness','G':'Generative consciousness','GΩ':'Generative consciousness — successor-baseline necessity'
};

export default function Page(){
  const a=getArtifact('the-magic-mountain');
  const featured=featuredAnalyses['the-magic-mountain'];
  if(!a || !featured) return null;
  return <ArtifactAnalysis
    domain={a.domain} year={a.year} title={a.title} creator={a.creator}
    order={a.torc??'—'} orderName={orderNames[a.torc??'']??'Operational Order'}
    cms={a.cms} range='Median across 7 evaluations'
    headline={featured.headline} analysis={featured.analysis} dimensions={featured.dimensions}
    boundaryTitle={featured.boundaryTitle} boundary={featured.boundary}
    exceptionalTitle={featured.exceptionalTitle} exceptional={featured.exceptional}
  />;
}
