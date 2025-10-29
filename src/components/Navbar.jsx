import { React, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css"
import { close, HSL_Logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";
import { RiMenu3Line } from "react-icons/ri"
import { MdOutlineClose } from "react-icons/md"

const Navbar= () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [fix, setfix] = useState(false);
  const [ mobileMenuOpen, setMobileMenuOpen ] = useState(false);

  return (
      <nav className={`
        ${fix ? 'navbar fixed' : 'navbar'} 
          fixed top-0 left-0 w-full flex items-center py-2 px-4 justify-between z-10 
        ${styles.flexStart} 
        ${!mobileMenuOpen ? "bg-white/100" : "bg-white/100"}
      `}>
        <Link to="/home">
          <img src={HSL_Logo} alt="HSL" className="w-[80px] h-[40px]" />
        </Link>
        

        <ul className="list-none sm:flex hidden justify-end items-center">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[14px] ${
                active === nav.title ? "text-[#444fac]" : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-8"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          {mobileMenuOpen ? ( 
            <MdOutlineClose size={24} color="black" onClick={() => setMobileMenuOpen(false)}/> 
            ) : 
            <RiMenu3Line  size={24} color="black"  onClick={() => setMobileMenuOpen(true)} />
          }

          <div
            className={`
              ${mobileMenuOpen ? 'flex' : 'hidden'}
            } w-full p-10 bg-white/100 absolute top-12 right-0 mx-0 my-5 min-w-[200px] sidebar z-10`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (    
                <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[14px] ${
                      active === nav.title ? "text-[#444fac]" : "text-black"
                    } ${index === navLinks.length - 1 ? "mb-0" : "mb-3"}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;

