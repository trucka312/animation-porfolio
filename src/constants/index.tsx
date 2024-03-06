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
import Japancupid from "../assets/japancupid.png";
import Pancake from "../assets/pancake.png";
import TMDB from "../assets/themoviedb.png";
import Meetmax from "../assets/meetmax.png";
import Ecom from "../assets/ecommer.png";

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
    company_name: "NTQ Solution JSC",
    icon: Anpha,
    iconBg: "#383E56",
    date: "Feb 2022 - Jan 2023",
    technology:
      "HTML, CSS, Javascript, Typescript, ReactJS, Redux, TailwindCSS, Ant Design, MySQL, PHP Laravel,... ",
    points: [
      "Developing and maintaining web applications using React.js, PHP and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Luvina JSC",
    icon: Anpha,
    iconBg: "#383E56",
    date: "Jan 2023 - Jan 2024",
    technology:
      "HTML, CSS, Javascript, Typescript, ReactJS, AngularJS, NextJS, Redux, TailwindCSS, Ant Design... ",
    points: [
      "Leveraging advanced expertise in React.js and Typescript, I lead the development and continuous enhancement of sophisticated web applications. Engaging with multifaceted teams, which include design visionaries, product strategists, and fellow developers, I play a pivotal role in crafting cutting-edge products of exceptional quality.",
      "Meticulously implementing responsive design principles, I ensure an optimal user experience across diverse devices and browsers. My responsibilities extend to the forefront of technology, where I stay abreast of the latest advancements, integrating them seamlessly into the development workflow for optimal performance and innovation.",
      "A key contributor to the software development lifecycle, I actively participate in meticulous code reviews, providing insightful feedback and fostering a collaborative environment for continuous improvement. My commitment to excellence drives the creation of scalable and efficient frontend solutions that elevate the user interface to unparalleled standards.",
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
    name: "Japan cupid",
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
    image: Japancupid,
    source_code_link: "#",
  },
  {
    name: "PancakeSwap",
    description: "Build UX/UI, Animation, Show information, design chart",
    tags: [
      {
        name: "nextjs 12",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "graphql",
        color: "text-[#ADFF2F]",
      },
      {
        name: "redux saga",
        color: "text-green-500",
      },
      {
        name: "tailwind CSS",
        color: "text-purple-500",
      },
    ],
    image: Pancake,
    source_code_link: "https://github.com/trucka312/pancake",
  },
  {
    name: "TMDB",
    description: "Build UX/UI, Animation, Show information",
    tags: [
      {
        name: "react JS",
        color: "text-blue-500",
      },
      {
        name: "Javascript",
        color: "text-[#00FFFF]",
      },
      {
        name: "redux toolkit",
        color: "text-green-500",
      },
      {
        name: "tailwind CSS",
        color: "text-purple-500",
      },
    ],
    image: TMDB,
    source_code_link: "https://github.com/trucka312/Reactjs_The_MovieDB",
  },
  {
    name: "Meetmax",
    description: "Build UX/UI, Handling Feature, Chat feature...",
    tags: [
      {
        name: "Nextjs 13",
        color: "text-blue-500",
      },
      {
        name: "typescript",
        color: "text-[#00FFFF]",
      },
      {
        name: "socket.io",
        color: "text-[#ADFF2F]",
      },
      {
        name: "Zustand",
        color: "text-green-500",
      },
      {
        name: "tailwind CSS",
        color: "text-purple-500",
      },
    ],
    image: Meetmax,
    source_code_link: "https://github.com/trucka312/nextTS_meetmax",
  },
  {
    name: "JanMarket",
    description: "Build UX/UI, Order feature, Balance, Card",
    tags: [
      {
        name: "react JS",
        color: "text-blue-500",
      },
      {
        name: "javascript",
        color: "text-[#00FFFF]",
      },
      {
        name: "zustand",
        color: "text-[#ADFF2F]",
      },
      {
        name: "antd 5",
        color: "text-green-500",
      },
      {
        name: "tailwind CSS",
        color: "text-purple-500",
      },
    ],
    image: Ecom,
    source_code_link: "https://github.com/trucka312/hihi_web_user_Reactjs",
  },
];
