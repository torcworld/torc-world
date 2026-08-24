export type Artifact = {
  slug:string; title:string; creator:string; year:string; domain:string;
  torc:string; cms:number; rl:number; ad:number; cd:number; id:number; ic:number; gr:number;
  summary:string; why:string; whyNot:string;
};

export const artifacts: Artifact[] = [
  {slug:'critique-of-pure-reason',title:'Critique of Pure Reason',creator:'Immanuel Kant',year:'1781',domain:'Philosophy',torc:'GΩ',cms:942,rl:9.4,ad:9.7,cd:9.3,id:9.5,ic:9.4,gr:9.2,summary:'A transcendental reconstruction of the conditions under which experience and knowledge become possible.',why:'The work relocates the explanatory problem and establishes a successor baseline that later adequate inquiry cannot simply ignore.',whyNot:'M would require a demonstrated constraint on the admissible framework-space itself, not merely a profound theory of cognitive conditions.'},
  {slug:'camera-obscura',title:'Camera Obscura',creator:'—',year:'—',domain:'Screenplay',torc:'G',cms:878,rl:9.0,ad:8.8,cd:9.1,id:8.5,ic:9.1,gr:8.2,summary:'A recursive architecture of correction, authorship, authority, representation, and intellectual succession.',why:'Its governing mechanism scales from psychology and textual editing into institutional authority and canon formation, relocating how representational authority is explained.',whyNot:'The artifact demonstrates explanatory relocation, but successor-baseline necessity is not independently established.'},
  {slug:'pale-fire',title:'Pale Fire',creator:'Vladimir Nabokov',year:'1962',domain:'Literature',torc:'3B',cms:877,rl:9.1,ad:8.8,cd:9.0,id:8.7,ic:9.2,gr:7.8,summary:'An exceptionally dense recursive architecture of authorship, commentary, delusion, and interpretation.',why:'The work makes representation and interpretation recursively unstable in a way correction alone cannot resolve.',whyNot:'Its extraordinary recursion remains insufficient, on this evaluation, to establish an independent explanatory generator beyond the artifact.'}
];

export function getArtifact(slug:string){ return artifacts.find(a=>a.slug===slug); }
