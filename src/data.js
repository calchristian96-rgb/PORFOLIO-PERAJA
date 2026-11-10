// Edit this file to update the personal details and portfolio content.
export const personal = {
  name: 'Christian C. Peraja',
  firstName: 'Christian',
  title: 'Creative Developer & IT Student',
  tagline: 'Turning ideas into meaningful digital experiences through creativity, technology, and continuous learning.',
  email: '', // Add a verified email address when ready.
  github: '', // Add your GitHub profile URL when ready.
  photo: '/profile.jpg',
  school: 'Infotech Development System Colleges Inc.',
  degree: 'Bachelor of Science in Information Technology',
  year: '4th Year College Student'
};

export const skills = [
  { group: 'Frameworks & platforms', icon: '✳', items: [['Laravel','PHP framework'],['MERN Stack','Full-stack JavaScript'],['ASP.NET MVC / .NET MVC','Web application framework'],['Flutter','Cross-platform mobile']] },
  { group: 'Languages & web', icon: '</>', items: [['PHP','Server-side'],['C#','Programming language'],['HTML','Web structure'],['CSS','Web styling'],['JavaScript','Web programming'],['Dart','Application development']] },
  { group: 'Databases', icon: '◉', items: [['MySQL','Relational database'],['MongoDB','Document database'],['PostgreSQL','Relational database'],['Microsoft SQL Server','Relational database']] },
  { group: 'Developer tools', icon: '⌘', items: [['Git','Version control'],['GitHub','Code collaboration']] }
];

export const techMarquee = ['PHP','C#','HTML','CSS','JavaScript','Dart','Laravel','React','Node.js','Express.js','Flutter','MySQL','MongoDB','PostgreSQL','SQL Server','Git','GitHub'];

export const projects = [
  { title: 'DEVCON SUI Move Code Camp 2026', eyebrow: 'Featured · Web project', description: 'A deployed website created during the DEVCON SUI Move Code Camp 2026.', category: 'Web', role: 'Project contributor', technologies: [], image: '', live: 'https://devconsui-move-code-camp2026-level1-three-chi.vercel.app', github: '', number: '01', note: 'Add a project screenshot in assets/projects/devcon/ and set its path here.' },
  { title: 'ResQBand', eyebrow: 'Safety · Connected device', description: 'A wearable SOS alert device integrating emergency notification and GPS location transmission through LoRa communication.', category: 'IoT', role: '', technologies: [], image: '', live: 'https://sagip.space/', github: '', number: '02', note: 'Add a project screenshot in assets/projects/resqband/ and set its path here.' },
  { title: 'Water Refilling Station Management System', eyebrow: 'Management system', description: 'A management system designed to organize customer information, orders, deliveries, payments, and water container inventory.', category: 'Web application', role: '', technologies: [], image: '', live: '', github: '', number: '03', note: 'Add a project screenshot in assets/projects/water-refilling/ and set its path here.' }
];

export const certificates = [
  { title: 'Serverless Architecture for Enhanced Public Service Delivery: Use Cases for Government Agency', issuer: 'Department of Information and Communications Technology (DICT), Region V – Camarines Norte', date: 'September 30, 2025', platform: 'Zoom', image: '/Screenshot%202026-11-10%20161605.png' }
];

export const seminars = [
  { title: 'Serverless Architecture for Enhanced Public Service Delivery: Use Cases for Government Agency', organizer: 'Department of Information and Communications Technology (DICT), Region V – Camarines Norte', date: 'September 30, 2025', description: 'Attendance recorded on the supplied DICT certificate.', image: '/Screenshot%202026-11-10%20161605.png' }
];
export const achievements = [];
export const education = [{ school: personal.school, degree: personal.degree, status: personal.year, date: '' }];
