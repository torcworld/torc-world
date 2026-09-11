import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){
  return <ArtifactAnalysis
    domain='Literature'
    year='1975'
    title='Factotum'
    creator='Charles Bukowski'
    order='M1'
    orderName='Encounter'
    cms={486}
    headline='The novel doesn’t need a theory of work to understand what work does to a person.'
    analysis={['Henry Chinaski moves from job to job, room to room, drink to drink. Employers change. Cities change. Women enter and leave. Money disappears and briefly returns. Yet the same basic pressures keep re-forming around him: survival against autonomy, discipline against refusal, appetite against obligation, humiliation against the need to preserve some private sense of self.','It is tempting to turn this into a conceptual system—to call the novel a theory of alienated labor, capitalism, masculinity, alcoholism, artistic refusal or social marginality. But Factotum does not need any of those frameworks to do its principal cognitive work. Its intelligence lies in the arrangement of the encounters themselves.','Repetition is crucial. Each new job modifies what the previous jobs have already shown us. Chinaski’s refusal can look like independence in one situation, self-destruction in another, absurdity in a third. The novel never needs to settle those possibilities into a theory. It keeps placing a person against material and social constraints and allowing the pattern to accumulate.','That is why TORC classifies Factotum as M1 — Encounter. M1 is not an absence of thought. It is cognition operating directly through represented agents, events, motives, consequences and relations without requiring an additional conceptual structure to mediate them.']}
    dimensions={[
{key:'RL',name:'Relational Load',score:'5.3',artifact:'The score reflects the artifact-grounded relational load demonstrated in this evaluation.'},
{key:'AD',name:'Abstraction Depth',score:'4.0',artifact:'The score reflects the artifact-grounded abstraction depth demonstrated in this evaluation.'},
{key:'CD',name:'Constraint Density',score:'5.0',artifact:'The score reflects the artifact-grounded constraint density demonstrated in this evaluation.'},
{key:'ID',name:'Inferential Distance',score:'4.4',artifact:'The score reflects the artifact-grounded inferential distance demonstrated in this evaluation.'},
{key:'IC',name:'Integrative Compression',score:'5.5',artifact:'The score reflects the artifact-grounded integrative compression demonstrated in this evaluation.'},
{key:'GR',name:'Generalization Reach',score:'5.0',artifact:'The score reflects the artifact-grounded generalization reach demonstrated in this evaluation.'}
    ]}
    boundaryTitle='Why M1, not M2?'
    boundary={['A strong M2 reading is easy to imagine. The repeated employment episodes seem capable of forming a model of wage labor or institutional conformity.','But remove that model. Keep Chinaski’s employers, money problems, drinking, physical exhaustion, sexual relationships, dismissals, choices and recurring resistance. The novel’s central achievement remains.','The abstraction is available to the reader, but it is not indispensable machinery used by the artifact. TORC therefore stops at M1.']}
    exceptionalKicker="What TORC reveals"
    exceptionalTitle='Directness is not cognitive poverty.'
    exceptional={['Factotum is useful because it exposes one of the easiest mistakes to make when talking about intellectual depth: assuming that abstraction is inherently deeper than direct observation.','Bukowski’s method is almost the reverse. He strips away explanatory superstructure and lets recurrence do the thinking. The result is not enormously abstract, but it is cognitively coherent. A comparatively simple architecture organizes a substantial field of work, appetite, authority, money and self-defeat.','TORC makes it possible to describe that intelligence without pretending the novel is secretly a philosophical treatise—and without treating its refusal of abstraction as a deficiency.']}
    evaluationDetails={<><p><b>Evaluative unit:</b> Complete novel</p><p><b>Original language:</b> English</p><p><b>Reference text:</b> Complete authoritative English text</p><p><b>Publication:</b> 1975</p><p><b>Version status:</b> Standard text</p><p><b>Included:</b> The complete primary literary artifact</p><p><b>Excluded:</b> Adaptations, criticism, reception history, biographical interpretation, and secondary commentary</p><p><b>Evaluation basis:</b> Primary artifact</p></>}
  />;
}
