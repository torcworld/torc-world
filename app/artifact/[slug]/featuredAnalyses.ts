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
 },
 'notes-from-underground':{
  headline:'The Underground Man cannot escape the contradiction because his own consciousness keeps producing it.',
  analysis:[
   'The governing fracture is not simply a conflict between the Underground Man and rationalist theories of human behavior. His attempt to prove freedom, independence and superior self-knowledge repeatedly generates humiliation, spite, paralysis and self-contradiction. The standpoint from which he judges the world is therefore implicated in the disorder he diagnoses.',
   'Part II makes this operational rather than merely philosophical. His encounters with the officer, old schoolmates and Liza show his self-consciousness actively manufacturing the injuries and reversals he then experiences as evidence about others.',
   'That clears 3b. The work stops below 3c because no coherent orientation emerges that can preserve the fracture without being governed by it. Awareness intensifies the contradiction; it does not integrate it.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.6',artifact:'Freedom, resentment, rationality, humiliation, desire, social recognition and self-consciousness repeatedly alter one another.'},
   {key:'AD',name:'Abstraction Depth',score:'8.5',artifact:'Concrete humiliations open into sustained questions about freedom, rational agency and the pathology of reflective consciousness.'},
   {key:'CD',name:'Constraint Density',score:'7.6',artifact:'Voice, memory, pride and social position strongly constrain each encounter, though the monologic form preserves some latitude.'},
   {key:'ID',name:'Inferential Distance',score:'8.5',artifact:'The reader must reconstruct how a consciousness claiming lucidity becomes the mechanism of its own repeated defeat.'},
   {key:'IC',name:'Integrative Compression',score:'8.5',artifact:'A narrow set of encounters compresses a large philosophical and psychological problem into one recursive voice.'},
   {key:'GR',name:'Generalization Reach',score:'7.6',artifact:'The structure transfers strongly to self-sabotage, ressentiment, hyper-reflection and conflicts between autonomy and recognition.'}
  ],
  boundaryTitle:'Why 3b, not 2 or 3c?',
  boundary:['Level 2 cannot explain why the Underground Man’s own attempt to know and assert himself becomes part of the governing contradiction.','3c would require an achieved orientation through that contradiction. The completed work gives us devastating self-implication without stable integration.'],
  exceptionalTitle:'The voice does not report the fracture. It performs it.',
  exceptional:['That is why the work can be relatively compact in scope while remaining strongly recursive.','Its deepest intelligence lies in making self-consciousness both instrument and obstacle at once.']
 },
 'waiting-for-godot':{
  headline:'Waiting becomes a structure that consciousness cannot securely stand outside.',
  analysis:[
   'Vladimir and Estragon do not merely inhabit an absurd situation. Their means of orienting themselves toward time, memory, purpose and expectation repeatedly fail inside the act of waiting itself. What happened yesterday, whether this is the right place, what Godot promised and what action should follow cannot be stabilized from a secure outside position.',
   'The repetition therefore exceeds symbolism. Their own attempts to remember, decide and interpret re-enter the contradiction they are trying to resolve. That is the self-implication required for 3b.',
   'But repetition is not integration. Continuing to wait supplies persistence, habit and companionship; it does not establish a coherent orientation capable of containing the fracture. TORC therefore stops at 3b rather than 3c.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.4',artifact:'Memory, time, dependency, expectation, action and identity remain tightly related despite the tiny dramatic inventory.'},
   {key:'AD',name:'Abstraction Depth',score:'8.1',artifact:'Minimal concrete action supports sustained structures of temporality, purpose, uncertainty and existential dependence.'},
   {key:'CD',name:'Constraint Density',score:'8.0',artifact:'Repetition, paired characters, limited setting and recurring promises tightly constrain what can change and what cannot.'},
   {key:'ID',name:'Inferential Distance',score:'7.9',artifact:'The audience must infer the governing existential structure from sparse events whose factual status is repeatedly unstable.'},
   {key:'IC',name:'Integrative Compression',score:'8.5',artifact:'A road, a tree, two pairs, hats, boots and waiting coordinate an enormous field with extraordinary economy.'},
   {key:'GR',name:'Generalization Reach',score:'7.5',artifact:'Its structure travels strongly to suspended agency, dependence on future resolution and unstable temporal orientation.'}
  ],
  boundaryTitle:'Why 3b, not 3c?',
  boundary:['The play makes consciousness part of the uncertainty: remembering and deciding do not solve the problem because they are themselves unstable.','Nothing in the completed trajectory converts that instability into an achieved higher orientation. They continue; they do not integrate.'],
  exceptionalTitle:'Almost nothing happens, yet almost everything has to be reconstructed.',
  exceptional:['The cognitive economy is the point. The play builds recursive pressure with an exceptionally small representational machine.','That is why Integrative Compression is its strongest dimension.']
 },
 'stalker':{
  headline:'The Room turns an external mystery into a problem of whether a person can know what they truly want.',
  analysis:[
   'The Zone initially appears to be an external epistemic anomaly: a place whose rules cannot be securely known. The Room changes the operation. If it grants not stated wishes but deepest desires, then the decisive uncertainty is no longer only what the Zone is. It is whether the seeker can know himself well enough to risk entering.',
   'Writer and Professor cannot keep their motives outside that problem. Their declared purposes, fears and self-conceptions become evidence whose reliability is itself at stake. The external anomaly therefore becomes a self-implicating fracture and clears 3b.',
   'The film refuses the 3c move. The men return without an achieved orientation capable of integrating faith, desire, knowledge and self-deception. Monkey’s final sequence expands the uncertainty rather than resolving it.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.2',artifact:'Faith, desire, art, science, danger, self-knowledge and the Zone’s spatial rules remain mutually consequential.'},
   {key:'AD',name:'Abstraction Depth',score:'8.6',artifact:'A physical journey becomes a deep inquiry into desire, belief, knowledge and the opacity of the self.'},
   {key:'CD',name:'Constraint Density',score:'8.2',artifact:'The Zone’s rules, the Room, competing motives and physical route impose strong interacting constraints.'},
   {key:'ID',name:'Inferential Distance',score:'8.4',artifact:'The film withholds direct explanation, requiring the viewer to reconstruct why self-knowledge becomes the real danger.'},
   {key:'IC',name:'Integrative Compression',score:'8.7',artifact:'Sparse geography and dialogue coordinate an unusually large metaphysical and psychological field.'},
   {key:'GR',name:'Generalization Reach',score:'7.7',artifact:'The structure transfers strongly to problems of desire, faith, artistic purpose and the limits of introspective certainty.'}
  ],
  boundaryTitle:'Why 3b, not 3a or 3c?',
  boundary:['The Zone supplies an external disturbance, but the Room makes the seekers’ own attempted self-knowledge constitutive of the governing problem. That exceeds 3a.','The film never demonstrates a coherent orientation through the fracture. Refusal, return and ambiguity preserve it, so 3c is not required.'],
  exceptionalTitle:'The deepest danger in the Zone is not that its rules are unknown.',
  exceptional:['It is that a person may not possess the standpoint required to know what the Room would reveal about them.','That reversal gives Stalker its recursive force.']
 },
 'moby-dick':{
  headline:'Ishmael survives by refusing the single interpretation that destroys Ahab.',
  analysis:[
   'Moby-Dick surrounds the whale with incompatible ways of knowing: cetology, labor, commerce, theology, myth, perception and metaphysics. Ahab collapses that plurality into one total interpretation. The whale must mean what his wound requires it to mean, and his attempt to penetrate reality becomes inseparable from the structure that traps him.',
   'That establishes the 3b fracture. The completed novel goes further through Ishmael. His surviving orientation does not solve the whale or discover a final framework. It preserves multiplicity, provisional knowledge and the resistance of the object to any singular account.',
   'TORC therefore resolves the seven-run boundary at 3c. The integration is not mastery; it is an orientation capable of continuing without abolishing the epistemic fracture. The work stops below G because its immense explanatory-looking machinery does not relocate an independently constrained external target in the technical generative sense.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.3',artifact:'Whaling technology, economics, theology, natural history, race, labor, narrative voice and Ahab’s psychology remain massively interdependent.'},
   {key:'AD',name:'Abstraction Depth',score:'9.2',artifact:'Concrete maritime life repeatedly opens into deep structures of knowledge, interpretation, fate and the limits of representation.'},
   {key:'CD',name:'Constraint Density',score:'8.8',artifact:'Material, social, symbolic and narrative constraints interact densely across the voyage while still allowing substantial local elaboration.'},
   {key:'ID',name:'Inferential Distance',score:'8.8',artifact:'The reader must reconstruct a governing epistemic architecture from radically heterogeneous forms and competing accounts.'},
   {key:'IC',name:'Integrative Compression',score:'9.3',artifact:'Whale, voyage, hunt and narration organize an enormous heterogeneous field without collapsing its differences.'},
   {key:'GR',name:'Generalization Reach',score:'8.5',artifact:'The structure travels strongly to problems of totalizing interpretation, scientific classification, obsession and resistant reality.'}
  ],
  boundaryTitle:'Why 3c, not 3b—or G?',
  boundary:['The 3b reading is real because much of the novel is governed by interpretive fracture. The decisive 3c evidence is Ishmael’s completed orientation: plurality can be inhabited without being converted into a final answer.','G remains tempting because of the novel’s scale and conceptual productivity. But magnitude and generative appearance cannot substitute for constrained explanatory relocation of an independent target.'],
  exceptionalTitle:'Its magnitude is enormous even before anyone asks for G.',
  exceptional:['Moby-Dick is one of the corpus’s clearest demonstrations that a narrative can approach the magnitude of major generative works while operating at a different Order.','Its achievement is not a theory that closes the whale. It is a form of consciousness that survives the failure to close it.']
 },
 'parasite':{
  headline:'A total social trap can still remain Symbolic Consciousness.',
  analysis:[
   'The semi-basement, Park house, hidden bunker, stairs, windows, smell, rain and labor roles form an exceptionally dense class architecture. Position in physical space repeatedly becomes position in social possibility, and the film’s causal machinery makes those relations brutally consequential.',
   'That sophistication makes 3a tempting. But a pathological system does not become recursive merely because it traps people and shapes their behavior. The completed film retains a sufficiently stable standpoint from which the class mechanism can be identified and diagnosed.',
   'TORC therefore stops at Level 2. The work’s power lies in symbolic and causal organization rather than in compromising the conditions by which reality itself can be identified. Its CMS remains high because magnitude and Operational Order are separate coordinates.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.4',artifact:'Class, architecture, labor, deception, family, smell, weather and violence continually constrain one another.'},
   {key:'AD',name:'Abstraction Depth',score:'7.4',artifact:'Concrete spatial and social relations support a strong class model while remaining closely tied to the narrative case.'},
   {key:'CD',name:'Constraint Density',score:'8.7',artifact:'Timing, space, concealment, employment roles and family dependencies sharply restrict viable action.'},
   {key:'ID',name:'Inferential Distance',score:'7.7',artifact:'The viewer reconstructs the larger class structure through spatial and causal relations rather than explicit theoretical exposition.'},
   {key:'IC',name:'Integrative Compression',score:'8.7',artifact:'House, basement, stairs, smell and rain compress an extensive social architecture with remarkable economy.'},
   {key:'GR',name:'Generalization Reach',score:'6.9',artifact:'The class structure transfers meaningfully, but much of its force remains bound to the film’s particular social and spatial construction.'}
  ],
  boundaryTitle:'Why Level 2, not 3a?',
  boundary:['The characters are captured by a social order, but external capture is not enough. The film can diagnose that order without making the diagnosing standpoint itself constitutively unstable.','High constraint, symbolism and social intelligence raise magnitude. They do not automatically raise Operational Order.'],
  exceptionalTitle:'Parasite is a high-magnitude Level 2 on purpose.',
  exceptional:['That result is diagnostically useful: TORC does not need to call every sophisticated social system recursive.','The film demonstrates how much cognition Symbolic Consciousness can carry when its architecture is this tightly integrated.']
 },
 'everything-everywhere-all-at-once':{
  headline:'The film integrates nihilism without pretending to defeat it.',
  analysis:[
   'The multiverse does not earn 3c by being complicated. Its operational importance is that every unrealized possibility becomes experientially available, turning abundance itself into a threat to value. Joy’s nihilism is not an external problem Evelyn can simply correct; Evelyn is forced into the same possibility-space.',
   'That self-implication clears 3b. The decisive 3c move is Evelyn’s orientation toward kindness, attention and chosen attachment. She does not prove that the universe contains objective meaning or eliminate contingency, disappointment and absurdity.',
   'Instead, the film demonstrates a way of inhabiting those conditions while preserving them. The fracture survives and the orientation changes. That is integrated recursive consciousness rather than sentimental resolution.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.9',artifact:'Family, identity, unrealized lives, skills, universes, nihilism and choice remain densely coordinated across constant variation.'},
   {key:'AD',name:'Abstraction Depth',score:'8.6',artifact:'Comic and domestic particulars support deep structures of possibility, contingency, meaning and attachment.'},
   {key:'CD',name:'Constraint Density',score:'8.7',artifact:'Cross-universe rules, family history and repeated motifs tightly constrain an otherwise explosive formal inventory.'},
   {key:'ID',name:'Inferential Distance',score:'8.2',artifact:'The viewer must reconstruct how the multiverse’s formal mechanism becomes an existential problem rather than mere spectacle.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'Recurring objects, gestures and relationships coordinate enormous formal variation through a relatively small emotional architecture.'},
   {key:'GR',name:'Generalization Reach',score:'7.8',artifact:'Its orientation transfers strongly to regret, possibility overload, family conflict and meaning under contingency.'}
  ],
  boundaryTitle:'Why 3c, not 3b?',
  boundary:['3b explains the collapse: Evelyn cannot stand outside the same possibility-space that produces Joy’s nihilism.','The ending adds a genuine operation. Kindness and attachment become a coherent orientation that can preserve absurdity and contingency rather than requiring them to disappear.'],
  exceptionalTitle:'Integration here is not a solution to the universe.',
  exceptional:['The film’s higher move is smaller and harder: it changes how consciousness can live inside a universe that remains indifferent to its demand for certainty.','That is why the emotional resolution counts structurally rather than merely narratively.']
 },
 'the-structure-of-scientific-revolutions':{
  headline:'Kuhn changes what has to be explained when science changes.',
  analysis:[
   'The target is the historical development of mature science. Kuhn’s governing move is to make paradigms, normal science, anomaly, crisis and revolutionary transition explanatory rather than treating scientific development as the steady accumulation of facts and improved theories.',
   'That is G because the explanatory center moves. What counts as a problem, admissible solution, relevant observation and standard of evaluation becomes historically structured. Lower-order description of successive theories is no longer sufficient to explain the pattern of scientific change.',
   'The work also clears GΩ. Later accounts can reject or revise Kuhn’s strongest formulations, but adequate successor inquiry into major theory change cannot simply return to a pre-Kuhnian cumulative baseline as though framework-dependence, anomaly and changing standards had never become explanatory constraints.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.0',artifact:'Problems, exemplars, standards, communities, anomalies, crises and historical transitions remain tightly interdependent.'},
   {key:'AD',name:'Abstraction Depth',score:'9.3',artifact:'Historical cases support a deep model of how scientific intelligibility and change are organized.'},
   {key:'CD',name:'Constraint Density',score:'8.8',artifact:'The account must coordinate heterogeneous episodes, disciplinary practices and transition patterns under substantial historical constraint.'},
   {key:'ID',name:'Inferential Distance',score:'9.2',artifact:'The move from a sequence of discoveries to framework-governed scientific development is highly non-obvious and reconstructive.'},
   {key:'IC',name:'Integrative Compression',score:'9.4',artifact:'A compact paradigm/crisis/revolution architecture reorganizes a very large heterogeneous history of science.'},
   {key:'GR',name:'Generalization Reach',score:'9.1',artifact:'The structure travels across multiple mature sciences and remains consequential for successor inquiry into theory change.'}
  ],
  boundaryTitle:'Why GΩ, not merely G?',
  boundary:['G is secured by explanatory relocation: scientific change is no longer adequately explained as cumulative addition alone.','Ω requires more than influence. Kuhn’s strongest claims can be rejected, yet successor inquiry still has to confront the framework-dependence problem his structure made unavoidable.'],
  exceptionalTitle:'A successor can disagree with Kuhn and still be post-Kuhnian.',
  exceptional:['That is the Ω distinction. The artifact changes the baseline problem-space rather than merely adding another theory inside it.','Its high CMS reflects how economically that relocation coordinates a huge historical field.']
 },
 'computing-machinery-and-intelligence':{
  headline:'Turing does not answer the old question. He changes the question that can do explanatory work.',
  analysis:[
   '“Can machines think?” is too unstable to carry the inquiry Turing wants. His decisive move is not to define thinking more aggressively, but to replace the question with an operationally tractable performance relation: the imitation game.',
   'That clears G because the explanatory basis changes. Evidence about machine intelligence can now be organized around observable discriminatory performance, machine architecture, learning and objections rather than remaining trapped in an undefined predicate of “thinking.”',
   'TORC stops at G rather than GΩ. The relocation is enormously productive, but successor theories can investigate machine cognition through internal computational, causal, representational or embodied criteria without treating imitation-game performance as a necessary baseline.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.4',artifact:'Behavior, computation, learning, objections, machine architecture and intelligence criteria remain tightly connected.'},
   {key:'AD',name:'Abstraction Depth',score:'9.0',artifact:'The paper operates at high conceptual distance while preserving operational contact with observable performance and machine construction.'},
   {key:'CD',name:'Constraint Density',score:'8.6',artifact:'The argument must survive multiple objections while remaining constrained by computability, performance and learnability.'},
   {key:'ID',name:'Inferential Distance',score:'9.1',artifact:'Replacing an ill-posed metaphysical question with a new operational target is a large, non-routine inferential move.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'The imitation-game architecture coordinates a broad field of philosophical and technical problems with striking economy.'},
   {key:'GR',name:'Generalization Reach',score:'9.0',artifact:'The relocation travels widely across AI, philosophy of mind, evaluation and machine-behavior research.'}
  ],
  boundaryTitle:'Why G, not GΩ?',
  boundary:['The paper genuinely relocates the inquiry, so Level 3 is insufficient. The target and evidentiary structure change.','But historical importance is not Ω. Adequate successor inquiry can reject behavioral operationalization as the baseline and pursue different constrained accounts of machine cognition.'],
  exceptionalTitle:'The generative act is a replacement, not a prediction.',
  exceptional:['Turing’s deepest move is methodological: he makes a previously unstable question answerable in a new way.','That is precisely the kind of explanatory relocation TORC is designed to distinguish from mere abstraction or brilliance.']
 },
 'beloved':{
  headline:'The past becomes inhabitable only when it is neither erased nor allowed to consume the present.',
  analysis:[
   'Beloved’s haunting cannot be reduced to a symbol attached to an otherwise stable history. Sethe’s motherhood, slavery, memory, guilt and the killing of her child make her own orientation inseparable from what returns. “Rememory” gives the past a structure that is simultaneously psychological, relational and almost spatial.',
   'That self-implication clears 3b. The completed work then demonstrates a higher orientation through Denver’s movement into community, the women’s collective intervention and Paul D’s changed relation to Sethe.',
   'Nothing essential is undone. Slavery remains irreversible; the child remains dead; memory remains dangerous. Integration consists in making relation and continued life possible without falsifying those facts. That is why the governing operation reaches 3c.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.0',artifact:'Generations, slavery, motherhood, community, memory, embodiment and temporal layers remain exceptionally interdependent.'},
   {key:'AD',name:'Abstraction Depth',score:'8.8',artifact:'Intimate experience opens into deep structures of historical trauma, memory, personhood and collective inheritance.'},
   {key:'CD',name:'Constraint Density',score:'8.8',artifact:'Voice, chronology, family history, trauma and communal relations tightly constrain what can be known and repaired.'},
   {key:'ID',name:'Inferential Distance',score:'8.6',artifact:'The reader reconstructs the governing history through nonlinear memory, shifting voices and delayed causal revelation.'},
   {key:'IC',name:'Integrative Compression',score:'9.2',artifact:'124, Beloved, rememory and shifting voice compress an enormous historical-psychological field.'},
   {key:'GR',name:'Generalization Reach',score:'8.1',artifact:'Its structure transfers strongly to trauma, inherited history, communal repair and the relation between memory and identity.'}
  ],
  boundaryTitle:'Why 3c, not 3b?',
  boundary:['3b explains why Sethe cannot simply place the past behind her: her own orientation is constituted through the history she is trying to survive.','The ending does more than expose that fracture. It demonstrates a relational orientation that can preserve the irreversibility of the past while reopening a future.'],
  exceptionalTitle:'Beloved integrates without converting trauma into redemption.',
  exceptional:['That distinction matters. The work does not make suffering worthwhile or history reparable.','It demonstrates how continued orientation can become possible without requiring either claim.']
 },
 'the-metamorphosis':{
  headline:'Gregor’s transformation is radical. The governing cognitive operation is not.',
  analysis:[
   'The opening transformation is so strange that it can make a higher Order feel inevitable. TORC resists that shortcut. Gregor’s consciousness remains remarkably continuous; what changes most violently is his position inside labor, usefulness, family obligation, shame and dependency.',
   'Those relations create an extraordinarily powerful symbolic architecture. His body makes visible what his economic and familial role had already been doing: value becomes inseparable from usefulness, and care becomes constrained by burden.',
   'But the completed novella does not require a recursive fracture in the conditions of knowing reality, nor does Gregor’s own attempted orientation become the constitutive source of the contradiction. Level 2 remains sufficient.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.3',artifact:'Body, labor, debt, family dependency, shame, usefulness and care remain tightly related.'},
   {key:'AD',name:'Abstraction Depth',score:'7.7',artifact:'The bodily event supports strong abstraction around dehumanization, obligation and social value without becoming a formal theory.'},
   {key:'CD',name:'Constraint Density',score:'7.8',artifact:'Gregor’s body, room, work obligations and family economy sharply restrict viable action.'},
   {key:'ID',name:'Inferential Distance',score:'7.3',artifact:'The central transformation makes the symbolic field quickly recoverable even as its implications deepen.'},
   {key:'IC',name:'Integrative Compression',score:'8.2',artifact:'A single impossible bodily change compresses economic, familial, social and existential relations with exceptional economy.'},
   {key:'GR',name:'Generalization Reach',score:'7.0',artifact:'The structure transfers well to usefulness, dependency and alienation while remaining closely bound to Gregor’s specific transformation.'}
  ],
  boundaryTitle:'Why Level 2, not 3b?',
  boundary:['Psychological suffering and bizarre ontology do not themselves establish recursive fracture. Gregor’s consciousness does not become the mechanism by which the governing contradiction is produced.','The symbolic system already explains the artifact: body, usefulness, labor and family value are reorganized with extraordinary compression. No higher Order is required.'],
  exceptionalTitle:'One impossible event carries an enormous amount of structure.',
  exceptional:['That is the novella’s cognitive strength. It does not need recursion to be deep.','The Metamorphosis is another useful demonstration that symbolic consciousness can be exceptionally compressed and consequential.']
 },
 'the-godfather':{
  headline:'Michael’s transformation is profound without becoming a recursive fracture.',
  analysis:[
   'Family and business, legitimacy and crime, intimacy and power, ritual and murder are organized into one exceptionally coherent symbolic system. Michael’s trajectory retrospectively reorganizes the wedding, Vito’s authority, Sicily, retaliation and succession: his attempted distance from the family becomes the route by which he reproduces it.',
   'That transformation is cognitively rich, but character transformation is not automatically Level 3. The film retains a stable standpoint from which the Corleone order and Michael’s adaptation to it can be understood. His own attempt to know reality does not become constitutively trapped in an epistemic or existential contradiction.',
   'Level 2 is therefore sufficient. The baptism sequence is a peak of formal integration, but formal integration is not the same operation as 3c. The high CMS records the density and compression of the architecture without inflating its Order.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.7',artifact:'Family, business, loyalty, violence, legitimacy, succession and Americanness continually constrain one another.'},
   {key:'AD',name:'Abstraction Depth',score:'7.3',artifact:'Concrete family and criminal relations support broader structures of power and inheritance while remaining strongly narrative.'},
   {key:'CD',name:'Constraint Density',score:'8.8',artifact:'Obligations, retaliation, secrecy, alliances and succession severely restrict viable action across the film.'},
   {key:'ID',name:'Inferential Distance',score:'7.8',artifact:'Michael’s completed trajectory reorganizes earlier choices and relationships without requiring extreme inferential distance.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'Ritual, family roles and recurring contrasts coordinate a huge institutional and moral architecture with remarkable economy.'},
   {key:'GR',name:'Generalization Reach',score:'7.1',artifact:'The structure transfers to institutional inheritance and power, though much remains bound to the Corleone family system.'}
  ],
  boundaryTitle:'Why Level 2, not 3a or 3b?',
  boundary:['Michael is morally captured and transformed by the order he enters, but capture and corruption do not by themselves destabilize the conditions of orientation in the 3a sense.','Nor does his own knowing become constitutively responsible for producing an irreducible fracture in the 3b sense. Symbolic tragic organization remains sufficient.'],
  exceptionalTitle:'The baptism sequence shows why formal sophistication and Operational Order must stay separate.',
  exceptional:['The film coordinates family, religion, murder and succession with extraordinary precision. That raises IC and CD dramatically.','It does not force a higher Order. The distinction is exactly what the two-coordinate model is for.']
 },

 'glengarry-glen-ross':{
  headline:'The sales office is a complete symbolic machine. It does not need recursion to be devastating.',
  analysis:[
   'Leads, commissions, rank, humiliation and speech are not separate pressures in Glengarry Glen Ross. They form one compact economy in which language itself becomes transaction: every conversation tests status, leverage, credibility and the possibility of extracting value from another person.',
   'That system is vicious and self-reproducing, which makes 3a tempting. But TORC does not promote an artifact merely because an external order captures behavior. The play preserves a stable dramatic standpoint from which the sales machine can be identified, and the characters’ orientation toward reality does not become the governing source of the fracture.',
   'Level 2 is therefore sufficient. The achievement lies in the density with which a whole economic-moral order is symbolically organized inside a tiny cast, a few rooms and a severely restricted set of incentives.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.7',artifact:'Deals, leads, money, status, speech acts, rivalry and betrayal are tightly interdependent; a change in one immediately alters the others.'},
   {key:'AD',name:'Abstraction Depth',score:'6.6',artifact:'The play reaches beyond sales into hierarchy, masculinity and economic coercion, but it remains closely anchored to the concrete institutional game.'},
   {key:'CD',name:'Constraint Density',score:'8.2',artifact:'Time pressure, lead quality, rank, commissions, deception and competition sharply restrict what each character can plausibly do.'},
   {key:'ID',name:'Inferential Distance',score:'6.8',artifact:'The deeper social structure emerges through dialogue and reversal, but the route from local transaction to governing system remains comparatively direct.'},
   {key:'IC',name:'Integrative Compression',score:'8.5',artifact:'A remarkably small cast and setting compress an entire economy of competition, humiliation and self-commodification.'},
   {key:'GR',name:'Generalization Reach',score:'6.7',artifact:'The structure transfers strongly to competitive institutional settings, though it remains relatively close to sales, status and workplace coercion.'}
  ],
  boundaryTitle:'Why Level 2, not 3a?',
  boundary:[
   'The office conditions perception and behavior, but a pathological external system is not automatically recursive consciousness. The play can still diagnose the system from a principally stable standpoint.',
   'Nothing in the completed artifact requires the conditions of reality-identification themselves to become the governing problem. Symbolic consciousness already explains the work.'
  ],
  exceptionalTitle:'Its compression is more radical than its Operational Order.',
  exceptional:[
   'Glengarry Glen Ross needs almost no representational space to build a complete social world. Leads and language become enough to coordinate economics, identity, hierarchy and fear.',
   'That is why its strongest signal is magnitude inside Level 2, not promotion beyond it.'
  ]
 },
 'there-will-be-blood':{
  headline:'Plainview turns extraction into a total way of relating without making reality itself recursively unstable.',
  analysis:[
   'Oil, land, kinship, religion, competition and bodily appetite converge around Daniel Plainview. Extraction is therefore more than an industry in the film: it becomes a symbolic grammar for how Plainview enters families, communities, landscapes and rival institutions.',
   'His pathology grows extreme, but pathology is not a higher Operational Order by itself. The film retains a stable standpoint from which Plainview’s domination and Eli’s counter-performance can be understood. Their systems deform people and relations without making the conditions of knowing reality the governing contradiction.',
   'Level 2 remains sufficient. The film’s exceptional force comes from the way causal, visual and symbolic constraints lock together so tightly that economic extraction, family performance and spiritual authority become mutually legible without needing recursive fracture.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.2',artifact:'Oil, land, family, labor, religion, rivalry and bodily vulnerability remain densely linked throughout Plainview’s rise.'},
   {key:'AD',name:'Abstraction Depth',score:'7.1',artifact:'The film reaches strong abstractions around appetite, capitalism, faith and domination while remaining grounded in concrete action and character.'},
   {key:'CD',name:'Constraint Density',score:'8.3',artifact:'Property, geology, labor, reputation, kinship claims and institutional rivalry severely constrain viable action.'},
   {key:'ID',name:'Inferential Distance',score:'7.4',artifact:'The viewer must reconstruct the larger relation between extraction and personhood from sparse exposition and long-form character development.'},
   {key:'IC',name:'Integrative Compression',score:'8.0',artifact:'A small number of recurring relations—oil, blood, family, church and competition—organize an unusually large moral-economic field.'},
   {key:'GR',name:'Generalization Reach',score:'6.8',artifact:'The architecture transfers to domination, institutional rivalry and extractive relations, while remaining substantially bound to its historical-social ontology.'}
  ],
  boundaryTitle:'Why Level 2, not 3a?',
  boundary:[
   'Plainview’s disintegration and Eli’s religious performance are profound, but neither makes reality-identification itself the governing problem of the completed film.',
   'The artifact remains intelligible from outside their pathologies. Symbolic organization of extraction, appetite and domination therefore remains the lowest sufficient Order.'
  ],
  exceptionalTitle:'The film makes one logic operate across matter, money and intimacy.',
  exceptional:[
   'Extraction is demonstrated at multiple scales without becoming a schematic allegory: oil comes from land, advantage from communities, loyalty from family and recognition from rivalry.',
   'That multi-domain coherence drives the high CMS while the Operational Order stays at 2.'
  ]
 },
 '1984':{
  headline:'The Party does not merely dictate belief. It attacks the machinery by which reality can be identified.',
  analysis:[
   'Historical records, language, memory, logical consistency and private perception are all made objects of institutional control. Winston is therefore not simply trapped inside a brutal symbolic order. The Party acts directly on the representational conditions through which a person could establish what happened, what words mean and whether contradiction can still count as contradiction.',
   'That is why Level 2 is insufficient and 3a is required. The fracture concerns orientation toward reality itself: evidence can be rewritten, linguistic distinctions can be removed, and memory can be forced into conflict with official truth.',
   'TORC stops at 3a rather than 3b. Winston is eventually captured and destroyed, but capture is not the same as constitutive self-implication. The dominant causal direction remains an external totalizing system acting upon consciousness rather than consciousness discovering that its own attempted standpoint generates the contradiction.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.4',artifact:'Language, memory, records, surveillance, sexuality, political power and private judgment remain strongly interdependent.'},
   {key:'AD',name:'Abstraction Depth',score:'8.5',artifact:'Concrete mechanisms of rule open into deep structures concerning truth, language, epistemology and institutional reality.'},
   {key:'CD',name:'Constraint Density',score:'8.3',artifact:'Surveillance, historical revision, Newspeak, social ritual and punishment jointly restrict both action and interpretation.'},
   {key:'ID',name:'Inferential Distance',score:'8.2',artifact:'The novel requires a substantial reconstruction from ordinary political domination to control over the conditions of knowledge itself.'},
   {key:'IC',name:'Integrative Compression',score:'8.7',artifact:'Newspeak, doublethink, the Ministry of Truth and a small set of recurring formulas compress a vast political-epistemic architecture.'},
   {key:'GR',name:'Generalization Reach',score:'7.8',artifact:'Its structure transfers strongly across propaganda, information control, institutional memory and manufactured epistemic environments.'}
  ],
  boundaryTitle:'Why 3a, not 3b?',
  boundary:[
   'The Party penetrates consciousness so deeply that 3b can feel intuitive. TORC’s boundary is stricter: successful capture does not itself show that the subject’s own attempt to know is constitutively producing the fracture.',
   'Winston’s standpoint is attacked, rewritten and finally broken by an external order. That makes 3a the lowest sufficient description of the governing operation.'
  ],
  exceptionalTitle:'Its dystopia is epistemic before it is merely political.',
  exceptional:[
   'The most consequential violence in 1984 is not that the Party lies. It is that it redesigns the environment in which the distinction between lie and reality could be maintained.',
   'That is the operation that pushes the novel beyond symbolic consciousness.'
  ]
 },
 'the-talented-mr-ripley':{
  headline:'Tom can reinvent identity precisely because his practical orientation remains terrifyingly functional.',
  analysis:[
   'Imitation, class aspiration, envy, murder and self-invention form a sophisticated psychological-symbolic system around Tom Ripley. Identity is not treated as a fixed possession; it becomes something assembled through clothes, signatures, manners, stories and access to other people’s social positions.',
   'That fluidity can look recursive, but the completed novel does not require a Level-3 fracture. Tom’s deceptions work because he reads practical reality extremely well. He manages schedules, witnesses, documents, expectations and mutually constraining lies with sustained competence.',
   'Level 2 is therefore sufficient. The novel represents instability of identity and self-justification with unusual intelligence, but those phenomena remain objects inside a stable narrative world rather than becoming a governing breakdown in consciousness’s relation to reality.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.9',artifact:'Identity, class, friendship, desire, money, documents, travel and concealment continually affect one another.'},
   {key:'AD',name:'Abstraction Depth',score:'7.1',artifact:'The novel reaches beyond crime into identity and social self-construction while remaining strongly tied to Tom’s concrete improvisations.'},
   {key:'CD',name:'Constraint Density',score:'7.8',artifact:'Each impersonation and concealment creates new obligations across witnesses, correspondence, timing and material evidence.'},
   {key:'ID',name:'Inferential Distance',score:'7.4',artifact:'The reader reconstructs Tom’s adaptive logic across accumulating lies, but the governing psychological architecture remains recoverable.'},
   {key:'IC',name:'Integrative Compression',score:'8.1',artifact:'Crime, class desire, imitation and identity management are coordinated through a compact set of recurring social mechanisms.'},
   {key:'GR',name:'Generalization Reach',score:'6.5',artifact:'The structure travels to identity performance and aspirational social worlds but remains comparatively close to its psychological-social case.'}
  ],
  boundaryTitle:'Why Level 2, not 3b?',
  boundary:[
   'Tom is psychologically complex and continually self-fashioning, but complexity and self-reference are not enough. His cognition is not trapped by an irreducible contradiction in the act of orienting toward reality.',
   'On the contrary, practical orientation is one of his strongest capacities. Symbolic-psychological organization therefore explains the completed novel without requiring 3b.'
  ],
  exceptionalTitle:'Identity instability and cognitive instability are not the same thing.',
  exceptional:[
   'Ripley is powerful for TORC because it separates those two signals cleanly. Tom can be radically unstable as a person while remaining highly effective as an observer and manipulator of reality.',
   'That distinction keeps the novel at Level 2 without diminishing its psychological magnitude.'
  ]
 },
 'the-art-of-self-defense':{
  headline:'The dojo manufactures a self. The film still knows exactly what the machine is doing.',
  analysis:[
   'The dojo organizes masculinity through rank, vocabulary, color, violence, music, fear and ritual. Casey’s transformation is therefore not a loose character arc: it is the output of a deliberately constructed symbolic system that teaches him what strength, weakness and legitimacy are supposed to mean.',
   'Because the system reproduces itself through the people it captures, 3a can look plausible. The crucial firewall is external orientation. The film’s satire maintains a stable diagnostic position from which the dojo’s ideology and conditioning can be seen as manufactured.',
   'Level 2 is sufficient. Casey is changed by the system, but the conditions by which reality itself can be known do not become the governing fracture. The intelligence lies in how economically the film builds and exposes the machine.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'7.3',artifact:'Fear, masculinity, hierarchy, language, violence, status and belonging are tightly coordinated inside the dojo system.'},
   {key:'AD',name:'Abstraction Depth',score:'6.8',artifact:'The film moves from a concrete institution to broader structures of masculinity and manufactured identity without becoming highly meta-level.'},
   {key:'CD',name:'Constraint Density',score:'7.6',artifact:'Rules, ranks, rituals, threat and comic causality create a tightly bounded system with limited viable responses.'},
   {key:'ID',name:'Inferential Distance',score:'7.0',artifact:'The larger social critique emerges clearly from the dojo’s local mechanisms rather than requiring extreme inferential reconstruction.'},
   {key:'IC',name:'Integrative Compression',score:'7.3',artifact:'A small institution and a deliberately narrow vocabulary carry a broad critique of fear, masculinity and social conditioning.'},
   {key:'GR',name:'Generalization Reach',score:'6.6',artifact:'The architecture transfers well to related systems of hierarchy, identity formation and coercive belonging.'}
  ],
  boundaryTitle:'Why Level 2, not 3a?',
  boundary:[
   'The dojo’s ideology reshapes Casey, but transformation under a pathological system is not enough to establish recursive fracture.',
   'The completed film can still identify the mechanism from outside it. The satire never loses the standpoint required to diagnose what the institution is doing.'
  ],
  exceptionalTitle:'Its precision comes from making ideology operational.',
  exceptional:[
   'Masculinity is not left as a theme. It is turned into rules, objects, punishments, vocabulary and behaviors that can visibly train a person.',
   'That operational symbolic design is the film’s strongest cognitive achievement.'
  ]
 },
 'discrimination-and-disparities':{
  headline:'The book changes what must be explained before a disparity can count as evidence of its cause.',
  analysis:[
   'The independent target is observed disparity among individuals and groups. The book’s governing move is to reject the shortcut from unequal outcome to presumptive causal explanation and replace it with a wider causal field: distributions of prerequisites, incentives, sorting processes, decision costs, historical contingencies and institutional effects.',
   'That is more than an alternative opinion about discrimination. It relocates the explanatory task. A disparity becomes the beginning of causal discrimination among competing mechanisms rather than a result that carries its own causal interpretation.',
   'TORC therefore resolves the artifact at G. The mechanism is exposed to comparative and empirical constraint rather than being generated solely inside a stipulated conceptual system. GΩ is not required: adequate successor inquiry can reject or revise this particular framework without first treating it as an unavoidable baseline.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.4',artifact:'Prerequisites, incentives, geography, sorting, institutions, history and observed outcomes remain causally interdependent across the argument.'},
   {key:'AD',name:'Abstraction Depth',score:'7.8',artifact:'The book moves from concrete disparities to multicausal explanatory structures while staying tied to comparative empirical cases.'},
   {key:'CD',name:'Constraint Density',score:'8.4',artifact:'Competing explanations must accommodate multiple populations, histories, institutional settings and distributions rather than one outcome variable.'},
   {key:'ID',name:'Inferential Distance',score:'8.0',artifact:'The central move requires replacing a direct outcome-to-cause inference with a substantially more distributed causal reconstruction.'},
   {key:'IC',name:'Integrative Compression',score:'8.3',artifact:'A relatively compact causal vocabulary organizes a wide range of disparity cases without reducing them to one mechanism.'},
   {key:'GR',name:'Generalization Reach',score:'8.1',artifact:'The explanatory architecture transfers across labor, education, income, demographic and institutional disparities with meaningful structural continuity.'}
  ],
  boundaryTitle:'Why G, not Level 2—or GΩ?',
  boundary:[
   'Level 2 would describe a sophisticated conceptual system about disparities. That is insufficient here because the book changes the causal basis on which the target is to be investigated: outcome difference no longer carries a privileged explanation by itself.',
   'GΩ would require the relocation to become an unavoidable successor baseline. The work does not establish that stronger necessity. Its causal architecture is generative without becoming non-optional for every adequate successor account.'
  ],
  exceptionalTitle:'The generative move is to reopen causation where an outcome had been allowed to close it.',
  exceptional:[
   'The book’s strongest operation is methodological rather than rhetorical: it forces explanation to pass through alternative causal structures before assigning a disparity to one cause.',
   'That relocation is why G is warranted even though its magnitude remains below the largest generative works in the corpus.'
  ]
 },

};
