import { r1 } from "../assets";
import styles, { layout } from "../style";


const Mission = () => (  
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={r1} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Staying abreast <br className="sm:block hidden" /> with technology
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Our focus is on the right technology and tools, combined with the right skills to deliver a comprehensive range of engineeering services.
      </p>
    </div>
  </section>
);

export default Mission;
