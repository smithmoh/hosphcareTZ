import React from 'react'
import styles from '../style';
import Features from "../components/Features";
import Billing from "../components/Billing";
import Business from "../components/Business";
import CardDeal from "../components/CardDeal";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>  
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Features />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
} 
export default Home;
