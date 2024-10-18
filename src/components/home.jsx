import React from "react";
import Typewriter from "typewriter-effect";
import avatarImg from "../assets/pic.png";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section className=" text-gray-200 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-[35] font-serif font-extrabold sm:text-6xl text-3xl mb-4 text-gray-200 md:mt-2 md:ml-[90px] lg:ml-[155px]">
              Hello, I am
              <Typewriter
                options={{
                  strings: [
                    "Siddiqa Badar",
                    "Web Developer",
                    "Graphic Designer",
                    "Digital Creator",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="mx-auto max-w-[600px]">
              <p className="mb-8 leading-relaxed text-white mt-8">
                I am a dedicated Frontend developer with a solid foundation in
                web technologies. I completed a frontend development course from{" "}
                <b>TECHFORCE PAKISTAN</b>, where I gained proficiency in HTML5,
                CSS3, and JavaScript. I have also learned TypeScript. Currently,
                I am further enhancing my skills by learning React and Next.js
                through the <b>KAMRAN KHAN TESSORI WEB 3.0 AI</b>. This advanced
                training allows me to stay at the forefront of web development,
                equipping me to build dynamic and responsive Websites using the
                latest frameworks.
                <br />
                <br />
                In addition to my development expertise, I am also a Graphic
                designer. My design skills enable me to create visually
                compelling graphics and user interfaces that enhance user
                experience and effectively communicate brand identity.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <a href="Cv.pdf.pdf" target="_blank">
                <button className="inline-flex text-black font-bold  bg-[#D105FF] border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 hover:text-gray-200 rounded text-lg md:ml-[200px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... ">
                  Download CV
                  <FaCloudDownloadAlt className="inline-block md:pt-2 ml-2" />
                </button>
              </a>
              <a href="https://github.com/Siddiqa77" target="_blank">
                <button className="ml-4 inline-flex text-black bg-[#de7c3c] border-0 py-2 px-6 font-bold focus:outline-none  hover:text-gray-200 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-[#7613E8] duration-300 ...">
                  Github
                </button>
              </a>
            </div>
          </div>
          <div className="relative flex justify-end mt-10 h-[250px] mr-[60px] mx-10 md:mb-[200px] md:mr-[15px] lg:w-[400px] lg:mt-[80px]">
            <img
              className="rounded-full h-full w-full object-cover border-8 border-[#de7c3c] lg:mr-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 md:h-[450px] lg:w-[400px] lg:h-[400px]"
              src={avatarImg}
              alt="Avatar Image"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
