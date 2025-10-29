import styles, { layout } from "../style";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import gallery from '../constants/gallery';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const Gallery = () => {
  const slidersettings = {
    slidesToScroll: 1,
    spaceBetween: 10,
    autoplay: true,
    infinite: true,
    dots: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
    breakpoints: {
        480: {
            slidesPerView: 2
        },
        600: {
            slidesPerView: 3
        },
        750: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 6
        }
    }
  }
  return (
    <section className={`${styles.paddingY} flex md: flex-col`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Our Gallery
        </h2>
      </div>

      <section className={layout.section}>
        <div className="paddings innerwidth r-container items-center">
          <Swiper {...slidersettings}>     
            {gallery.map((gallery, i)=> (
              <SwiperSlide>
                <div className="flex flex-row">
                  <img src={gallery.image} alt="" className="w-[180px] h-[180px] object-cover"/>
                </div>
              </SwiperSlide>
            ))}
            <SliderButtons />
          </Swiper>
        </div>
      </section>
    </section>
  )
};

export default Gallery;

const SliderButtons = ()=> {
  const swiper = useSwiper();
  return (
    <div className="items-center p-10">
      <button onClick={()=> swiper.slidePrev()}><MdChevronLeft size={24}/></button>
      <button onClick={()=> swiper.slideNext()}><MdChevronRight size={24}/></button>
    </div>
  )
}