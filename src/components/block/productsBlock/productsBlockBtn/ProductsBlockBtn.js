import s from "./ProductsBlockBtn.module.scss";

const ProductsBlockBtn = (props) => {
  return (
    <button className={s.productsBtn} href="#d">
      {props.text}
    </button>
  );
};

export default ProductsBlockBtn;
