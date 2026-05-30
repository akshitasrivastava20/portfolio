import { HomeIcon, NotebookIcon } from 'lucide-react'

export const DATA = {
  name: 'Akshita Srivastava',
  initials: 'AS',
  url: 'https://www.akshita.dev/',
  location: 'Meerut, India',
  locationLink: 'https://www.google.com/maps/place/meerut',
  description:
    'Software Developer and Open Source Enthusiast. I thrive on solving problems and crafting digital experiences. Always up for a game of chess or a deep dive into anime.',
  summary:
    'At the end of 2023, I decided to fully commit to building and scaling my own projects, including innovative web applications and contributions to open-source initiatives. At present, [I am pursuing a degree in computer science and engineering](/#education), [contributed in open source projects](https://github.com/devxoshakya), and [competed in hackathons for fun](/#hackathons).',
  avatarUrl: '/me.jpeg',
  skills: [
    'React',
    'Next.js',
    'Javascript',
    'Typescript',
    'Node.js',
    'Python',
    'MongoDB',
    'Postgres',
    'Docker',
    'Git/Github',
    'TailwindCSS',
    'Github Actions',
    'Linux',
    'Java',
    'C',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'akshita.srivastava.1505@gmail.com',
    tel: '+919045200167',
  },

  work: [
    {
      company: 'Github',
      href: 'https://github.com/akshitasrivastava20',
      badges: [],
      location: 'Remote',
      title: 'Open Source Contributor',
      logoUrl: '/github.png',
      start: 'August 2023',
      end: 'Present',
      description:
        'Contributed to multiple public projects and the AMVSTRM API repo, collaborating globally with developers to foster innovation and drive success.',
    },
    {
      company: 'Hacktoberfest 2023',
      href: 'https://hacktoberfest.digitalocean.com',
      badges: [],
      location: 'Remote',
      title: 'Open Source Contributor / Web Developer',
      logoUrl: '/hacktober.jpeg',
      start: 'October 2023',
      end: 'November 2023',
      description:
        "Contributed to GESCOE in Hacktoberfest by enhancing the E-Library with React.js, JavaScript, and CSS. Optimized navigation and login, integrated Firebase and SQL with Express.js, and added 'Contact Us' and 'Terms and Services' sections, showcasing full-stack development skills.",
    },
  ],
  education: [
    {
      title: 'Meerut Institute of Engineering and Technology',
      dates: 'August 2023 - Present',
      location: 'Bachelor of Technology in Computer Science Engineering',
      description: 'Achieved an average grade of 9.14 SGPA ',
      image: '/miet.jpeg',
      links: [],
    },
    {
      title: 'City Vocational Public School',
      dates: 'April 2022 - May 2023',
      location: 'Higher Secondary Certificate',
      description:
        'Achieved a remarkable 9.74 CGPA, securing the rank 1 in school and earning an academic excellence award from Vidya Bharati.',
      image: '/school.jpeg',
      links: [],
    },
  ],
  projects: [
    {
      title: 'Anveshna.',
      href: 'https://anveshna.akshita.dev/',
      dates: 'May 2024 - July 2024',
      active: true,
      description:
        'Anveshna is an anime streaming website that lets you watch your favorite anime 🌸',
      technologies: [
        'React',
        'Typescript',
        'Node.js',
        'Express',
        'Tailwind',
        'Aceternity UI',
        'Anilist API',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://anveshna.akshita.dev/',
        },
        {
          type: 'Github',
          href: 'https://github.com/akshitasrivastava20/anveshnahono',
        },
      ],
      image: '',
      video:
        'https://github.com/devxoshakya/portfolio/raw/main/public/videos/anveshna.mp4',
    },
    
    {
      title: 'MIET Results',
      href: 'https://miet-results.devxoshakya.xyz',
      dates: 'June 2024 - July 2024',
      active: true,
      description:
        'A web scraper to get AKTU University results of all students of Meerut Institute of Engineering and Technology.',
      technologies: [
        'React',
        'Javascript',
        'Node.js',
        'Express',
        'Tailwind',
        'AWS',
        'Cheerio',
        'Postman',
      ],
      links: [],
      image: '',
      video:
        'https://github.com/devxoshakya/portfolio/raw/main/public/videos/miet-result.mp4',
    },
    {
      title: 'Watcher.',
      href: 'https://watcher-01.vercel.app',
      dates: 'March 2024',
      active: true,
      description:
        'A WebApp to watch movies and organize watch parties together with your friends.',
      technologies: [
        'React',
        'Javascript',
        'Node.js',
        'SCSS',
        'Express',
        'ZegoCloud API',
      ],
      links: [],
      image: '',
      video:
        'https://github.com/devxoshakya/portfolio/raw/main/public/videos/watcher.mp4',
    },
  ],
  hackathons: [
    {
      title: 'Hackfest 1.0',
      dates: 'April 22nd, 2024',
      location: 'Meerut, Uttar Pradesh',
      description:
        'Developed a Responsive Web Application which allows users to find and book appointments with doctors ',
      image: '/hackfest.png',
      links: [],
    },
    {
      title: 'DevGathering',
      dates: 'March 30th - 31st, 2024',
      location: 'Meerut, Uttar Pradesh',
      description:
        'Developed a Web Application which allows users to share thier screen and do watch parties with others.',
      image: '/devGathering.jpeg',
    },
  ],
} as const
