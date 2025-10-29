import "../index.css";

const Button = ({ styles }) => (
  <a href="/products">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[16px] hover:bg-blue-100 text-black btns rounded-sm outline-none blue-border ${styles}`}>
      Our Products
    </button>
  </a>
);

export default Button;
