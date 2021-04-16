import s from "./ProductsBlock.module.scss";

import ProdyctsBlockList from "./productsBlockList/ProductsBlockList";
import ProductsSlaider from "./productsSlaider/ProductsSlaider";

const ProductsBlock = (props) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.prodyctsTitle}>{props.title}</h2>
      <ProdyctsBlockList />
      <ProductsSlaider />
      <button className={s.prodyctsBtn}>Показать еще</button>
    </div>
  );
};

export default ProductsBlock;
