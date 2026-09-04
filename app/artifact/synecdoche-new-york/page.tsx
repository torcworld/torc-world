import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){return <ArtifactAnalysis
 domain='Film'
 year='2008'
 title='Synecdoche, New York'
 creator='Charlie Kaufman'
 order='3b'
 orderName='Fractured recursive consciousness'
 cms={858}
 range='Median across 10 evaluations'
 headline='The representation fails because the representer keeps entering the thing he is trying to represent.'
 analysis={[
  'Caden’s project begins with a familiar artistic fantasy: construct a representation large enough and exact enough that life will finally become legible. The film does not merely show that the project becomes complicated. It makes representation recursively absorb its own maker. Actors portray people who acquire actors of their own; observed lives alter the roles built from them; rehearsal and lived event exchange priority; Caden eventually occupies a role inside the structure he once imagined he directed from outside.',
  'That is the point at which ordinary metafiction stops being an adequate description. The theatrical system is not only a symbol of life. Caden’s attempt to achieve an adequate orientation toward his life becomes one of the causes of his inability to achieve it. The method of knowing is inside the fracture it is supposed to master.',
  'TORC therefore places the film at 3b rather than treating its recursion as stylistic cleverness. The governing contradiction cannot be repaired from a secure external position because the position of the observer, author and self-model is precisely what the work destabilizes.'
 ]}
 dimensions={[
  {key:'RL',name:'Relational Load',score:'9.02',artifact:'Lives, actors, roles, memories, spaces, time layers and representations acquire recursively consequential counterparts.'},
  {key:'AD',name:'Abstraction Depth',score:'8.88',artifact:'The film moves from theatre representing life to representation representing its own representational process while preserving concrete personal stakes.'},
  {key:'CD',name:'Constraint Density',score:'8.68',artifact:'Identity, chronology, casting, memory, mortality and nested performance constrain one another across an unusually narrow viable construction.'},
  {key:'ID',name:'Inferential Distance',score:'8.60',artifact:'The viewer must reconstruct how apparent duplication, substitution and temporal distortion belong to one self-implicating representational problem.'},
  {key:'IC',name:'Integrative Compression',score:'8.80',artifact:'The film integrates enormous recursive complexity, though often through deliberate proliferation rather than extreme economy.'},
  {key:'GR',name:'Generalization Reach',score:'7.43',artifact:'Its architecture transfers strongly to problems of self-representation, authorship, identity and mortality without becoming a domain-independent explanatory mechanism.'}
 ]}
 boundaryTitle='Why 3b, not 3c?'
 boundary={[
  'The strongest upward pressure comes at the end. Caden relinquishes authorship, inhabits another person’s role and increasingly receives direction rather than imposing it. One evaluation treated that surrender as sufficient integration.',
  'The larger corpus result stops one step lower. Surrender, substitution and terminal closure do not yet establish a coherent orientation capable of living inside the contradiction while preserving it. The film reaches the threshold of integration, but its final movement can still be read as dissolution rather than a stable recursive orientation. Under downward resolution, 3b remains the governing order.'
 ]}
 exceptionalTitle='Its recursion is not a hall of mirrors. It is a causal trap.'
 exceptional={[
  'The usual description of Synecdoche as infinitely self-referential misses the operational point. The nested representations matter because each new attempt to capture the real changes the conditions under which the real can be captured.',
  'Caden cannot finish the work by finding a sufficiently accurate representation. Accuracy itself has become part of the failure. That is why the film’s deepest operation is fractured recursive consciousness rather than maximal symbolic complexity.'
 ]}
/>}
