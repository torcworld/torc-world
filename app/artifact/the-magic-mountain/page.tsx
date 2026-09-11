import ArtifactAnalysis from '../components/ArtifactAnalysis';

export default function Page(){
  return <ArtifactAnalysis
    domain='Literature'
    year='1924'
    title='The Magic Mountain'
    creator='Thomas Mann'
    order='M2'
    orderName='Mapping'
    cms={830}
    headline='The Berghof does not merely contain ideas. It turns systems of thought into ways of experiencing the world.'
    analysis={['Hans Castorp arrives expecting a short visit. Instead, the sanatorium becomes an intellectual environment in which illness, health, time, death, erotic desire, politics, science and history are repeatedly reorganized through competing ways of understanding them.','Settembrini and Naphta therefore matter as more than memorable personalities with opposing opinions. They offer incompatible structures through which human life can be interpreted. Medicine does something similar to the body: experience is classified, measured and reorganized through diagnosis. Even time ceases to be simply something that passes. Ordinary time, institutional time, experienced duration and narrated duration begin to pull apart.','This is what moves The Magic Mountain beyond M1. Hans does not merely encounter a complicated world. The novel constructs frameworks through which that world becomes intelligible and repeatedly tests what happens when different frameworks organize the same reality differently.','TORC calls that M2 — Mapping. The word “mapping” should not suggest simplicity. The Magic Mountain is an enormous M2 artifact because the number, depth and interaction of its conceptual structures are extraordinary. Its CMS of 830 captures that magnitude independently of its Mode.']}
    dimensions={[
{key:'RL',name:'Relational Load',score:'8.7',artifact:'The score reflects the artifact-grounded relational load demonstrated in this evaluation.'},
{key:'AD',name:'Abstraction Depth',score:'8.7',artifact:'The score reflects the artifact-grounded abstraction depth demonstrated in this evaluation.'},
{key:'CD',name:'Constraint Density',score:'8.2',artifact:'The score reflects the artifact-grounded constraint density demonstrated in this evaluation.'},
{key:'ID',name:'Inferential Distance',score:'8.1',artifact:'The score reflects the artifact-grounded inferential distance demonstrated in this evaluation.'},
{key:'IC',name:'Integrative Compression',score:'8.5',artifact:'The score reflects the artifact-grounded integrative compression demonstrated in this evaluation.'},
{key:'GR',name:'Generalization Reach',score:'7.5',artifact:'The score reflects the artifact-grounded generalization reach demonstrated in this evaluation.'}
    ]}
    boundaryTitle='Why M2, not M3?'
    boundary={['This is the real boundary.','Mann’s treatment of time creates the strongest M3 argument. The novel does not merely discuss temporal experience; its own narration stretches and compresses duration. Storytelling itself begins to resemble the temporal phenomenon the novel is examining.','That matters. But TORC asks a stronger question for M3: does the operation of representing become consequential material that the artifact must subsequently organize?','Across the completed novel, the enormous conceptual machinery remains sufficient. Hans inhabits, compares and is changed by systems of medicine, politics, philosophy, mortality and time. Even the novel’s formal play with duration can be understood within that larger architecture without making the consequences of representation itself indispensable to the governing achievement.','The boundary is close, but M2 remains sufficient.']}
    exceptionalKicker="What TORC reveals"
    exceptionalTitle='A work can be intellectually immense without moving beyond M2.'
    exceptional={['That may be the most interesting TORC result here.','The Magic Mountain is packed with philosophy, political argument, medicine, symbolism, temporal experimentation and competing accounts of civilization. Ordinary critical language can easily collapse all of that into a general impression of “depth.”','TORC separates two questions. How much cognitive architecture is there? Enormously much: CMS 830. What kind of operation governs it? Mapping.','The distinction matters. M2 is not a middle rung of intelligence. It is a way cognition can operate—and Mann demonstrates just how much can be built there.']}
    evaluationDetails={<><p><b>Evaluative unit:</b> Complete novel</p><p><b>Original language:</b> German</p><p><b>Language evaluated:</b> English</p><p><b>Reference translation:</b> John E. Woods</p><p><b>Edition:</b> Alfred A. Knopf / Everyman-associated Woods translation tradition; use the complete John E. Woods text as the corpus reference</p><p><b>Version status:</b> Reference translation</p><p><b>Included:</b> The complete novel in the specified Woods translation</p><p><b>Excluded:</b> Alternative translations, adaptations, critical commentary, reception history, introductions, and other secondary material</p><p><b>Evaluation basis:</b> Primary literary artifact in the corpus reference translation</p></>}
  />;
}
