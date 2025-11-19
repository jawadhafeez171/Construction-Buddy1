import { Service, Package, Project, ProjectCategory } from './types';

export const COMPANY_NAME = "Construction Buddy";
export const PHONE_NUMBER = "9902800693";
export const ADDRESS = "No 6, railway line road shampur bangalore 560045";

export const SOCIAL_LINKS = {
  youtube: "#",
  instagram: "#",
  whatsapp: `https://wa.me/91${PHONE_NUMBER}`,
  facebook: "#",
};

export const SERVICES: Service[] = [
  {
    id: 'architectural-structural-drawings',
    title: 'Architectural and Structural Drawings',
    path: '/services/architectural-structural-drawings',
    descriptions: ['Integrated design blueprints for seamless construction.', 'Ensuring aesthetic vision meets structural integrity.'],
    imageUrl: 'https://picsum.photos/seed/arch-struct/800/600',
    overview: 'We provide a unified architectural and structural drawing service, ensuring that your project\'s design is not only visually compelling but also safe, sound, and buildable. Our integrated approach eliminates conflicts between architectural plans and structural requirements, leading to a smoother and more efficient construction process.',
    keyFeatures: [
      'Comprehensive Floor Plans, Elevations, and Sections',
      'Robust Structural Framing and Foundation Design',
      '3D Modeling and Visualization',
      'Seismic and Wind Load Analysis',
      'Full Compliance with Building Codes'
    ],
    process: [
      { step: 1, title: 'Initial Consultation', description: 'Understanding your vision and functional requirements for the project.' },
      { step: 2, title: 'Conceptual Design', description: 'Creating initial architectural concepts and structural schemes.' },
      { step: 3, title: 'Detailed Design & Engineering', description: 'Developing final drawings with precise engineering calculations.' },
      { step: 4, title: 'Permit & Construction Documents', description: 'Finalizing the complete set of drawings ready for approval and construction.' }
    ],
    whyChooseUs: 'Our integrated design process ensures a cohesive and optimized plan, saving you time and money by preventing costly on-site modifications.'
  },
  {
    id: 'home-construction',
    title: 'Home Construction',
    path: '/services/home-construction',
    descriptions: ['Building custom homes from the ground up.', 'Quality craftsmanship for your dream residential space.'],
    imageUrl: 'https://picsum.photos/seed/home-build/800/600',
    overview: 'We specialize in building beautiful, high-quality custom homes. Our team manages every aspect of the residential construction process, from laying the foundation to applying the final touches. We are committed to turning your vision of a dream home into a tangible reality, with a focus on durability, comfort, and style.',
    keyFeatures: [
      'New Custom Home Builds',
      'Major Renovations and Additions',
      'High-Quality Material Sourcing',
      'End-to-end Project Management',
      'Transparent Budgeting and Timelines'
    ],
    process: [
      { step: 1, title: 'Pre-construction & Planning', description: 'Finalizing plans, budgets, and securing permits.' },
      { step: 2, title: 'Site Work & Foundation', description: 'Preparing the land and constructing the home\'s foundation.' },
      { step: 3, title: 'Framing & Finishing', description: 'Building the structure and completing all interior and exterior finishes.' },
      { step: 4, title: 'Final Handover', description: 'Conducting a final walkthrough and handing over the keys to your new home.' }
    ],
    whyChooseUs: 'We build homes, not just houses. Our client-focused approach and attention to detail ensure a personal and satisfying home-building experience.'
  },
  {
    id: 'commercial-construction',
    title: 'Commercial Construction',
    path: '/services/commercial-construction',
    descriptions: ['Constructing functional and modern commercial spaces.', 'From office buildings to retail stores, we build for business.'],
    imageUrl: 'https://picsum.photos/seed/comm-build/800/600',
    overview: 'Our commercial construction services cater to businesses of all sizes. We understand the unique demands of commercial projects, including the need for durability, functionality, and adherence to strict timelines and budgets. Whether it\'s a new office, a retail outlet, or an industrial facility, we deliver professional results that support your business goals.',
    keyFeatures: [
      'Office Buildings and Corporate Campuses',
      'Retail Stores and Shopping Centers',
      'Warehouses and Industrial Facilities',
      'Tenant Improvements and Fit-outs',
      'Strict Adherence to Safety and Regulations'
    ],
    process: [
      { step: 1, title: 'Project Scoping & Feasibility', description: 'Defining project goals and assessing viability for your business needs.' },
      { step: 2, title: 'Design & Pre-construction', description: 'Coordinating with design teams and planning all construction logistics.' },
      { step: 3, title: 'Execution & Management', description: 'Managing all on-site activities to ensure quality, safety, and timeliness.' },
      { step: 4, title: 'Commissioning & Turnover', description: 'Ensuring all systems are operational and handing over the completed facility.' }
    ],
    whyChooseUs: 'We deliver commercial projects on time and on budget, minimizing disruption to your operations and maximizing the value of your investment.'
  },
  {
    id: 'interiors',
    title: 'Interiors',
    path: '/services/interiors',
    descriptions: ['Transform your space with our creative interior design solutions.', 'We focus on functionality and aesthetics to create your dream interior.'],
    imageUrl: 'https://picsum.photos/seed/interior/800/600',
    overview: 'We believe that a great interior is a perfect blend of form and function. Our interior design team works with you to create spaces that are not only visually stunning but also reflect your personality and lifestyle. From color palettes and material selection to furniture and lighting, we manage every detail to bring your vision to life.',
    keyFeatures: [
      'Space planning and layout optimization',
      'Color, material, and finish selection',
      'Custom furniture and cabinetry design',
      'Lighting design and fixture selection',
      'Turnkey Interior Project Execution'
    ],
    process: [
      { step: 1, title: 'Discovery & Style Definition', description: 'We get to know you and your aesthetic preferences.' },
      { step: 2, title: 'Concept Development & Mood Boards', description: 'We create a visual representation of the design direction.' },
      { step: 3, title: 'Detailed Design & Material Sourcing', description: 'We finalize layouts, select materials, and source furnishings.' },
      { step: 4, title: 'Implementation & Styling', description: 'Our team oversees the execution and adds the final styling touches.' }
    ],
    whyChooseUs: 'Our client-centric approach ensures a personalized design that is both beautiful and practical, creating a space you’ll love for years to come.'
  },
  {
    id: 'waterproofing-solutions',
    title: 'Waterproofing Solutions',
    path: '/services/waterproofing-solutions',
    descriptions: ['Protect your property from water damage.', 'Comprehensive solutions for basements, roofs, and walls.'],
    imageUrl: 'https://picsum.photos/seed/waterproof/800/600',
    overview: 'Water intrusion can cause significant structural damage and health hazards. Our expert waterproofing services provide a robust shield for your building, protecting it from leaks and moisture. We use advanced materials and proven techniques to deliver long-lasting solutions for terraces, basements, bathrooms, and exterior walls.',
    keyFeatures: [
      'Terrace and Rooftop Waterproofing',
      'Basement and Foundation Sealing',
      'Bathroom and Wet Area Solutions',
      'Exterior Wall Coatings',
      'Leakage Detection and Repair'
    ],
    process: [
      { step: 1, title: 'Site Inspection & Analysis', description: 'We conduct a thorough assessment to identify sources of water ingress.' },
      { step: 2, title: 'Custom Solution Design', description: 'We recommend the most effective waterproofing system for your specific issue.' },
      { step: 3, title: 'Surface Preparation & Application', description: 'We meticulously prepare surfaces and apply the chosen waterproofing materials.' },
      { step: 4, title: 'Quality Check & Warranty', description: 'We perform rigorous testing and provide a warranty for our work.' }
    ],
    whyChooseUs: 'Our scientific approach and use of high-performance materials ensure your property stays dry and protected for years to come.'
  },
  {
    id: 'building-information-modelling',
    title: 'Building Information Modelling',
    path: '/services/building-information-modelling',
    descriptions: ['Leveraging technology for smarter construction.', '3D modeling and data analysis for efficient project delivery.'],
    imageUrl: 'https://picsum.photos/seed/bim/800/600',
    overview: 'Building Information Modelling (BIM) revolutionizes construction by creating a digital representation of your project. This intelligent 3D model-based process provides valuable insights for architects, engineers, and construction professionals to plan, design, construct, and manage buildings and infrastructure more efficiently.',
    keyFeatures: [
      '3D Visualization and Walkthroughs',
      'Clash Detection to Prevent On-site Errors',
      'Accurate Quantity Takeoffs (4D BIM)',
      'Cost Estimation and Control (5D BIM)',
      'Improved Collaboration Among Stakeholders'
    ],
    process: [
      { step: 1, title: 'Project Setup & Data Input', description: 'We gather all architectural, structural, and MEP plans to build the model.' },
      { step: 2, title: '3D Model Development', description: 'Our team creates a detailed and data-rich 3D model of the project.' },
      { step: 3, title: 'Analysis & Simulation', description: 'We run clash detection, scheduling, and cost analysis using the model.' },
      { step: 4, title: 'Documentation & Handover', description: 'We generate coordinated construction drawings and an as-built model.' }
    ],
    whyChooseUs: 'Our BIM expertise helps you visualize your project, reduce risks, control costs, and ensure a more predictable and successful outcome.'
  },
];

