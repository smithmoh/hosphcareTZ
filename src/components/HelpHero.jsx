import styles from "../style";


const HelpHero = () => (  
  <section id="product" className={`${styles.flexCenter} ${styles.paddingY}`}>
    <div className={`${styles.flexCenter} flex-col`}>
    <h2 className={`${styles.heading3} xs:text-[36px] justify-center`}>
        How can we help you?
      </h2>      
      <p className={`text-[16px] max-w-[470px] mt-5 text-black justify-center align-center`}>
        Here you will find frequently asked questions about our products, services and business. Browse our FAQ
      </p>
    </div>
  </section>
);

export default HelpHero;
