const imageSets = {
  bars: ['/images/company-01.jpg', '/images/company-02.jpg', '/images/company-03.jpg', '/images/company-07.jpg', '/images/company-08.jpg'],
  pipes: ['/images/company-04.jpg', '/images/company-05.jpg', '/images/company-06.jpg', '/images/company-09.jpg', '/images/company-15.jpg', '/images/company-16.jpg'],
  plates: ['/images/company-02.jpg', '/images/company-03.jpg', '/images/company-04.jpg', '/images/company-11.jpg', '/images/company-12.jpg', '/images/company-13.jpg'],
  beams: ['/images/company-03.jpg', '/images/company-05.jpg', '/images/company-06.jpg', '/images/company-14.jpg'],
  coils: ['/images/company-01.jpg', '/images/company-04.jpg', '/images/company-06.jpg', '/images/company-17.jpg', '/images/company-18.jpg']
};

export const products = [
  {
    id: 'ms-round-bar',
    title: 'Mild Steel Round Bar',
    slug: 'mild-steel-round-bar',
    category: 'Bars & Rods',
    price: { display: 'Quote on request', value: 1 },
    images: imageSets.bars,
    shortDescription: 'General-purpose round bar for fabrication, support, and machining work.',
    longDescription:
      'A dependable round bar option for fabrication shops and structural buyers. Suitable for machining, supports, and custom cutting requirements with consistent stock availability.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Round Bar',
      Finish: 'Hot Rolled',
      Length: 'Standard commercial lengths',
      Use: 'Fabrication, machining, support members'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Bar', 'Hot Rolled', 'Round']
  },
  {
    id: 'ms-square-bar',
    title: 'Mild Steel Square Bar',
    slug: 'mild-steel-square-bar',
    category: 'Bars & Rods',
    price: { display: 'Quote on request', value: 2 },
    images: imageSets.bars,
    shortDescription: 'Square section bar for machining, frames, and general engineering.',
    longDescription:
      'Designed for engineering and fabrication applications where a square profile is preferred. Sourced for stable dimensions and practical workshop use.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Square Bar',
      Finish: 'Hot Rolled',
      Use: 'Frames, fabrication, general engineering'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Bar', 'Hot Rolled', 'Square']
  },
  {
    id: 'rustproof-ms-bar',
    title: 'Rustproof Mild Steel Round Bar',
    slug: 'rustproof-mild-steel-round-bar',
    category: 'Bars & Rods',
    price: { display: 'Quote on request', value: 3 },
    images: imageSets.bars,
    shortDescription: 'Round bar selected for improved surface protection and storage life.',
    longDescription:
      'A round bar variant used where reduced surface corrosion is important. Ideal for inventory holding, fabrication cycles, and project sites with staged dispatch.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Round Bar',
      Finish: 'Rustproof',
      Use: 'Fabrication, storage-friendly inventory'
    },
    stockStatus: 'Limited availability',
    tags: ['Mild Steel', 'Bar', 'Rustproof', 'Round']
  },
  {
    id: 'gi-round-pipe',
    title: 'Galvanized Iron Round Pipe',
    slug: 'galvanized-iron-round-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 4 },
    images: imageSets.pipes,
    shortDescription: 'Corrosion-resistant round pipe for general utility and structural use.',
    longDescription:
      'Galvanized pipe for applications requiring improved corrosion protection and dependable service life. Commonly used in utility, support, and site infrastructure work.',
    specs: {
      Material: 'Galvanized',
      Shape: 'Round Pipe',
      Finish: 'Coated',
      Use: 'Utility lines, structural support, site work'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Pipe', 'Coated', 'Round']
  },
  {
    id: 'gi-rectangular-pipe',
    title: 'Galvanized Iron Rectangular Pipe',
    slug: 'galvanized-iron-rectangular-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 5 },
    images: imageSets.pipes,
    shortDescription: 'Rectangular pipe for frames, handrails, and fabricated structures.',
    longDescription:
      'Rectangular galvanized section for builders and fabricators. Useful where a clean profile and durable coating are required for indoor or outdoor assemblies.',
    specs: {
      Material: 'Galvanized',
      Shape: 'Rectangular Pipe',
      Finish: 'Coated',
      Use: 'Frames, handrails, fabricated structures'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Pipe', 'Coated', 'Rectangular']
  },
  {
    id: 'ss-erw-pipe',
    title: 'Stainless Steel ERW Pipe',
    slug: 'stainless-steel-erw-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 6 },
    images: imageSets.pipes,
    shortDescription: 'ERW pipe for cleaner finish and corrosion-sensitive applications.',
    longDescription:
      'A stainless steel pipe option for buyers who need a polished appearance and reliable corrosion resistance. Suitable for industrial, architectural, and general fabrication use.',
    specs: {
      Material: 'Stainless Steel',
      Shape: 'ERW Pipe',
      Finish: 'Cold Rolled',
      Use: 'Industrial, architectural, fabrication'
    },
    stockStatus: 'On request',
    tags: ['Stainless Steel', 'Pipe', 'Cold Rolled', 'ERW']
  },
  {
    id: 'ms-plate-cold-rolled',
    title: 'Cold Rolled Mild Steel Plate',
    slug: 'cold-rolled-mild-steel-plate',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 7 },
    images: imageSets.plates,
    shortDescription: 'Cleaner surface plate for fabrication and finishing workflows.',
    longDescription:
      'Cold rolled plate with a consistent surface for downstream fabrication, forming, and finishing work. Appropriate for projects where dimensional stability matters.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Plate',
      Finish: 'Cold Rolled',
      Use: 'Fabrication, forming, finishing'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Plate', 'Cold Rolled']
  },
  {
    id: 'ms-plate-hot-rolled',
    title: 'Hot Rolled Mild Steel Plate',
    slug: 'hot-rolled-mild-steel-plate',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 8 },
    images: imageSets.plates,
    shortDescription: 'General-purpose plate for heavy-duty fabrication and build work.',
    longDescription:
      'Hot rolled plate suited to structural jobs, build assemblies, and shop fabrication. A practical material choice when strength and availability matter more than a fine finish.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Plate',
      Finish: 'Hot Rolled',
      Use: 'Heavy-duty fabrication, build work'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Plate', 'Hot Rolled']
  },
  {
    id: 'ms-rectangle-plate',
    title: 'Mild Steel Rectangle Plate',
    slug: 'mild-steel-rectangle-plate',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 9 },
    images: imageSets.plates,
    shortDescription: 'Cut-to-size rectangle plate for custom projects and stock planning.',
    longDescription:
      'Rectangle plate supplied for custom builds and precise job requirements. Suitable for fabricators who want ready-to-use dimensions and predictable dispatch planning.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Rectangle Plate',
      Finish: 'Hot Rolled',
      Use: 'Custom builds, fabrication, dispatch planning'
    },
    stockStatus: 'On request',
    tags: ['Mild Steel', 'Plate', 'Hot Rolled', 'Rectangle']
  },
  {
    id: 'ms-c-beam',
    title: 'Mild Steel C Beam',
    slug: 'mild-steel-c-beam',
    category: 'Structural Steel',
    price: { display: 'Quote on request', value: 10 },
    images: imageSets.beams,
    shortDescription: 'Structural beam for framing, support, and load-bearing assemblies.',
    longDescription:
      'C beam section for infrastructure and industrial support applications. Chosen for projects that need dependable structural profiles and bulk-order handling.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'C Beam',
      Finish: 'Hot Rolled',
      Use: 'Structural support, framing, load-bearing assemblies'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Beam', 'Hot Rolled', 'Structural']
  },
  {
    id: 'ms-i-beam',
    title: 'I Shaped Mild Steel Beam',
    slug: 'i-shaped-mild-steel-beam',
    category: 'Structural Steel',
    price: { display: 'Quote on request', value: 11 },
    images: imageSets.beams,
    shortDescription: 'I-beam profile for heavier structural and construction requirements.',
    longDescription:
      'A structural beam solution for building and industrial buyers who need strong profile sections. Suited for framing, supports, and engineered assemblies.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'I Beam',
      Finish: 'Hot Rolled',
      Use: 'Construction, supports, engineered assemblies'
    },
    stockStatus: 'On request',
    tags: ['Mild Steel', 'Beam', 'Hot Rolled', 'Structural']
  },
  {
    id: 'hr-cr-coils',
    title: 'HR & CR Coils and Sheets',
    slug: 'hr-cr-coils-and-sheets',
    category: 'Coils & Sheets',
    price: { display: 'Quote on request', value: 12 },
    images: imageSets.coils,
    shortDescription: 'Hot rolled and cold rolled coils for processing, cutting, and manufacturing.',
    longDescription:
      'A broad coil offering for buyers needing sheet processing, coil cutting, and slitting support. Suitable for fabrication workflows, manufacturing, and large-volume orders.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Coil and Sheet',
      Finish: 'Hot Rolled / Cold Rolled',
      Use: 'Processing, cutting, manufacturing'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Coil', 'Sheet', 'Hot Rolled', 'Cold Rolled']
  },
  {
    id: 'galvanised-steel',
    title: 'Galvanised Steel Coil',
    slug: 'galvanised-steel-coil',
    category: 'Coils & Sheets',
    price: { display: 'Quote on request', value: 13 },
    images: imageSets.coils,
    shortDescription: 'Coated coil for roofing, solar structures, and outdoor applications.',
    longDescription:
      'Galvanised coil for buyers seeking corrosion-resistant sheet supply with processing flexibility. Well suited to roofing, solar structures, and other weather-exposed builds.',
    specs: {
      Material: 'Galvanized',
      Shape: 'Coil',
      Finish: 'Coated',
      Use: 'Roofing, solar structures, outdoor applications'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Coil', 'Coated']
  },
  {
    id: 'special-quality-steel',
    title: 'Special Quality Steel',
    slug: 'special-quality-steel',
    category: 'Special Grades',
    price: { display: 'Quote on request', value: 14 },
    images: imageSets.coils,
    shortDescription: 'Special grades for demanding applications with tighter material control.',
    longDescription:
      'Special grade steel for critical applications where material consistency, wear resistance, and sourcing confidence matter. Best reviewed with project requirements before dispatch.',
    specs: {
      Material: 'Alloy Steel',
      Shape: 'Custom supply',
      Finish: 'Project dependent',
      Use: 'Critical applications, wear-sensitive work'
    },
    stockStatus: 'On request',
    tags: ['Alloy Steel', 'Special Grade', 'Custom Supply']
  },
  {
    id: 'gi-pipe-round',
    title: 'GI Round Pipe',
    slug: 'gi-round-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 15 },
    images: ['/images/company-09.jpg', '/images/company-10.jpg', '/images/company-15.jpg'],
    shortDescription: 'Galvanized round pipe for utility, structural, and general fabrication use.',
    longDescription:
      'A galvanized round pipe option for general purpose construction, utility, and fabrication work. Suitable for buyers who need corrosion protection and dependable stock availability.',
    specs: {
      Material: 'Galvanized Iron',
      Shape: 'Round Pipe',
      Finish: 'Coated',
      Use: 'Utility, fabrication, structural support'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Pipe', 'Round']
  },
  {
    id: 'gi-pipe-regular',
    title: 'GI Pipe',
    slug: 'gi-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 16 },
    images: ['/images/company-09.jpg', '/images/company-10.jpg', '/images/company-16.jpg'],
    shortDescription: 'General galvanized pipe for everyday industrial and site applications.',
    longDescription:
      'Galvanized pipe supplied for site work, support frames, and general industrial handling. A practical stock item for fast dispatch and project requirements.',
    specs: {
      Material: 'Galvanized Iron',
      Shape: 'Pipe',
      Finish: 'Coated',
      Use: 'Site work, support frames, industrial use'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Pipe', 'Industrial']
  },
  {
    id: 'round-ms-rod',
    title: 'Round Mild Steel Rod',
    slug: 'round-mild-steel-rod',
    category: 'Bars & Rods',
    price: { display: 'Quote on request', value: 17 },
    images: ['/images/company-07.jpg', '/images/company-08.jpg', '/images/company-01.jpg'],
    shortDescription: 'Round rod for fabrication, reinforcement, and machine shop usage.',
    longDescription:
      'Round mild steel rod offered for fabrication, reinforcement, and general workshop handling. Suitable for buyers seeking straightforward round section supply.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Rod',
      Finish: 'Hot Rolled',
      Use: 'Fabrication, reinforcement, workshop use'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Rod', 'Round']
  },
  {
    id: 'plain-gi-sheet',
    title: 'Plain Galvanized Iron Sheet',
    slug: 'plain-galvanized-iron-sheet',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 18 },
    images: ['/images/company-17.jpg', '/images/company-18.jpg', '/images/company-11.jpg'],
    shortDescription: 'Plain galvanized sheet for roofing, fabrication, and weather-exposed work.',
    longDescription:
      'Plain galvanized iron sheet suited to roofing, general fabrication, and outdoor use where basic corrosion resistance matters. Reliable for industrial and site supply chains.',
    specs: {
      Material: 'Galvanized Iron',
      Shape: 'Sheet',
      Finish: 'Coated',
      Use: 'Roofing, fabrication, outdoor use'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Sheet', 'Plain']
  },
  {
    id: 'mild-steel-binding-wire',
    title: 'Mild Steel Binding Wire',
    slug: 'mild-steel-binding-wire',
    category: 'Special Grades',
    price: { display: 'Quote on request', value: 19 },
    images: ['/images/company-18.jpg', '/images/company-17.jpg'],
    shortDescription: 'Binding wire for reinforcement tying and general site support.',
    longDescription:
      'Mild steel binding wire for construction sites, reinforcement work, and general packing or tying applications. Simple stock item with practical dispatch planning.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Wire',
      Finish: 'Plain',
      Use: 'Reinforcement tying, packing, site work'
    },
    stockStatus: 'Ready stock',
    tags: ['Mild Steel', 'Wire', 'Binding']
  },
  {
    id: 'ms-v-angle',
    title: 'MS V Angle',
    slug: 'ms-v-angle',
    category: 'Structural Steel',
    price: { display: 'Quote on request', value: 20 },
    images: ['/images/company-14.jpg', '/images/company-03.jpg', '/images/company-05.jpg'],
    shortDescription: 'Angle section for bracing, framing, and support applications.',
    longDescription:
      'MS V angle for bracing, frames, supports, and lightweight structural assemblies. Useful where a simple angle section is required for fabrication and site build-outs.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Angle',
      Finish: 'Hot Rolled',
      Use: 'Bracing, framing, support'
    },
    stockStatus: 'On request',
    tags: ['Mild Steel', 'Angle', 'Structural']
  },
  {
    id: 'corrugated-gi-sheet',
    title: 'Galvanized Iron Corrugated Sheet',
    slug: 'galvanized-iron-corrugated-sheet',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 21 },
    images: ['/images/company-17.jpg', '/images/company-18.jpg', '/images/company-12.jpg'],
    shortDescription: 'Corrugated galvanized sheet for roofing and cladding work.',
    longDescription:
      'Corrugated galvanized iron sheet for roofing and weather protection. A common industrial and construction supply item with practical stock handling.',
    specs: {
      Material: 'Galvanized Iron',
      Shape: 'Corrugated Sheet',
      Finish: 'Coated',
      Use: 'Roofing, cladding, weather protection'
    },
    stockStatus: 'Ready stock',
    tags: ['Galvanized', 'Sheet', 'Corrugated']
  },
  {
    id: 'round-erw-pipes',
    title: 'Round ERW Pipes',
    slug: 'round-erw-pipes',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 22 },
    images: ['/images/company-15.jpg', '/images/company-16.jpg', '/images/company-09.jpg'],
    shortDescription: 'ERW pipe supply for fabrication and transport of fluids or structures.',
    longDescription:
      'Round ERW pipe for fabrication, site assemblies, and industrial support applications. Suitable for buyers wanting cleanly formed pipe supply with steady availability.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'ERW Pipe',
      Finish: 'Hot Rolled',
      Use: 'Fabrication, support structures, site assemblies'
    },
    stockStatus: 'Ready stock',
    tags: ['ERW', 'Pipe', 'Round']
  },
  {
    id: 'cr-sheet',
    title: 'CR Sheet',
    slug: 'cr-sheet',
    category: 'Plates & Sheets',
    price: { display: 'Quote on request', value: 23 },
    images: ['/images/company-17.jpg', '/images/company-18.jpg', '/images/company-11.jpg'],
    shortDescription: 'Cold rolled sheet for finishing, fabrication, and formability.',
    longDescription:
      'Cold rolled sheet used in fabrication and finishing workflows where surface quality and consistent dimensions are important. A flexible supply option for industrial buyers.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Sheet',
      Finish: 'Cold Rolled',
      Use: 'Fabrication, finishing, formability'
    },
    stockStatus: 'Ready stock',
    tags: ['Cold Rolled', 'Sheet', 'CR']
  },
  {
    id: 'ms-beam-structural',
    title: 'MS Beam',
    slug: 'ms-beam',
    category: 'Structural Steel',
    price: { display: 'Quote on request', value: 24 },
    images: ['/images/company-14.jpg', '/images/company-03.jpg', '/images/company-06.jpg'],
    shortDescription: 'Beam section for load-bearing and framework applications.',
    longDescription:
      'MS beam for load-bearing frameworks, structural support, and heavier construction applications. Useful when a standard beam section is needed for quick project procurement.',
    specs: {
      Material: 'Mild Steel',
      Shape: 'Beam',
      Finish: 'Hot Rolled',
      Use: 'Load-bearing structures, frameworks'
    },
    stockStatus: 'On request',
    tags: ['Mild Steel', 'Beam', 'Structural']
  },
  {
    id: 'iron-pipe',
    title: 'Iron Pipe',
    slug: 'iron-pipe',
    category: 'Pipes & Tubes',
    price: { display: 'Quote on request', value: 25 },
    images: ['/images/company-16.jpg', '/images/company-15.jpg', '/images/company-10.jpg'],
    shortDescription: 'General iron pipe supply for broad industrial and utility use.',
    longDescription:
      'Iron pipe supplied for utility systems, industrial handling, and general structural requirements. A broad category item that supports site-level procurement needs.',
    specs: {
      Material: 'Iron',
      Shape: 'Pipe',
      Finish: 'Plain / Coated',
      Use: 'Utility, industrial, structural use'
    },
    stockStatus: 'Ready stock',
    tags: ['Iron', 'Pipe', 'Utility']
  }
];

export const productsBySlug = Object.fromEntries(products.map((product) => [product.slug, product]));