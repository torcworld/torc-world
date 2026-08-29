export type Artifact = {
  slug:string; title:string; creator:string; year:string; domain:string;
  status:'evaluated'|'in-progress';
  torc?:string; cms?:number; rl?:number; ad?:number; cd?:number; id?:number; ic?:number; gr?:number;
  summary?:string; why?:string; whyNot?:string;
};

// Clean-slate public corpus. New artifacts are added only after fresh TORC evaluation.
export const artifacts: Artifact[] = [
  {
    slug:'war-and-peace', title:'War and Peace', creator:'Leo Tolstoy', year:'1869', domain:'Literature', status:'evaluated',
    torc:'G', cms:915, rl:9.8, ad:9.0, cd:9.1, id:9.1, ic:9.4, gr:8.4,
    summary:'A novel that does more than portray people caught inside history. It steadily dismantles the idea that history can be explained by the people who appear to command it.',
    why:'Tolstoy repeatedly makes individual intention too small to explain the events around it. Commanders issue orders, soldiers act for local reasons, chance and circumstance intervene, and later accounts compress the result into stories about decisive men. The novel builds a different picture: history emerging from innumerable actions that no single participant controls.',
    whyNot:'3c remains a serious neighboring reading because the novel contains profound transformations of consciousness, mortality, agency and meaning. TORC places the completed work at G because those human transformations are ultimately embedded inside a larger rethinking of what makes historical events happen.'
  },
  {
    slug:'the-great-gatsby', title:'The Great Gatsby', creator:'F. Scott Fitzgerald', year:'1925', domain:'Literature', status:'evaluated',
    torc:'2', cms:763, rl:7.4, ad:7.4, cd:7.6, id:6.9, ic:8.2, gr:6.8,
    summary:'A remarkably compressed symbolic architecture in which money, class, desire, geography and memory converge on Gatsby’s attempt to make the past recoverable.',
    why:'Fitzgerald coordinates a small set of characters, places and recurring objects into a highly economical representational system. The green light, the Eggs, the mansion, Daisy’s voice and Gatsby’s self-invention repeatedly translate private desire into class, money and temporal longing.',
    whyNot:'3a is not required because the governing contradiction remains intelligible from a stable interpretive position. Gatsby’s failure deepens the symbolic structure rather than making consciousness’s relation to reality itself the governing recursive problem.'
  }
];
export function getArtifact(slug:string){ return artifacts.find(a=>a.slug===slug); }
