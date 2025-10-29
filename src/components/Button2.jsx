const Button2 = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="btns hover:bg-blue-100">
        Our expertise
      </button>
    );
  };
  
  export default Button2;