export const PACKAGES: Package[] = [
  {
    name: 'Basic',
    price: '₹1850/sqft',
    highlights: [
      'Trusted brand steel & cement',
      'Floor tiles up to ₹50/sqft',
      'Standard flush doors & windows',
      'Tractor Emulsion paint finish',
      'Basic kitchen & bathroom fittings'
    ]
  },
  {
    name: 'Standard',
    price: '₹1980/sqft',
    highlights: [
      'Jindal steel & top-brand cement',
      'Floor tiles up to ₹100/sqft',
      'Elegant teak doors',
      'Tractor Shyne Emulsion finish',
      'Stylish kitchen & bathroom fittings'
    ],
    isPopular: true
  },
  {
    name: 'Premium',
    price: '₹2300/sqft',
    highlights: [
      'Premium brand steel & cement',
      'Floor tiles up to ₹140/sqft',
      'Designer teak doors',
      'Apcolite Premium Emulsion finish',
      'Quality kitchen & bathroom fittings',
      'Solar heater / puja room provision'
    ]
  },
  {
    name: 'Luxury',
    price: '₹2535/sqft',
    highlights: [
      'Premium brand steel & cement',
      'Floor tiles up to ₹160/sqft',
      'Designer teak doors',
      'Apex Ultima exterior finish',
      'Lavish kitchen & bathroom fittings',
      'EV charging & copper gas line provision'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'cambridge-english-high-school',
    title: 'Cambridge English High School',
    category: ProjectCategory.INSTITUTIONAL,
    description: 'Construction of the Cambridge English High School, featuring a modern textured facade, spacious corridors, and a central courtyard. The project focused on creating a functional and durable educational environment for students and staff.',
    coverImage: '/School.jpeg',
    images: ['/public/School.jpeg', '/public/School 1.jpeg', '/public/School 2.jpeg', '/public/School 3.jpeg', '/public/School 4.jpeg', '/public/School 5.jpeg']
  },
  {
    id: 'grand-mosque-construction',
    title: 'Grand Mosque Construction',
    category: ProjectCategory.INSTITUTIONAL,
    description: 'A large-scale institutional project involving the construction of a grand mosque. The design features traditional Islamic architecture with prominent domes, elegant arches, and intricate facade details. The project showcases our capability in handling complex structural and decorative work.',
    coverImage: '/6.jpeg',
    images: ['/6.jpeg', '/7.jpeg', '/8.jpeg']
  },
  {
    id: 'modern-cubist-residence',
    title: 'Modern Cubist Residence',
    category: ProjectCategory.RESIDENTIAL,
    description: 'A contemporary residential building characterized by its striking cubist architecture, combining textured brown panels with clean white surfaces. The design emphasizes geometric forms and provides multiple balconies for outdoor living.',
    coverImage: '/1.jpeg',
    images: ['/1.jpeg']
  },
  {
    id: 'elegant-family-home-jp-nagar',
    title: 'Elegant Family Home, JP Nagar',
    category: ProjectCategory.RESIDENTIAL,
    description: 'A beautifully designed family home in JP Nagar, featuring a blend of modern and traditional elements. The facade includes wood-paneled accents and large windows, creating a warm and inviting atmosphere.',
    coverImage: '/2.jpeg',
    images: ['/2.jpeg']
  },
  {
    id: 'residential-project-construction-phases',
    title: 'Residential Project - Construction Phases',
    category: ProjectCategory.RESIDENTIAL,
    description: 'Showcasing the various phases of a residential construction project, from the initial concrete structure to the final exterior finishing. This project highlights our process and attention to detail at every stage of the build.',
    coverImage: '/10.jpeg',
    images: ['/9.jpeg', '/10.jpeg']
  }
];