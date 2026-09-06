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
 'a-confederacy-of-dunces':{
  headline:'Everyone has an explanation for reality. The comedy begins where reality refuses to cooperate.',
  analysis:[
   'Ignatius does not merely misunderstand the world. He possesses an entire apparatus for converting humiliation, laziness, appetite, failure and dependence into evidence of his own superiority. His medieval philosophy makes contingency look like cosmic disorder, employment look like persecution, and every collision with ordinary life look like proof that ordinary life is beneath him. The joke is not simply that he is deluded. It is that his delusion is structurally productive: it can absorb almost anything without having to change.',
   'Toole builds the same pressure outward. Levy Pants, the Night of Joy, police procedure, family obligation, racial and economic coercion, Myrna’s ideological certainty and Mrs. Levy’s therapeutic language all provide systems in which people can redescribe what they are doing while remaining caught inside it. The novel becomes a city of competing explanations, each locally coherent enough to keep its owner moving and distorted enough to collide with everyone else.',
   'But the novel itself never loses the distinction those characters lose. Their vocabularies remain visible as vocabularies. The reader can see Ignatius’s interpretation and the event it is trying to master at the same time. That preserved distance is decisive: the governing operation is the symbolic organization of a social world in which explanation repeatedly becomes self-protection, not a higher recursive fracture in the artifact’s own orientation to reality.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.3',artifact:'Ignatius, Mrs. Reilly, Myrna, Levy Pants, Jones, Lana Lee, Mancuso and the surrounding institutions form a dense causal network in which remote comic actions repeatedly return as later constraints.'},
   {key:'AD',name:'Abstraction Depth',score:'7.2',artifact:'The comedy continually rises from concrete failure into larger structures of ideology, self-deception, status, modernity and social performance without detaching those abstractions from lived scenes.'},
   {key:'CD',name:'Constraint Density',score:'7.8',artifact:'Voice, timing, intersecting plots, causal reversals, social geography and character consistency have to remain mutually compatible across a crowded narrative while still converging convincingly.'},
   {key:'ID',name:'Inferential Distance',score:'7.0',artifact:'The novel discovers non-obvious relations between private delusion and institutional absurdity, but it reaches them largely through cumulative characterization and comic causality rather than a single radical inferential leap.'},
   {key:'IC',name:'Integrative Compression',score:'8.1',artifact:'A small family of mechanisms—self-justification, reciprocal exploitation, ideological inversion and accidental consequence—organizes a very large and differentiated social field.'},
   {key:'GR',name:'Generalization Reach',score:'6.5',artifact:'Its architecture travels well across bureaucracy, status, ideological rationalization and institutional incompetence, while remaining most securely grounded in human and social situations.'}
  ],
  boundaryTitle:'Why 2 rather than 3a?',
  boundary:[
   'The novel contains powerful 3a signals because social systems repeatedly reproduce distorted conduct. Jones is trapped by the interaction of economic exploitation and policing; Levy Pants survives through mutually reinforcing dysfunction; Ignatius turns contradiction into renewed certainty. Yet those systems remain diagnosable from a stable standpoint supplied by the artifact itself.',
   'A 3a determination would require the external order to make consciousness’s orientation toward reality structurally problematic as the governing operation. Here symbolic satire still explains the whole. The higher-order signal is real, but it never becomes necessary.'
  ],
  exceptionalTitle:'Its scale comes from making an entire city participate in the same comic law.',
  exceptional:[
   'The novel’s exceptional achievement is architectural. An enormous number of people, institutions, motives and accidents remain distinct while continually being pulled into one another’s consequences.',
   'The result is a rare high-magnitude Level 2 work: not because it nearly becomes a higher Order, but because it realizes symbolic consciousness at unusual relational and integrative scale.'
  ]
 },
 'genius-the-natural-history-of-creativity':{
  headline:'Genius stops being a mysterious possession and becomes an outcome that a causal system must produce.',
  analysis:[
   'Eysenck begins from a familiar explanatory failure. Intelligence matters to creative achievement, personality matters, unusual associative processes matter, psychopathology appears repeatedly in the literature, biological variables matter, and environment matters—but a list of correlations does not yet explain why genius occurs. The book’s governing move is to force those scattered findings into one causal problem.',
   'The proposed architecture runs across levels. Broad or overinclusive associative production can increase the supply of unusual connections; psychoticism-related dispositions and inhibitory processes help explain why that cognitive field differs between people; intelligence, ego strength, persistence and environmental conditions help determine whether unusual production becomes useful achievement rather than disorganization. Biology, personality, cognition and accomplishment are therefore treated not as separate topics but as stages and constraints inside one generative account.',
   'That is the decisive relocation. Genius is no longer principally something a person possesses in extraordinary quantity. It becomes an outcome whose appearance has to be generated by interacting mechanisms. The model is imperfect and some links remain speculative, but the book exposes those links to empirical failure. Its explanatory structure therefore carries real risk rather than protecting itself by definition.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.7',artifact:'The theory coordinates intelligence, personality, psychoticism, associative cognition, inhibition, psychopathology, biology, motivation, environment and achievement across several explanatory levels.'},
   {key:'AD',name:'Abstraction Depth',score:'8.6',artifact:'The argument moves from observable creative performance through psychometric constructs and personality dimensions toward cognitive and biological mechanisms while preserving a common causal question.'},
   {key:'CD',name:'Constraint Density',score:'8.0',artifact:'Any successful version of the theory has to accommodate evidence from psychometrics, experimental cognition, psychopathology, personality and biology, although several cross-level links remain provisional.'},
   {key:'ID',name:'Inferential Distance',score:'8.1',artifact:'The non-obvious move is to connect apparently pathological associative tendencies with productive creativity while also explaining why unusual cognition alone does not yield genius.'},
   {key:'IC',name:'Integrative Compression',score:'8.8',artifact:'A comparatively compact multilevel model makes a large and heterogeneous literature reconstructible as parts of one causal architecture rather than a collection of disconnected findings.'},
   {key:'GR',name:'Generalization Reach',score:'7.9',artifact:'The structure reaches across artistic, scientific and other forms of creative achievement, though its strongest transfer remains within the wider creativity and genius problem-field.'}
  ],
  boundaryTitle:'Why G rather than a lower Order?',
  boundary:[
   'The book is not principally representing creativity, symbolizing it, or reorganizing consciousness’s relation to it. Its central operation is explanatory: it proposes a mechanism intended to account for why an independently existing phenomenon takes the form it does.',
   'Lower Orders can describe the conceptual sophistication of the argument, but they cannot explain the completed artifact’s governing move. The causal architecture changes what must be invoked to explain creativity and exceptional achievement. That makes G the lowest sufficient Order.'
  ],
  exceptionalTitle:'The strongest move is the bridge from scattered correlations to a mechanism that can fail.',
  exceptional:[
   'Eysenck does not solve the problem by declaring every association part of genius. The architecture has to distinguish productive breadth from pathological disorganization, potential from achievement, and correlation from causal explanation.',
   'Its importance within TORC lies in that constrained synthesis: many partially separate literatures are made to bear on one explanatory structure, while the structure remains exposed to evidence that could force its revision.'
  ]
 },
 'the-logic-of-scientific-discovery':{
  headline:'Science becomes rational not by proving itself right, but by exposing where it could be wrong.',
  analysis:[
   'Popper’s governing move is not the slogan that theories should be falsifiable. The deeper relocation concerns what makes empirical science rational at all. Universal theories cannot be established by accumulating confirming instances in the way an inductivist picture suggests; they can, however, be placed at risk by consequences that may conflict with observation.',
   'That reversal reorganizes the surrounding architecture. Basic statements, degrees of testability, corroboration, simplicity and methodological decisions become parts of one structure: a scientific theory earns empirical content by forbidding possible states of affairs and submitting those prohibitions to criticism. Evidence no longer functions primarily as accumulated verification of a universal claim.',
   'The result clears G because the object of explanation—scientific testability and rational empirical inquiry—is independently identifiable, while the relocation is constrained by the logical asymmetry between universal statements and counterinstances. Popper changes what has to be invoked to explain why a theory is empirically scientific.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'8.2',artifact:'Theory, observation, basic statements, falsification, corroboration, probability, simplicity and scientific progress remain densely connected, though the field is more methodologically concentrated than the largest GΩ works.'},
   {key:'AD',name:'Abstraction Depth',score:'9.0',artifact:'The book operates at a deep meta-scientific level while repeatedly returning abstract logical relations to concrete empirical testing.'},
   {key:'CD',name:'Constraint Density',score:'9.0',artifact:'Logical form, testability, methodological rules and evidential exposure sharply restrict which relations can count as successful scientific testing.'},
   {key:'ID',name:'Inferential Distance',score:'9.1',artifact:'The move from induction and verification toward deductive critical testing is a large, non-routine reconstruction of the problem of scientific rationality.'},
   {key:'IC',name:'Integrative Compression',score:'9.2',artifact:'A compact architecture of falsifiability, testing and corroboration reorganizes an exceptionally broad methodological field.'},
   {key:'GR',name:'Generalization Reach',score:'9.1',artifact:'The structure transfers robustly across empirical theories and methodological problems without depending on one scientific domain.'}
  ],
  boundaryTitle:'Why GΩ rather than G?',
  boundary:[
   'G is the easy part of the determination: Popper relocates the explanatory basis of scientific rationality from inductive establishment toward conjectural theories exposed to possible refutation.',
   'Ω is stricter. The claim is not that later philosophy of science accepted falsificationism. Much of it did not. The stronger point is that successor accounts of demarcation, testing, confirmation and empirical vulnerability cannot simply restore the earlier verification landscape as though Popper’s relocation had never occurred. Kuhnian, Lakatosian, Bayesian and other departures answer a problem-space that the Popperian intervention helped make non-optional.',
   'That is why the corpus keeps GΩ: rejection of Popper’s solution remains compatible with successor-baseline necessity. The boundary would fall to G if later adequate inquiry could bypass the relocated testing problem rather than answer, revise or replace it.'
  ],
  exceptionalTitle:'Its successor power lies in changing the question, not winning the argument.',
  exceptional:[
   'Popper does not need later philosophy of science to remain Popperian. TORC asks whether the old explanatory baseline can simply be resumed without loss. Here the answer is no.',
   'That makes this a useful GΩ case: successor necessity is visible precisely because major successors can oppose the original theory while remaining organized around the transformed methodological problem.'
  ]
 },
 'being-and-nothingness':{
  headline:'Consciousness is explained by the distance it creates inside being.',
  analysis:[
   'Sartre does not begin with a substantial inner self that subsequently happens to choose, deceive itself or encounter other minds. The for-itself is constituted as a relation that is not identical with what it is: consciousness nihilates, exceeds its facticity and projects possibilities. That ontological displacement becomes the engine of the book.',
   'Bad faith is the sharpest local demonstration. Ordinary deception can separate deceiver and deceived; self-deception cannot do so without reproducing the problem inside one consciousness. Sartre uses that contradiction to make an ordinary substantial psychology insufficient. Facticity and transcendence are not decorative existential terms—they explain why consciousness can both know and evade what it is.',
   'The same architecture then generates temporality, freedom, the Look, being-for-others, embodiment, desire and action. G is warranted because the ontology changes what explains the target phenomena. They cease to be a list of psychological properties and become consequences of the structure of the for-itself.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.3',artifact:'Ontology, negation, temporality, freedom, bad faith, embodiment, intersubjectivity, desire and action remain mutually consequential across the work.'},
   {key:'AD',name:'Abstraction Depth',score:'9.7',artifact:'Concrete situations are carried through an exceptionally long phenomenological and ontological abstraction chain without losing the relations that motivate them.'},
   {key:'CD',name:'Constraint Density',score:'8.8',artifact:'The for-itself/in-itself architecture imposes strong obligations across later analyses, though some phenomenological transitions preserve more interpretive latitude than the strictest formal systems.'},
   {key:'ID',name:'Inferential Distance',score:'9.4',artifact:'Everyday phenomena such as negation and bad faith are reconstructed through a highly non-routine enabling ontology of nothingness, facticity and transcendence.'},
   {key:'IC',name:'Integrative Compression',score:'9.4',artifact:'A small ontological vocabulary renders an enormous field of consciousness, action and interpersonal experience reconstructible.'},
   {key:'GR',name:'Generalization Reach',score:'8.6',artifact:'The structure transfers powerfully across self-deception, temporality, embodiment, relations with others, desire and freedom while remaining centered on human reality.'}
  ],
  boundaryTitle:'Why G, not 3c—or GΩ?',
  boundary:[
   'A 3c reading can capture the extraordinary recursive treatment of freedom, self-knowledge and contradiction, but it remains insufficient for the completed artifact. Sartre is not only establishing an orientation toward a fracture in consciousness; he is proposing an ontology intended to explain why the fracture and its characteristic phenomena exist in the forms they do.',
   'GΩ does not follow from magnitude or historical importance. Later adequate inquiry into consciousness, agency or self-deception can reject Sartre’s specific ontological basis rather than being compelled to retain it as a successor baseline. The explanatory relocation is achieved; successor necessity is not.'
  ],
  exceptionalTitle:'The magnitude comes from making ontology do explanatory work.',
  exceptional:[
   'The book’s abstraction is extreme, but TORC does not reward abstraction by itself. What matters is that the abstract structure repeatedly returns to explain concrete phenomena that generated the inquiry.',
   'That combination—near-reference abstraction with a governing explanatory relocation—is why Being and Nothingness can sit at G | 920 without requiring GΩ.'
  ]
 },
 'in-search-of-lost-time':{
  headline:'The consciousness that loses time becomes the form through which time can finally be inhabited.',
  analysis:[
   'Across the sequence, remembering, desiring, loving and perceiving do not simply reveal an external world. They repeatedly produce distortions through which that world is encountered. Names outrun places, jealousy manufactures objects from incomplete evidence, habit conceals change, and memory returns a past that voluntary recollection could not command.',
   'That makes 3b unavoidable: consciousness discovers that its own attempt to possess reality is part of what makes reality unstable. The completed sequence, however, does not stop at exposure. Involuntary memory and artistic construction retrospectively reorganize losses, errors and temporal transformations into the possibility of the work itself.',
   'The result is 3c because the fracture remains real. Art does not restore lost time as though loss never happened; it establishes an orientation capable of containing temporal destruction and perspectival instability without cancelling them. The life that could not be possessed becomes reconstructible as form.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.7',artifact:'Persons, places, names, artworks, social positions, erotic attachments, sensations and memories change one another’s significance across enormous temporal distances.'},
   {key:'AD',name:'Abstraction Depth',score:'9.1',artifact:'Minute sensations and social encounters repeatedly open into deep structures of memory, time, desire, identity and art while remaining anchored in lived experience.'},
   {key:'CD',name:'Constraint Density',score:'9.1',artifact:'Chronology, remote echoes, social relations, repeated encounters and retrospective transformations severely constrain how the completed sequence can cohere.'},
   {key:'ID',name:'Inferential Distance',score:'9.2',artifact:'The governing relation among involuntary memory, temporal loss, failed interpretation and artistic necessity requires exceptional retrospective reconstruction.'},
   {key:'IC',name:'Integrative Compression',score:'9.6',artifact:'A comparatively small architecture of memory, time, desire, habit and art renders an immense heterogeneous experiential field reconstructible.'},
   {key:'GR',name:'Generalization Reach',score:'8.1',artifact:'The structure transfers strongly across love, memory, social perception, identity, art and temporality, but remains primarily within human experiential problem-spaces.'}
  ],
  boundaryTitle:'Why 3c, not 3b—or G?',
  boundary:[
   '3b is genuinely present throughout the sequence: the narrator’s own remembering, desiring and interpreting repeatedly generate the conditions of his misrecognition. What moves the completed artifact higher is that Time Regained establishes an operationally real orientation through art that preserves rather than erases that fracture.',
   'G is tempting because Proust often feels explanatory. TORC stops at 3c because the novel’s constructed experiential field does not provide the independent target-constraint required to turn its extraordinary phenomenological disclosure into a G-level explanatory relocation.'
  ],
  exceptionalTitle:'A CMS above 900 without G is exactly the point.',
  exceptional:[
   'Proust is one of the clearest demonstrations that cognitive magnitude and Operational Order are separate coordinates. The sequence can sustain near-reference relational load and compression while remaining 3c.',
   'Its achievement is not smaller because it is non-generative. It is a different operation: recursive fracture becomes inhabitable through the very artistic form produced from it.'
  ]
 },
 'dream-of-the-red-chamber':{
  headline:'An immense social world becomes intelligible only as the consciousness inhabiting it learns that attachment cannot make it stable.',
  analysis:[
   'The Jia household is not merely a huge cast inside an elaborate plot. Kinship, rank, money, ritual, poetry, erotic attachment, illness, dream and decline continually alter one another. The Stone/Jade and dream/waking structures make the represented world itself unstable: social identity and value are lived as real while repeatedly disclosed as transient, constructed and vulnerable to disappearance.',
   'Baoyu is therefore not standing outside the system diagnosing it. His desire, attachments and resistance to the roles assigned to him become implicated in the same instability. That is the 3b pressure in the work: consciousness cannot secure a standpoint from which attachment, identity and the household order become simply knowable.',
   'The corpus nevertheless resolves at 3c. The completed trajectory toward relinquishment and retrospective comprehension establishes an orientation capable of containing impermanence without pretending that the losses were unreal. The world is not repaired; attachment is not vindicated; but the fracture becomes inhabitable rather than merely recursive.'
  ],
  dimensions:[
   {key:'RL',name:'Relational Load',score:'9.5',artifact:'Family, economic, erotic, ritual, political, poetic and metaphysical relations remain consequential across an exceptionally large social field.'},
   {key:'AD',name:'Abstraction Depth',score:'8.5',artifact:'Concrete household life repeatedly opens into dream, illusion, desire, fate and impermanence while preserving the lived social distinctions.'},
   {key:'CD',name:'Constraint Density',score:'8.7',artifact:'Kinship, hierarchy, ritual, chronology, household economy and character psychology strongly constrain one another across the narrative.'},
   {key:'ID',name:'Inferential Distance',score:'8.2',artifact:'The completed relation between social flourishing, attachment, decline and relinquishment requires substantial retrospective reconstruction.'},
   {key:'IC',name:'Integrative Compression',score:'8.6',artifact:'Stone/Jade, dream/waking, attachment/impermanence and household decline organize an enormous field without reducing it to a single allegory.'},
   {key:'GR',name:'Generalization Reach',score:'7.7',artifact:'The architecture transfers strongly across family, status, desire, mortality and social decay while remaining embedded in its social-metaphysical world.'}
  ],
  boundaryTitle:'Why 3c, with real 3b pressure?',
  boundary:[
   'The seven-run determination was not unanimous: five evaluations resolved at 3c and two at 3b. That disagreement is structurally meaningful. The 3b case is that Baoyu’s self-implication and the collapse of the Jia world remain stronger than any achieved orientation, making relinquishment look more like exit than integration.',
   'The 3c determination turns on a narrower claim: the completed artifact does not merely abandon the fracture. Retrospective comprehension preserves the reality of attachment and loss while establishing a way of orienting through their impermanence. The contradiction survives the integration.',
   'G remains unnecessary. The dream and cosmological structures are immensely powerful inside the novel, but they do not establish a sufficiently independently constrained explanatory relocation of a target outside the artifact’s constructed representational world.'
  ],
  exceptionalTitle:'Its uncertainty is concentrated exactly where TORC says it should be.',
  exceptional:[
   'The 3b pressure is not noise around the classification. It identifies the decisive question: whether relinquishment constitutes an achieved orientation or merely the terminal consequence of an unresolved fracture.',
   'The corpus answer is 3c | 853, but the surviving 3b reading should remain visible because it clarifies what the completed work had to achieve in order to cross the boundary.'
  ]
 },
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
  "the-unbearable-lightness-of-being":{
  "headline": "The concepts used to interpret a life become part of what makes that life impossible to stabilize.",
  "analysis": [
    "Lightness and weight begin as philosophical alternatives, but the novel refuses to let them remain clean concepts. Tomas, Tereza, Sabina and Franz repeatedly discover that the meanings they assign to love, freedom, fidelity, politics and chance alter the reality they are trying to understand.",
    "The narrative voice intensifies that instability by testing lives against recurrence, contingency, kitsch and historical pressure. Interpretation never stands outside the object. A concept clarifies one relation and distorts another; a choice acquires meaning only through a framework that the next event can unsettle.",
    "That makes 3b the stronger determination. Symbolic organization is exceptionally sophisticated, but the completed novel requires the characters’ own procedures of orientation to participate in the contradiction rather than simply represent it from a stable distance."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.3",
      "artifact": "Four central lives, erotic relations, political history, exile, memory and recurring conceptual oppositions remain strongly interdependent."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.5",
      "artifact": "Concrete relationships are repeatedly connected to deep problems of recurrence, contingency, identity, meaning and political representation."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "7.9",
      "artifact": "Character histories, political circumstance and recurring conceptual motifs constrain how each interpretation can be sustained."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.0",
      "artifact": "The reader must repeatedly revise what lightness, weight, fidelity and freedom mean as the same concepts change function across lives."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "8.6",
      "artifact": "A small set of conceptual oppositions organizes a broad field of erotic, political and existential material."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "7.6",
      "artifact": "The structure transfers across love, choice, exile and identity, but remains centered on human-existential problem-spaces."
    }
  ],
  "boundaryTitle": "Why 3b rather than Level 2?",
  "boundary": [
    "A Level 2 reading remains plausible because the novel is extraordinarily explicit about its conceptual and symbolic architecture. If those ideas merely organized the characters from an external narratorial standpoint, Level 2 would be sufficient.",
    "What pushes the completed work to 3b is that those frameworks become constitutive of the characters’ failures of orientation. They do not simply have meanings; the meanings through which they live become part of the instability they are trying to resolve."
  ],
  "exceptionalTitle": "The novel makes interpretation consequential without pretending interpretation can become final.",
  "exceptional": [
    "Its recursion remains light on its feet because philosophical concepts continually return to bodies, choices and political events.",
    "That movement gives the work more than symbolic density: it makes a life’s explanatory vocabulary part of the life itself."
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


 "oedipus-rex":{
  "headline": "The search for truth becomes the mechanism of self-exposure.",
  "analysis": [
    "Oedipus begins from a position of investigative authority. The plague has a cause, the cause can be identified, and the king can restore order by finding it. The tragedy progressively turns that confidence back on the investigator: each successful act of inquiry narrows the space in which Oedipus can remain outside the truth he is uncovering.",
    "Prophecy, testimony, memory, kinship and political responsibility do not merely accumulate as clues. They alter the status of the knower. Oedipus becomes simultaneously the agent of inquiry, the object being identified and the condition that made the city’s present crisis possible.",
    "That self-implication is why the play exceeds symbolic tragedy alone. The governing fracture is not simply that reality is terrible or hidden; it is that the consciousness attempting to establish reality discovers its own standpoint inside the contradiction."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.3",
      "artifact": "Oracle, plague, kingship, kinship, testimony, memory and investigation remain tightly interdependent as each revelation changes the significance of the others."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "7.7",
      "artifact": "The play rises from a concrete civic investigation into questions of knowledge, agency, identity and fate without losing its dramatic causal structure."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.4",
      "artifact": "Prophetic statements, witness accounts, chronology, family relations and prior acts sharply constrain which resolution can remain coherent."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.2",
      "artifact": "The decisive inference is not merely who killed Laius, but that the investigator’s own identity must be reconstructed through evidence he initially treats as external."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "8.5",
      "artifact": "A compact chain of inquiry compresses civic crisis, family history, epistemic confidence and tragic reversal into one governing architecture."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "7.3",
      "artifact": "The structure transfers strongly to problems of self-knowledge and inquiry, while remaining most directly grounded in human and dramatic orientation."
    }
  ],
  "boundaryTitle": "Why 3b rather than Level 2—or 3c?",
  "boundary": [
    "Level 2 can explain the play’s symbolism, prophecy and tragic pattern, but it cannot fully explain why the process of knowing must turn the knower into part of the discovered reality. That recursive self-implication makes 3b necessary.",
    "The ending does not establish a stable orientation capable of operating through the fracture. Recognition is complete, but integration is not. The catastrophe exposes the standpoint rather than reorganizing it into a durable 3c orientation."
  ],
  "exceptionalTitle": "The tragedy makes successful inquiry indistinguishable from self-destruction.",
  "exceptional": [
    "Oedipus is not defeated because inquiry fails. He is defeated because it works.",
    "That inversion gives the play unusual recursive force: truth does not arrive from outside consciousness but transforms the identity of the consciousness that demanded it."
  ]
},

 "the-second-sex":{
  "headline": "“Woman” is relocated from essence to a position that history, institutions and lived relations continually produce.",
  "analysis": [
    "The book refuses to treat “woman” as a self-explanatory natural category whose social condition can simply be described afterward. Biology, psychoanalysis, history, myth, labor, sexuality and everyday experience are made to converge on a different problem: how a human subject becomes positioned as the Other.",
    "That changes the explanatory center. Femininity is not merely represented as a set of traits; it is generated through social relations, material conditions, inherited meanings and forms of dependence that shape what possibilities can be inhabited.",
    "The completed artifact therefore reaches G. Its governing operation is explanatory relocation: a naturalized category becomes intelligible as historically and socially produced situation. The book’s ambition is not only interpretive breadth but a mechanism for why the target takes the forms it does."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.2",
      "artifact": "Biology, history, economics, sexuality, mythology, education, work and intimate relations are coordinated as interacting conditions rather than isolated topics."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.0",
      "artifact": "Concrete lived experience is carried into deep ontological and social analysis of subject, Otherness, freedom, embodiment and situation."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.5",
      "artifact": "The argument must accommodate material constraint, cultural production and lived experience simultaneously, limiting simple one-cause explanations."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.8",
      "artifact": "The non-obvious move is from a seemingly given sexed category to a historically produced relational position whose effects must be reconstructed across domains."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.0",
      "artifact": "The Other/situation architecture compresses a vast heterogeneous archive into a comparatively small family of explanatory relations."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.8",
      "artifact": "The structure transfers across family, work, sexuality, culture, politics and identity while preserving the same relational problem of produced alterity."
    }
  ],
  "boundaryTitle": "Why G rather than M?",
  "boundary": [
    "The explanatory relocation is clear: the target can no longer be adequately treated as a fixed essence once the work’s social, historical and existential architecture is in view.",
    "M would require the stronger claim that materially different successor frameworks remain structurally unable to return to a prior problem-space without preserving this transformed constraint in a sufficiently specific form. The work exerts strong M pressure, but G is the cleaner public determination."
  ],
  "exceptionalTitle": "Its scale comes from making one relational mechanism reorganize an entire field of experience.",
  "exceptional": [
    "The book’s magnitude is not simply the number of topics it addresses. Those topics repeatedly become evidence for the same explanatory relocation.",
    "That is why its breadth remains architectural rather than encyclopedic."
  ]
},

 "astronomia-nova":{
  "headline": "Mars forces astronomy to abandon the circle as an explanatory refuge.",
  "analysis": [
    "Astronomia Nova begins from a planetary problem that inherited geometries can approximate but not finally absorb. The residual discrepancies in Mars are small enough to tempt accommodation and large enough to make that accommodation intellectually unstable.",
    "Kepler allows the observations to constrain the form of the theory rather than forcing the observations back into inherited circular perfection. Elliptical motion and the area relation are not decorative improvements to a model; they reorganize what successful planetary explanation must fit.",
    "That is the M operation. Later celestial mechanics can reject Kepler’s physical causes and replace his dynamics, yet it cannot simply restore the earlier circular problem-space. The artifact changes the constraints under which successor explanation has to proceed."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.2",
      "artifact": "Observations, orbital geometry, solar relations, timing, physical hypotheses and inherited astronomical models remain tightly coupled."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.0",
      "artifact": "The work moves from positional observations through mathematical reconstruction toward a physical account of planetary order."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.5",
      "artifact": "Precise Mars data, geometrical relations and consistency across orbital positions sharply restrict viable constructions."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "9.6",
      "artifact": "The transition from inherited circular machinery to elliptical orbital structure requires a radical non-routine reconstruction under observational pressure."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.1",
      "artifact": "A small set of orbital relations organizes a large body of otherwise difficult positional data and theoretical conflict."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.8",
      "artifact": "The transformed structure carries beyond Mars into planetary astronomy and later celestial mechanics, though its strongest reach remains physical astronomy."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "G is already secured because the work relocates planetary explanation through a constrained physical-mathematical structure. The stronger question is whether that relocation changes the successor problem itself.",
    "It does. Newtonian gravitation can replace Kepler’s causal story, but it must still explain the orbital relations that Kepler made structurally non-optional. The solution changes; the transformed problem-space remains."
  ],
  "exceptionalTitle": "The decisive cognition is the refusal to let a small discrepancy remain small.",
  "exceptional": [
    "The famous residual is powerful because the artifact treats mismatch as a constraint on theory rather than a nuisance to be absorbed.",
    "That discipline converts a local observational problem into a permanent reorganization of planetary explanation."
  ]
},

 "a-treatise-on-electricity-and-magnetism":{
  "headline": "Electricity, magnetism and light become manifestations of one constrained field architecture.",
  "analysis": [
    "The Treatise does not merely collect results from electricity and magnetism. It makes previously separated phenomena answer to one mathematical architecture of fields, potentials, currents and propagation.",
    "The decisive relocation occurs when electromagnetic relations cease to be a set of neighboring topics and become a coupled explanatory system. The same structure that accounts for electrical and magnetic behavior also opens the route to understanding light as electromagnetic propagation.",
    "This reaches M because successor physics can abandon Maxwell’s mechanical imagery, alter notation and recast the ontology while remaining unable to return to a pre-field separation of the relevant phenomena. The transformed problem-space survives the original solution."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.7",
      "artifact": "Electrical, magnetic, mechanical, geometric and optical relations are coordinated across an exceptionally dense mathematical network."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.6",
      "artifact": "The work sustains deep movement between empirical phenomena, differential relations, field concepts and general physical structure."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.8",
      "artifact": "Equations, conservation relations, boundary conditions and empirical correspondences leave unusually little freedom for arbitrary reconstruction."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "9.6",
      "artifact": "The unification of previously separate domains through a field architecture requires a large inferential reorganization rather than incremental extension."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.6",
      "artifact": "A compact mathematical framework coordinates an enormous heterogeneous body of physical phenomena with exceptional economy."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "9.3",
      "artifact": "The architecture transfers across electromagnetism, optics, wave propagation and later field-theoretic physics."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "G captures the unification itself: the explanatory basis changes from separate electrical and magnetic mechanisms to a coupled field system.",
    "M is warranted because later physics can reject Maxwell’s ether-like mechanical pictures while remaining constrained by the electromagnetic problem-space his equations establish. What persists is not allegiance to Maxwell’s ontology but the transformed structure successors must answer."
  ],
  "exceptionalTitle": "The magnitude comes from unification under hard constraint.",
  "exceptional": [
    "Maxwell does not achieve scale by adding topics. He makes distant phenomena become mutually informative inside one structure.",
    "That combination of relational span, mathematical constraint and successor persistence places the Treatise near the top of the CMS range."
  ]
},

 "the-trial":{
  "headline": "The world remains externally organized, but every attempt to orient within it is made structurally unreliable.",
  "analysis": [
    "Josef K. confronts an accusation whose source, procedure and criteria cannot be stably located. Offices, intermediaries, hearings, lawyers and unofficial channels proliferate without allowing the legal order to become fully knowable.",
    "The result is recursive because attempts at correction feed the same external system that produced the disorientation. Seeking information creates new dependencies; defending oneself requires entering procedures whose rules remain inaccessible; proximity to the court does not produce an outside view of it.",
    "TORC resolves the novel at 3a because the governing fracture remains principally external-systemic. K. is captured by an order that destabilizes consciousness’s orientation toward reality, but the artifact does not require his own standpoint to be the constitutive source of the contradiction."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.4",
      "artifact": "Court offices, officials, intermediaries, family, work and private encounters form a dense network in which local actions repeatedly create remote consequences."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.0",
      "artifact": "Concrete legal events become vehicles for deeper questions of authority, guilt, procedure and intelligibility without becoming detached allegory."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "7.9",
      "artifact": "The court’s procedural opacity, social dependencies and recurrent institutional rules constrain what K. can plausibly know or do."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "7.8",
      "artifact": "The reader must reconstruct a governing order from partial, contradictory and strategically mediated information."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "8.5",
      "artifact": "A small institutional grammar—accusation, access, mediation and procedural deferral—organizes a wide field of scenes and relations."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "7.6",
      "artifact": "The structure transfers strongly across bureaucracy, law and institutional opacity, while remaining anchored in externally imposed systems of orientation."
    }
  ],
  "boundaryTitle": "Why 3a rather than 3b?",
  "boundary": [
    "The court changes how K. can know and act, and his responses increasingly entangle him in it. That creates genuine 3b pressure.",
    "But the strongest sufficient account still locates the governing fracture in the external juridical-administrative order. K.’s consciousness is captured and destabilized by that structure rather than being the irreducible generator of the contradiction. That makes 3a the cleaner determination."
  ],
  "exceptionalTitle": "The institution becomes most powerful where it cannot be cleanly located.",
  "exceptional": [
    "The court’s opacity is not a lack of structure. It is the structure through which dependence proliferates.",
    "Kafka’s achievement is to make external recursion feel total without turning the novel into a mere diagram of bureaucracy."
  ]
},

 "confessions":{
  "headline": "Self-division becomes the medium of an orientation rather than a defect that must first disappear.",
  "analysis": [
    "Confessions repeatedly discovers that the self cannot simply inspect itself from a neutral position. Memory exceeds voluntary access, desire divides the will, and temporal consciousness cannot possess the present as a stable object.",
    "That makes the work deeply recursive: the instrument of inquiry is implicated in the thing being investigated. Yet the completed artifact does not stop at fracture. Confession itself becomes a practiced orientation through dependence, memory, limitation and divided agency.",
    "The 3c determination rests on that achieved form. The work does not eliminate instability; it establishes a coherent way of operating through it. The theological frame matters because it is enacted as an orientation, not merely stated as doctrinal closure."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.6",
      "artifact": "Memory, desire, will, language, temporality, biography, scripture and relation to God continually alter one another’s significance."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.7",
      "artifact": "Autobiographical scenes open into exceptionally deep reflection on selfhood, memory, time, knowledge and dependence."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.2",
      "artifact": "Personal narrative, theological commitments and phenomenological observations impose interacting constraints across the work."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.4",
      "artifact": "The movement from remembered life to the structure of memory and time requires substantial reconstruction beyond immediate experience."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "8.8",
      "artifact": "Confession, memory and dependence organize a heterogeneous field of biography, psychology, theology and temporal reflection."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.1",
      "artifact": "The architecture transfers across self-knowledge, divided agency, memory and temporal consciousness while remaining centered on spiritual-experiential orientation."
    }
  ],
  "boundaryTitle": "Why 3c rather than 3b?",
  "boundary": [
    "A 3b reading remains genuinely plausible because division never disappears: the will remains historically fractured, memory remains unstable, and the self never becomes transparent to itself.",
    "What moves the completed artifact to 3c is that it does more than diagnose those fractures. The confessional practice becomes an operative standpoint capable of inhabiting them without pretending they have been erased. The minority 3b pressure is therefore real, but integration governs the whole."
  ],
  "exceptionalTitle": "Its integration does not depend on making the self simple.",
  "exceptional": [
    "The work’s coherence is built through acknowledged dependence and limitation rather than recovered self-mastery.",
    "That makes it a useful 3c case: integration here means a way of operating through fracture, not victory over fracture."
  ]
},

 "on-computable-numbers":{
  "headline": "Effective calculation becomes a precise object—and its limits become provable.",
  "analysis": [
    "Turing turns an informal human practice into an explicit formal object. A calculation is reconstructed as a finite set of mechanically specifiable operations performed over symbols, states and a tape-like memory.",
    "That relocation does more than provide another notation for algorithms. Once effective procedure is represented in this form, the work can construct machines that reason about descriptions of machines and use that architecture to establish non-computability and the negative result for the Entscheidungsproblem.",
    "The result is M because successor models can change the machinery while remaining constrained by the transformed computability problem. The particular presentation is replaceable; the boundary between mechanically computable and non-computable procedure is not."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.9",
      "artifact": "Machine states, symbols, configurations, encodings, universal simulation and decision problems form a tightly interdependent formal network."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.7",
      "artifact": "The paper moves through several meta-levels: from calculation to machines, from machines to encodings, and from encoded machines to claims about the limits of procedure."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.7",
      "artifact": "Formal definitions, effective transitions and proof obligations sharply restrict every viable construction."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "9.9",
      "artifact": "The diagonal route from an intuitive notion of calculation to principled non-computability is an extreme non-routine inferential transformation."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.7",
      "artifact": "A compact machine model compresses an enormous class of procedures and enables later results about their limits."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "9.6",
      "artifact": "The architecture generalizes across programming, logic, computability theory and models of effective procedure."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "G is secured when effective calculation is relocated into an explicit machine-governed structure capable of generating and constraining results.",
    "M follows because materially different successor formalisms can replace Turing’s vocabulary while recovering the same computability boundary. Successors do not need Turing’s exact machine as a solution, but they remain inside the transformed problem-space."
  ],
  "exceptionalTitle": "The paper creates a formal object powerful enough to expose its own boundary.",
  "exceptional": [
    "The same representational move that makes computation precise also makes non-computation demonstrable.",
    "That combination of abstraction, constraint and inferential distance is why the artifact sits near the top of the CMS scale."
  ]
},

 "persona":{
  "headline": "The attempt to distinguish self, role and observer becomes part of the fracture it is trying to resolve.",
  "analysis": [
    "Persona begins with an apparent asymmetry: one woman refuses speech while another supplies language, confession and interpretation. That division becomes progressively unstable as Alma’s disclosures, Elisabet’s silence and the film’s own representational surface begin to contaminate one another.",
    "The central problem is therefore not simply identity confusion. The very acts used to stabilize identity—speaking, observing, narrating, performing and reading another person—become mechanisms through which the distinction between selves is destabilized.",
    "That is the governing 3b operation. Consciousness cannot remain outside the contradiction it is attempting to interpret, and the film never establishes a durable orientation that would convert that fracture into 3c integration."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.2",
      "artifact": "Alma, Elisabet, speech, silence, performance, observation and the film image remain densely relational throughout the work."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.5",
      "artifact": "Concrete interpersonal scenes repeatedly open into deeper questions of identity, representation, performance and self-knowledge."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.4",
      "artifact": "Visual doubling, narrative disclosure, role exchange and formal rupture constrain the film’s interpretive possibilities without collapsing them to one answer."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.2",
      "artifact": "The viewer must reconstruct identity relations across discontinuities, reversals and unstable positions of observer and observed."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "8.8",
      "artifact": "A small set of relations—speech/silence, mask/self, observer/observed—organizes nearly every major movement of the film."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "7.4",
      "artifact": "The architecture transfers to problems of identity, performance and interpersonal projection, but remains primarily within human representational experience."
    }
  ],
  "boundaryTitle": "Why 3b rather than 3c?",
  "boundary": [
    "The film reaches moments of recognition and exchange, but recognition is not the same as an achieved orientation through the fracture.",
    "Its ending preserves instability between selves, roles and representations. The film makes the fracture govern the relation; it does not convert that fracture into a stable operating form."
  ],
  "exceptionalTitle": "The form of the film becomes part of the problem of identity.",
  "exceptional": [
    "Persona does not merely tell us that identity is unstable. Cuts, faces, doubling and ruptures make representation itself participate in that instability.",
    "That is why its recursive force exceeds psychological drama alone."
  ]
},

 "principles-of-geology":{
  "headline": "The deep past becomes explainable through processes that can be observed in the present.",
  "analysis": [
    "Lyell relocates geological history away from explanations that depend primarily on exceptional episodes inaccessible to ordinary process. Erosion, deposition, uplift, volcanism and other observable mechanisms become the basis for reconstructing enormous spans of time.",
    "The crucial move is methodological as well as causal: present processes are not merely examples but constraints on how the past may be explained. Geological history becomes a problem of cumulative process operating through deep time.",
    "That reaches M because later geology can reject strict uniformity of rates and incorporate catastrophic events while retaining the transformed requirement that past structures be explained through physically intelligible processes over geological time. The original doctrine changes; the problem-space does not revert."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.2",
      "artifact": "Stratigraphy, erosion, deposition, volcanism, uplift, climate, fossils and temporal scale are coordinated across a wide geological system."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.7",
      "artifact": "Local observations are repeatedly lifted into general principles for reconstructing processes operating across deep time."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.0",
      "artifact": "Field evidence, process consistency, stratigraphic relations and temporal accumulation constrain viable historical explanations."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.9",
      "artifact": "The work requires a substantial inferential move from observable present processes to reconstruction of otherwise inaccessible geological history."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.1",
      "artifact": "Actualism and cumulative process compress a very large range of geological phenomena into a coherent explanatory architecture."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.9",
      "artifact": "The structure transfers across geomorphology, stratigraphy, paleoenvironments and historical earth science."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "A G reading remains plausible if the focus is only on Lyell’s own explanatory mechanism, especially because later geology rejects parts of strict uniformitarianism.",
    "The stronger M case rests on what survives that rejection: deep time and process-based reconstruction remain structural constraints on competent successor geology. The solution is revised, but the transformed explanatory baseline persists."
  ],
  "exceptionalTitle": "Its strongest legacy is a constraint on how the past may be reconstructed.",
  "exceptional": [
    "Lyell does not need every process to operate at a constant rate for the central relocation to survive.",
    "The durable achievement is that geological history becomes answerable to intelligible process rather than being exempt from it."
  ]
},

 "don-quixote":{
  "headline": "Representation does not merely distort reality; it becomes part of the reality the characters must navigate.",
  "analysis": [
    "Don Quixote’s books initially appear to provide a simple contrast between fiction and world. The novel quickly makes that contrast unstable. His interpretive schemes change how he acts, how others respond and eventually how the social world stages itself back to him.",
    "Part II deepens the recursion because characters increasingly know of the earlier story and begin to manipulate Quixote through representations of Quixote. Authorship, reading, performance and lived action enter the same causal field.",
    "The result is 3b. The artifact’s governing fracture lies in consciousness trying to orient through representations that it cannot keep cleanly separate from reality. The contradiction is not resolved into a stable integrated standpoint."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.1",
      "artifact": "Characters, stories, social roles, performances, authorship and consequences remain densely interdependent across two large narrative parts."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.5",
      "artifact": "Comic episodes rise into sustained reflection on representation, authorship, genre, identity and reality without abandoning narrative action."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.4",
      "artifact": "Character continuity, prior episodes, reader knowledge, embedded texts and social responses tightly constrain later metafictional developments."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.4",
      "artifact": "The work requires repeated reconstruction of how representations alter actions and then return as new facts within the world."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.1",
      "artifact": "Reading, role-playing and reciprocal narration organize an enormous heterogeneous narrative field with unusual economy."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.2",
      "artifact": "The architecture transfers strongly across fiction, identity, media and social performance while remaining recognizably tied to representational life."
    }
  ],
  "boundaryTitle": "Why 3b rather than Level 2—or 3c?",
  "boundary": [
    "Metafiction by itself would remain a Level 2 signal. What makes 3b necessary is that interpretive representation becomes constitutive of the characters’ orientation and of the world that responds to them.",
    "The completed novel does not establish a durable perspective that integrates the fracture between representation and reality. Recognition and exhaustion arrive, but the recursive contradiction remains structurally governing."
  ],
  "exceptionalTitle": "The novel turns reading into an event that can change the world being read.",
  "exceptional": [
    "Its magnitude comes from sustaining that recursion across a vast social and narrative field rather than in isolated metafictional tricks.",
    "The work remains funny because the recursion is always embodied in concrete consequences."
  ]
},

 "king-lear":{
  "headline": "Lear’s machinery for recognizing loyalty becomes the engine of his inability to recognize it.",
  "analysis": [
    "The opening division of the kingdom is also an epistemic test. Lear asks speech to reveal love and uses his own authority to determine which expressions count as evidence. The procedure produces the opposite of what it is designed to know.",
    "That error propagates through kingship, family, dependence and identity. As Lear loses institutional power, the categories through which he read loyalty and selfhood become increasingly visible as part of the catastrophe rather than neutral tools for understanding it.",
    "This makes 3b the lowest sufficient order. The governing fracture is not only that Lear confronts a hostile world; his own procedures of valuation and recognition are constitutively implicated in the reality he cannot initially see."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.9",
      "artifact": "Family, sovereignty, inheritance, loyalty, madness, social rank and parallel Gloucester relations form a highly coupled dramatic network."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.2",
      "artifact": "Concrete political and familial actions repeatedly open into questions of identity, authority, recognition, dependence and human vulnerability."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.6",
      "artifact": "Parallel plots, character knowledge, political consequences and irreversible choices constrain the tragedy’s development tightly."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.4",
      "artifact": "The audience must reconstruct how acts that appear to secure order become the causal basis of disintegration."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "8.9",
      "artifact": "Recognition, authority and dependency compress political, familial and existential material into one governing architecture."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "7.8",
      "artifact": "The structure transfers across family, leadership and self-knowledge, while remaining most securely within human social and moral orientation."
    }
  ],
  "boundaryTitle": "Why 3b rather than 3c?",
  "boundary": [
    "Lear does achieve recognition, and that makes 3c a serious local possibility. But recognition under devastation is not yet a durable recursive orientation through the fracture.",
    "The completed tragedy does not reorganize the governing contradiction into a stable way of inhabiting it. The fracture remains dominant to the end."
  ],
  "exceptionalTitle": "The tragedy makes a failure of judgment into a failure of world-making.",
  "exceptional": [
    "Lear’s authority means that misrecognition does not remain private: it becomes institutional action with consequences for everyone around him.",
    "That coupling of inner orientation and public order gives the play exceptional relational force."
  ]
},

 "book-of-optics":{
  "headline": "Vision is relocated from something the eye emits to something light must physically make possible.",
  "analysis": [
    "The Book of Optics reorganizes visual explanation around light entering the eye under geometrically and experimentally constrained conditions. Vision is no longer adequately explained by rays projected outward from the observer.",
    "That change connects optics, geometry, reflection, refraction, visual error and perception within one structure. The eye becomes a receiver inside a physical light path whose relations can be investigated independently of what the observer believes is happening.",
    "The artifact reaches M because later optics can revise physiology and physical theory while remaining unable to restore extramission as an adequate explanatory baseline. The specific mechanism evolves; the transformed visual problem-space persists."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.3",
      "artifact": "Light sources, geometry, reflection, refraction, ocular structure, perception and experimental arrangement are coordinated across a wide explanatory field."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.0",
      "artifact": "The work moves from concrete visual phenomena through geometric optics toward general claims about how perception becomes physically possible."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.5",
      "artifact": "Geometrical relations and experimental conditions sharply constrain which optical explanations can fit the observed effects."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "9.4",
      "artifact": "Reversing the explanatory direction of vision requires a substantial reconstruction of the observer’s relation to the physical world."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.2",
      "artifact": "A unified light-path architecture organizes many distinct visual phenomena, errors and optical effects."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.9",
      "artifact": "The structure transfers across vision, reflection, refraction, imaging and later physical optics."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "G is established by the explanatory relocation itself: visual phenomena are generated through constrained incoming light rather than observer-emitted rays.",
    "M follows because successor optics can replace large parts of the original theory while remaining bound by the transformed direction and physical structure of optical explanation. The old baseline cannot simply be restored."
  ],
  "exceptionalTitle": "The observer is moved from causal center to constrained receiver.",
  "exceptional": [
    "That reversal is both conceptual and experimental: it changes what relations must be measured and explained.",
    "Its magnitude comes from making geometry, physical process and perception bear on one another without collapsing them."
  ]
},

 "a-theory-of-justice":{
  "headline": "Justice is reconstructed through the conditions under which principles could be chosen fairly.",
  "analysis": [
    "Rawls does not treat principles of justice as a list of intuitions waiting to be ranked. The original position changes the explanatory task by asking what principles would be selected under deliberately constrained conditions of information, rationality and reciprocity.",
    "The veil of ignorance is therefore not merely a thought experiment in the decorative sense. It removes forms of bargaining advantage in order to generate consequences for basic liberties, distribution, institutions and the basic structure of society.",
    "The completed architecture reaches G because the justification of institutional principles is relocated into a constrained choice structure. The construction does explanatory work beyond simply organizing moral symbols or preferences."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.1",
      "artifact": "Liberty, distribution, institutions, rational choice, reciprocity, stability and the basic structure remain mutually connected across the theory."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.3",
      "artifact": "The work sustains deep abstraction from concrete social positions to formal conditions of fair choice and back to institutional consequences."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.1",
      "artifact": "Information restrictions, rationality assumptions, publicity, reciprocity and institutional feasibility impose dense interacting constraints."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.9",
      "artifact": "The move from ordinary moral judgment to principles generated under a deliberately transformed choice situation requires substantial non-routine reconstruction."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.3",
      "artifact": "A relatively compact original-position architecture organizes a broad field of political, distributive and institutional questions."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.9",
      "artifact": "The structure transfers across constitutional design, distribution, opportunity, liberty and institutional legitimacy."
    }
  ],
  "boundaryTitle": "Why G rather than Level 2—or M?",
  "boundary": [
    "A Level 2 reading would treat the original position as a powerful normative construction. That is insufficient because the construction is constrained to generate and justify relations among independently identifiable institutions and principles rather than merely symbolize them.",
    "M would require the stronger claim that materially different successor theories remain bound to Rawls’s transformed problem-space in a way they cannot adequately bypass. The artifact is strongly generative, but that successor necessity is not secure enough for M."
  ],
  "exceptionalTitle": "The construction earns its force by restricting what the chooser is allowed to know.",
  "exceptional": [
    "The veil of ignorance is cognitively powerful because it removes information rather than adding it.",
    "That subtraction creates a dense constraint system from which the theory can generate consequences across a large institutional field."
  ]
},

 "discipline-and-punish":{
  "headline": "Punishment is relocated from the sovereign act to the production of disciplined bodies and normalized subjects.",
  "analysis": [
    "The book begins with a visible contrast between spectacular punishment and the modern timetable, prison, school, barracks and clinic. That contrast is not merely historical description. It becomes evidence for a change in how power operates.",
    "Surveillance, examination, normalization, spatial partition and repeated training form a generative mechanism through which institutions produce capacities, classifications and compliant conduct. Power is therefore not explained only as prohibition descending from a sovereign center.",
    "This reaches G because the explanatory basis of modern punishment and discipline is relocated into distributed practices that generate the kinds of subjects they govern. The work changes what must be invoked to explain the target."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.0",
      "artifact": "Prison, school, military, medicine, architecture, surveillance, examination and normalization are coordinated as interacting institutional technologies."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.0",
      "artifact": "Concrete practices are lifted into a deep analysis of power, knowledge, subject formation and institutional rationality."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "8.5",
      "artifact": "Historical evidence, institutional comparison and recurring disciplinary techniques constrain the explanatory architecture, though not with formal-scientific rigidity."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "8.7",
      "artifact": "The move from punishment as sovereign response to discipline as productive distributed power requires a major causal and conceptual reorganization."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.1",
      "artifact": "A small family of disciplinary techniques organizes a large heterogeneous historical and institutional field."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.7",
      "artifact": "The structure transfers across prisons, schools, hospitals, workplaces and other institutions while preserving the relation among observation, normalization and conduct."
    }
  ],
  "boundaryTitle": "Why G rather than M?",
  "boundary": [
    "G is clear because the work relocates explanation of modern punishment and institutional control into productive disciplinary mechanisms.",
    "M would require those mechanisms to remain an unavoidable successor baseline across materially different adequate theories of institutions and power. The relocation is powerful and highly transferable, but not sufficiently compulsory for M."
  ],
  "exceptionalTitle": "Its strongest move is to make power productive rather than merely restrictive.",
  "exceptional": [
    "Once discipline is understood as producing capacities, categories and habits, the institution itself becomes part of the explanation of the subject.",
    "That reversal gives the work its unusually high integrative reach."
  ]
},

 "de-motu-cordis":{
  "headline": "Blood ceases to be something continually consumed and becomes something the heart must circulate.",
  "analysis": [
    "Harvey’s argument makes the quantity of blood itself an explanatory constraint. If the liver were continually producing blood that the body then consumed in the inherited way, the required volumes would become physiologically implausible.",
    "Anatomy, valves, cardiac motion and quantitative reasoning therefore converge on a different system: blood moves in a circuit driven by the heart. The parts cease to be local observations and become mutually constraining components of one circulatory mechanism.",
    "The artifact reaches M because later physiology can transform the mechanism in enormous detail while remaining unable to return to a non-circulatory baseline. Circulation becomes part of what successor explanation must preserve."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "8.7",
      "artifact": "Heart, arteries, veins, valves, volume, direction of flow and anatomical observation are tightly coupled within one physiological system."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "8.3",
      "artifact": "The work moves from local anatomical observations toward a systemic model of circulation without requiring extreme abstraction."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.3",
      "artifact": "Quantitative estimates, valve orientation and observed cardiac motion strongly restrict viable accounts of blood movement."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "9.3",
      "artifact": "The transition from local flow assumptions to closed systemic circulation requires a large causal reconstruction under empirical constraint."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.0",
      "artifact": "A compact circulatory mechanism organizes many anatomical and physiological observations with strong economy."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "8.8",
      "artifact": "The structure transfers across cardiovascular physiology and later biological explanation, though its main reach remains within organismal circulation."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "G is established when blood movement is relocated into a systemic circulatory mechanism constrained by anatomy and quantity.",
    "M follows because later physiology can refine pressures, vessels, microcirculation and cellular mechanisms without restoring continual production-and-consumption as an adequate baseline. The successor problem is permanently reorganized."
  ],
  "exceptionalTitle": "A quantitative impossibility forces an anatomical system to reveal itself.",
  "exceptional": [
    "The argument is powerful because amount, direction and structure constrain one another rather than serving as separate observations.",
    "That interaction gives a comparatively compact work unusually high constraint density and inferential force."
  ]
},

 "on-the-electrodynamics-of-moving-bodies":{
  "headline": "The conflict is not repaired inside old space and time; space and time are made part of the thing that must change.",
  "analysis": [
    "The paper begins from a structural incompatibility between electrodynamics and inherited kinematics. Instead of adding another mechanical correction around the ether, Einstein makes the principles governing measurement, simultaneity and motion carry the explanatory burden.",
    "Relativity and invariant light speed reorganize the relations among clocks, lengths, simultaneity, velocity and electromagnetic law. The apparent contradiction is relocated into the structure of space-time measurement rather than assigned to an undetected privileged frame.",
    "That reaches M because successor relativistic physics can reformulate the mathematics and later embed special relativity within broader theories while remaining unable to restore absolute simultaneity as the adequate baseline. The transformed problem-space persists beyond the paper’s exact formulation."
  ],
  "dimensions": [
    {
      "key": "RL",
      "name": "Relational Load",
      "score": "9.0",
      "artifact": "Kinematics, electrodynamics, clocks, simultaneity, reference frames, velocity composition and measurement remain tightly interdependent."
    },
    {
      "key": "AD",
      "name": "Abstraction Depth",
      "score": "9.6",
      "artifact": "The paper operates at deep abstraction while keeping the argument tied to operational definitions of measurement and physical law."
    },
    {
      "key": "CD",
      "name": "Constraint Density",
      "score": "9.7",
      "artifact": "Relativity, light-speed invariance and consistency with electrodynamics impose exceptionally strong interacting constraints."
    },
    {
      "key": "ID",
      "name": "Inferential Distance",
      "score": "9.8",
      "artifact": "Reconstructing space and time rather than patching the ether represents an extreme non-routine inferential shift."
    },
    {
      "key": "IC",
      "name": "Integrative Compression",
      "score": "9.6",
      "artifact": "A small set of principles reorganizes a very large field of kinematic and electrodynamic relations with exceptional economy."
    },
    {
      "key": "GR",
      "name": "Generalization Reach",
      "score": "9.4",
      "artifact": "The architecture transfers across mechanics, electromagnetism, particle physics and later relativistic theory."
    }
  ],
  "boundaryTitle": "Why M rather than G?",
  "boundary": [
    "G is obvious once the paper relocates the conflict from a local electrodynamic anomaly into the structure of simultaneity and inertial measurement.",
    "M follows because later formulations can supersede the original presentation while remaining constrained by relativistic invariance and the loss of absolute simultaneity. The solution evolves, but successor physics cannot simply return to the prior kinematic problem-space."
  ],
  "exceptionalTitle": "The paper solves a physical conflict by changing what counts as the background.",
  "exceptional": [
    "Space and time stop functioning as untouched containers in which the problem occurs and become part of the explanatory structure itself.",
    "That relocation, under unusually dense formal constraint, is why the artifact combines M with one of the highest CMS values in the corpus."
  ]
},
};
