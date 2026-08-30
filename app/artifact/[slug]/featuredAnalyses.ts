export type FeaturedAnalysis={
 headline:string;
 analysis:string[];
 dimensions:{key:string;name:string;score:string;artifact:string}[];
 boundaryTitle:string;
 boundary:string[];
 exceptionalTitle:string;
 exceptional:string[];
};

export const featuredAnalyses:Record<string,FeaturedAnalysis>={
 'the-magic-mountain':{
  headline:'Integration appears once — and that is enough to change the completed work.',
  analysis:[
   'The Berghof begins as a place Hans Castorp can observe. It does not stay that way. Illness and health, ordinary and pathological time, eros and death, humanism and extremism become competing structures through which Hans tries to orient himself. Settembrini and Naphta therefore cease to be merely positions in a debate: their incompatibility becomes part of the formation of Hans’s own consciousness.',
   'That self-implication establishes 3b. The decisive pressure toward 3c comes from “Snow.” Hans does not discover that one side of the mountain’s oppositions was secretly correct. He reaches an orientation in which mortality and irrational depth remain real while human solidarity can still be affirmed.',
   'The later novel does not let him possess that insight cleanly. Europe collapses toward war and Hans is carried with it. TORC nevertheless resolves the completed artifact at 3c because integration has become operationally real even though it is not permanently sustained.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.0',artifact:'Medicine, time, eros, mortality, pedagogy, politics and European history remain mutually consequential across the novel rather than functioning as detachable themes.'},
   {key:'AD',name:'Abstraction Depth',score:'9.0',artifact:'Concrete sanatorium life repeatedly opens into deep structures of time, illness, Bildung, mortality and civilization without abandoning the lived case.'},
   {key:'CD',name:'Constraint Density',score:'8.6',artifact:'Character, ideological, temporal and historical constraints strongly interact, though the novel’s digressive form preserves meaningful latitude.'},
   {key:'ID',name:'Inferential Distance',score:'8.4',artifact:'The movement from a convalescence narrative to a recursive model of European consciousness requires substantial non-routine reconstruction.'},
   {key:'IC',name:'Integrative Compression',score:'9.0',artifact:'A bounded mountain setting compresses an enormous intellectual and historical field while keeping its internal differences recoverable.'},
   {key:'GR',name:'Generalization Reach',score:'8.0',artifact:'Its architecture transfers strongly to ideological formation, education, mortality and historical consciousness beyond the sanatorium itself.'}
  ],
  boundaryTitle:'Why 3c, with a real 3b boundary?',
  boundary:[
   'The 3b reading is serious because “Snow” does not become a stable possession governing everything that follows. If 3c required permanent psychological consistency, the novel would stop at fracture.',
   'But the completed artifact demonstrates more than fracture. Hans reaches a coherent orientation capable of preserving the contradiction rather than escaping it. The later failure to sustain that orientation makes the boundary visible; it does not erase the operation that was achieved.'
  ],
  exceptionalTitle:'The boundary is part of what the novel demonstrates.',
  exceptional:[
   'The Magic Mountain is valuable to TORC because the disagreement is not diffuse. It concentrates on a single structural question: whether achieved integration must remain permanently dominant to count as achieved.',
   'The corpus determination is 3c. The surviving 3b reading makes the page stronger, not weaker, because it identifies exactly where the classification turns.'
  ]
 },
 'thus-spoke-zarathustra':{
  headline:'The doctrine becomes a test of the consciousness that teaches it.',
  analysis:[
   'Zarathustra does not merely announce a philosophy of overcoming. His own solitude, disgust, pity, discipleship and resistance to recurrence repeatedly make him answerable to the transformations he demands of others. The standpoint delivering the doctrine becomes implicated in the doctrine’s consequences.',
   'Eternal recurrence is the decisive structure. Affirmation cannot work by deleting suffering, contingency or irreversibility. Zarathustra must become capable of willing existence with those conditions intact. That movement converts recursive fracture into an achieved orientation and places the work at 3c.',
   'The work exerts genuine pressure toward G because its concepts reorganize questions of value, nihilism and creation. TORC stops below G because the explanatory machinery remains too poetically elastic to function as a sufficiently constrained relocation of an independently identifiable target.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.6',artifact:'Nihilism, morality, body, will, recurrence, pity, creation and self-overcoming remain densely interdependent across the four parts.'},
   {key:'AD',name:'Abstraction Depth',score:'9.1',artifact:'The work operates at exceptional abstraction around value, valuation, temporality, subjectivity and self-transformation.'},
   {key:'CD',name:'Constraint Density',score:'7.8',artifact:'Its recurrent concepts constrain one another strongly, but the aphoristic and prophetic form leaves more viable interpretive latitude than the densest constructions.'},
   {key:'ID',name:'Inferential Distance',score:'8.5',artifact:'The transition from nihilism to recurrence-as-affirmation requires a large and non-routine conceptual reconstruction.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'A compact vocabulary of recurrence, overcoming, child, overman and affirmation organizes an unusually large philosophical field.'},
   {key:'GR',name:'Generalization Reach',score:'8.2',artifact:'The architecture transfers strongly across ethics, psychology, religion, culture and existential orientation.'}
  ],
  boundaryTitle:'Why 3c, not G?',
  boundary:[
   'Nietzsche’s concepts are enormously generative in the ordinary sense. That is not yet the TORC operation G. The higher claim would require the artifact to relocate the explanation of a target through a mechanism constrained by that target rather than primarily through philosophical-poetic transformation.',
   'Zarathustra changes the orientation from which valuation is confronted. It does not establish the kind of independently constrained explanatory relocation that would make a lower Order insufficient for a target outside the work’s own philosophical construction.'
  ],
  exceptionalTitle:'Its highest achievement is integration, not explanatory relocation.',
  exceptional:[
   'The work’s ambition makes G tempting. Its discipline is to stop one level lower: the deepest demonstrated operation is the transformation of the consciousness that must live through the consequences of its own value-destruction.',
   'That is already an unusually strong 3c.'
  ]
 },
 'the-handmaids-tale':{
  headline:'Gilead does not merely control behavior. It attacks the conditions of orientation.',
  analysis:[
   'Names, literacy, scripture, sexuality, reproduction, clothing, memory and public ritual are reorganized so that Offred cannot rely on the ordinary social means by which reality is identified and shared. The regime therefore does more than oppress her materially: it acts on the representational environment through which a self can know where it stands.',
   'That pushes the novel beyond Level 2. The governing fracture is epistemic and representational, not merely symbolic. Offred must continually reconstruct the difference between remembered life, official reality, rumor, wish and testimony.',
   'TORC nevertheless stops at 3a. The primary causal direction remains Gilead acting upon consciousness. Offred’s uncertainty is an adaptation to an externally manufactured order; her own attempt to know does not become the constitutive source of the contradiction.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.2',artifact:'Gender, religion, language, reproduction, law, household organization, memory and surveillance constrain one another throughout Gilead.'},
   {key:'AD',name:'Abstraction Depth',score:'7.9',artifact:'The novel moves from embodied experience into questions of language, historical reconstruction and ideological reality without leaving the narrative case behind.'},
   {key:'CD',name:'Constraint Density',score:'8.2',artifact:'Institutional rules, forbidden knowledge, reproductive ritual and narrative uncertainty impose tightly interacting constraints.'},
   {key:'ID',name:'Inferential Distance',score:'7.7',artifact:'The reader reconstructs the regime and Offred’s past from incomplete, retrospective and sometimes uncertain evidence.'},
   {key:'IC',name:'Integrative Compression',score:'8.4',artifact:'Names, uniforms, ritual, scripture and literacy prohibitions compress a broad political and psychological system with striking economy.'},
   {key:'GR',name:'Generalization Reach',score:'7.8',artifact:'The structure transfers strongly to problems of authoritarian information control, ideological capture and institutionalized identity.'}
  ],
  boundaryTitle:'Why 3a, not 3b?',
  boundary:[
   'The distinction is causal. Gilead succeeds in penetrating consciousness, but capture is not the same operation as consciousness generating the governing contradiction through its own attempted orientation.',
   'Offred retains memories and counterpositions from which the imposed reality can still be recognized as imposed. The system damages the standpoint; it does not make that standpoint constitutively responsible for producing the fracture.'
  ],
  exceptionalTitle:'A clean case of high-order external fracture.',
  exceptional:[
   'The Handmaid’s Tale is useful because its conceptual seriousness does not require promotion to 3b. TORC can distinguish an extraordinarily sophisticated representation of ideological capture from recursive self-implication.',
   'That precision is the point of the classification.'
  ]
 },
 'blade-runner':{
  headline:'The classifier loses the secure position from which classification began.',
  analysis:[
   'Blade Runner begins with apparently usable distinctions: human and replicant, authentic and implanted memory, empathy and simulation, born and manufactured life. The film progressively makes those criteria unreliable. Rachael’s memories feel autobiographically real despite being constructed; Roy exhibits capacities supposedly reserved for the human side of the division.',
   'The decisive move is not simply that replicants are more human than expected. Deckard’s own standpoint for recognizing personhood becomes implicated. The criteria by which he classifies others can no longer guarantee his own position outside the category problem.',
   'That is 3b. The ending provides commitment and escape, but not an achieved orientation that coherently contains the human/replicant fracture. The film leaves the contradiction active rather than integrating it.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.2',artifact:'Memory, embodiment, labor, mortality, empathy, manufacture, policing and corporate power remain densely connected.'},
   {key:'AD',name:'Abstraction Depth',score:'8.3',artifact:'The detective narrative repeatedly opens into deeper structures of identity, personhood and authenticity.'},
   {key:'CD',name:'Constraint Density',score:'8.2',artifact:'Replicant lifespans, memory evidence, institutional classification and visual motifs interact tightly across the film.'},
   {key:'ID',name:'Inferential Distance',score:'8.0',artifact:'The viewer must move beyond the explicit police ontology to reconstruct what the same evidence does to the category of the human.'},
   {key:'IC',name:'Integrative Compression',score:'8.6',artifact:'Eyes, photographs, memories, lifespan and bodily vulnerability organize a large conceptual field with exceptional economy.'},
   {key:'GR',name:'Generalization Reach',score:'7.5',artifact:'Its structure transfers powerfully to artificial persons, engineered memory and tests of humanity while remaining tied to the film’s ontology.'}
  ],
  boundaryTitle:'Why 3b, not 3a or 3c?',
  boundary:[
   '3a would be sufficient if manufactured memories simply destabilized the replicants from outside. The film goes further because Deckard’s own criteria for applying the distinction are drawn into the same instability.',
   '3c would require a coherent orientation through that fracture. Leaving with Rachael changes what Deckard does; it does not establish a stable representational solution to what personhood now means.'
  ],
  exceptionalTitle:'The ambiguity matters because it changes the standpoint, not because ambiguity is automatically deep.',
  exceptional:[
   'The famous Deckard question is not itself the reason for 3b. The stronger operation is that the film makes the classifier/classified distinction structurally unsafe.',
   'The ambiguity is therefore functional rather than decorative.'
  ]
 },
 'the-truman-show':{
  headline:'A whole world can be false without making the knower recursively fractured.',
  analysis:[
   'Christof’s system manufactures the evidentiary environment through which Truman identifies reality: relationships, geography, danger, media, accidents and apparently spontaneous events all cooperate to preserve the same false world. The deception therefore reaches deeper than a collection of lies.',
   'That makes Level 2 insufficient. Truman’s orientation toward reality itself is under attack. But as he identifies the external mechanism, his own epistemic position becomes increasingly vindicated rather than increasingly implicated in the contradiction.',
   'The final door makes the 3a structure unusually visible. The governing fracture belongs to the constructed world, and Truman can leave it. His courage matters enormously; it does not convert the artifact into 3b or 3c.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.8',artifact:'Family, friendship, media, geography, production logistics, fear and surveillance coordinate closely around Truman’s artificial reality.'},
   {key:'AD',name:'Abstraction Depth',score:'7.6',artifact:'The concrete television premise supports broader questions of mediation, authenticity and evidence while remaining narratively direct.'},
   {key:'CD',name:'Constraint Density',score:'8.2',artifact:'The constructed world must keep thousands of behavioral, spatial and production constraints aligned without exposing itself.'},
   {key:'ID',name:'Inferential Distance',score:'7.5',artifact:'Truman reconstructs the hidden mechanism from accumulating anomalies, a substantial but comparatively legible inferential path.'},
   {key:'IC',name:'Integrative Compression',score:'8.2',artifact:'A simple television-set premise efficiently coordinates surveillance, commodification, social performance and epistemic control.'},
   {key:'GR',name:'Generalization Reach',score:'7.2',artifact:'The structure travels well to mediated reality and social control, though its governing mechanism remains unusually specific and explicit.'}
  ],
  boundaryTitle:'Why 3a, not 3b?',
  boundary:[
   'Truman has been psychologically shaped by Seahaven, but his attempt to know is not what generates the contradiction. The contradiction is engineered for him.',
   'Once the external construction is correctly identified, the central epistemic problem becomes escapable. That is the signature of this artifact’s 3a operation.'
  ],
  exceptionalTitle:'Conceptual clarity is not the same thing as a higher Order.',
  exceptional:[
   'The Truman Show is a strong corpus reference because it makes external-fracture cognition almost diagrammatic without being simple-minded.',
   'Its 778 CMS and 3a Order also show why TORC keeps magnitude and operation separate.'
  ]
 },
 'the-unbearable-lightness-of-being':{
  headline:'Lightness and weight stop being positions and become a way of inhabiting contradiction.',
  analysis:[
   'Kundera’s central opposition is not left at the level of philosophical commentary. Tomas, Tereza, Sabina and Franz repeatedly test freedom, fidelity, body, chance, history and kitsch in lived situations that reverse or undermine the concepts through which they try to orient themselves.',
   'That makes the contradiction recursive: the characters’ preferred concepts participate in producing the instability they are trying to resolve. The novel then moves further. It refuses to crown either lightness or weight as the final answer and develops a local orientation in which attachment, finitude and contingency can be inhabited without metaphysical guarantee.',
   'The pastoral ending matters because it does not prove a theory. It changes the relation to the unresolved opposition. The fracture remains, but a coherent way of living through it becomes possible. That is 3c.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.5',artifact:'Erotic freedom, fidelity, embodiment, politics, exile, chance and historical violence remain strongly interdependent across the principal lives.'},
   {key:'AD',name:'Abstraction Depth',score:'8.8',artifact:'Narrative experience, narrator commentary, philosophical category and historical interpretation operate across several controlled levels.'},
   {key:'CD',name:'Constraint Density',score:'8.1',artifact:'Character choices and conceptual oppositions constrain one another strongly while the essayistic form preserves some constructional latitude.'},
   {key:'ID',name:'Inferential Distance',score:'8.5',artifact:'The novel repeatedly forces non-obvious reversals in what freedom, weight, betrayal and attachment can mean.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'A small set of oppositions and motifs organizes an unusually broad field of erotic, political and existential material.'},
   {key:'GR',name:'Generalization Reach',score:'8.0',artifact:'The architecture transfers robustly to problems of commitment, contingency, identity and historical circumstance.'}
  ],
  boundaryTitle:'Why 3c rather than a sophisticated 3b?',
  boundary:[
   'A 3b reading can explain the repeated collapse of the characters’ own concepts. It cannot fully explain the completed movement toward an orientation that no longer requires one side of the opposition to defeat the other.',
   'The novel’s integration is deliberately local and finite. That is not a weakness. 3c does not require a universal solution; it requires an achieved orientation capable of preserving the fracture.'
  ],
  exceptionalTitle:'The novel integrates without pretending to solve.',
  exceptional:[
   'Its strongest move is to let philosophical categories remain vulnerable to lived experience. The concepts organize the lives, and the lives in turn reorganize the concepts.',
   'That reciprocal pressure is what makes the ending cognitively consequential rather than merely tender.'
  ]
 },
 'a-clockwork-orange':{
  headline:'The state can destroy moral agency without making Alex the source of the fracture.',
  analysis:[
   'The Ludovico Technique does more than punish Alex or alter his behavior. It intervenes directly in the relation between perception, desire, bodily reaction and voluntary action. The question “is he good?” becomes unstable when the capacity to choose evil has been mechanically removed.',
   'That is stronger than symbolic political criticism and clears 3a. The external order acts on a condition through which moral reality can be judged and inhabited.',
   'TORC stops there. Alex remains principally the object of the intervention. His appetites create the political dilemma, but his own attempt to orient himself morally does not become the constitutive source of the governing contradiction in the stronger 3b sense.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.9',artifact:'Violence, music, sexuality, punishment, state power, bodily conditioning and moral agency remain tightly connected.'},
   {key:'AD',name:'Abstraction Depth',score:'7.8',artifact:'The film moves from concrete coercion into questions of freedom, goodness and agency without becoming primarily abstract argument.'},
   {key:'CD',name:'Constraint Density',score:'8.4',artifact:'Musical association, behavioral conditioning, punishment and recurring violence impose dense interacting formal and conceptual constraints.'},
   {key:'ID',name:'Inferential Distance',score:'7.8',artifact:'The artifact forces a non-routine movement from behavior to the conditions under which moral attribution remains meaningful.'},
   {key:'IC',name:'Integrative Compression',score:'8.4',artifact:'Music, aversion, violence and institutional response compress the freedom-versus-goodness problem with unusual economy.'},
   {key:'GR',name:'Generalization Reach',score:'7.4',artifact:'The structure transfers well to coercive behavior modification and institutional control while remaining tied to its deliberately extreme case.'}
  ],
  boundaryTitle:'Why 3a, not 3b?',
  boundary:[
   'The philosophical paradox is recursive in subject matter, but the governing causal structure remains external: the state imposes a mechanism that compromises Alex’s agency.',
   'A work can ask a profound question about freedom without making consciousness’s own attempted orientation constitutively responsible for the contradiction. Here 3a is sufficient.'
  ],
  exceptionalTitle:'It is a useful antidote to “philosophical question = higher Order.”',
  exceptional:[
   'The film’s force comes partly from how efficiently it isolates the moral cost of engineered goodness.',
   'TORC preserves that force without promoting the work simply because the question is philosophically famous.'
  ]
 },
 'the-remains-of-the-day':{
  headline:'Stevens’s interpretive system is also the machinery of his blindness.',
  analysis:[
   '“Dignity,” service, restraint and professional greatness are not merely social pressures surrounding Stevens. They are the concepts through which he actively interprets Lord Darlington, Miss Kenton and his own life. The same framework that gives him orientation also protects the errors that orientation produces.',
   'That is why external capture is insufficient as an explanation. Stevens’s attempted understanding participates in producing and maintaining the misrecognition. His retrospective narration does not stand safely outside the structure it exposes.',
   'The ending brings substantial recognition, but TORC stops at 3b. The decision to learn “bantering” gestures toward another way of living while remaining partly absorbed into the professional vocabulary that generated the fracture. Integration is approached rather than fully established.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.8',artifact:'Professional identity, class, political judgment, memory, intimacy and self-deception remain tightly interdependent.'},
   {key:'AD',name:'Abstraction Depth',score:'8.1',artifact:'The restrained personal narrative opens into broader structures of dignity, responsibility and retrospective self-interpretation.'},
   {key:'CD',name:'Constraint Density',score:'8.0',artifact:'Voice, chronology, repression and historical knowledge strongly constrain what Stevens can admit and how the reader reconstructs it.'},
   {key:'ID',name:'Inferential Distance',score:'8.3',artifact:'The reader must infer the scale of Stevens’s error through omissions, euphemism and retrospective contradiction rather than direct confession.'},
   {key:'IC',name:'Integrative Compression',score:'8.7',artifact:'The controlled voice compresses moral blindness, failed intimacy, class and history while preserving their mutual dependence.'},
   {key:'GR',name:'Generalization Reach',score:'7.3',artifact:'The structure transfers strongly to professional identity and self-protective interpretation, though it remains closely tied to Stevens’s social form.'}
  ],
  boundaryTitle:'Why 3b, not 3a or 3c?',
  boundary:[
   '3a would treat Stevens primarily as captured by class ideology and service culture. That misses the deeper operation: he repeatedly uses those concepts himself to generate the very misrecognitions he later confronts.',
   '3c remains tempting because the ending contains recognition. But recognition alone is not integration. The completed artifact does not establish a sufficiently coherent new orientation through the fracture.'
  ],
  exceptionalTitle:'The prose is cognitively economical because the blindness is carried by the voice itself.',
  exceptional:[
   'The novel does not need to explain Stevens from outside. His own disciplined language performs the structure that the reader must diagnose.',
   'That is why its Integrative Compression is the standout dimension.'
  ]
 },
 'solaris':{
  headline:'The alien encounter becomes inseparable from the human need to interpret it.',
  analysis:[
   'Solaris first appears to offer a clean external-fracture structure: an unknowable intelligence acts on the station by producing embodied figures from human memory. If that were the governing operation, 3a would be sufficient.',
   'Hari changes the problem. Kris cannot merely determine whether the visitor is “real,” because guilt, desire, memory and the wish for absolution become inseparable from what her presence means. The planet supplies the disturbance, but consciousness’s own relation to what returns becomes constitutive of the fracture.',
   'That clears 3b. The final movement preserves rather than integrates the instability: return, reconciliation, simulation and longing fold into one another. TORC therefore stops before 3c.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.1',artifact:'Memory, guilt, embodiment, scientific inquiry, grief, communication and the planet’s manifestations constrain one another across the film.'},
   {key:'AD',name:'Abstraction Depth',score:'8.8',artifact:'The encounter repeatedly opens into deep questions about personhood, memory, alterity and whether knowledge can escape the knower.'},
   {key:'CD',name:'Constraint Density',score:'8.3',artifact:'The visitors, station rules, memory structure and sparse visual architecture create strong interacting constraints.'},
   {key:'ID',name:'Inferential Distance',score:'8.5',artifact:'The film requires substantial reconstruction because the meaning of the external phenomenon cannot be separated from the observers who encounter it.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'Hari and the station compress a large metaphysical and psychological field with remarkably little explicit exposition.'},
   {key:'GR',name:'Generalization Reach',score:'7.8',artifact:'Its structure transfers strongly to grief, artificial persons, inaccessible minds and the limits of scientific objectivity.'}
  ],
  boundaryTitle:'Why 3b, not 3a or 3c?',
  boundary:[
   'The external source of the disturbance does not force a 3a result. What matters is whether that external disturbance remains sufficient to explain the governing contradiction. With Hari, it does not.',
   '3c would require an achieved orientation capable of containing the contradiction. The final image gives no such stable position; it makes the desire for return part of the uncertainty.'
  ],
  exceptionalTitle:'Solaris turns contact with the alien back onto the architecture of the observer.',
  exceptional:[
   'Its deepest question is not whether humanity can understand Solaris. It is whether an encounter with the genuinely other can ever be separated from the memories and needs through which the encounter becomes meaningful.',
   'That is the source of its recursive force.'
  ]
 },
 'one-hundred-years-of-solitude':{
  headline:'The family finally reads the pattern at the exact moment the pattern completes itself.',
  analysis:[
   'Names, memories, political cycles, technological incursions, forgotten histories and repeated family configurations make Macondo’s history increasingly difficult to divide into simple novelty and repetition. The recurrence is not merely decorative symbolism; it alters the standpoint from which the history can be identified.',
   'The Melquíades manuscripts bring that operation to completion. Aureliano’s attempt to read the family’s history becomes structurally inseparable from the completion of that history. The act of orientation is therefore implicated in the pattern being oriented toward, which decisively clears 3b.',
   'TORC stops below 3c because recognition and annihilation coincide. The final comprehension is extraordinary, but it does not establish a coherent orientation capable of continuing through the contradiction. The work also stops below G: its astonishing recursive architecture remains a constructed explanatory world rather than a constrained relocation of an independently identifiable external target.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.2',artifact:'Generations, names, politics, technology, sexuality, violence, memory and geography remain exceptionally interdependent across the entire family history.'},
   {key:'AD',name:'Abstraction Depth',score:'8.8',artifact:'Historical recurrence, solitude, memory and narration operate as deep structures over an enormous range of concrete events.'},
   {key:'CD',name:'Constraint Density',score:'8.7',artifact:'Genealogy, repeated names, chronology, prophecy and motifs create unusually dense cross-level constraints.'},
   {key:'ID',name:'Inferential Distance',score:'8.6',artifact:'The completed manuscript relation radically reorganizes earlier events and requires large-scale reconstruction of what repetition has been doing.'},
   {key:'IC',name:'Integrative Compression',score:'9.2',artifact:'A few recurrent structures—names, solitude, Macondo, circular time and the manuscript—make an enormous heterogeneous field reconstructible.'},
   {key:'GR',name:'Generalization Reach',score:'8.3',artifact:'The architecture transfers strongly from family genealogy to political recurrence, modernization, collective memory and historical myth-making.'}
  ],
  boundaryTitle:'Why 3b, not 3c—or G?',
  boundary:[
   'The final act of reading is highly recursive, but recursion alone does not establish integration. Aureliano understands the pattern precisely as the possibility of inhabiting it disappears.',
   'G fails for another reason. The novel builds a world of extraordinary explanatory power, but a fictional world can be internally generative without relocating the explanation of an independently constrained target outside that construction.'
  ],
  exceptionalTitle:'A 3b artifact can still carry enormous cognitive magnitude.',
  exceptional:[
   'At CMS 887, One Hundred Years of Solitude is one of the strongest demonstrations in the corpus that magnitude and Operational Order are not interchangeable.',
   'Its architecture is vast, compressed and deeply recursive. None of that requires TORC to call the governing operation 3c or G.'
  ]
 }
};
