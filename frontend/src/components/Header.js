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
        {/* Nav - initially hidden, shown on desktop mode */}
        <nav className="hidden lg:flex gap-x-12 font-semibold">
          {['/', '/about', '/services', '/contact'].map((path) => (
            <Link key={path} to={path} className="font-semibold text-white hover:text-red-700 transition">
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>
        {/* Login/Signup links - initially hidden, shown on desktop mode */}
        <nav className="hidden lg:flex gap-4 ">
          <Link to="/register" className="loginbtn">SignUp</Link>
          <Link to="/login" className="loginbtn">SignIn</Link>
        </nav>  
      </div>
      <MobileNav />
    </header>
  );
};
export default Header;
