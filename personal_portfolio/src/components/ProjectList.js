import React from 'react';
import '../styles/ProjectList.css'
import ProjectCard from './ProjectCard';

const projectData = [
    {
      id: 1,
      title: "QTify",
      date: "Mar 2024",
      overview: "QTify is a song-browsing application built from scratch using ReactJS paired with Material UI and Swiper to deliver a seamless and aesthetic user interface, offering songs from different albums and genres for music lovers.While building this Micro-Experience, the developer:  Conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components.",
      details: [
        "Conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components.",
        "Created modular UI components including Cards, Carousels, and Buttons optimizing for reusability.",
        "Implemented an intuitive genre-based song filtering system using Material UI tabs.",
        "Utilized REST APIs to fetch data served by the backend server.",
        "Deployed the website to Vercel."
      ],
      work:[
        "Conducted a thorough analysis of the provided Figma design, successfully identifying and documenting required front-end components,Designed a reusable button component with unique styling, adaptable for various functionalities across the application.Developed a responsive navigation bar featuring a custom logo, a search component with custom styling, and a feedback button. Created an eye-catching hero section with promotional content, effectively capturing user interest."
      ],
      
      skills: ["ReactJS", "Material UI", "Swiper", "REST APIs", "Vercel","Module-scoped CSS","API Integration and Data Handling", "Condition Rendering", "Component Reusability", "Customizing Third-Party Components"],
      images: ["/images/qtify.png"], // Replace with actual image paths
      github: "https://github.com/Dineshkumarkota/qtify",
    liveLink: "https://qtify.vercel.app",
    },
    {
      id: 2,
      title: "QKart Frontend",
      date: "Dec 2023",
      overview: "QKart is an e-commerce application offering a variety of products for customers to choose from. During the course of this project,Implemented the core logic for authentication, shopping cart and checkout,Improved UI by adding responsive design elements for uniform experience across different devices,Utilized REST APIs to dynamically load and render data served by the backend server",
      details: [
        "Implemented the core logic for authentication, shopping cart, and checkout.",
        "Improved UI by adding responsive design elements.",
        "Utilized REST APIs to dynamically load and render data.",
        "Deployed website to Netlify."
      ],
      work:[
        "Scope of work,Added Cart to Products page and made it responsive,Made authenticated POST API calls to implement Cart logic,Rendered Cart with differing designs in Products page and Checkout page using conditional rendering,Implemented UI and logic to add and select new addresses"
      ],
      skills: ["ReactJS", "REST APIs", "Responsive Design", "Netlify"],
      images: ["/images/qkartFrontend.png"],
   
    liveLink: "https://dashboard.render.com/web/srv-cn6r2nljm4es73bo31l0",
    },
    {
      id: 3,
      title: "XBoard",
      date: "Oct 2023",
      overview: "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.During the course of this project,Built XBoard using HTML, CSS, Bootstrap and JavaScript from scratch,Used Accordions and Image Carousel to improve UI,Fetched news content from flipboard's RSS feed using REST API",
      details: [
        "Built XBoard using HTML, CSS, Bootstrap, and JavaScript.",
        "Fetched news content from Flipboard's RSS feed using REST API.",
        "Improved UI with accordions and image carousels.",
        "Deployed the website to Netlify."
      ],
      work:[
"Created web page for XBoard, to show news articles,Invoked API to fetch the necessary data from flipboard’s rss feed and integrate that into the web page,Implemented desktop and mobile views with reference to the Figma design,Improved UI by setting each section as an accordion and including image carousels,Deployed the dynamic webpage to Netlify"
      ],
      skills: ["HTML", "CSS", "Bootstrap", "REST API", "Netlify","ReactJS"],
      images: ["/images/xboard.png"],

    liveLink: "https://app.netlify.com/sites/xboard-news-feed-dinesh/overview",
    },
    {
      id: 4,
      title: "QTrip",
      date: "Sept 2023",
      overview: "QTrip is a travel website aimed at travellers looking for a multitude of adventures in different cities.During the course of this project,Created web pages using HTML and CSS and made them dynamic using JavaScript,Improved UX with multi-select filters, image carousels,Utilised localStorage to persist user preferences at client-side ",
      details: [
        "Created responsive web pages using HTML and CSS, made them dynamic with JavaScript.",
        "Utilized multi-select filters, image carousels, and conditional rendering.",
        "Implemented reservation form submission using fetch API.",
        "Deployed the frontend to Netlify and the backend to Render."
      ],
      work:[
        "Added a sleek image carousel using Bootstrap2,Implemented reservation logic by using Fetch API to send a POST request to the backend, on form submission,Conditionally rendered the “Sold out” panel and the reservations page based on the API response"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Netlify", "Render"],
      images: ["/images/qtrip.png"],
    
    liveLink: "https://app.netlify.com/sites/qtripdynamic-dinesh/overview",
    },
  ];
  

function ProjectList() {
  return (
    <section id="projects" className="project-list">
      <h2>My Projects</h2>
      <div className="project-cards-container">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
