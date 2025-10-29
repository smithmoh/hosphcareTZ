import styles from "../style";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <h2 className={styles.heading2}>
          Managing our products <br className="sm:block hidden" /> and services
      </h2> 

      <div className="w-full flex justify-between items-top md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <div className="w-full md:mt-0 mt-6"> 
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
            HSL(TZ) provides a wide range of proven, quality, medical equipment to health professionals.
          </p>
      </div>
      
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px] text-black`}>
          HSL supplies equipment to all major health entities both public and private. We are experienced across all medical departments, with industry leading expertise in Theatre, Medical Gases, Dental, Laboratory, and CSSD Equipment.
          
          We manage the installation, provide training on it's proper use, monitor it over its expected life-cycle and provide in-house servicing as and when required. 
        </p>
      </div>
    </div>

  </section>
);

export default Testimonials;
