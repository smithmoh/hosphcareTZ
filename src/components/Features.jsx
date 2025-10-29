import React from 'react';
import styles from '../style';
import "../index.css";
import featuresData from '../constants';

const Features = () => {
  return (
    <div className={`px-10 ${styles.flexCenter} `}>
      <div className='container flex flex-wrap items-start'>
        {featuresData.map((val, index) => (
          <div className='w-[300px] h-[250px] max-w-[400px] max-h-[350px] p-2 bg-white box-shadow flex flex-col gap-2 items-center' key={index}>
            <img src={val.image} alt="" className='py-2' object-contain width={80} height={80}/>
            <p className='p-2 font-poppins font-bold text-[16px] text-[#485dd1]'>{val.title}</p>
            <p className='p-2 font-poppins font-regular text-[14px] text-black'>{val.desc}</p>
          </div>
        ))}
      </div> 
    </div>
  )
}
export default Features;
