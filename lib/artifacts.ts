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
  }
];
export function getArtifact(slug:string){ return artifacts.find(a=>a.slug===slug); }
