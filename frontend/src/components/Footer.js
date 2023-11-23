import React from 'react';
import ScrollToTopButton from './ScrollToTop';
import { Link } from 'react-router-dom';
import Socials from './Socials';
const Footer = () => {
  return (
    <footer className="bg-black border-t">
      <div className="container mx-w-6xl py-8 mx-auto flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
        <div className="flex flex-col item-center space-y-8 md:items-start md:space-y-4">
          <div className="h-8">
            <h1 className="logo">Burnu Martial's</h1>
          </div>
          <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6">
            <div className="h-10 group font-normal">
              <Link to="/about">About</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="h-10 group font-normal">
              <Link to="/services">Services</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            <div className="h-10 group font-normal">
              <Link to="/contact">Contact</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
          <ScrollToTopButton />
        </div>
        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
          <div className="flex items-center justify-center mx-auto space-x-4 md:mx-0 md:justify-end">
            <Socials />
          </div>
          <div className="font-bold">
            &copy; 2023 Burnu Martial's. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
