import styles from "../style";
import Button3 from "./Button3";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-md box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-white`}>Let's Start a Project!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-white`}>
        Give us a call or drop by anytime. We endeavour to answer all enquiries within 24hrs. We will be happy to answer your questions.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button3 />
    </div>
  </section>
);

export default CTA;
