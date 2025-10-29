import styles, { layout } from "../style";
import Button2 from "./Button2";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './Services.css';
import sliderdata from '../constants/sliderservices';
import { motion } from "framer-motion";
import { textVariant } from "../components/motion";


const Services = () => {
  const slidersettings = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        480: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        750: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 4
        }
    }
  }
  return(
  <section className={`${styles.paddingY} flex md: flex-col`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Providing our communities with the very best  <br className="sm:block hidden" /> results in healthcare equipment.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        We take an integrated approach to managing health and safety systems and ensures there are robust management systems in place, so clients receive consistent, well-informed assistance when required.
      </p>

      <Button2 styles={`mt-10`} />
    </div>
 
      
    <div className="flex flex-wrap items-start gap-8 py-20">
      {sliderdata.map((card, i)=> (
        <div className="r-card flex md:flex-row flex-col justify-between items-start w-[500px] h-[300px] btns">
          <div className="flex flex-col gap-4">                
            <span className="font-poppins font-semibold text-[#485dd1] text-[14px]">{card.detail}</span>
            <span className="font-poppins font-regular text-black text-[16px]">{card.name}</span>
          </div>
          <img src={card.image} alt="" className="object-contain w-[150px] h-[150px]"/>
        </div>
      ))} 
    </div>
               
  </section>
)};

export default Services;