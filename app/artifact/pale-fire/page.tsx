import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){return <ArtifactAnalysis
 domain='Literature'
 year='1962'
 title='Pale Fire'
 creator='Vladimir Nabokov'
 order='3b'
 orderName='Fractured recursive consciousness'
 cms={865}
 range='Median across 10 evaluations'
 headline='Interpretation does not uncover the object. It begins to manufacture the object it claims to explain.'
 analysis={[
  'The poem, Foreword, Commentary and Index initially look like separable layers: one text and the scholarly apparatus surrounding it. Kinbote destroys that separation. His commentary progressively converts Shade’s poem into evidence for a Zemblan narrative whose relevance depends on the very interpretive consciousness claiming merely to annotate what is already there.',
  'The reader is therefore forced to reconstruct two things at once: the putative object of interpretation and the process by which that object is being appropriated. Kinbote cannot stand outside the evidence because his needs, identity and representational habits alter what the evidence is allowed to become. The interpreting consciousness is no longer a transparent route to the represented reality; it is one of the conditions producing the contradiction.',
  'That is why TORC stops treating the novel as merely metafictional. Its governing operation is not that texts refer to other texts. It is that interpretation becomes causally entangled with the reality interpretation is supposed to recover.'
 ]}
 dimensions={[
  {key:'RL',name:'Relational Load',score:'8.99',artifact:'Poem, commentary, biography, chronology, invented geography, cross-reference and index remain mutually consequential rather than merely adjacent.'},
  {key:'AD',name:'Abstraction Depth',score:'8.80',artifact:'The novel repeatedly moves from represented events to interpretation of representation and then to the conditions under which interpretation itself constructs reality.'},
  {key:'CD',name:'Constraint Density',score:'8.93',artifact:'Cross-references, chronology, textual echoes, competing identities and documentary claims sharply restrict how any local passage can be read.'},
  {key:'ID',name:'Inferential Distance',score:'8.62',artifact:'The reader must reconstruct Shade, Kinbote, Zembla and their relations from a deliberately contaminated evidentiary field.'},
  {key:'IC',name:'Integrative Compression',score:'9.10',artifact:'An extraordinary amount of narrative and epistemic structure is encoded in the relation among a poem and the apparatus ostensibly explaining it.'},
  {key:'GR',name:'Generalization Reach',score:'7.50',artifact:'The architecture transfers strongly to interpretation, commentary, authorship and unreliable mediation without becoming a broadly external explanatory mechanism.'}
 ]}
 boundaryTitle='Why 3b, not 3c—or G?'
 boundary={[
  'Shade’s poem contains real 3c pressure: mortality, pattern, uncertainty and meaning are approached through an orientation that can survive the failure of complete explanation. But the completed artifact does not allow that integration to govern. Kinbote’s apparatus reopens the fracture and makes interpretation itself unstable.',
  'G is also blocked. The novel is extraordinarily generative inside its constructed textual world, but the mechanism primarily explains Kinbote, Shade, Zembla and the relations among the documents. Artifact-internal explanatory productivity is not enough to relocate the explanation of an independently constrained external target.'
 ]}
 exceptionalTitle='The commentary is not outside the poem, and the reader is not outside the commentary.'
 exceptional={[
  'Pale Fire makes a normally invisible dependency explicit: evidence does not arrive already interpreted. The act that organizes evidence can become part of what must itself be explained.',
  'That recursive contamination is why the novel can sustain such high magnitude without resolving upward into 3c. The reader may become better at diagnosing Kinbote, but the completed artifact never grants interpretation a fully secure position from which the fracture disappears.'
 ]}
/>}
