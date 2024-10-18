import React from "react";
import ProjectCard from "./projectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h2 className="text-2xl md:text-4xl font-bold mb-12">Projects</h2>

      <div className="grid grid-cols-1 sm:ml-6 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        <ProjectCard
          title="Wedding Website"
          description="This is a Wedding Planner website created by HTML, CSS and JS with some component libraries for better user experience and styling."
          image="/images/project1.png"
          demourl="https://wedding-planner-website-liard.vercel.app/"
          codeurl="#"
        />
        <ProjectCard
          title="Ecommerce Website"
          description="This is a ZULU Shoes Ecommerce website created by HTML, CSS and JS with some component libraries for better user experience and styling."
          image="/images/project2.png"
          demourl="https://internship-pakistan-task-4.vercel.app/"
          codeurl="#"
        />
        <ProjectCard
          title="Techforcepakistan "
          description="This is a Wedding Planner website created by HTML and CSS with some component libraries for better user experience and styling.."
          image="/images/project3.png"
          demourl="https://js-website-8cddd.web.app/"
          codeurl=""
        />
        <ProjectCard
          title="Event Website"
          description="A fully functional e-commerce store with a modern UI, built using Next.js and styled with Tailwind CSS."
          image="/images/project4.png"
          demourl="https://web4-ef5db.web.app/"
          codeurl="https://github.com/Siddiqa77/Portfolio/tree/main/Event%20website%20project"
        />
        <ProjectCard
          title=" NextJS Portfolio"
          description="A personal portfolio showcasing various web development projects. Developed using HTML, Next.js, and Tailwind CSS."
          image="/images/project5.png"
          demourl="https://siddiqaportfolio.vercel.app/"
          codeurl="#"
        />
        <ProjectCard
          title="Image Gallery"
          description="A responsive Image Gallery with Large Image interface  With HTML and CSS by using some libraries."
          image="/images/project6.png"
          demourl="https://code-alpha-image-gallery-rho.vercel.app/"
          codeurl="https://github.com/Siddiqa77/CodeAlpha_Image_Gallery"
        />
      </div>
    </div>
  );
};

export default Projects;
