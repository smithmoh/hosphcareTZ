import styles from "../style";
import Services from '../components/Services';
import Heroserv from "../components/Heroserv";
import CTAservice from "../components/CTAservices";
import Footer from "../components/Footer";

const Expertise = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Heroserv />
        </div>
      </div>  
      <div className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
          <CTAservice />
          <Footer />
        </div>
      </div>
    </div>
  )
}
export default Expertise;