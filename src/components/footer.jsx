import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    

<div>
      <footer className="bg-[#3e1355] body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="Cv.pdf.pdf">
              <div className="container flex font-serif ">
               
                <span className="pt-5 text-[20px] text-gray-50 font-bold hover:animate-spin">
                  Siddiqa Badar
                </span>
              </div>
            </a>
            <p className="mt-2 text-sm text-gray-400">
              I am a Frontend Developer feel free to contact me
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 ml-30 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font text-gray-300 font-bold tracking-widest text-sm mb-3">
                PORTFOLIO
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="./"
                    className="text-gray-400  hover:text-lg hover:text-gray-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#About"
                    className="text-gray-400 hover:text-lg  hover:text-gray-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Project
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                PROJECTS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://web4-ef5db.web.app/" alt="event website"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Projact-One
                  </a>
                </li>
                <li>
                  <a
                    href="https://siddiqaportfolio.vercel.app/" alt="Nextjs portfolio"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Project-Two
                  </a>
                </li>
                <li>
                  <a
                    href="https://web-1-bc4c0.web.app/" alt="pakola clone"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Project-Three
                  </a>
                </li>
                <li>
                  <a
                    href="https://js-website-8cddd.web.app/" alt="techforce website"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Project-Four
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                CONNECT WITH ME
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="#"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Sector 5M North Karachi
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.whatsapp.com/"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    03213661804
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gmail.com/"
                    className="text-gray-400  hover:text-lg hover:text-gray-200"
                  >
                    example@ <br />
                    gmail.com
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">
                RESOURCES
              </h2>
              <nav className="list-none mb-10">
                <li>
                <a
                    href="https://github.com/Siddiqa77?tab=repositories"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    GitHub <FaGithub className="inline ml-1 mb-1" />
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://www.linkedin.com/in/siddiqa-badar-49a5692b5/"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Linkedin <CiLinkedin className="inline text-lg" />
                  </a>
                </li>
                <li>
                <a
                    href="https://www.behance.net/siddiqa04"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Behance
                    <FaBehance className="inline ml-2 hover:text-blue" />
                  </a>
                </li>
                <li>
                <a
                    href="http://www.youtube.com/@Siddiqa-345"
                    className="text-gray-400  hover:text-lg  hover:text-gray-200"
                  >
                    Youtube
                    <CiYoutube className="inline ml-2 text-[20px] hover:text-red-700" />
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-[#ddc1ec]">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-black gap-2 font-bold text-lg text-center lg:ml-[600px] md:ml-[200px]">
              © CopyRight 2024
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="black ml-1"
                target="_blank"
              >
                @siddiqabadar
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
