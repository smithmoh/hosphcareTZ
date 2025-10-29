import React from 'react'
import styles from "../style";
import Experience from '../components/Experience';
import Map from "../components/Map";
import Heroabout from '../components/Heroabout';
import Mission from '../components/Mission';
import Team from '../components/Team'
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';

const Company = () => {
  return (
    <div className="bg-primary w-full overflow-hidden"> 
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Heroabout />
        </div>
      </div>
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}> 
        <div className={`${styles.boxWidth}`}>
          <Mission />
          <Map />
          <Team />
          <Experience />
          <Gallery />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Company;