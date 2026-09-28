// All editable portfolio content lives here. Sources: supplied resume and public
// GitHub repositories, reviewed 2026-09-29. Never add secrets to this file.
// CONFIRM all suggested skills before sharing, especially those absent from the
// resume. Proposed stacks, draft problem statements and lessons are not claims.
export const profile = {
  name: "Lim Johern",
  role: "Bachelor of Computer Science Student",
  institution: "Universiti Tunku Abdul Rahman, Kampar Malaysia",
  location: "Teluk Intan, Perak · Malaysia",
  introduction:
    "Turning ideas into useful software. I explore mobile and web development, AI and machine learning to solve practical, everyday problems.",
  availability: "Open to internships & graduate opportunities",
  internshipDates: "19 October 2026 – 16 January 2027 · 13 weeks",
  about:
    "I’m a final-year Computer Science student at Universiti Tunku Abdul Rahman in Kampar, Malaysia. My academic projects span medicine identification, accessible indoor navigation, community apps and web experiences. I’m looking for opportunities to put that learning into practice and grow alongside an experienced team.",
  interests: [
    "Software development",
    "Applied AI & computer vision",
    "Practical problem-solving",
  ],
  email: "johern20154@gmail.com",
  phone: "+60 11-5688 9686",
  phoneHref: "+601156889686",
  github: "https://github.com/johernlim",
  linkedin: "https://www.linkedin.com/in/lim-johern-9ab36a102",
  resume: {
    available: true,
    file: "resume.pdf",
    downloadName: "Lim-Johern-Resume.pdf",
  },
};

export const skills = [
  {
    name: "Programming",
    items: ["Python", "Java", "JavaScript", "SQL", "HTML/CSS", "C++"],
  },
  {
    name: "Web & software",
    items: [
      "React",
      "React Native",
      "Node.js",
      "Git",
      "GitHub",
      "Android development",
    ],
  },
  {
    name: "AI & machine learning",
    items: [
      "YOLO",
      "OpenCV",
      "Computer vision",
      "scikit-learn",
      "Logistic regression",
      "OpenAI API integration",
    ],
  },
  {
    name: "Databases",
    items: [
      "Relational databases",
      "SQL queries",
      "Database design",
      "Firebase",
    ],
  },
  { name: "Interactive development", items: ["Unity", "VR", "AR"] },
];

export const education = [
  {
    qualification: "Bachelor of Computer Science (Honours)",
    institution: "Universiti Tunku Abdul Rahman (UTAR)",
    location: "Kampar, Malaysia",
    dates: "January 2024 – Present",
    note: "Expected graduation: January 2027 ",
  },
  {
    qualification: "Foundation in Science",
    institution: "Universiti Tunku Abdul Rahman (UTAR)",
    location: "Kampar, Malaysia",
    dates: "October 2022 – January 2024",
    note: "Technological Science Stream",
  },
];

export const experience = {
  title: "Ready for the next chapter.",
  description:
    "Seeking an internship where I can contribute to real software, learn from code reviews and build on my academic project experience.",
  note: "Professional experience will be added here when available. Explore the projects above for my current academic work.",
};

const lessonsDraft =
  "Draft — add a specific challenge, what you learned and what you would improve. Personal reflections have not yet been supplied.";
