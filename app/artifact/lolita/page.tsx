import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){
  return <ArtifactAnalysis
    domain='Literature'
    year='1955'
    title='Lolita'
    creator='Vladimir Nabokov'
    order='M3'
    orderName='Implication'
    cms={830}
    headline='Humbert doesn’t merely tell the story. The way he tells it becomes part of the evidence against the story he is telling.'
    analysis={['Nearly everything reaches us through Humbert Humbert: events, motives, chronology, descriptions of Dolores, explanations of himself, moments of apparent remorse and elaborate attempts to control how his conduct should be understood.','His language is therefore not decorative packaging around an independently available story. It determines what becomes visible, what disappears, what receives emphasis and what initially seems credible. Euphemism, wit, literary allusion, aestheticization, omission and self-dramatization continually reorganize the material.','But the novel does something more difficult. Humbert’s methods of representation themselves become evidence.','A discrepancy matters not only because it tells us something new about an event, but because it tells us something about the consciousness that previously represented that event. A belated admission can force an earlier passage to be reread. Dolores’s actions can expose what Humbert’s language had obscured. The reader gradually has to organize two inseparable things at once: the history Humbert is narrating and what Humbert’s act of narrating has done to that history.','That is M3 — Implication. Representation is no longer simply the means through which reality is organized. The consequences of representing have entered the reality that must subsequently be understood.']}
    dimensions={[
{key:'RL',name:'Relational Load',score:'8.3',artifact:'The score reflects the artifact-grounded relational load demonstrated in this evaluation.'},
{key:'AD',name:'Abstraction Depth',score:'8.4',artifact:'The score reflects the artifact-grounded abstraction depth demonstrated in this evaluation.'},
{key:'CD',name:'Constraint Density',score:'8.7',artifact:'The score reflects the artifact-grounded constraint density demonstrated in this evaluation.'},
{key:'ID',name:'Inferential Distance',score:'8.5',artifact:'The score reflects the artifact-grounded inferential distance demonstrated in this evaluation.'},
{key:'IC',name:'Integrative Compression',score:'8.9',artifact:'The score reflects the artifact-grounded integrative compression demonstrated in this evaluation.'},
{key:'GR',name:'Generalization Reach',score:'7.1',artifact:'The score reflects the artifact-grounded generalization reach demonstrated in this evaluation.'}
    ]}
    boundaryTitle='Why M3, not G?'
    boundary={['This is the serious upper boundary.','One can argue that Lolita does more than implicate Humbert’s narration. Because his testimony attempts to establish authority over Dolores and over the meaning of his own conduct, perhaps the novel reorganizes the very relation by which first-person testimony acquires explanatory standing.','TORC stops short of that conclusion.','The completed achievement does not require testimony as such to acquire a newly generated basis of standing. It requires Humbert’s particular act of representation to become implicated in what the reader must reconstruct. His telling becomes evidence; its distortions become evidence; its seductive power becomes evidence.','That is already a profound operation. But it is the characteristic operation of M3 rather than the additional reorganization required for G.']}
    exceptionalKicker="What TORC reveals"
    exceptionalTitle='Unreliable narration is not automatically M3. Lolita shows what makes it become M3.'
    exceptional={['A narrator can lie, misunderstand events or manipulate an audience while the artifact remains perfectly capable of representing those distortions from outside. Mere unreliability proves very little.','Nabokov makes the problem harder. Humbert controls almost the entire evidentiary environment through which Dolores can be recovered, while his control of that environment is itself one of the things the reader has to understand.','The window has become part of the scene.','That is why the novel’s extraordinary verbal surface is not the deepest TORC fact about it. The deeper architecture lies in making the production of the account inseparable from the reality the account claims to explain.']}
    evaluationDetails={<><p><b>Evaluative unit:</b> Complete novel</p><p><b>Original language:</b> English</p><p><b>Reference text:</b> Complete authoritative English text</p><p><b>Original publication:</b> Olympia Press, 1955</p><p><b>Version status:</b> Standard authorial English text</p><p><b>Included:</b> The complete primary literary artifact</p><p><b>Excluded:</b> Nabokov’s later Russian translation, screenplay adaptations, film adaptations, criticism, reception history, and secondary commentary</p><p><b>Evaluation basis:</b> Primary artifact</p></>}
  />;
}
