import { useState} from "react";
import CategoryButtons from './components/CategoryButtons.jsx';
import ProductList from './components/ProductList.jsx';
import allProducts from "./components/index.js";
import "../index.css"
import SlideCard from "../components/SlideCard.jsx"
import Footer from "../components/Footer"


const Products = () => {
  const categories = [
    'Medical Gases | Piping', 'Bedhead Unit', 'Medical Gases Adapter', 'Lab', 
    'Pendant Arm System', 'Theatre | Hospital Furniture', 'Chemical Analyzer', 'Anaesthesia | Respiratory', 'Radiology', 
    'Medical Lights', 'Dental', 'Biosafety Cabinet', 'Monitors', 'Suction Machine', 'CSSD'
  ];

  // Set 'Medical Gases' as the default selected category
  const [selectedCategory, setSelectedCategory] = useState('Medical Gases | Piping');

  // Filter products by selected category
  const filteredProducts = allProducts.filter(product => product.category === selectedCategory);
  
  return (
    <section className={`flex flex-col gap-10`}>
      <SlideCard/>      
      <h1 className="px-10 font-poppins font-semibold ss:text-[52px] text-[42px] text-black ss:leading-[100.8px] leading-[75px]">
        Medical <span className="text-gradient">Equipment</span>{" "}
      </h1>
      <CategoryButtons
        categories={categories} 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts}/>

      <Footer />
    </section>
  )
}

export default Products
