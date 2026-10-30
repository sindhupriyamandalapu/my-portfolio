/**
 * Central portfolio data — generated from Sindhu's resume (Sindhu's-resume.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };


export const profile = {
  fullName: 'Mandalapu Sindhu Priya',
  displayName: 'Sindhu Priya',
  firstName: 'Sindhu Priya',
  eyebrow: 'WELCOME TO MY PORTFOLIO',
  seriesTag: 'Creating meaningful digital experiences.',
  originalLabel: 'A SINDHU PRIYA ORIGINAL',
  role: 'Python Full Stack | Frontend Developer',
  tagline: ['Python Full Stack | Frontend Developer'],
  intro: 'Aspiring Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. Interested in React, Python, and Django, and eager to learn, grow, and contribute to innovative projects.',
location: 'Hyderabad, India',
email: 'sindhumandalapu7@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/mandalapu-sindhu-priya-27b0bb40a/',
    github: 'https://github.com/sindhupriyamandalapu',
  },
  resumePdf: '/assets/Sindhu_Priya_Resume_doc.pdf',
  portrait: {
    src: '/assets/YOUR_PHOTO_FILE.webp',
    srcSet: '',
    alt: 'Portrait of Mandalapu Sindhu Priya',
  },
  interests: ['Python Full Stack | Frontend Developer',],
};


export const education = [
  {
    school: "Bapatla Women's Engineering College",
    place: "Bapatla, Andhra Pradesh",
    degree: "Bachelor of Technology",
    period: "2019 – 2023",
    score: "CGPA : 7.3",
  },
  {
    school: "Narayana Junior College",
    place: "Andhra Pradesh",
    degree: "Intermediate — MPC",
    period: "2017 – 2019",
    score: "CGPA : 7.8",
  },
];

export const experience = [
  {
    company: "Mythri Ojas Technologies",
    role: "Associate Software Engineer",
    place: "India",
    period: "Oct 2024 – Present",
    points: [
      "Contributing to the development and enhancement of web applications by building responsive user interfaces and implementing application features.",
      "Developing frontend components using modern web technologies and integrating them with backend functionality to support seamless application workflows.",
      "Applying Python and Django concepts to implement application logic, manage data flow, and support dynamic web functionality.",
      "Identifying and resolving technical issues through debugging, testing, and code optimization to improve application stability and usability.",
      "Collaborating with team members to understand requirements, implement solutions, and deliver quality software within development timelines.",
    ],
  },
  {
    company: "Syneix Software Solutions",
    role: "Associate Software Engineer",
    place: "India",
    period: "Aug 2023 – Oct 2024",
    points: [
      "Participated in the development of web-based applications, translating functional requirements into interactive and user-friendly interfaces.",
      "Designed and implemented reusable UI components using HTML, CSS, JavaScript, and Bootstrap to maintain consistency across application pages.",
      "Worked with Python, Django, and database technologies to support backend operations, data processing, and application integration.",
      "Performed functional testing, debugging, and troubleshooting to identify defects and ensure reliable application behavior.",
      "Followed software development practices involving version control, code maintenance, and collaboration to support efficient project delivery.",
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'parkway-digital-healthcare',
    title: 'Parkway Digital Healthcare',
    year: '2024',
    genre: 'Healthcare • Digital Solution',
    logline:
      'A digital healthcare project focused on supporting accessible and convenient healthcare services.',
    stack: ['Healthcare', 'Digital Technology'],
    build: [
      'Worked on a digital healthcare project focused on improving the accessibility and convenience of healthcare services.',
      'Explored the use of digital technology to support healthcare-related workflows.',
    ],
    features: [
      'Digital healthcare solution',
      'Healthcare service support',
      'Technology-based healthcare workflow',
    ],
    metrics: [
  { value: 'UI', label: 'Healthcare User Interface' },
  { value: 'API', label: 'Backend Integration' },
  { value: 'UX', label: 'User Experience' },
],
    palette: {
      from: '#041b2b',
      via: '#126078',
      to: '#050b13',
      accent: '#5de0d0',
    },
    motif: 'flow',
  },
  {
    id: 'automatic-door-opening-system',
    title: 'Automatic Door Opening System',
    year: '2023',
    genre: 'Embedded Systems • Automation',
    logline:
      'An automated door system designed to open and close with minimal manual intervention.',
    stack: ['Embedded Systems', 'Sensors', 'Automation'],
    build: [
      'Worked on an automatic door opening system using sensor-based automation.',
      'Explored how sensor input can be used to trigger automatic door movement.',
    ],
    features: [
      'Sensor-based operation',
      'Automatic door opening',
      'Reduced manual interaction',
    ],
    metrics: [
  { value: 'IR', label: 'Sensor-Based Detection' },
  { value: 'Auto', label: 'Automatic Door Operation' },
  { value: 'Hands-Free', label: 'Reduced Manual Interaction' },
],
    palette: {
      from: '#1b1205',
      via: '#8b5a18',
      to: '#090805',
      accent: '#ffc66d',
    },
    motif: 'flow',
  },
  {
    id: 'smart-helmet-mining-workers',
    title: 'Smart Helmet for Mining Workers',
    year: '2023',
    genre: 'IoT • Embedded Systems • Safety',
    logline:
      'A smart safety helmet designed to monitor environmental conditions and support mining worker safety.',
    stack: [
      'Embedded Systems',
      'IoT',
      'MQ-2 Gas Sensor',
      'DHT11',
      'ESP8266',
      'GSM',
    ],
    build: [
      'Developed a smart helmet concept to monitor environmental conditions for mining workers.',
      'Integrated an MQ-2 gas sensor and DHT11 temperature and humidity sensor to detect environmental changes.',
      'Used an ESP8266 for IoT connectivity and a GSM modem for communication.',
      'Included an emergency switch, LCD display, and buzzer to support alerts.',
    ],
    features: [
      'Gas detection',
      'Temperature and humidity monitoring',
      'Emergency alert support',
      'LCD and buzzer alerts',
      'IoT connectivity',
    ],
    metrics: [
  { value: 'MQ-2', label: 'Gas Detection' },
  { value: 'DHT11', label: 'Temperature & Humidity Monitoring' },
  { value: 'GSM', label: 'Emergency Communication' },
],
    palette: {
      from: '#061c12',
      via: '#16734c',
      to: '#050b08',
      accent: '#5ee6a8',
    },
    motif: 'shield',
  },
];
export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'bectagon-coordinator',
    title: 'Student Coordinator',
    org: 'BECTAGON 2K23',
    detail:
      'Managed event planning, participant coordination, and technical sessions for a national techno-cultural program.',
    laurel: 'Leadership',
  },
  {
    id: 'nss-volunteer',
    title: 'NSS Volunteer',
    org: 'National Service Scheme',
    detail:
      'Participated in community health and awareness programs as part of social service activities.',
    laurel: 'Community Service',
  },
  {
    id: 'project-contributor',
    title: 'Project Contributor',
    org: 'Academic Projects',
    detail:
      'Contributed to project planning, task coordination, and implementation during college project activities.',
    laurel: 'Project Work',
  },
    {
    id: 'fest-coordinator',
    title: 'Fest Coordinator',
    org: "Bapatla Women's Engineering College",
    detail:
      'Coordinated fest activities and supported event planning and organization as part of college celebrations.',
    laurel: 'Event Coordination',
  },
];

export const certifications: Certification[] = [
  {
    issuer: '1Stop',
    name: 'VLSI Virtual Internship',
    link: '',
  },
  {
    issuer: 'Internshala',
    name: 'Web Development',
    link: '',
  },
  {
    issuer: 'National Level Quiz Competition',
    name: 'C Programming — Certificate of Participation',
    link: '',
  },
];
export type Certification = { issuer: string; name: string; link: string };



export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Languages I work with',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Building responsive user interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
      { name: 'Bootstrap', mono: 'Bs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side development',
    skills: [
      { name: 'Python', mono: 'Py' },
      { name: 'Django', mono: 'Dj' },
      { name: 'REST APIs', mono: 'Ap' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Database technologies',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Tools I use for development',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'VS Code', mono: 'Vs' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: [
    'Associate Software Engineer — Mythri Ojas Technologies',
    'Associate Software Engineer — Syneix Software Solutions',
    'Smart Helmet for Mining Workers',
  ],
  JavaScript: [
    'Frontend Development — Mythri Ojas Technologies',
    'Web Application Development — Syneix Software Solutions',
  ],
  HTML: [
    'Responsive Web Development',
    'Parkway Digital Healthcare',
  ],
  CSS: [
    'Responsive Web Development',
    'Parkway Digital Healthcare',
  ],
  Bootstrap: [
    'Frontend Development — Mythri Ojas Technologies',
    'Web Application Development — Syneix Software Solutions',
  ],
  Django: [
    'Web Application Development',
    'Backend Integration',
  ],
  'REST APIs': [
    'Backend Integration',
    'Parkway Digital Healthcare',
  ],
  SQL: [
    'Database Integration',
    'MySQL',
  ],
  MySQL: [
    'Database Integration',
    'Parkway Digital Healthcare',
  ],
  IoT: [
    'Smart Helmet for Mining Workers',
  ],
  'Embedded Systems': [
    'Smart Helmet for Mining Workers',
    'Automatic Door Opening System',
  ],
  'IR Sensor': [
    'Automatic Door Opening System',
  ],
  'Git / GitHub': [
    'Software Development Workflow',
  ],
    React: [
    'Frontend Development',
    'Responsive User Interfaces',
    'School Bee Admin Dashboard',
  ],
  PostgreSQL: [
    'Database Technologies',
  ],
  MongoDB: [
    'Database Technologies',
  ],
  'Git': [
    'Software Development Workflow',
  ],
  GitHub: [
    'Portfolio Project',
    'Software Development Workflow',
  ],
  Postman: [
    'API Testing',
  ],
  'VS Code': [
    'Web Application Development',
  ],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'My Education',
    period: '2017 – 2023',
    synopsis:
      'My academic journey from Intermediate MPC to a Bachelor of Technology in Electronics and Communication Engineering.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Intermediate',
        description:
          'Completed Intermediate MPC at Narayana Junior College.',
        tags: ['Intermediate', 'MPC'],
        runtime: '2017 – 2019',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'B.Tech in ECE',
        description:
          "Completed Bachelor of Technology in Electronics and Communication Engineering at Bapatla Women's Engineering College.",
        tags: ['B.Tech', 'ECE'],
        runtime: '2019 – 2023',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'My First Professional Journey',
    period: 'Aug 2023 – Oct 2024',
    synopsis:
      'Started my professional career as an Associate Software Engineer at Syneix Software Solutions.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Frontend Development',
        description:
          'Developed web application interfaces using HTML, CSS, JavaScript, and Bootstrap.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        runtime: 'Aug 2023 – Oct 2024',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'Backend Integration',
        description:
          'Worked with Python, Django, MySQL, and REST APIs to support application functionality and frontend-backend integration.',
        tags: ['Python', 'Django', 'MySQL', 'REST APIs'],
        runtime: 'Syneix Software Solutions',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'My Current Role',
    period: 'Oct 2024 – Present',
    synopsis:
      'Continuing my professional journey as an Associate Software Engineer at Mythri Ojas Technologies.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Responsive Web Development',
        description:
          'Developing responsive user interfaces using HTML, CSS, JavaScript, Bootstrap, and Django templates.',
        tags: ['Frontend', 'Responsive Design', 'Django'],
        runtime: 'Oct 2024 – Present',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Application Development',
        description:
          'Working on dynamic web functionality, application features, backend integration, testing, and debugging.',
        tags: ['Web Applications', 'Integration', 'Testing'],
        runtime: 'Mythri Ojas Technologies',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'My Academic Projects',
    period: 'B.Tech',
    synopsis:
      'Worked on academic projects involving embedded systems, sensors, automation, and IoT.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Smart Helmet for Mining Workers',
        description:
          'Worked on a smart helmet using an MQ-2 gas sensor, DHT11 temperature and humidity sensor, ESP8266, GSM modem, emergency switch, LCD, and buzzer.',
        tags: ['IoT', 'Embedded Systems', 'Sensors'],
        runtime: 'Academic Project',
        palette: jade,
      },
      {
        code: 'S04 E02',
        title: 'Automatic Door Opening System',
        description:
          'Worked on an automatic door opening system using an IR sensor for sensor-based operation.',
        tags: ['IR Sensor', 'Automation', 'Embedded Systems'],
        runtime: 'Academic Project',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'My Next Chapter',
    period: 'Present',
    synopsis:
      'Continuing to develop my skills and grow as a software developer.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Growing as a Developer',
        description:
          'Focused on developing responsive web applications and strengthening my knowledge of frontend development, Python, and Django.',
        tags: ['Frontend Development', 'Python', 'Django'],
        runtime: 'Ongoing',
        palette: violet,
      },
    ],
  },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Programming Language', title: 'Python', detail: 'Programming and application development', palette: amber },
  { label: 'Frontend Development', title: 'HTML · CSS · JavaScript', detail: 'Responsive and user-friendly interfaces', palette: crimson },
  { label: 'Backend Development', title: 'Python · Django', detail: 'Backend logic and web application development', palette: ocean },
  { label: 'Healthcare Project', title: 'Parkway Digital Healthcare', detail: 'Digital healthcare solution', palette: violet },
  { label: 'Academic Project', title: 'Smart Helmet', detail: 'IoT · Embedded Systems · Worker Safety', palette: jade },
  { label: 'Automation Project', title: 'Automatic Door System', detail: 'IR Sensor · Embedded Systems', palette: amber },
  { label: 'Leadership', title: 'BECTAGON 2K23', detail: 'Student Coordinator · National Techno-Cultural Program', palette: ocean },
  { label: 'Certification', title: 'Web Development', detail: 'Internshala', palette: jade },
  { label: 'Current Focus', title: 'Frontend Development', detail: 'React · Python · Django', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: [
      "Bapatla Women's Engineering College",
      '2019 – 2023',
    ],
    chips: ['Electronics & Communication Engineering'],
  },
  {
    kicker: 'Skills',
    title: 'Frontend & Backend',
    lines: [
      'HTML, CSS, JavaScript, Bootstrap',
      'Python, Django, REST APIs, SQL',
    ],
    chips: ['Python', 'JavaScript', 'Django', 'MySQL'],
  },
  {
    kicker: 'Experience',
    title: 'Associate Software Engineer',
    lines: [
      'Mythri Ojas Technologies',
      'Oct 2024 – Present',
    ],
    chips: ['Web Development', 'Responsive UI'],
  },
  {
    kicker: 'Previous Experience',
    title: 'Software Development',
    lines: [
      'Syneix Software Solutions',
      'Aug 2023 – Oct 2024',
    ],
    chips: ['Python', 'Django', 'MySQL'],
  },
  {
    kicker: 'Projects',
    title: 'Academic Projects',
    lines: [
      'Smart Helmet for Mining Workers',
      'Automatic Door Opening System',
    ],
    chips: ['IoT', 'Embedded Systems', 'Automation'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: [
      'Student Coordinator — BECTAGON 2K23',
      'NSS Volunteer — Community Health & Awareness',
      'Fest Coordinator — Bapatla Women’s Engineering College',
    ],
    chips: ['Leadership', 'Event Coordination', 'Community Service'],
  },
  {
    kicker: 'Certified',
    title: 'Certifications',
    lines: [
      'VLSI Virtual Internship — 1Stop',
      'Web Development — Internshala',
      'C Programming — Quiz Participation',
    ],
  },
  {
    kicker: 'Current Mission',
    title: 'Growing as a Developer',
    lines: [
      'Building responsive web applications',
      'Strengthening my frontend and backend development skills',
    ],
    chips: ['Frontend', 'Python', 'Django'],
  },
];
export type ProfileId = 'Sindhu Priya' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
  id: 'Sindhu Priya',
  name: 'Sindhu Priya',
  blurb: 'The full series, in order',
  color: '#e5132b',
  order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
},
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 9 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
