import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){
  return <ArtifactAnalysis
    domain='Screenplay'
    year='June 4, 2007 draft'
    title='A Serious Man'
    creator='Joel Coen & Ethan Coen'
    order='M2'
    orderName='Mapping'
    cms={754}
    headline='Larry’s problem is not that he has no explanations. He is drowning in them.'
    analysis={['His life begins to come apart across family, work, money, health and community. Yet almost every domain comes equipped with some structure that ought to make events intelligible.','Physics offers mathematical order. Judaism offers stories, traditions and authorities. Law offers procedure. Professional institutions offer rules. Dreams offer patterns. Moral intuition suggests that actions should have consequences. Probability offers another language for uncertainty.','Larry keeps moving among these systems because he expects one of them to tell him what kind of world he is living in.','None does.','That makes the screenplay much more than a sequence of inexplicable misfortunes. Its governing achievement lies in the collision of explanatory frameworks. Each can organize some part of Larry’s reality; none acquires enough authority to organize the whole.','TORC therefore classifies the screenplay as M2 — Mapping. Its cognition operates through competing representations of reality rather than through direct encounter alone.']}
    dimensions={[
{key:'RL',name:'Relational Load',score:'7.6',artifact:'The score reflects the artifact-grounded relational load demonstrated in this evaluation.'},
{key:'AD',name:'Abstraction Depth',score:'7.5',artifact:'The score reflects the artifact-grounded abstraction depth demonstrated in this evaluation.'},
{key:'CD',name:'Constraint Density',score:'8.1',artifact:'The score reflects the artifact-grounded constraint density demonstrated in this evaluation.'},
{key:'ID',name:'Inferential Distance',score:'7.7',artifact:'The score reflects the artifact-grounded inferential distance demonstrated in this evaluation.'},
{key:'IC',name:'Integrative Compression',score:'8.1',artifact:'The score reflects the artifact-grounded integrative compression demonstrated in this evaluation.'},
{key:'GR',name:'Generalization Reach',score:'6.3',artifact:'The score reflects the artifact-grounded generalization reach demonstrated in this evaluation.'}
    ]}
    boundaryTitle='Why M2, not M3?'
    boundary={['A Serious Man makes M3 tempting because interpretation is everywhere. Larry thinks about explanation; rabbis tell stories about explanation; physics formalizes uncertainty; apparently meaningful events refuse to resolve themselves.','But representing a crisis of interpretation is not the same thing as making the operation of representation itself part of the subsequent reality that must be organized.','Larry’s frameworks fail, compete and multiply. Their failure is central. Yet the screenplay can still be adequately understood as constructing a man’s predicament through incompatible maps of reality.','The artifact represents the instability of explanation with considerable sophistication. It does not need to implicate its own explanatory operation to achieve what it achieves.','M2 is sufficient.']}
    exceptionalKicker="What TORC reveals"
    exceptionalTitle='Looking profound and performing a higher-order cognitive operation are different questions.'
    exceptional={['This is precisely the kind of artifact for which TORC becomes useful.','A Serious Man contains theology, quantum mechanics, parables, uncertainty, moral causality, dreams, unanswered questions and an ending that refuses explanatory closure. Conventional description can easily bundle those signals together under words like “metaphysical” or “profound.”','TORC asks what those elements actually do.','Here they form an unusually compressed network of competing explanatory systems. That is substantial cognitive architecture, reflected in the screenplay’s CMS of 754. But their ambiguity does not automatically promote the artifact to M3.','The result is not a demotion of the screenplay. It is a more precise description of where its intelligence lives.']}
    evaluationDetails={<><p><b>Evaluative unit:</b> Screenplay</p><p><b>Original language:</b> English</p><p><b>Version evaluated:</b> June 4, 2007 screenplay draft</p><p><b>Writers:</b> Joel Coen & Ethan Coen</p><p><b>Version status:</b> Strict</p><p><b>Included:</b> The complete specified screenplay draft and only information materially present in that text</p><p><b>Excluded:</b> The released film, transcripts, alternative screenplay drafts, performances, cinematography, editing, music, sound design, production design, improvisation, and other film-specific realization except where explicitly specified by the screenplay</p><p><b>Evaluation basis:</b> Primary screenplay artifact</p></>}
  />;
}
