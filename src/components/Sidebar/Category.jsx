import "../Sidebar/Category.css";
import Input from "../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Medical Equipment</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="CSSD"
          title="CSSD"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dental"
          title="Dental"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Furniture"
          title="Furniture"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Respiratory"
          title="Respiratory"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Suction Machine"
          title="Suction Machine"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Theatre Table"
          title="Theatre Table"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Radiology"
          title="Radiology"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Monitors"
          title="Monitors"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;