import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  boy,
  admin,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
 gospel,
  docker,
  meta,
  ellis,
  starbucks,
  tesla,
  shopify,
  carrent,
  kmb,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BleauTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality applications.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Social Networks",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - sep 2024",
    points: [
      "Contributed in the development of Social Networks.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      
      "Developed and integrated secure payment features using Stripe and Paystack, ensuring seamless transactions.",

      "Utilized React Native for cross-platform development, ensuring a seamless user experienceacross Android and iOS devices.",

      "Implemented Redux, Context API for efficient state management, payment gateways e.g"
    ],
  },
  {
    title: "Web Developer",
    company_name: "RESULT TRACKING",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developed responsive web pages/components and user-friendly interfaces using HTML,CSS, JavaScript, typescript, next.js14, react-redux/toolkit, three.js, framer-motion and tailwind.",

      "Optimized load times and boosted application speed by implementing best practices, delivering a smooth and efficient user experience",
      "Implemented user authentication with Firebase Authentication and Google sign-in,enhancing security and user convenience",
      "Implemented responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Rock&Ark.org",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Debug, troubleshoot, and optimize web applications for maximum speed and scalability.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Utilizing modern frontend technologies such as Vue.js, Tailwind and JavaScript to create robust user interfaces and update features"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Amadi Sixtus is an exceptional and experienced frontend and mobile developer. When my team at Microsoft needed a highly skilled developer for a short-term contract, I reached out to Sixtus, and he delivered outstanding, high-quality work. His expertise in web and mobile animations is particularly impressive and added significant value to the project. I highly recommend him for any frontend or mobile development tasks.",
    name: " Amadi Austin (Chukwuemeka) ",
    href: "https://www.linkedin.com/in/amadiaustinchukwuemeka/",
    company: " Cloud Solution Architect at Microsoft",
    image: boy,
  },
  {
    testimonial:
      "I had the privilege of working with Sixtus Amadi at Bleautech, where he consistently demonstrated exceptional skills as a developer. He is highly knowledgeable, efficient, and always delivers tasks on time. His code is well-organized, clean, and follows best practices, making collaboration seamless. I highly recommend him for any development role, as he is both reliable and highly skilled.",
    name: "Ellis Ifoegbu",
    designation: "",
    company: "Senior Frontend Engineer (Flutter) Working At MAX · Full-time",
    image: ellis,
    href: "https://www.linkedin.com/in/ellisifoegbu/",
  },
  {
    testimonial:
      "Sixtus Amadi is a highly skilled and dependable developer with exceptional attention to detail. His ability to deliver quality work on time, combined with his expertise in frontend and mobile development, makes him a valuable asset to any team.",
    name: "Gospel (Okpara) Chinyereugo",
    designation: "",
    company: "Senior Software Engineer",
    image: gospel,
    href: "https://www.linkedin.com/in/gospel-chinyereugo/",
  },
];

const projects = [
  {
    name: "Result Tracker",
    image: carrent,
    source1_code_link: "https://gradepoint-cmkf.onrender.com",
    description:
      "The Result Tracking Management System is a comprehensive platform designed to assist students globally in calculating and monitoring their grade points. It provides a personalized dashboard where students can securely save and access their academic performance data for future reference.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },

      {
        name: "Redux/Toolkit",
        color: "green-text-gradient",
      },

      {
        name: "Three.js",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/dexsteroxy/gradePoint",
    
  },
  {
    name: "Men_Shopper",
    source1_code_link: "https://kmb-styles.ng/",
    description:
      "This e-commerce platform is designed specifically for men, offering a seamless shopping experience to  purchase clothing of their choice. The platform provides detailed information about available sizes, allowing users to make informed decisions. Once selected, users can place their orders effortlessly and complete the transaction using a secure payment method.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },

      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Redux/Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: kmb,
    source_code_link: "https://github.com/dexsteroxy/cloth_shopping_site",
  },
  {
    name: "Admin_Dashboard",
    source1_code_link: "https://admin-dashboard-ylf9.onrender.com/",
    description:
      "I built an Admin Dashboard that serves as a centralized platform for managing and monitoring various aspects of the system. It provides real-time data, performance metrics, and user management tools, making operations more efficient. With visual insights like charts and graphs, it simplifies decision-making and streamlines workflows. Additionally, I integrated features for role-based access and activity tracking to enhance system security.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "@syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },

      {
        name: "Typescript",
        color: "blue-text-gradient",
      },

    ],
    image: admin,
    source_code_link: "https://github.com/dexsteroxy/Dashboard",
  },
];

export { services, technologies, experiences, testimonials, projects };
