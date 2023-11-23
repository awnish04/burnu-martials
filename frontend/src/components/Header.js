import React from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black fixed w-full px-8 lg:px-10 py-6 z-30  flex items-center">
      <div className="flex flex-col lg:flex-row  lg:items-center w-full justify-between">
        {/* Logo */}
        <Link to={"/"} className="max-w-[200px]">
          <h1 className="text-lg lg:text-2xl text-white transition font-primary font-normal capitalize leading-tight tracking-wider ">Burnu Martial's</h1>
        </Link>

        {/* nav-initially hidden -show on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="font-semibold text-white hover:text-red-700 transition"
          >
            Home  
          </Link>

          <Link
            to={"/about"}
            className="font-semibold text-white hover:text-red-700 transition"
          >
            About
          </Link>

          <Link
            to={"/services"}
            className="font-semibold text-white hover:text-red-700 transition"
          >
            Services
          </Link>

          <Link
            to={"/contact"}
            className="font-semibold text-white hover:text-red-700 transition"
          >
            Contact
          </Link>
        </nav>
        <nav className="hidden lg:flex gap-4 font-semibold">
        <Link
            to={"/register"}
            className="font-semibold loginbtn"
          >
            SignUp
          </Link>
        <Link
            to={"/login"}
            className="font-semibold loginbtn"
          >
            SignIn
          </Link>
        </nav>      
      </div>
      <MobileNav />
    </header>
  );
};
export default Header;
