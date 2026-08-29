import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){return <ArtifactAnalysis
 domain='Philosophy · Political Economy'
 year='1867'
 title='Das Kapital, Vol. I'
 creator='Karl Marx'
 order='G'
 orderName='Generative consciousness · explanatory relocation'
 cms={915}
 range='Median across 10 evaluations'
 headline='Capitalism becomes harder to see at exactly the point where its surface becomes easiest to describe.'
 analysis={[
  'At the surface, capitalist exchange can be represented as a world of commodities, prices, wages and formally free contracts. Marx does not merely add moral criticism to that picture. He makes the picture itself explanatorily insufficient. The exchange relation that appears complete at the market must be followed into production, where labour-power, surplus value and accumulation reveal why equivalent exchange can coexist with systematic expansion of capital.',
  'TORC therefore locates the decisive move not in the book’s anger, dialectical style or conceptual density, but in a relocation of explanatory center. What looks like a relation among things becomes a social relation carried by things. What looks like the price of labour becomes the value of labour-power. What looks like the self-expansion of money becomes a reproducible relation between production, appropriation and accumulation.',
  'That relocation changes the role of appearance. Market forms are not simply false pictures waiting to be corrected; they are generated appearances. They are real forms produced by the very structure they conceal. This is why the book cannot be reduced to a Level-3 diagnosis of ideological distortion: it attempts to explain why the distortion has the shape and persistence that it does.'
 ]}
 dimensions={[
  {key:'RL',name:'Relational Load',score:'9.4',artifact:'Commodity, money, labour-power, production, machinery, wages, class relation and accumulation remain consequentially linked across different analytical scales.'},
  {key:'AD',name:'Abstraction Depth',score:'9.2',artifact:'Concrete exchange is repeatedly lifted into value-form, abstract labour, capital and reproduction without abandoning the material phenomena those abstractions must explain.'},
  {key:'CD',name:'Constraint Density',score:'8.8',artifact:'Logical derivation, historical material, institutional detail and economic relations constrain one another, leaving substantial but not unlimited room for alternative reconstruction.'},
  {key:'ID',name:'Inferential Distance',score:'9.1',artifact:'The path from ordinary market appearances to surplus-value production and capital reproduction is deeply non-routine and requires sustained reconstruction.'},
  {key:'IC',name:'Integrative Compression',score:'9.3',artifact:'A comparatively small conceptual architecture reorganizes a vast field of prices, labour, technology, accumulation, class and historical change.'},
  {key:'GR',name:'Generalization Reach',score:'8.8',artifact:'The structure transfers powerfully across capitalist institutions and historical situations, while remaining materially tied to the ontology of capitalist production.'}
 ]}
 boundaryTitle='Why G, not 3a—or GΩ?'
 boundary={[
  '3a is a serious lower alternative because Capital repeatedly exposes an external social order whose appearances mislead the agents living inside it. But diagnosis is not enough to account for the completed artifact. The book does not merely say that capitalism is misperceived; it constructs a mechanism intended to explain why its characteristic appearances are produced.',
  'GΩ is a different question. Historical importance, political influence and the existence of Marxist successor traditions cannot establish successor-baseline necessity. Adequate political-economic inquiry can reject Marx’s specific value architecture and still continue. Capital changes the explanatory landscape without becoming an unavoidable foundation for every adequate successor account.'
 ]}
 exceptionalTitle='The surface is not discarded. It is explained as a product of what lies beneath it.'
 exceptional={[
  'That is the unusually powerful TORC result. The commodity, wage and exchange relation do not disappear once the deeper structure is introduced. They return as effects whose very intelligibility depends on the mechanism that generated them.',
  'Capital therefore performs more than demystification. It tries to explain why a social system can reproduce forms that are simultaneously real, functional and misleading. That is the point at which critique becomes explanatory relocation.'
 ]}
/>}
