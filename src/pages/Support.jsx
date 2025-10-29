import React from 'react';
import styles from '../style';
import HelpHero from '../components/HelpHero';
import Footer from '../components/Footer';
import Supportfaq from '../components/supportfaq';

const Support = () => {
  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <div className={`${styles.Start} ${styles.paddingX}`}>
        <HelpHero />
      </div>
      <Supportfaq />
      <Footer />
    </section>
  );
};
export default Support;

      