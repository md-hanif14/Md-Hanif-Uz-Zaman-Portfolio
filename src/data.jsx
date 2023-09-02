import { nanoid } from 'nanoid';
import { FaBootstrap, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbBrandMongodb, TbBrandTailwind } from 'react-icons/tb';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML5 & CSS3',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Tailwind & Bootstrap',
    icon: <TbBrandTailwind className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in two frameworks of CSS which help a website look more attractive and organized.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Node JS',
    icon: <FaNodeJs className='h-16 w-16 text-emerald-500' />,
    text: 'I am a proficient Node.js developer specializing in building high-performance server-side applications and RESTful APIs. My expertise in real-time functionality, performance optimization, and code quality ensures that I create efficient and maintainable solutions.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <TbBrandMongodb className='h-16 w-16 text-emerald-500' />,
    text: 'As a skilled MongoDB developer, I excel in creating efficient and scalable database solutions. My expertise lies in designing optimized database schemas, ensuring data integrity, and harnessing MongoDB power to store, retrieve, and manipulate data effectively.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://i.ibb.co/VBvmX0H/1.png',
    url: 'https://inquisitive-rolypoly-fc8ad7.netlify.app/',
    github: 'https://github.com/md-hanif14/career-hub-react-router-project',
    title: 'First Project',
    text: 'This project is for applying jobs and to keep the applied jobs in a section. This project is made with HTML5, CSS3, Java Script, React JS and React Router. Fake data(JSON file), API fetch, Local storage, Nested route are also used to make this project.',
  },
  {
    id: nanoid(),
    img: 'https://i.ibb.co/jGNz2T5/2.png',
    url: 'https://famous-stardust-4529a5.netlify.app/',
    github: 'https://github.com/md-hanif14/legal-house-bootsrap-project',
    title: 'Second Project',
    text: 'This project is for a consultation firm of LAW. This project is made with HTML5, CSS3, Bootstrap. This project is for representation of the skills of designing with framework(Bootstrap) ',
  },
  {
    id: nanoid(),
    img: 'https://i.ibb.co/BBP28Nr/3.png',
    url: 'https://gregarious-youtiao-783cf8.netlify.app/',
    github: 'https://github.com/md-hanif14/Knowledge-cafe-react-project',
    title: 'third project',
    text: 'This project is made for reading blogs and keeping read blogs in bookmark and store the reading time. This project is made with React JS and also used API fetch and fake data(JSON file)',
  },
];
