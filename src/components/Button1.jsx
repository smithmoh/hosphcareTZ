const Button1 = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="btns hover:bg-blue-100">
        {title}
      </button>
    );
  };
  
  export default Button1;