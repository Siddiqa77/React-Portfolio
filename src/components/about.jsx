import React from "react";
 import AboutImg from "../assets/working.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30  p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row relative-flex justify-center">
          <img className="h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-full object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Dedicated Frontend Developer with a strong foundation in web technologies and a
                 passion for creating dynamic, user-friendly web applications. Proficient in HTML5,
                  CSS3, JavaScript, and TypeScript, with hands-on experience in modern frameworks like React and Next.js.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Graphic Designer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                My background in graphic design enhances my ability to create engaging user 
                interfaces that not only meet functional requirements but also provide 
                an exceptional user experience.  My expertise in Adobe Illustrator and Photoshop 
                allows me to design engaging graphics and user interfaces that enhance user
                 experience and effectively communicate brand identity.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Digital Creator
                </h1>
                <p className="text-sm md:text-md leading-tight">
                 As a Digital Creator, I understand SEO optimization and digital
                  marketing strategies to enhance content visibility and engagement. My
                   strong collaboration and communication skills enable me to work 
                   effectively with teams and clients, ensuring impactful brand development and storytelling across digital platforms.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
