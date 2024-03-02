import Anpha from "../assets/logoanpha.jpg";
import CSS from "../assets/technologies/css.png";
import FIGMA from "../assets/technologies/figma.png";
import HTML from "../assets/technologies/html.png";
import JAVASCRIPT from "../assets/technologies/javascript.png";
import MONGO from "../assets/technologies/mongodb.png";
import NODE from "../assets/technologies/nodejs.png";
import REACT from "../assets/technologies/reactjs.png";
import REDUX from "../assets/technologies/redux.png";
import TAILWIND from "../assets/technologies/tailwind.png";
import TYPESCRIPT from "../assets/technologies/typescript.png";
import NEXT from "../assets/technologies/nextjs.png";
import ANTD from "../assets/technologies/antd.png";
import GIT from "../assets/technologies/git.png";
import Project01 from "../assets/project1.webp";
import Project02 from "../assets/project2.jpg";

export const menuHeader = [
  {
    title: "About",
    path: "#about",
    delay: 400,
  },
  {
    title: "Work Experience",
    path: "#workexperience",
    delay: 500,
  },
  {
    title: "Skills",
    path: "#technologies",
    delay: 600,
  },
  {
    title: "Project",
    path: "#project",
    delay: 700,
  },
  {
    title: "Contact",
    path: "#contact",
    delay: 800,
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Acom",
    icon: Anpha,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    technology:
      "HTML, CSS, Javascript, Typescript, ReactJS, Redux-saga, Redux, TailwindCSS, Ant Design, MySQL, NodeJS, More... ",
    points: [
      "Developing and maintaining web applications using React.js, Typescript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Acom",
    icon: Anpha,
    iconBg: "#383E56",
    date: "June 2022 - Present",
    technology:
      "HTML, CSS, Javascript, Typescript, ReactJS, Redux-saga, Redux, TailwindCSS, Ant Design, MySQL, NodeJS, More... ",
    points: [
      "Developing and maintaining web applications using React.js, Typescript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: HTML,
    transition: 0.3,
  },
  {
    name: "CSS 3",
    icon: CSS,
    transition: 0.6,
  },
  {
    name: "JavaScript",
    icon: JAVASCRIPT,
    transition: 0.9,
  },
  {
    name: "TypeScript",
    icon: TYPESCRIPT,
    transition: 1.2,
  },
  {
    name: "React JS",
    icon: REACT,
    transition: 1.5,
  },
  {
    name: "Next JS",
    icon: NEXT,
    transition: 1.8,
  },
  {
    name: "Redux Toolkit",
    icon: REDUX,
    transition: 2.1,
  },
  {
    name: "Tailwind CSS",
    icon: TAILWIND,
    transition: 2.4,
  },
  {
    name: "Ant Design",
    icon: ANTD,
    transition: 2.7,
  },
  {
    name: "Node JS",
    icon: NODE,
    transition: 3,
  },
  {
    name: "MongoDB",
    icon: MONGO,
    transition: 3.3,
  },

  {
    name: "git",
    icon: GIT,
    transition: 3.6,
  },
  {
    name: "figma",
    icon: FIGMA,
    transition: 3.9,
  },
];

export const projects = [
  {
    name: "Shop Card",
    description:
      "Build user UX/UI, show products, search by brands, type, price and sort, shopping cart, others...",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "nodejs",
        color: "text-[#ADFF2F]",
      },
      {
        name: "mongodb",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-purple-500",
      },
    ],
    image: Project01,
    source_code_link: "https://github.com/PhongThanh0907/Shop-Ecommerce-V2",
  },
  {
    name: "Porfolio",
    description: "Build UX/UI, Animation, Show information",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "three",
        color: "text-[#ADFF2F]",
      },
      {
        name: "framer-motion",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-purple-500",
      },
    ],
    image: Project02,
    source_code_link: "https://github.com/PhongThanh0907/My-Porfolio-V2",
  },
  {
    name: "Porfolio",
    description: "Build UX/UI, Animation, Show information",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "three",
        color: "text-[#ADFF2F]",
      },
      {
        name: "framer-motion",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-purple-500",
      },
    ],
    image: Project02,
    source_code_link: "https://github.com/PhongThanh0907/My-Porfolio-V2",
  },
  {
    name: "Porfolio",
    description: "Build UX/UI, Animation, Show information",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "three",
        color: "text-[#ADFF2F]",
      },
      {
        name: "framer-motion",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-purple-500",
      },
    ],
    image: Project02,
    source_code_link: "https://github.com/PhongThanh0907/My-Porfolio-V2",
  },
  {
    name: "Porfolio",
    description: "Build UX/UI, Animation, Show information",
    tags: [
      {
        name: "react",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "three",
        color: "text-[#ADFF2F]",
      },
      {
        name: "framer-motion",
        color: "text-green-500",
      },
      {
        name: "tailwind",
        color: "text-purple-500",
      },
    ],
    image: Project02,
    source_code_link: "https://github.com/PhongThanh0907/My-Porfolio-V2",
  },
];
