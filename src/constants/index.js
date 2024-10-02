export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Work Experience',
    href: '#work',
  },
  // {
  //   id: 5,
  //   name: 'Contact',
  //   href: '#contact',
  // },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: 'Emily Johnson',
//     position: 'Marketing Director at GreenLeaf',
//     img: 'assets/review1.png',
//     review:
//       'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
//   },
//   {
//     id: 2,
//     name: 'Mark Rogers',
//     position: 'Founder of TechGear Shop',
//     img: 'assets/review2.png',
//     review:
//       'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
//   },
//   {
//     id: 3,
//     name: 'John Dohsas',
//     position: 'Project Manager at UrbanTech ',
//     img: 'assets/review3.png',
//     review:
//       'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
//   },
//   {
//     id: 4,
//     name: 'Ether Smith',
//     position: 'CEO of BrightStar Enterprises',
//     img: 'assets/review4.png',
//     review:
//       'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
//   },
// ];

export const myProjects = [
  {
    title: 'Know The Mood',
    desc: 'Machine Learning model predict person\'s mood from facial expressions.',
    subdesc:
      ['Used OpenCV libraries and other data to train model',
        'used more than 10000+ images.'
      ],
    href: 'https://drive.google.com/file/d/1h1t1YpITN3dp5Mm_R-w1NINAhsnjsRHR/view?usp=sharing',
    texture: '/textures/project/know_the_mood.mp4',
    logo: '/assets/know_the_mood.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'OpenCV',
        path: '/assets/openCV.png',
      },
      {
        id: 2,
        name: 'python',
        path: 'assets/python.jpg',
      },
    ],
  },
  {
    title: 'Ipad Calculator Clone',
    desc: "Built clone of Ipad's newly introduced calcultor application.",
    subdesc: ["Used Gemini api to interpret user's input through drawing board",
      "can solve matematical equations, and other geometry based inerpretations as well"],
    href: 'https://drive.google.com/file/d/1wPnbKJJpHD4a70OFJTVIfTiAcw5GrdkD/view?usp=sharing',
    texture: '/textures/project/ical.mp4',
    logo: '/assets/ical.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'python',
        path: '/assets/python.jpg',
      },
    ],
  },
  {
    title: 'Realtime Song Listening',
    desc: 'Two remote users can listen music together by connecting to each other',
    subdesc:
      ["Architected a real-time audio streaming application for 2 users",
        "Crafted application to upload up to 200 songs per user.",
        "Deployed cutting-edge web technologies to reduce latency to a mere 10 milliseconds."
      ],
    href: 'https://github.com/jayparekh4801/SoShare',
    texture: '/textures/project/music.mp4',
    logo: '/assets/music.jpeg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/angular.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'mongodb',
        path: '/assets/mongodb.png',
      },
      {
        id: 5,
        name: 'nodejs',
        path: '/assets/nodejs.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Infocusp Innovations',
    pos: 'Software Engineer',
    duration: 'June 2022 - July 2024',
    title: ["Developed a robust pipeline to efficiently pre-process 10 petabytes of data daily for machine learning models",
      "Teamed up with colleagues to develop and deploy an EfficientNet model for detecting seismic events across data from over 10 locations.",
      "Achieved a remarkable 99% accuracy in seismic event detection model, enhancing predictive capabilities."],
    icon: '/assets/infocusp.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Crest Data Systems',
    pos: 'Software Engineer',
    duration: 'Jan 2022 - May 2022',
    title: ["Communicated technical updates clearly while enhancing a resource management tool, improving dashboard functionality for over 1,000 employees.",
      "Assembled on 5+ key dashboard features, including authentication, OTP login, and employee data requests.",
      "Initiated and led refactoring of project with a team of 4 developers."
    ],
    icon: '/assets/crest_data.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Goodera',
    pos: 'Software Engineer',
    duration: 'June 2021 - December 2021',
    title: ["Automated company’s non-profit collaboration process, saving approximately 30 hours per week.",
      "Increased reach of new non-profits by 50% through automated system.",
      "Created a comprehensive dashboard to track collaborations, efficiently managing data for over 40,000 non - profits."
    ],
    icon: '/assets/goodera.png',
    animation: 'salute',
  },
];
