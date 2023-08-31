//edit this file to for customizing all the different text to actually match your experiences
import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    Navierre,
    shopify,
    carrent,
    jobit,
    threejs,
    SET,
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
      title: "Fullstack Development",
      icon: web,
    },
    {
      title: "Systems Applications",
      icon: mobile,
    },
    {
      title: "AIML Engineering",
      icon: backend,
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
      title: "Co-Founder and Vice President",
      company_name: "Student Enrichment Tutoring",
      icon: SET,
      iconBg: "#383E56",
      date: "Aug 2020 - May 2021",
      points: [
        "Founded a non-profit organization providing computer science and math tutoring to 36 students during the pandemic", 
        "Developed tailored curricula for 12 students, delivering 70+ hours of instruction to achieve up to 15% grade improvements"
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Navierre",
      icon: Navierre,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - Aug 2023",
      points: [
        "Performed comprehensive testing of the Navierre android App, logging and addressing over 20 crashes and vulnerabilities",
        "Collaborated in MLOps to preprocess and analyze datasets, contributing to a machine learning model that grades users’ health risk factors on a scale from 1 to 5",
        "Developed proficiency in diagnosing and resolving technical issues",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "General Autonomy",
      iconBg: "#383E56",
      date: "Jul 2023 - Present",
      points: [
        "Pioneered a modular backend employing abstraction, polymorphism, and AI to automate up to 70% of the risk analysis process for autonomous systems",
        "Generalized codebase to work for multiple safety assessment methods including HARA, STPA, and TARA",
        "Implemented a DAG infrastructure for traceable Session graphs, integrating JSON and XML serialization for data storage into NoSQL database",
        "Established web APIs using Django and RestAPI, enabling seamless integration between backend and Node.js frontend hosted on AWS",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };