const questions = [
  {
    "domain": "Mineralogy",
    "question": "Which mineral is the hardest on the Mohs scale of hardness?",
    "options": ["Diamond", "Corundum", "Quartz", "Topaz"],
    "correctAnswer": "Diamond",
    "explanation": "Diamond ranks 10 on the Mohs scale, making it the hardest natural mineral."
  },
  {
    "domain": "Petrology",
    "question": "Which rock is formed from the cooling and solidification of magma beneath the Earth’s surface?",
    "options": ["Basalt", "Granite", "Pumice", "Obsidian"],
    "correctAnswer": "Granite",
    "explanation": "Granite is an intrusive igneous rock formed when magma cools slowly beneath the Earth’s surface."
  },
  {
    "domain": "Stratigraphy",
    "question": "What principle states that in undisturbed layers of rock, the oldest layer lies at the bottom and the youngest at the top?",
    "options": ["Principle of Superposition", "Principle of Original Horizontality", "Law of Cross-cutting Relationships", "Principle of Faunal Succession"],
    "correctAnswer": "Principle of Superposition",
    "explanation": "This principle was first stated by Nicholas Steno, forming the basis of relative dating."
  },
  {
    "domain": "Geomorphology",
    "question": "Which type of volcano is characterized by broad, gently sloping sides and primarily basaltic lava flows?",
    "options": ["Shield Volcano", "Stratovolcano", "Cinder Cone", "Caldera"],
    "correctAnswer": "Shield Volcano",
    "explanation": "Shield volcanoes like Mauna Loa are formed by low-viscosity basaltic lava that flows easily."
  },
  {
    "domain": "Structural Geology",
    "question": "A fold with the oldest rocks at its core is called what?",
    "options": ["Syncline", "Anticline", "Monocline", "Dome"],
    "correctAnswer": "Anticline",
    "explanation": "In an anticline, strata arch upward with the oldest rocks exposed at the center."
  },
  {
    "domain": "Geophysics",
    "question": "Which seismic wave is the fastest and arrives first at seismic stations?",
    "options": ["P-waves", "S-waves", "Love waves", "Rayleigh waves"],
    "correctAnswer": "P-waves",
    "explanation": "Primary or P-waves are compressional waves that travel fastest through the Earth."
  },
  {
    "domain": "Hydrogeology",
    "question": "Which type of aquifer is bounded above and below by impermeable layers?",
    "options": ["Unconfined Aquifer", "Confined Aquifer", "Perched Aquifer", "Artesian Aquifer"],
    "correctAnswer": "Confined Aquifer",
    "explanation": "A confined aquifer is sandwiched between impermeable strata and often under pressure."
  },
  {
    "domain": "Paleontology",
    "question": "What principle uses fossils to correlate rock layers across distances?",
    "options": ["Principle of Lateral Continuity", "Principle of Faunal Succession", "Law of Superposition", "Principle of Uniformitarianism"],
    "correctAnswer": "Principle of Faunal Succession",
    "explanation": "This principle states that fossil organisms succeed one another in a definite order."
  },
  {
    "domain": "Petrology",
    "question": "Obsidian is an example of which type of rock?",
    "options": ["Intrusive Igneous Rock", "Extrusive Igneous Rock", "Sedimentary Rock", "Metamorphic Rock"],
    "correctAnswer": "Extrusive Igneous Rock",
    "explanation": "Obsidian is a volcanic glass formed from rapidly cooled lava."
  },
  {
    "domain": "Mineralogy",
    "question": "Which mineral is commonly used in drywall and plaster of Paris?",
    "options": ["Calcite", "Gypsum", "Halite", "Talc"],
    "correctAnswer": "Gypsum",
    "explanation": "Gypsum (CaSO4·2H2O) is widely used in construction materials."
  },
  {
    "domain": "Geochemistry",
    "question": "Which element is most abundant in the Earth's crust?",
    "options": ["Silicon", "Oxygen", "Aluminum", "Iron"],
    "correctAnswer": "Oxygen",
    "explanation": "Oxygen makes up about 46.6% by weight of the Earth’s crust."
  },
  {
    "domain": "Geomorphology",
    "question": "Which type of weathering involves the breakdown of rocks due to chemical reactions with water and gases?",
    "options": ["Physical Weathering", "Chemical Weathering", "Biological Weathering", "Frost Wedging"],
    "correctAnswer": "Chemical Weathering",
    "explanation": "Chemical weathering alters rock minerals through processes like hydrolysis and oxidation."
  },
  {
    "domain": "Stratigraphy",
    "question": "The GSSP (Global Boundary Stratotype Section and Point) is often referred to as what?",
    "options": ["Golden Spike", "Silver Standard", "Stratigraphic Marker", "Geochron Point"],
    "correctAnswer": "Golden Spike",
    "explanation": "The GSSP or 'golden spike' is an internationally agreed marker for geologic boundaries."
  },
  {
    "domain": "Petrology",
    "question": "Marble is formed from the metamorphism of which rock?",
    "options": ["Sandstone", "Limestone", "Shale", "Granite"],
    "correctAnswer": "Limestone",
    "explanation": "Limestone recrystallizes under heat and pressure to form marble."
  },
  {
    "domain": "Structural Geology",
    "question": "A fault where the hanging wall moves down relative to the footwall is called what?",
    "options": ["Normal Fault", "Reverse Fault", "Strike-slip Fault", "Thrust Fault"],
    "correctAnswer": "Normal Fault",
    "explanation": "Normal faults occur due to extensional stress in the crust."
  },
  {
    "domain": "Paleontology",
    "question": "Trilobites are characteristic fossils of which geologic era?",
    "options": ["Mesozoic", "Cenozoic", "Paleozoic", "Precambrian"],
    "correctAnswer": "Paleozoic",
    "explanation": "Trilobites thrived in the Paleozoic era, especially in the Cambrian period."
  },
  {
    "domain": "Hydrogeology",
    "question": "The lowering of the water table around a pumping well is called what?",
    "options": ["Recharge Cone", "Drawdown", "Cone of Depression", "Subsidence"],
    "correctAnswer": "Cone of Depression",
    "explanation": "Overpumping creates a cone-shaped lowering of the water table."
  },
  {
    "domain": "Geophysics",
    "question": "The boundary between the Earth's crust and mantle is known as what?",
    "options": ["Mohorovičić Discontinuity", "Gutenberg Discontinuity", "Lehmann Discontinuity", "Lithosphere-Asthenosphere Boundary"],
    "correctAnswer": "Mohorovičić Discontinuity",
    "explanation": "Discovered by Andrija Mohorovičić, the Moho marks the crust-mantle boundary."
  },
  {
    "domain": "Sedimentology",
    "question": "Which sedimentary structure indicates alternating current directions?",
    "options": ["Cross-bedding", "Ripple Marks", "Mud Cracks", "Graded Bedding"],
    "correctAnswer": "Ripple Marks",
    "explanation": "Symmetrical ripple marks form from oscillating currents like waves."
  },
  {
    "domain": "Mineralogy",
    "question": "Which carbonate mineral reacts vigorously with dilute hydrochloric acid?",
    "options": ["Dolomite", "Calcite", "Aragonite", "Magnesite"],
    "correctAnswer": "Calcite",
    "explanation": "Calcite effervesces strongly when exposed to dilute HCl."
  },
  {
    "domain": "Volcanology",
    "question": "What is a volcanic mudflow composed of pyroclastic material and water called?",
    "options": ["Lahar", "Pyroclastic Flow", "Debris Avalanche", "Ash Fall"],
    "correctAnswer": "Lahar",
    "explanation": "Lahars are dangerous mudflows common in volcanic regions like the Philippines."
  },
  {
    "domain": "Stratigraphy",
    "question": "What is an unconformity that separates tilted or folded strata from overlying flat strata called?",
    "options": ["Angular Unconformity", "Disconformity", "Nonconformity", "Paraconformity"],
    "correctAnswer": "Angular Unconformity",
    "explanation": "Angular unconformities represent a gap in time with deformation before new deposition."
  },
  {
    "domain": "Petrology",
    "question": "Which igneous texture is characterized by large crystals embedded in a finer matrix?",
    "options": ["Aphanitic", "Phaneritic", "Porphyritic", "Glassy"],
    "correctAnswer": "Porphyritic",
    "explanation": "Porphyritic texture indicates two stages of cooling in magma."
  },
  {
    "domain": "Mineralogy",
    "question": "Which mineral is commonly used as table salt?",
    "options": ["Halite", "Sylvite", "Gypsum", "Fluorite"],
    "correctAnswer": "Halite",
    "explanation": "Halite (NaCl) is natural rock salt."
  },
  {
    "domain": "Geophysics",
    "question": "Which layer of the Earth generates the magnetic field?",
    "options": ["Inner Core", "Outer Core", "Mantle", "Lithosphere"],
    "correctAnswer": "Outer Core",
    "explanation": "The liquid outer core's convection of molten iron generates Earth's magnetic field."
  },
  {
    "domain": "Sedimentology",
    "question": "What type of sedimentary rock is formed mainly from plant material?",
    "options": ["Limestone", "Shale", "Coal", "Chert"],
    "correctAnswer": "Coal",
    "explanation": "Coal forms from compacted and lithified plant remains."
  },
  {
    "domain": "Geomorphology",
    "question": "Which desert landform is a large, wind-eroded depression?",
    "options": ["Barchan", "Yardang", "Deflation Hollow", "Playa"],
    "correctAnswer": "Deflation Hollow",
    "explanation": "Deflation hollows are created by wind removing loose particles over time."
  },
  {
    "domain": "Paleontology",
    "question": "Ammonites are index fossils for which geologic era?",
    "options": ["Precambrian", "Paleozoic", "Mesozoic", "Cenozoic"],
    "correctAnswer": "Mesozoic",
    "explanation": "Ammonites are abundant and diverse during the Mesozoic, making them excellent index fossils."
  },
  {
    "domain": "Structural Geology",
    "question": "Which type of stress leads to strike-slip faulting?",
    "options": ["Compressional", "Tensional", "Shear", "Vertical"],
    "correctAnswer": "Shear",
    "explanation": "Shear stress causes rocks to slide past one another horizontally."
  },
  {
  "domain": "Mineralogy",
  "question": "Which mineral has the chemical formula CaCO₃?",
  "options": [
    "Calcite",
    "Quartz",
    "Feldspar",
    "Gypsum"
  ],
  "correctAnswer": "Calcite",
  "explanation": "Calcite (CaCO₃) is a common carbonate mineral found in sedimentary rocks like limestone and marble."
},
{
  "domain": "Petrology",
  "question": "Which igneous rock is most commonly found in oceanic crust?",
  "options": [
    "Granite",
    "Basalt",
    "Andesite",
    "Rhyolite"
  ],
  "correctAnswer": "Basalt",
  "explanation": "Basalt is a fine-grained mafic igneous rock, forming most of the oceanic crust."
},
{
  "domain": "Structural Geology",
  "question": "A fold with the youngest rocks at the core is called what?",
  "options": [
    "Anticline",
    "Syncline",
    "Monocline",
    "Dome"
  ],
  "correctAnswer": "Syncline",
  "explanation": "In a syncline, the layers dip inward toward the axis, and the youngest rocks are in the core."
},
{
  "domain": "Geophysics",
  "question": "Which seismic wave is the fastest?",
  "options": [
    "P-waves",
    "S-waves",
    "Love waves",
    "Rayleigh waves"
  ],
  "correctAnswer": "P-waves",
  "explanation": "P-waves (primary waves) are compressional waves and travel the fastest through Earth’s layers."
},
{
  "domain": "Geomorphology",
  "question": "What do you call a bowl-shaped depression formed by glacial erosion?",
  "options": [
    "Cirque",
    "Horn",
    "Arete",
    "Moraine"
  ],
  "correctAnswer": "Cirque",
  "explanation": "Cirques are amphitheater-like hollows formed at the head of a glacier."
},
{
  "domain": "Hydrogeology",
  "question": "What is the upper surface of the zone of saturation called?",
  "options": [
    "Water table",
    "Capillary fringe",
    "Aquifer",
    "Aquiclude"
  ],
  "correctAnswer": "Water table",
  "explanation": "The water table separates the unsaturated zone above from the saturated zone below."
},
{
  "domain": "Paleontology",
  "question": "The study of fossilized pollen and spores is called?",
  "options": [
    "Palynology",
    "Ichnology",
    "Taphonomy",
    "Biostratigraphy"
  ],
  "correctAnswer": "Palynology",
  "explanation": "Palynology focuses on microscopic organic materials such as pollen and spores."
},
{
  "domain": "Economic Geology",
  "question": "Which Philippine province is known for its large gold deposits?",
  "options": [
    "Benguet",
    "Palawan",
    "Bohol",
    "Leyte"
  ],
  "correctAnswer": "Benguet",
  "explanation": "Benguet, especially in Baguio District, is known for its rich gold mines."
},
{
  "domain": "Stratigraphy",
  "question": "The principle that states 'the present is the key to the past' is called?",
  "options": [
    "Uniformitarianism",
    "Superposition",
    "Cross-cutting relationships",
    "Original horizontality"
  ],
  "correctAnswer": "Uniformitarianism",
  "explanation": "Uniformitarianism, proposed by James Hutton, suggests that geological processes today operated similarly in the past."
},
{
  "domain": "Seismology",
  "question": "The point inside the Earth where an earthquake originates is called?",
  "options": [
    "Epicenter",
    "Focus",
    "Hypocenter",
    "Seismic gap"
  ],
  "correctAnswer": "Focus",
  "explanation": "The focus (or hypocenter) is the actual point of rupture, while the epicenter is directly above it on the surface."
},
{
  "domain": "Mineralogy",
  "question": "Which mineral is the hardest on the Mohs scale?",
  "options": [
    "Diamond",
    "Quartz",
    "Corundum",
    "Topaz"
  ],
  "correctAnswer": "Diamond",
  "explanation": "Diamond has a hardness of 10, making it the hardest known natural mineral."
},
{
  "domain": "Petrology",
  "question": "Granite is an example of what type of igneous rock?",
  "options": [
    "Extrusive",
    "Intrusive",
    "Volcanic glass",
    "Pyroclastic"
  ],
  "correctAnswer": "Intrusive",
  "explanation": "Granite is intrusive, formed from slow cooling of magma beneath the Earth’s surface."
},
{
  "domain": "Geomorphology",
  "question": "What do you call an isolated steep-sided hill of resistant rock in a desert?",
  "options": [
    "Mesa",
    "Butte",
    "Inselberg",
    "Yardang"
  ],
  "correctAnswer": "Inselberg",
  "explanation": "Inselbergs are isolated hills that rise abruptly from plains in arid regions."
},
{
  "domain": "Hydrogeology",
  "question": "What type of aquifer is bounded above and below by confining layers?",
  "options": [
    "Unconfined aquifer",
    "Confined aquifer",
    "Perched aquifer",
    "Artesian aquifer"
  ],
  "correctAnswer": "Confined aquifer",
  "explanation": "Confined aquifers are trapped between impermeable layers and often under pressure."
},
{
  "domain": "Structural Geology",
  "question": "What type of fault occurs when the hanging wall moves downward relative to the footwall?",
  "options": [
    "Normal fault",
    "Reverse fault",
    "Thrust fault",
    "Strike-slip fault"
  ],
  "correctAnswer": "Normal fault",
  "explanation": "Normal faults form under tensional stress where the crust is being pulled apart."
},
{
  "domain": "Geophysics",
  "question": "The boundary between the crust and mantle is called?",
  "options": [
    "Moho",
    "Gutenberg Discontinuity",
    "Lehmann Discontinuity",
    "Asthenosphere"
  ],
  "correctAnswer": "Moho",
  "explanation": "The Mohorovičić discontinuity (Moho) separates the crust from the mantle."
},
{
  "domain": "Geomorphology",
  "question": "What do you call a winding curve or bend in a river?",
  "options": [
    "Delta",
    "Meander",
    "Oxbow lake",
    "Floodplain"
  ],
  "correctAnswer": "Meander",
  "explanation": "Meanders are bends in a river formed by lateral erosion and deposition."
},
{
  "domain": "Paleontology",
  "question": "Which era is known as the 'Age of Reptiles'?",
  "options": [
    "Paleozoic",
    "Mesozoic",
    "Cenozoic",
    "Precambrian"
  ],
  "correctAnswer": "Mesozoic",
  "explanation": "The Mesozoic Era (Triassic, Jurassic, Cretaceous) is often called the 'Age of Reptiles'."
},
{
  "domain": "Mineralogy",
  "question": "Which mineral is commonly used in plaster of Paris?",
  "options": [
    "Calcite",
    "Gypsum",
    "Halite",
    "Dolomite"
  ],
  "correctAnswer": "Gypsum",
  "explanation": "Gypsum is heated to produce plaster of Paris (CaSO₄·½H₂O)."
},
{
  "domain": "Seismology",
  "question": "Which scale measures the energy released by an earthquake?",
  "options": [
    "Richter scale",
    "Mercalli scale",
    "Moment magnitude scale",
    "Seismic intensity scale"
  ],
  "correctAnswer": "Moment magnitude scale",
  "explanation": "The moment magnitude scale is now widely used because it measures energy release more accurately than the Richter scale."
},
{
  "domain": "Stratigraphy",
  "question": "The principle of superposition applies to which type of rocks?",
  "options": [
    "Sedimentary rocks",
    "Igneous rocks",
    "Metamorphic rocks",
    "All rocks"
  ],
  "correctAnswer": "Sedimentary rocks",
  "explanation": "The principle states that in undisturbed layers of sedimentary rocks, the oldest is at the bottom."
},
{
  "domain": "Economic Geology",
  "question": "Which mineral is the primary ore of aluminum?",
  "options": [
    "Bauxite",
    "Hematite",
    "Galena",
    "Magnetite"
  ],
  "correctAnswer": "Bauxite",
  "explanation": "Bauxite is the principal ore used to extract aluminum."
},
{
  "domain": "Geomorphology",
  "question": "Sand dunes are primarily formed by which process?",
  "options": [
    "Water deposition",
    "Wind deposition",
    "Glacial deposition",
    "Volcanic deposition"
  ],
  "correctAnswer": "Wind deposition",
  "explanation": "Sand dunes form as wind transports and deposits sand in arid environments."
},
{
  "domain": "Hydrogeology",
  "question": "The ability of a rock to transmit water is called?",
  "options": [
    "Porosity",
    "Permeability",
    "Saturation",
    "Capillarity"
  ],
  "correctAnswer": "Permeability",
  "explanation": "Permeability measures how easily fluids can move through rock pore spaces."
},
{
  "domain": "Mineralogy",
  "question": "Halite is commonly known as what?",
  "options": [
    "Rock salt",
    "Limestone",
    "Fluorite",
    "Chalk"
  ],
  "correctAnswer": "Rock salt",
  "explanation": "Halite (NaCl) is the mineral form of common table salt, often called rock salt."
},
{
  "domain": "Petrology",
  "question": "Which rock type is formed by the alteration of pre-existing rocks due to heat and pressure?",
  "options": [
    "Sedimentary",
    "Igneous",
    "Metamorphic",
    "Volcanic"
  ],
  "correctAnswer": "Metamorphic",
  "explanation": "Metamorphic rocks form when existing rocks are changed by heat, pressure, or chemically active fluids."
},
{
  "domain": "Structural Geology",
  "question": "A nearly circular fold with the oldest rocks in the center is called?",
  "options": [
    "Basin",
    "Dome",
    "Anticline",
    "Syncline"
  ],
  "correctAnswer": "Dome",
  "explanation": "Domes are circular folds with the oldest rocks exposed at the core."
},
{
  "domain": "Paleontology",
  "question": "The study of fossil footprints and traces is known as?",
  "options": [
    "Ichnology",
    "Taphonomy",
    "Palynology",
    "Stratigraphy"
  ],
  "correctAnswer": "Ichnology",
  "explanation": "Ichnology focuses on trace fossils such as footprints, burrows, and trails."
},
{
    domain: "Geology",
    question: "What is the largest known mass extinction event in Earth's history?",
    options: [
        "Cretaceous-Paleogene extinction",
        "Permian-Triassic extinction",
        "Ordovician-Silurian extinction",
        "Late Devonian extinction"
    ],
    correctAnswer: "Permian-Triassic extinction",
    explanation: "The Permian-Triassic extinction event, about 252 million years ago, is considered the largest, wiping out around 90% of marine species and 70% of terrestrial vertebrates."
},
{
    domain: "Geology",
    question: "What is the process by which rocks are broken down by physical or chemical means?",
    options: [
        "Metamorphism",
        "Weathering",
        "Erosion",
        "Deposition"
    ],
    correctAnswer: "Weathering",
    explanation: "Weathering refers to the breakdown of rocks at or near Earth's surface through physical disintegration or chemical decomposition."
},
{
    domain: "Geology",
    question: "What is the term for molten rock beneath the Earth's surface?",
    options: [
        "Lava",
        "Magma",
        "Basalt",
        "Pyroclast"
    ],
    correctAnswer: "Magma",
    explanation: "Magma is molten rock located beneath the Earth's surface; when it erupts, it is called lava."
},
{
    domain: "Geology",
    question: "Which type of unconformity represents tilted or folded rocks overlain by younger, more horizontal layers?",
    options: [
        "Angular unconformity",
        "Disconformity",
        "Nonconformity",
        "Paraconformity"
    ],
    correctAnswer: "Angular unconformity",
    explanation: "An angular unconformity occurs when older, tilted or folded strata are overlain by younger, more horizontally deposited layers."
},
{
    domain: "Geology",
    question: "What is the main cause of tsunamis?",
    options: [
        "Volcanic eruptions",
        "Earthquakes under the sea",
        "Hurricanes",
        "Tidal forces from the moon"
    ],
    correctAnswer: "Earthquakes under the sea",
    explanation: "Most tsunamis are generated by undersea earthquakes that displace large volumes of water."
},
{
    domain: "Geology",
    question: "What is the mineral form of calcium carbonate commonly found in limestone?",
    options: [
        "Calcite",
        "Gypsum",
        "Halite",
        "Quartz"
    ],
    correctAnswer: "Calcite",
    explanation: "Calcite (CaCO₃) is the main mineral in limestone and marble."
},
{
    domain: "Geology",
    question: "Which boundary type is associated with the creation of new oceanic crust?",
    options: [
        "Divergent boundary",
        "Convergent boundary",
        "Transform boundary",
        "Passive margin"
    ],
    correctAnswer: "Divergent boundary",
    explanation: "Divergent boundaries, such as mid-ocean ridges, are where new oceanic crust is formed."
},
{
    domain: "Geology",
    question: "Which mineral is commonly used as a hardness standard of 10 on the Mohs scale?",
    options: [
        "Quartz",
        "Diamond",
        "Topaz",
        "Corundum"
    ],
    correctAnswer: "Diamond",
    explanation: "Diamond is the hardest known natural material and is rated 10 on the Mohs hardness scale."
},
{
    domain: "Geology",
    question: "Which rock type is primarily formed from cooled and solidified lava?",
    options: [
        "Igneous",
        "Sedimentary",
        "Metamorphic",
        "Foliated"
    ],
    correctAnswer: "Igneous",
    explanation: "Igneous rocks form when magma or lava cools and solidifies."
},
{
    domain: "Geology",
    question: "What type of fault is caused by compressional forces?",
    options: [
        "Normal fault",
        "Reverse fault",
        "Strike-slip fault",
        "Transform fault"
    ],
    correctAnswer: "Reverse fault",
    explanation: "Reverse faults occur due to compressional forces, where the hanging wall moves upward relative to the footwall."
},
{
    domain: "Geology",
    question: "What is the study of fossils called?",
    options: [
        "Petrology",
        "Paleontology",
        "Stratigraphy",
        "Mineralogy"
    ],
    correctAnswer: "Paleontology",
    explanation: "Paleontology is the study of fossils to understand past life and environments."
},
{
    domain: "Geology",
    question: "Which volcanic rock is characterized by its glassy texture?",
    options: [
        "Obsidian",
        "Granite",
        "Basalt",
        "Pumice"
    ],
    correctAnswer: "Obsidian",
    explanation: "Obsidian forms from rapidly cooled lava and has a glassy texture."
},
{
    domain: "Geology",
    question: "What type of sedimentary rock is formed from plant remains?",
    options: [
        "Sandstone",
        "Limestone",
        "Coal",
        "Shale"
    ],
    correctAnswer: "Coal",
    explanation: "Coal forms from compacted plant material deposited in swampy environments."
},
{
    domain: "Geology",
    question: "Which seismic wave is the fastest?",
    options: [
        "P-waves",
        "S-waves",
        "Surface waves",
        "Love waves"
    ],
    correctAnswer: "P-waves",
    explanation: "Primary (P) waves are compressional and travel the fastest through Earth's interior."
},
{
    domain: "Geology",
    question: "Which mineral has the chemical formula NaCl?",
    options: [
        "Halite",
        "Gypsum",
        "Calcite",
        "Fluorite"
    ],
    correctAnswer: "Halite",
    explanation: "Halite, also known as rock salt, is composed of sodium chloride (NaCl)."
},
{
    domain: "Geology",
    question: "Which type of metamorphism occurs over large areas due to tectonic forces?",
    options: [
        "Contact metamorphism",
        "Regional metamorphism",
        "Dynamic metamorphism",
        "Hydrothermal metamorphism"
    ],
    correctAnswer: "Regional metamorphism",
    explanation: "Regional metamorphism occurs on a large scale during mountain building processes."
},
{
    domain: "Geology",
    question: "What is the most abundant element in Earth's crust?",
    options: [
        "Silicon",
        "Oxygen",
        "Aluminum",
        "Iron"
    ],
    correctAnswer: "Oxygen",
    explanation: "Oxygen makes up about 46% of Earth's crust by weight."
},
{
    domain: "Geology",
    question: "What is the layered structure of sedimentary rocks called?",
    options: [
        "Foliation",
        "Stratification",
        "Cleavage",
        "Bedding"
    ],
    correctAnswer: "Stratification",
    explanation: "Stratification refers to the layering of sedimentary rocks."
},
{
    domain: "Geology",
    question: "What is the boundary between Earth's crust and mantle known as?",
    options: [
        "Asthenosphere",
        "Mohorovičić discontinuity",
        "Lithosphere",
        "Gutenberg discontinuity"
    ],
    correctAnswer: "Mohorovičić discontinuity",
    explanation: "The Mohorovičić discontinuity, or Moho, separates Earth's crust from the mantle."
},
{
    domain: "Geology",
    question: "Which type of volcano has broad, gently sloping sides?",
    options: [
        "Shield volcano",
        "Composite volcano",
        "Cinder cone",
        "Caldera"
    ],
    correctAnswer: "Shield volcano",
    explanation: "Shield volcanoes, such as Mauna Loa, are broad with gentle slopes formed by low-viscosity lava flows."
},
{
    domain: "Geology",
    question: "What is the primary gas in Earth's atmosphere?",
    options: [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Argon"
    ],
    correctAnswer: "Nitrogen",
    explanation: "Nitrogen makes up about 78% of Earth's atmosphere."
},
{
    domain: "Geology",
    question: "Which mineral is used to make plaster of Paris?",
    options: [
        "Calcite",
        "Gypsum",
        "Halite",
        "Quartz"
    ],
    correctAnswer: "Gypsum",
    explanation: "Gypsum is heated to form plaster of Paris (calcium sulfate hemihydrate)."
},
{
    domain: "Geology",
    question: "What is the process by which sediments are compacted and cemented into rock?",
    options: [
        "Lithification",
        "Metamorphism",
        "Erosion",
        "Deposition"
    ],
    correctAnswer: "Lithification",
    explanation: "Lithification transforms sediments into sedimentary rocks through compaction and cementation."
},
{
    domain: "Geology",
    question: "What type of plate boundary forms mountain ranges like the Himalayas?",
    options: [
        "Oceanic-oceanic convergent",
        "Oceanic-continental convergent",
        "Continental-continental convergent",
        "Divergent"
    ],
    correctAnswer: "Continental-continental convergent",
    explanation: "When two continental plates collide, they crumple and form mountain ranges like the Himalayas."
},
{
    domain: "Geology",
    question: "Which type of lava flow has a rough, blocky surface?",
    options: [
        "Pahoehoe",
        "Aa",
        "Pyroclastic flow",
        "Tephra"
    ],
    correctAnswer: "Aa",
    explanation: "Aa lava flows have rough, jagged surfaces compared to the smoother pahoehoe flows."
},
{
    domain: "Geology",
    question: "Which mineral is commonly known as fool's gold?",
    options: [
        "Pyrite",
        "Chalcopyrite",
        "Galena",
        "Magnetite"
    ],
    correctAnswer: "Pyrite",
    explanation: "Pyrite resembles gold in color and luster, earning it the nickname 'fool's gold.'"
},
{
    domain: "Geology",
    question: "What is the term for an underground layer of water-bearing rock?",
    options: [
        "Aquifer",
        "Aquiclude",
        "Aquifuge",
        "Aquatard"
    ],
    correctAnswer: "Aquifer",
    explanation: "An aquifer is a permeable rock layer that can store and transmit groundwater."
},
{
    domain: "Geology",
    question: "Which geologic principle states that 'the present is the key to the past'?",
    options: [
        "Superposition",
        "Uniformitarianism",
        "Cross-cutting relationships",
        "Original horizontality"
    ],
    correctAnswer: "Uniformitarianism",
    explanation: "Uniformitarianism, proposed by James Hutton, states that processes occurring today also occurred in the past."
},
{
    domain: "Geology",
    question: "What type of igneous rock forms deep within Earth's crust?",
    options: [
        "Extrusive",
        "Intrusive",
        "Volcanic",
        "Basaltic"
    ],
    correctAnswer: "Intrusive",
    explanation: "Intrusive igneous rocks, such as granite, crystallize slowly beneath Earth's surface."
},
{
  domain: "Structural Geology",
  question: "What is the difference between a joint and a fault?",
  options: [
    "Joints are fractures with displacement; faults have no displacement",
    "Joints are fractures without displacement; faults show displacement",
    "Both joints and faults have displacement",
    "Neither joints nor faults involve fractures"
  ],
  correctAnswer: "Joints are fractures without displacement; faults show displacement",
  explanation: "Joints are fractures in rocks with no measurable movement, while faults involve displacement along the fracture."
},
{
  domain: "Geomorphology",
  question: "Which landform is produced primarily by wind erosion?",
  options: [
    "Moraine",
    "Yardang",
    "Delta",
    "Alluvial fan"
  ],
  correctAnswer: "Yardang",
  explanation: "Yardangs are streamlined ridges formed by wind erosion in arid environments."
},
{
  domain: "Mineralogy",
  question: "What is the chemical formula of gypsum?",
  options: [
    "CaCO₃",
    "CaSO₄·2H₂O",
    "NaCl",
    "SiO₂"
  ],
  correctAnswer: "CaSO₄·2H₂O",
  explanation: "Gypsum is calcium sulfate dihydrate, with the chemical formula CaSO₄·2H₂O."
},
{
  domain: "Petrology",
  question: "Which igneous texture indicates two stages of cooling?",
  options: [
    "Glassy",
    "Porphyritic",
    "Aphanitic",
    "Phaneritic"
  ],
  correctAnswer: "Porphyritic",
  explanation: "A porphyritic texture forms when large crystals (phenocrysts) grow during slow cooling, followed by rapid cooling that produces a finer groundmass."
},
{
  domain: "Stratigraphy",
  question: "What principle states that sedimentary layers are originally deposited horizontally?",
  options: [
    "Principle of Superposition",
    "Principle of Lateral Continuity",
    "Principle of Original Horizontality",
    "Principle of Cross-cutting Relationships"
  ],
  correctAnswer: "Principle of Original Horizontality",
  explanation: "Steno's Principle of Original Horizontality states that sediments are deposited in horizontal layers due to gravity."
},
{
  domain: "Economic Geology",
  question: "Which Philippine province is famous for its gold deposits in Baguio District?",
  options: [
    "Cebu",
    "Benguet",
    "Palawan",
    "Samar"
  ],
  correctAnswer: "Benguet",
  explanation: "Benguet, particularly the Baguio District, is a well-known gold mining area in the Philippines."
},
{
  domain: "Geophysics",
  question: "Which seismic wave travels the fastest?",
  options: [
    "P-waves",
    "S-waves",
    "Love waves",
    "Rayleigh waves"
  ],
  correctAnswer: "P-waves",
  explanation: "P-waves (primary waves) are compressional waves that travel fastest through the Earth."
},
{
  domain: "Hydrogeology",
  question: "What term refers to the upper surface of the saturated zone?",
  options: [
    "Aquiclude",
    "Perched water table",
    "Water table",
    "Capillary fringe"
  ],
  correctAnswer: "Water table",
  explanation: "The water table is the upper level of the saturated zone in the subsurface."
},
{
  domain: "Geochemistry",
  question: "Which element is most abundant in the Earth's crust?",
  options: [
    "Iron",
    "Oxygen",
    "Silicon",
    "Aluminum"
  ],
  correctAnswer: "Oxygen",
  explanation: "Oxygen makes up about 46% by weight of the Earth's crust."
},
{
  domain: "Geomorphology",
  question: "What type of volcano is Mayon in the Philippines?",
  options: [
    "Shield volcano",
    "Composite volcano",
    "Cinder cone",
    "Caldera"
  ],
  correctAnswer: "Composite volcano",
  explanation: "Mayon Volcano is a composite or stratovolcano, characterized by steep slopes and explosive eruptions."
},
{
  domain: "Paleontology",
  question: "Ammonites are commonly used as index fossils for which geologic era?",
  options: [
    "Paleozoic",
    "Mesozoic",
    "Cenozoic",
    "Precambrian"
  ],
  correctAnswer: "Mesozoic",
  explanation: "Ammonites thrived during the Mesozoic Era, making them excellent index fossils for this period."
},
{
  domain: "Geochronology",
  question: "Which isotope pair is used in radiocarbon dating?",
  options: [
    "Uranium-238/Lead-206",
    "Carbon-14/Carbon-12",
    "Potassium-40/Argon-40",
    "Rubidium-87/Strontium-87"
  ],
  correctAnswer: "Carbon-14/Carbon-12",
  explanation: "Radiocarbon dating uses the decay of carbon-14 relative to carbon-12 to date organic materials."
},
{
  domain: "Structural Geology",
  question: "What type of fault is associated with tensional stress?",
  options: [
    "Reverse fault",
    "Normal fault",
    "Strike-slip fault",
    "Thrust fault"
  ],
  correctAnswer: "Normal fault",
  explanation: "Normal faults form when the crust is stretched, causing the hanging wall to move down relative to the footwall."
},
{
  domain: "Petrology",
  question: "Which metamorphic rock is formed from limestone?",
  options: [
    "Slate",
    "Schist",
    "Marble",
    "Quartzite"
  ],
  correctAnswer: "Marble",
  explanation: "Marble forms when limestone undergoes recrystallization during metamorphism."
},
{
  domain: "Sedimentology",
  question: "Cross-bedding is most characteristic of which depositional environment?",
  options: [
    "Glacial",
    "Aeolian (desert dunes)",
    "Deep marine",
    "Lacustrine"
  ],
  correctAnswer: "Aeolian (desert dunes)",
  explanation: "Cross-bedding is commonly formed by wind in dune environments or water in river channels."
},
{
  domain: "Geochemistry",
  question: "What is the most common mineral in granite?",
  options: [
    "Olivine",
    "Quartz",
    "Hornblende",
    "Calcite"
  ],
  correctAnswer: "Quartz",
  explanation: "Granite typically contains quartz, feldspar, and mica, with quartz being the most common."
},
{
  domain: "Geomorphology",
  question: "Which river in the Philippines is the longest?",
  options: [
    "Agusan River",
    "Cagayan River",
    "Pampanga River",
    "Pasig River"
  ],
  correctAnswer: "Cagayan River",
  explanation: "The Cagayan River in northern Luzon is the longest river in the Philippines."
},
{
  domain: "Volcanology",
  question: "What type of lava is most viscous?",
  options: [
    "Basaltic",
    "Andesitic",
    "Rhyolitic",
    "Ultramafic"
  ],
  correctAnswer: "Rhyolitic",
  explanation: "Rhyolitic lava is silica-rich and highly viscous, leading to explosive eruptions."
},
{
  domain: "Seismology",
  question: "What scale measures the energy released by an earthquake?",
  options: [
    "Richter scale",
    "Mercalli scale",
    "Moment magnitude scale",
    "Beaufort scale"
  ],
  correctAnswer: "Moment magnitude scale",
  explanation: "The moment magnitude scale (Mw) is the most accurate modern measure of earthquake energy."
},
{
  domain: "Stratigraphy",
  question: "What is an unconformity?",
  options: [
    "A type of igneous intrusion",
    "A gap in the geologic record",
    "A fossilized soil horizon",
    "A sedimentary facies"
  ],
  correctAnswer: "A gap in the geologic record",
  explanation: "An unconformity represents a period of erosion or non-deposition between rock layers."
},
{
  domain: "Economic Geology",
  question: "Which metallic resource is Palawan known for?",
  options: [
    "Chromite",
    "Nickel",
    "Gold",
    "Copper"
  ],
  correctAnswer: "Nickel",
  explanation: "Palawan is a major source of nickel deposits in the Philippines."
},
{
  domain: "Hydrogeology",
  question: "Artesian wells flow because of what condition?",
  options: [
    "Water table is above ground level",
    "Confined aquifer under pressure",
    "Capillary rise",
    "Evapotranspiration"
  ],
  correctAnswer: "Confined aquifer under pressure",
  explanation: "In artesian wells, water is confined under pressure and rises above the aquifer when tapped."
},
{
  domain: "Mineralogy",
  question: "Which mineral is the hardest on the Mohs hardness scale?",
  options: [
    "Diamond",
    "Corundum",
    "Quartz",
    "Topaz"
  ],
  correctAnswer: "Diamond",
  explanation: "Diamond is the hardest known natural mineral, rated 10 on the Mohs scale."
},
{
  domain: "Petrology",
  question: "What is the main mineral component of basalt?",
  options: [
    "Quartz",
    "Feldspar",
    "Olivine",
    "Pyroxene"
  ],
  correctAnswer: "Pyroxene",
  explanation: "Basalt is a mafic volcanic rock primarily composed of pyroxene and plagioclase feldspar."
},
{
  domain: "Geomorphology",
  question: "What is a karst landscape primarily formed by?",
  options: [
    "Wind erosion",
    "Chemical weathering of limestone",
    "Glacial activity",
    "Volcanic eruptions"
  ],
  correctAnswer: "Chemical weathering of limestone",
  explanation: "Karst landscapes develop when limestone dissolves due to chemical weathering by acidic water."
},
{
  domain: "Geophysics",
  question: "What is the boundary between the crust and mantle called?",
  options: [
    "Moho",
    "Lehmann discontinuity",
    "Gutenberg discontinuity",
    "Core-mantle boundary"
  ],
  correctAnswer: "Moho",
  explanation: "The Mohorovičić discontinuity, or Moho, separates the Earth's crust from the mantle."
},
{
  domain: "Geochronology",
  question: "Which dating method is used for very old rocks, billions of years old?",
  options: [
    "Radiocarbon dating",
    "Potassium-Argon dating",
    "Uranium-Lead dating",
    "Fission track dating"
  ],
  correctAnswer: "Uranium-Lead dating",
  explanation: "Uranium-Lead dating can measure rocks that are billions of years old, making it one of the oldest reliable dating methods."
},
{
  domain: "Environmental Geology",
  question: "Which Philippine volcano had the most violent eruption in 1991?",
  options: [
    "Mayon",
    "Pinatubo",
    "Taal",
    "Kanlaon"
  ],
  correctAnswer: "Pinatubo",
  explanation: "Mount Pinatubo erupted violently in 1991, one of the largest eruptions of the 20th century."
},
{
  domain: "Structural Geology",
  question: "What is an anticline?",
  options: [
    "A fold with the youngest rocks in the core",
    "A fold with the oldest rocks in the core",
    "A dome-shaped igneous intrusion",
    "A type of fault"
  ],
  correctAnswer: "A fold with the oldest rocks in the core",
  explanation: "Anticlines are upward-arching folds with the oldest rocks exposed in the core."
}

]; 
