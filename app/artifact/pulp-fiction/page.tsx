import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){return <ArtifactAnalysis
 domain='Film'
 year='1994'
 title='Pulp Fiction'
 creator='Quentin Tarantino'
 order='2'
 orderName='Symbolic consciousness'
 cms={765}
 range='Median across 10 evaluations'
 headline='The chronology is broken. The film’s orientation toward reality is not.'
 analysis={[
  'The nonlinear order is the obvious temptation. Vincent dies and later walks back into the film; the diner scene is split apart and completed only after the stories between it have changed what the scene means; Jules and Vincent pass through the same violent world and emerge with radically different readings of it. But TORC separates temporal rearrangement from recursive consciousness. The film reorganizes represented events; it does not make consciousness’s own capacity to orient itself toward reality the governing contradiction.',
  'That distinction becomes clearest in the Jules/Vincent contrast. Jules rereads the Ezekiel speech after the apartment shooting and converts a piece of performative intimidation into a moral interpretation of his own conduct. Vincent does not. The reordered chronology lets the film place those two trajectories beside one another with unusual force, but the contrast remains legible from a stable external standpoint. The viewer can understand the characters, their choices and their consequences without the act of understanding becoming structurally trapped inside the problem.',
  'TORC therefore keeps the film at Level 2. Its achievement is extraordinarily dense symbolic construction: sequence, repetition, dialogue, coincidence, genre expectation and moral contrast are coordinated so that chronology becomes an instrument of meaning rather than a mere puzzle.'
 ]}
 dimensions={[
  {key:'RL',name:'Relational Load',score:'8.28',artifact:'Remote episodes, character trajectories, recurring dialogue and the diner frame remain consequentially linked despite the fractured chronology.'},
  {key:'AD',name:'Abstraction Depth',score:'6.86',artifact:'The film supports abstraction around fate, violence, choice and redemption, but those relations remain close to concrete narrative situations rather than sustained meta-representational structures.'},
  {key:'CD',name:'Constraint Density',score:'8.40',artifact:'Temporal order, character knowledge, callbacks, tonal shifts and causal legibility sharply restrict how the stories can be rearranged without breaking the whole.'},
  {key:'ID',name:'Inferential Distance',score:'7.51',artifact:'The viewer must reconstruct chronology and moral contrast from dispersed scenes, but the inferential field remains bounded and recoverable.'},
  {key:'IC',name:'Integrative Compression',score:'8.45',artifact:'Three major storylines are made to function as one architecture through a small set of crossings, repetitions and mirrored choices.'},
  {key:'GR',name:'Generalization Reach',score:'6.40',artifact:'The construction transfers to problems of narrative order, choice and consequence, but remains strongly tied to its genre and social world.'}
 ]}
 boundaryTitle='Why Level 2, not Level 3?'
 boundary={[
  'Nonlinear form can make a film difficult to reconstruct without making the reconstruction itself recursively unstable. Pulp Fiction asks the viewer to reorder events, not to discover that the act of ordering reality is constitutively implicated in the contradiction being represented.',
  'Jules changes his interpretation of his own life, but the film can still diagnose that transformation from outside it. His conversion is therefore powerful represented consciousness, not yet a governing recursive fracture in the technical Level-3 sense.'
 ]}
 exceptionalTitle='The film uses time to change significance without changing ontology.'
 exceptional={[
  'Vincent’s reappearance after his death is not a metaphysical event. It is an editorial one. Yet because the audience already knows his fate, later scenes become morally and dramatically different from the same scenes in chronological order.',
  'That is a very TORC-specific distinction: temporal recursion can massively increase cognitive magnitude while leaving Operational Order unchanged. The film is difficult because of how much it coordinates, not because reality itself has become recursively unstable.'
 ]}
/>}
