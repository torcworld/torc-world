export type Artifact={slug:string;title:string;creator:string;year:string;domain:string;status:'evaluated'|'in-progress';torc?:string;cms?:number;rl?:number;ad?:number;cd?:number;id?:number;ic?:number;gr?:number;summary?:string;why?:string;whyNot?:string};
export const artifacts:Artifact[]=[
{slug:'war-and-peace',title:'War and Peace',creator:'Leo Tolstoy',year:'1869',domain:'Literature',status:'evaluated',torc:'G',cms:895,rl:9.6,ad:8.8,cd:8.6,id:8.8,ic:9.2,gr:8.4},
{slug:'the-great-gatsby',title:'The Great Gatsby',creator:'F. Scott Fitzgerald',year:'1925',domain:'Literature',status:'evaluated',torc:'2',cms:762,rl:7.6,ad:7.3,cd:7.8,id:7.0,ic:8.3,gr:6.8},
{slug:'the-white-ribbon',title:'The White Ribbon',creator:'Michael Haneke',year:'2009',domain:'Film',status:'evaluated',torc:'3a',cms:805,rl:8.2,ad:7.6,cd:8.1,id:7.6,ic:8.2,gr:6.9},
{slug:'the-lobster',title:'The Lobster',creator:'Yorgos Lanthimos',year:'2015',domain:'Film',status:'evaluated',torc:'2',cms:761,rl:7.6,ad:7.3,cd:7.8,id:6.9,ic:7.8,gr:6.8},
{slug:'a-mathematical-theory-of-communication',title:'A Mathematical Theory of Communication',creator:'Claude E. Shannon',year:'1948',domain:'Science',status:'evaluated',torc:'GΩ',cms:950,rl:8.8,ad:9.4,cd:9.5,id:9.5,ic:9.7,gr:9.8},
{slug:'ulysses',title:'Ulysses',creator:'James Joyce',year:'1922',domain:'Literature',status:'evaluated',torc:'3c',cms:896,rl:9.5,ad:9.1,cd:9.1,id:8.8,ic:9.1,gr:7.7},
{slug:'the-republic',title:'The Republic',creator:'Plato',year:'c. 375 BCE',domain:'Philosophy',status:'evaluated',torc:'G',cms:901,rl:8.9,ad:9.3,cd:8.6,id:8.9,ic:9.1,gr:8.9},
{slug:'on-formally-undecidable-propositions',title:'On Formally Undecidable Propositions…',creator:'Kurt Gödel',year:'1931',domain:'Mathematics',status:'evaluated',torc:'GΩ',cms:960,rl:8.6,ad:9.8,cd:9.8,id:10.0,ic:9.7,gr:9.4},
{slug:'a-serious-man',title:'A Serious Man',creator:'Joel & Ethan Coen',year:'2009',domain:'Film',status:'evaluated',torc:'3b',cms:784,rl:7.8,ad:7.8,cd:7.7,id:7.6,ic:8.1,gr:6.8},
{slug:'tractatus-logico-philosophicus',title:'Tractatus Logico-Philosophicus',creator:'Ludwig Wittgenstein',year:'1921',domain:'Philosophy',status:'evaluated',torc:'G',cms:922,rl:8.3,ad:9.7,cd:9.1,id:9.1,ic:9.8,gr:8.7},
{slug:'das-kapital-volume-i',title:'Das Kapital, Vol. I',creator:'Karl Marx',year:'1867',domain:'Philosophy',status:'evaluated',torc:'G',cms:915,rl:9.4,ad:9.2,cd:8.8,id:9.1,ic:9.3,gr:8.8},
{slug:'synecdoche-new-york',title:'Synecdoche, New York',creator:'Charlie Kaufman',year:'2008',domain:'Film',status:'evaluated',torc:'3b',cms:863,rl:9.1,ad:8.9,cd:8.7,id:8.8,ic:8.6,gr:7.5},
{slug:'2001-a-space-odyssey',title:'2001: A Space Odyssey',creator:'Stanley Kubrick',year:'1968',domain:'Film',status:'evaluated',torc:'2',cms:843,rl:8.4,ad:8.6,cd:8.6,id:8.3,ic:8.8,gr:7.7},
{slug:'job',title:'Job',creator:'Hebrew Bible',year:'Ancient',domain:'Scripture',status:'evaluated',torc:'3c'},
{slug:'pulp-fiction',title:'Pulp Fiction',creator:'Quentin Tarantino',year:'1994',domain:'Film',status:'evaluated',torc:'2',cms:787,rl:8.6,ad:6.9,cd:8.8,id:7.8,ic:8.7,gr:6.4},
{slug:'gospel-of-john',title:'Gospel of John',creator:'New Testament',year:'1st century CE',domain:'Scripture',status:'evaluated',torc:'2'},
{slug:'romans',title:'Romans',creator:'Paul the Apostle',year:'c. 57 CE',domain:'Scripture',status:'evaluated',torc:'G'},
{slug:'mulamadhyamakakarika',title:'Mūlamadhyamakakārikā',creator:'Nāgārjuna',year:'c. 2nd–3rd century CE',domain:'Philosophy',status:'evaluated',torc:'GΩ'},
{slug:'dependent-arising',title:'Dependent Arising — Kaccānagotta Sutta',creator:'Saṃyutta Nikāya 12.15',year:'Early Buddhist canon',domain:'Scripture',status:'evaluated',torc:'G'},
]
export function getArtifact(slug:string){return artifacts.find(a=>a.slug===slug)}
