import styles, { layout } from "../style";
import teamInfo from '../constants/team';
import { motion } from "framer-motion";
import { textVariant } from "../components/motion";

const Team = () => (  
  <section id="product" className={layout.sectionReverse}>
    <div className={`${layout.sectionInfo} items-center`} >
     <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Our Team
        </p>
      </motion.div>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {teamInfo.map((teamInfo) => (
          <div className={`flex-1 flex justify-center items-center flex-col m-3`} >
            <img src={teamInfo.image} alt="" object-contain width={100} height={100} relative z={5}/>
            <span className="primaryText font-poppins font-semibold xs:text-[20.45px] text-black">
            {teamInfo.title}
            </span>
            <p className="primaryText font-normal xs:text-[16.45px] text-[12.45px]">
            {teamInfo.decs}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
