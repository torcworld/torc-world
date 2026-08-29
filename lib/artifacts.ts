export type Artifact={slug:string;title:string;creator:string;year:string;domain:string;status:'evaluated'|'in-progress';torc?:string;cms?:number;rl?:number;ad?:number;cd?:number;id?:number;ic?:number;gr?:number;summary?:string;why?:string;whyNot?:string};
export const artifacts:Artifact[]=[
{slug:'war-and-peace',title:'War and Peace',creator:'Leo Tolstoy',year:'1869',domain:'Literature',status:'evaluated',torc:'G',cms:899,rl:9.6,ad:8.8,cd:8.6,id:8.8,ic:9.2,gr:8.4},
{slug:'the-great-gatsby',title:'The Great Gatsby',creator:'F. Scott Fitzgerald',year:'1925',domain:'Literature',status:'evaluated',torc:'2',cms:762,rl:7.6,ad:7.3,cd:7.8,id:7.0,ic:8.3,gr:6.8},
{slug:'the-white-ribbon',title:'The White Ribbon',creator:'Michael Haneke',year:'2009',domain:'Film',status:'evaluated',torc:'3a',cms:805,rl:8.2,ad:7.6,cd:8.1,id:7.6,ic:8.2,gr:6.9},
{slug:'the-lobster',title:'The Lobster',creator:'Yorgos Lanthimos',year:'2015',domain:'Film',status:'evaluated',torc:'2',cms:761,rl:7.6,ad:7.3,cd:7.8,id:6.9,ic:7.8,gr:6.8},
{slug:'a-mathematical-theory-of-communication',title:'A Mathematical Theory of Communication',creator:'Claude E. Shannon',year:'1948',domain:'Science',status:'evaluated',torc:'GΩ',cms:950,rl:8.8,ad:9.4,cd:9.5,id:9.5,ic:9.7,gr:9.8},
{slug:'ulysses',title:'Ulysses',creator:'James Joyce',year:'1922',domain:'Literature',status:'evaluated',torc:'3c',cms:896,rl:9.5,ad:9.1,cd:9.1,id:8.8,ic:9.1,gr:7.7},
{slug:'the-republic',title:'The Republic',creator:'Plato',year:'c. 375 BCE',domain:'Philosophy',status:'evaluated',torc:'G',cms:901,rl:8.9,ad:9.3,cd:8.6,id:8.9,ic:9.1,gr:8.9},
{slug:'on-formally-undecidable-propositions',title:'On Formally Undecidable Propositions…',creator:'Kurt Gödel',year:'1931',domain:'Mathematics',status:'evaluated',torc:'GΩ',cms:960,rl:8.6,ad:9.8,cd:9.8,id:10.0,ic:9.7,gr:9.4},
{slug:'a-serious-man',title:'A Serious Man',creator:'Joel & Ethan Coen',year:'2009',domain:'Film',status:'evaluated',torc:'3b',cms:784,rl:7.8,ad:7.8,cd:7.7,id:7.6,ic:8.1,gr:6.8},
{slug:'tractatus-logico-philosophicus',title:'Tractatus Logico-Philosophicus',creator:'Ludwig Wittgenstein',year:'1921',domain:'Philosophy',status:'evaluated',torc:'G',cms:922,rl:8.3,ad:9.7,cd:9.1,id:9.1,ic:9.8,gr:8.7},
]
export function getArtifact(slug:string){return artifacts.find(a=>a.slug===slug)}
