import {useState } from "react";
import styles from "../style";
import { Link } from "react-router-dom";
import { HSL_Logo } from "../assets";
import { footerLinks, socialMedia} from "../constants/index";
import {PiMapPinFill} from "react-icons/pi"
import { MdCall, MdEmail } from "react-icons/md";

const Footer = () => {
  const [setActive] = useState("Home");

  return (
  <section className={`${styles.paddingY} ${styles.paddingX} ${styles.flexCenter} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10 gap-2">
        <Link to="/home">
          <img
              src={HSL_Logo}
              alt="HSL"
              className="w-[266px] h-[72.14px] object-contain"
            />
        </Link>
        
        <p className={`${styles.paragraph} mt-4 max-w-[312px] text-black`}>
          Precision in Healthcare
        </p>
        <div className="flex flex-row gap-2 items-center">
          <MdCall size={18} color={'black'} />
          <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-black">+255792996709</h4>
        </div>
        <div className="flex flex-row gap-2 items-start">
          <MdEmail size={18} color={'black'} />
          <div className="flex flex-col">
            <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-black">info@hosphcaresolutionsltd.co.tz </h4>
            <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-black">sales@hosphcaresolutionsltd.co.tz </h4> 
          </div>
        </div> 
        <div className="flex flex-row gap-2 items-center">
          <PiMapPinFill size={18} color={'black'} />
          <h4 className="font-poppins font-regular text-[14px] leading-[27px] text-black"> 6th floor, Arusha trade centre tower, sokoine road , levolosi ward, postal code 23104</h4>
        </div>     
        
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-black">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-black hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}
                  onClick={() => setActive(link.name)}
                >
                  <a href={`${link.href}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-black">
        Copyright Ⓒ 2025 Hosphcare Solutions(TZ) Limited. All Rights Reserved.
      </p>
        
      <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[30px] h-[30px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
    </div>
  </section>
  )
}
export default Footer;