export const projects = [
  {
    id: "medisnap",
    title: "MediSnap",
    category: "AI / MOBILE",
    date: "Mar – Sep 2026",
    featured: true,
    subtitle: "AI Medicine Identifier & Tracker",
    description:
      "A final-year project bringing medicine identification, reminders and an AI chatbot into a React Native app.",
    stack: ["React Native", "YOLO", "Firebase", "FastAPI", "OpenAI API"],
    github: "https://github.com/johernlim/MediSnap",
    demo: null,
    source:
      "Resume + public repository. Live recognition accuracy is not verified in the repository.",
    details: {
      Problem:
        "Draft framing — explore how a mobile app can help people identify and keep track of medicines.",
      Approach:
        "The repository describes an Expo / React Native app and a FastAPI recognition pipeline using YOLO detection, visible evidence extraction and Malaysian NPRA product matching.",
      Features:
        "The resume lists medicine identification, an AI chatbot, reminders, authentication, real-time sync and push notifications. The repository notes that live model setup and real-image evaluation remain unverified.",
      Contribution:
        "The resume credits building the React Native app and integrating the chatbot and Firebase features. A more detailed breakdown of personal ownership is still to be added.",
      "Lessons learned": lessonsDraft,
    },
  },
  {
    id: "charitylink",
    title: "CharityLink",
    category: "MOBILE / COMMUNITY",
    date: "Mar – Apr 2026",
    subtitle: "Mobile Application",
    description:
      "A mobile application with location-based discovery and real-time conversations, backed by Firebase services.",
    stack: ["Firebase Auth", "Firestore", "Firebase Storage"],
    github: null,
    demo: null,
    source: "Resume. Mobile framework and repository link to be confirmed.",
    details: {
      Problem:
        "Draft framing — help people discover nearby opportunities and communicate within a charity-focused app.",
      Approach:
        "Integrate location-based discovery with Firebase authentication, database and file storage services.",
      Features:
        "Real-time chat, unread tracking, notifications and location-based discovery are listed in the resume.",
      Contribution:
        "The resume credits developing chat and integrating discovery with Firebase. Team structure and exact ownership are not yet documented.",
      "Lessons learned": lessonsDraft,
    },
  },
  {
    id: "navigation",
    title: "Indoor Navigation",
    category: "ACCESSIBILITY / VISION",
    date: "Jul – Sep 2025",
    subtitle: "For Visually Impaired Users",
    description:
      "QR-based indoor location detection with voice-guided directions and shortest-path routing.",
    stack: ["Python", "OpenCV", "Microsoft SAPI", "Dijkstra’s algorithm"],
    github: null,
    demo: null,
    source: "Resume. No public repository or demo provided.",
    details: {
      Problem:
        "Draft framing — explore accessible wayfinding in indoor environments for visually impaired users.",
      Approach:
        "Detect QR codes with Python and OpenCV, identify locations, then calculate routes with Dijkstra’s algorithm.",
      Features:
        "QR detection, location identification, voice-guided directions through Microsoft SAPI, shortest-path routing and recalculation.",
      Contribution:
        "The resume credits building the detection system, implementing voice directions and using shortest-path routing. User testing and deployment are not claimed.",
      "Lessons learned": lessonsDraft,
    },
  },
  {
    id: "street-food",
    title: "Street Food Explorer",
    category: "WEB / DISCOVERY",
    date: "Jul – Aug 2025",
    subtitle: "Discover food, one location at a time",
    description:
      "A responsive web application for exploring street-food locations through an interactive map, search and saved favourites.",
    stack: ["HTML/CSS", "JavaScript", "Browser storage"],
    stackNote: "Editable stack — confirm against project source.",
    github: "https://github.com/JasonToh9672/Front-End-Assignment",
    demo: "https://jasontoh9672.github.io/Front-End-Assignment/",
    source:
      "Resume. Demo is hosted by the project account linked in the resume; collaboration details are to be confirmed.",
    details: {
      Problem:
        "Draft framing — make street-food locations easier to discover and revisit.",
      Approach:
        "Combine an interactive map with search, category filtering and browser storage for saved locations and preferences.",
      Features:
        "Responsive layout, interactive map, search, category filters, image galleries and favourites, as listed in the resume.",
      Contribution:
        "The resume credits development of the web app and its discovery features. Individual versus shared ownership should be clarified.",
      "Lessons learned": lessonsDraft,
    },
  },
  {
    id: "password-manager",
    title: "Password Manager",
    category: "ANDROID / SOFTWARE",
    date: "GitHub project",
    subtitle: "Mobile Application",
    description:
      "A Java mobile application repository exploring password management. Detailed project notes are awaiting confirmation.",
    stack: ["Java", "Android"],
    stackNote: "Editable stack — confirm project dependencies.",
    github: "https://github.com/johernlim/Password-Manager-Mobile-Application",
    demo: null,
    source:
      "Public GitHub repository. Draft case study; no security or completed-feature claims.",
    details: {
      Problem:
        "Draft — describe the intended users and password-management problem.",
      Approach:
        "Draft — document the application structure and actual storage approach after reviewing the implementation.",
      Features:
        "Draft — add only verified features. Encryption, security audits and production readiness are not claimed.",
      Contribution:
        "Draft — confirm personal responsibilities and whether this was individual or team work.",
      "Lessons learned": lessonsDraft,
    },
  },
];
