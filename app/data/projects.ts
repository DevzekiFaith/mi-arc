export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
  type: 'plan' | 'section' | 'elevation' | 'render' | 'site';
}

export interface Project {
  id: string;
  title: string;
  role: string;
  location: string;
  year: number;
  description: string;
  thumbnail: string;
  images: ProjectImage[];
}

export const projects: Project[] = [
  {
    id: 'enugu-multi-purpose',
    title: 'Enugu Multi-Purpose Development Project',
    role: 'Project Manager & Architect',
    location: 'Enugu, Nigeria',
    year: 2024,
    description: 'A multifunctional government complex integrating administrative, public, and recreational spaces. Design focused on user flow, accessibility, and context-sensitive materiality, with strong coordination across consultants and contractors.',
    thumbnail: '/images/projects/M27.jpg',
    images: [
      {
        src: '/images/projects/M16.jpg',
        alt: 'Master plan of Enugu multi-purpose development',
        caption: 'Master plan highlighting functional zones, circulation strategy, and integration with existing context.',
        type: 'plan'
      },
      {
        src: '/images/projects/M17.jpg',
        alt: 'Floor plan of Enugu development',
        caption: 'Ground floor plan illustrating spatial adjacency and user flow.',
        type: 'plan'
      },
      {
        src: '/images/projects/M19.jpg',
        alt: 'Section of Enugu development',
        caption: 'Section showing vertical circulation and hierarchical spaces.',
        type: 'section'
      },
      {
        src: '/images/projects/M27.jpg',
        alt: 'Render of Enugu development facade',
        caption: 'Photorealistic render capturing the main facade.',
        type: 'render'
      },
      {
        src: '/images/projects/site.jpg',
        alt: 'Construction site of Enugu development',
        caption: 'Construction site photo demonstrating material detailing and execution fidelity.',
        type: 'site'
      }
    ]
  },
  {
    id: 'mixed-use-commercial',
    title: 'Mixed-Use Commercial Development',
    role: 'Design Lead & Site Supervision',
    location: 'Enugu, Nigeria',
    year: 2023,
    description: 'A contemporary mixed-use development combining retail, office, and leisure spaces. Design emphasizes modularity, natural light optimization, and seamless indoor-outdoor flow.',
    thumbnail: '/images/projects/C16.jpg',
    images: [
      {
        src: '/images/projects/BK.png',
        alt: 'Master plan of mixed-use commercial development',
        caption: 'Master plan showing overall site layout and functional zones.',
        type: 'plan'
      },
      {
        src: '/images/projects/C10.jpg',
        alt: 'Ground floor plan of mixed-use development',
        caption: 'Ground floor plan showing circulation and retail layout.',
        type: 'plan'
      },
      {
        src: '/images/projects/C11.jpg',
        alt: 'Section of mixed-use development',
        caption: 'Section illustrating multi-level connectivity and spatial hierarchy.',
        type: 'section'
      },
      {
        src: '/images/projects/C15.jpg',
        alt: 'Elevation of mixed-use development',
        caption: 'Building elevation showcasing facade design and proportions.',
        type: 'elevation'
      },
      {
        src: '/images/projects/C16.jpg',
        alt: 'Facade visualization of mixed-use development',
        caption: 'Facade visualization with integrated outdoor spaces.',
        type: 'render'
      },
      {
        src: '/images/projects/c17.jpg',
        alt: 'Construction site of mixed-use development',
        caption: 'On-site supervision capturing facade detailing and construction progress.',
        type: 'site'
      }
    ]
  },
  {
    id: 'residential-villa-lagos',
    title: 'High-End Residential Villa',
    role: 'Architect & Design Lead',
    location: 'Lagos, Nigeria',
    year: 2022,
    description: 'High-end residential villa emphasizing privacy, daylight, and tropical indoor-outdoor living.',
    thumbnail: '/images/projects/T15.jpg',
    images: [
      {
        src: '/images/projects/TR1.png',
        alt: 'Ground floor layout of residential villa',
        caption: 'Ground floor layout showing spatial arrangement and circulation.',
        type: 'plan'
      },
      {
        src: '/images/projects/T11.jpg',
        alt: 'First floor layout of residential villa',
        caption: 'First floor layout illustrating bedroom and living spaces.',
        type: 'plan'
      },
      {
        src: '/images/projects/T13.jpg',
        alt: 'Section of residential villa',
        caption: 'Section highlighting double-height living space and open terraces.',
        type: 'section'
      },
      {
        src: '/images/projects/T14.jpg',
        alt: 'Elevation of residential villa',
        caption: 'Building elevation showcasing facade design and tropical architecture.',
        type: 'elevation'
      },
      {
        src: '/images/projects/T15.jpg',
        alt: 'Perspective of residential villa',
        caption: 'Perspective showing garden-facing facade and outdoor integration.',
        type: 'render'
      }
    ]
  },
  {
    id: 'urban-hotel-nsukka',
    title: 'Urban Hotel Project',
    role: 'Architect & Design Lead',
    location: 'Nsukka, Nigeria',
    year: 2021,
    description: 'Urban Hotel project focusing on compact, functional living, natural ventilation, and material simplicity.',
    thumbnail: '/images/projects/M33.jpg',
    images: [
      {
        src: '/images/projects/HT.png',
        alt: 'Floor layouts of urban hotel',
        caption: 'Floor layouts illustrating room adjacency and efficient circulation.',
        type: 'plan'
      },
      {
        src: '/images/projects/M32.jpg',
        alt: 'Section of urban hotel',
        caption: 'Section highlighting spatial hierarchy and daylight penetration.',
        type: 'section'
      },
      {
        src: '/images/projects/M33.jpg',
        alt: 'Perspective of urban hotel entrance',
        caption: 'Perspective of main entrance and terrace overlooking private courtyard.',
        type: 'render'
      },
      {
        src: '/images/projects/HTS.jpg',
        alt: 'Construction progress of urban hotel',
        caption: 'On-site supervision documenting construction progress and detailing.',
        type: 'site'
      }
    ]
  },
  {
    id: 'afro-contemporary-concept',
    title: 'Afro-Contemporary Concept Project',
    role: 'Design Lead',
    location: 'Lagos, Nigeria',
    year: 2020,
    description: 'Conceptual project exploring Afro-contemporary design, modular flexibility, and sustainability. Emphasis on spatial experimentation and material innovation.',
    thumbnail: '/images/projects/OD12.jpg',
    images: [
      {
        src: '/images/projects/TR2.png',
        alt: 'Conceptual floor plans',
        caption: 'Conceptual floor plans showing modular spatial arrangement.',
        type: 'plan'
      },
      {
        src: '/images/projects/T33.jpg',
        alt: 'Section of concept project',
        caption: 'Section illustrating volumetric exploration and interior spatial relationships.',
        type: 'section'
      },
      {
        src: '/images/projects/T32.jpg',
        alt: 'Concept visualization',
        caption: 'Concept visualization highlighting form, materiality, and light penetration.',
        type: 'render'
      }
    ]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};