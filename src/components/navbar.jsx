import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";


const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-2xl font-bold tracking-wide hover:animate-spin">Siddiqa Badar</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        }     mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0 mr-5 text-xl hover:bg-[#D105FF] hover:p-2 hover:rounded-2xl cursor-pointer">
            About
          </li>
        </a>
        <a href="#Skill">
          <li className="text-md transition-all duration-300 p-1 md:p-0 mr-5 text-xl hover:bg-[#D105FF] hover:p-2 hover:rounded-2xl cursor-pointer">
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 mr-5 text-xl hover:bg-[#D105FF] hover:p-2 hover:rounded-2xl cursor-pointer">
            Projects
          </li>
        </a>
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 mr-5 text-xl hover:bg-[#D105FF] hover:p-2 hover:rounded-2xl cursor-pointer">
            Contact
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => {
            openMenu(true);
            setShowmenu(false);
          }}
        />
      ) : (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => 
            openMenu(false);
            setShowmenu(true);
          }
        />
      )}
    </nav>
  );
};

export default Navbar;
