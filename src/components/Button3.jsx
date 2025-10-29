const Button3 = ({ onClickHandler, value, title }) => {
    return (
      <a href="/contact">
        <button onClick={onClickHandler} value={value} className="btns hover:bg-dimBlue">
          <p className="font-poppins font-regular text-[14px] leading-[27px] text-white">Contact Us</p>
        </button>
      </a>
    );
  };
  
  export default Button3;