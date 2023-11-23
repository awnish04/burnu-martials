import React from 'react'
import ScrollToTopButton from './ScrollToTop';
// import link
import { Link } from "react-router-dom";
import Socials from './Socials';
const Footer = () => {
  return (
    <div>
        <footer class="bg-black border-t">
    {/* <!-- Contaner --> */}
    <div class="container mx-w-6xl py-8 mx-auto">
      {/* <!-- Footer Flex Container --> */}
      <div class="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
        {/* <!-- Menu & Logo container --> */}
        <div class="flex flex-col item-center space-y-8 md:items-start md:space-y-4">
          {/* <!-- Logo --> */}
          <div class="h-8">
          <h1 className="logo ">Burnu Martial's</h1>
            {/* <img src="images/logo.svg" alt="" class="w-44 md:ml-3"/> */}
          </div>
          {/* <!-- Menu container --> */}
          <div
            class="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6">
            <div class="h-10 group font-normal">
              <Link to={'/about'} >About</Link>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>

            <div class="h-10 group font-normal">
              <Link to={'/services'} >Services</Link>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>

            <div class="h-10 group font-normal">
              <Link to={'/contact'} >Contact</Link>
              <div class="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
          {/* ... your existing footer content ... */}
          <ScrollToTopButton />
        </div>
        {/* <!-- Social & Copyright Container --> */}
        <div class="flex flex-col items-start justify-between space-y-4 text-gray-500">
          {/* <!-- Icons Container --> */}
          <div class="flex items-center justify-center mx-auto space-x-4 md:mx-0 md:justify-end">
            {/* <!-- Icon 1 --> */}
            <Socials/>
          </div>

          {/* <!-- Copyright container --> */}
          <div class="font-bold">
            &copy; 2023 Burnu Martial's.All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer