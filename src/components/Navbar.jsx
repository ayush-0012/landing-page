import React from "react";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div className="w-full text-3xl font-bold text-[#00df9a]">DATA.</div>

      <div className="hidden md:flex">
        <a className="nav">Home</a>
        <a className="nav">Company</a>
        <a className="nav">Resources</a>
        <a className="nav">About</a>
        <a className="nav">Contact</a>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <IoClose size={30} /> : <GrMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 "
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">DATA.</h1>
        <ul className="p-4 uppercase ">
          <li className="nav border-b border-b-gray-600">Home</li>
          <li className="nav border-b border-b-gray-600">Company</li>
          <li className="nav border-b border-b-gray-600">Resources</li>
          <li className="nav border-b border-b-gray-600">About</li>
          <li className="nav">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
