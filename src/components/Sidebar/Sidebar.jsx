import Category from "../Sidebar/Category";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>Products</h1>
        </div>
        <Category handleChange={handleChange} />  
      </section>
    </>
  );
};

export default Sidebar;