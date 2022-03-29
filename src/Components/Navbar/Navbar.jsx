import React, { useState } from "react";
import { MenuAlt2Icon, PaperAirplaneIcon, XIcon } from "@heroicons/react/solid";

import Navlinks from "../Navlinks/Navlinks";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navLinks = [
    { link: "/", name: "Home", id: 1 },
    { link: "/coins", name: "Coins", id: 1 },
    { link: "/about", name: "About", id: 2 },
    { link: "/contact", name: "Contact", id: 3 },
  ];
  return (
    <nav className="sticky top-0 h-20 md:flex justify-between items-center px-4 md:px-10 bg-gray-700">
      <div className="flex items-center justify-between h-20 ">
        <div className="flex items-center ">
          <PaperAirplaneIcon className="w-10 md:w-11 text-red-500"></PaperAirplaneIcon>
          <span className="text-5xl  font-mono font-bold ml-1">
            Web<span className="text-red-500">pro</span>
          </span>
        </div>
        <div
          className=" duration-500 transition-all md:hidden text-red-500"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {!openMenu ? (
            <MenuAlt2Icon className="w-8"></MenuAlt2Icon>
          ) : (
            <XIcon className="w-8"></XIcon>
          )}
        </div>
      </div>
      <ul
        onClick={() => setOpenMenu(!openMenu)}
        className={`md:flex gap-5 h-[89vh] md:h-auto scroll-smooth  text-2xl absolute md:static md:top-auto top-20 w-full md:w-auto md:bg-transparent  bg-slate-600 text-white  duration-700 ${
          openMenu ? "left-0" : "left-[-100%]"
        }`}
      >
        {navLinks.map((link) => (
          <Navlinks link={link} key={link.id}></Navlinks>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
