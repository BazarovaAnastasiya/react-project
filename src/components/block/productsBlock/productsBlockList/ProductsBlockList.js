import s from "./ProductsBlockList.module.scss";

import ProductsBlockBtn from "../productsBlockBtn/ProductsBlockBtn";

const ProductsBlockList = (props) => {
  return (
    <ul className={s.productsUl}>
      <li className={s.productsLi}>
        <ProductsBlockBtn text="запчасти" />
      </li>
      <li className={s.productsLi}>
        <ProductsBlockBtn text="моторы" />
      </li>
      <li className={s.productsLi}>
        <ProductsBlockBtn text="шины " />
      </li>
      <li className={s.productsLi}>
        <ProductsBlockBtn text="электроника" />
      </li>
      <li className={s.productsLi}>
        <ProductsBlockBtn text="инструменты" />
      </li>
      <li className={s.productsLi}>
        <ProductsBlockBtn text="аксессуары " />
      </li>
    </ul>
  );
};

export default ProductsBlockList;
