import styles, { layout } from "../style";
import { cardimg } from "../assets"
import Button from "./Button";
import 'swiper/css';
import './CardDeal.css';


const CardDeal = () => {
  return(
  <section className={`${styles.paddingY} flex sm:flex-col flex-row`}>
    <div className={layout.sectionImg}>
      <img src={cardimg} alt="" className="w-[40%] h-[40%] relative z-[5]" />
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      A passion <br className="sm:block hidden" /> for Healthcare
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
      With deep insight into the unmet clinical needs, (HSL) aims to provide you with comprehensive healthcare solutions, service and support.
      </p>

      <Button styles={`mt-10`} />
    </div>
    </div>
  </section>
)};

export default CardDeal;


