import React from "react";

const ProjectCard = ({ title, description, image, demourl, codeurl }) => {
  return (
    
    <div className="p-3 md:p-6 flex flex-col w-80  bg-slate-950 shadow-xl bg-opacity-45 rounded-2xl">
      <img className="p-4 w-full h-full" src={image} alt="{}" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{description}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
       <a href={demourl}> <button className="md:mt-10 text-black py-2  rounded-3xl px-3 text-sm md:text-lg md:py-2 md:px-4  font-bold  bg-[#D105FF] border-0 focus:outline-none hover:bg-purple-600 hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          Demo
        </button>
        </a>
       <a href={codeurl}> <button className="md:mt-10 text-black py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 hover:bg-[#7613E8] font-semibold rounded-3xl bg-[#de7c3c] hover:text-gray-200 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
          Source Code
        </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;