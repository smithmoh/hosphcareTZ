import "../components/HotDeals.css";
import "../index.css"
import Categories from "./Categories";
import SlideDeals from "./Slider";


const HotDeals = () => {
  return (
    <>
      <section className='HotDeals'>
        <div className='container d_flex'>
          <Categories />
          <SlideDeals />
        </div>
      </section>
    </>
  )
}

export default HotDeals;