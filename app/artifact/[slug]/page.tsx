import {artifacts,getArtifact} from '@/lib/artifacts';
import {notFound} from 'next/navigation';
import ArtifactAnalysis from '../components/ArtifactAnalysis';
import {featuredAnalyses} from './featuredAnalyses';

export function generateStaticParams(){
  return artifacts.map(a=>({slug:a.slug}));
}

const orderNames:Record<string,string>={
  '1':'Direct consciousness',
  '2':'Symbolic consciousness',
  '3a':'Corrective recursive consciousness',
  '3b':'Fractured recursive consciousness',
  '3c':'Integrated recursive consciousness',
  'G':'Generative consciousness',
  'GΩ':'Generative consciousness — successor-baseline necessity'
};

export default function ArtifactPage({params}:{params:{slug:string}}){
  const a=getArtifact(params.slug);
  if(!a) notFound();

  const featured=featuredAnalyses[a.slug];
  if(featured){
    return <ArtifactAnalysis
      domain={a.domain}
      year={a.year}
      title={a.title}
      creator={a.creator}
      order={a.torc??'—'}
      orderName={orderNames[a.torc??'']??'Operational Order'}
      cms={a.cms}
      range='Median across 7 evaluations'
      headline={featured.headline}
      analysis={featured.analysis}
      dimensions={featured.dimensions}
      boundaryTitle={featured.boundaryTitle}
      boundary={featured.boundary}
      exceptionalTitle={featured.exceptionalTitle}
      exceptional={featured.exceptional}
    />;
  }

  return <ArtifactAnalysis
    domain={a.domain}
    year={a.year}
    title={a.title}
    creator={a.creator}
    order={a.torc??'—'}
    orderName={orderNames[a.torc??'']??'Operational Order'}
    cms={a.cms}
    range='Corpus determination'
    headline={`TORC resolves the completed artifact at ${a.torc}.`}
    analysis={[
      `The corpus determination for ${a.title} is ${a.torc}, with a Cognitive Magnitude Score of ${a.cms}. Operational Order and magnitude were determined independently under the TORC protocol.`,
      'This public corpus entry records the stabilized determination. A fuller artifact-specific analysis has not yet been published.'
    ]}
    boundaryTitle={`Why ${a.torc}?`}
    boundary={[
      'TORC assigns the lowest Operational Order sufficient to explain the governing operation of the completed artifact. The corpus determination shown here is the stabilized result.'
    ]}
    exceptionalTitle='Order and magnitude remain separate.'
    exceptional={[
      `A CMS of ${a.cms} describes demonstrated cognitive magnitude; it does not raise or lower the artifact’s Operational Order of ${a.torc}.`
    ]}
  />;
}
