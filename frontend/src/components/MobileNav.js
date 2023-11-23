import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => setOpenMenu(false);

  const menuItems = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/services", text: "Services" },
    { to: "/contact", text: "Contact" },
    { to: "/login", text: "Login", className: "font-semibold loginbtn" },
  ];

  return (
    <nav className="text-gray-200 lg:hidden">
      {/* nav open button */}
      <div
        onClick={() => setOpenMenu(true)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      {/* Menu */}
      <motion.div
        initial="hidden"
        animate={openMenu ? "show" : ""}
        variants={{
          hidden: { x: "100%" },
          show: { x: 0, transition: { ease: [0.6, 0.01, -0.05, 0.9] } },
        }}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          onClick={closeMenu}
          className="text-4xl absolute z-30 left-4 top-8 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-4xl text-center tracking-widest">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to} onClick={closeMenu} className={item.className}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
