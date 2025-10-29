import styles from "./style";

import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Expertise from "./pages/Expertise";
import Products from "./pages/Products";
import Training from "./pages/Training";
import Company from "./pages/Company";
import Support from "./pages/Support";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <BrowserRouter className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth} z-10`}>
            <Navbar />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Expertise" element={<Expertise />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Training" element={<Training />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;