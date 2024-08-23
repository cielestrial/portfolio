import { CardType } from '../components/projects/ProjectCard';

import junkyard from '~/assets/junkyard-of-shangri-la/junkyard-of-shangri-la_light_mode.jpg';
import rightdrive from '~/assets/rightdrive-dev-test/rightdrive-dev-test_page1.jpg';
import wbtracker from '~/assets/wbtracker/wbtracker_home.png';
import yspm from '~/assets/yspm/yspm_landing_page_light_mode.png';

export const projects: Omit<
  CardType,
  | 'setShowProjectView'
  | 'order'
  | 'setSelectedProject'
  | 'setGridEffect'
  | 'withEffect'
>[] = [
  {
    title: 'Junkyard of SL',
    technologies: [
      'Python',
      'FastAPI',
      'Redis',
      'Nuxt',
      'Vue',
      'TypeScript',
      'Tailwind'
    ],
    description: [
      'A website that displays content from an online bookstore while providing additional functionality.',
      'Developed a robust backend with Python, FastAPI and Redis, to facilitate efficient web scraping for products within an online bookstore.',
      'Designed succinct frontend with Vue, Nuxt, TypeScript and Tailwind.',
      'Provided an inclusive experience for a wide range of users through comprehensive support for screen readers and keyboard navigation.'
    ],
    image: junkyard,
    link: 'https://junkyard-of-shangri-la.onrender.com',
    status: 'Release'
  },

  {
    title: 'YSPM',
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Figma',
      'SQLite',
      'PostgreSQL'
    ],
    description: [
      'A universal app that allows users to manage Spotify playlists, view genres, and subscribe a playlist to genres or even other playlists.',
      'Developed a cross-platform application with Expo and React Native that is available as both a website and an Android app, with plans for an iOS release in the future.',
      'Designed an intuitive user interface that supports key features such as the creation of genre-based playlists, providing users with a personalized and curated listening experience.',
      'Innovated functionality for playlist subscriptions, allowing users to follow and stay updated on their favorite playlists effortlessly.',
      "Provided users with cross-platform access to their data through Supabase's PostgreSQL database alongside a local cache with WatermelonDB's SQLite database."
    ],
    image: yspm,
    link: 'https://yspm.app',
    status: 'Release'
  },

  {
    title: 'RD Dev Test',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Material UI',
      'Express',
      'Redis',
      'Vitest',
      'React Testing Library'
    ],
    description: [
      'A website that provides comprehensive information on the top 40 cryptocurrencies.',
      'Prioritized accessibility by adhering to the Web Content Accessibility Guidelines, implementing features such as screen reader support and keyboard navigation for an inclusive experience.',
      "Demonstrated expertise in implementing advanced features, including caching mechanisms, rate limiting, and exponential backoff, contributing to the app's efficiency and reliability."
    ],
    image: rightdrive,
    link: 'https://rightdrive-dev-test.netlify.app',
    status: 'Release'
  },

  {
    title: 'WB Tracker',
    technologies: ['HTML/CSS', 'Bootstrap', 'JavaScript'],
    description: [
      "A static web app that on surveys, tracks and graphs a user's mental health over an extended period of time.",
      'Enabled users to participate in mental health surveys, providing a valuable tool for self-reflection and tracking mental health trends over time.',
      'Developed graphing features to visualize mental health data trends, empowering users to gain insights into their well-being and fostering a proactive approach to mental health management.'
    ],
    image: wbtracker,
    link: 'https://wbtracker.onrender.com',
    status: 'Release'
  }
];
