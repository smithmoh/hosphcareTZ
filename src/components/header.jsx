import React, {useState, useEffect, useRef} from 'react';
import "../components/header.css"
import "../index.css"
import categories from '../assets/categories.png';


function Header() {

  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className="app z-9">
      <div className='menu-container z-9' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img src={categories} alt='Categories'></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'} z-9`} >
          <ul>
            <DropdownItem text = {"Medical Gases"}/>
            <DropdownItem text = {"Theatre | Hospital Furniture"}/>
            <DropdownItem text = {"Medical Pumps"}/>
            <DropdownItem text = {"Anaesthesia | Respiratory"}/>
            <DropdownItem text = {"Radiology"}/>
            <DropdownItem text = {"Medical Lights"}/>
            <DropdownItem text = {"Laboratory | Dentals"}/>
            <DropdownItem text = {"OTC"}/>
            <DropdownItem text = {"Monitors"}/>
            <DropdownItem text = {"Suction Machine"}/>
            <DropdownItem text = {"CSSD"}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <a> {props.text} </a>
    </li>
  );
}

export default Header;