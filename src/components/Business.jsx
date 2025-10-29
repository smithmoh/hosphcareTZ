import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <a href="/expertise">
    <div className={`flex flex-row p-6 gap-4 hover:bg-blue-100 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"}`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col">
        <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  </a>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Bio <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Hosphcare Solutions Limited is a Tanzanian based company that has supported the medical industry continuously for more than a decade. HSL offers a 'Total Solution' in healthcare design, equipment, service and support. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
