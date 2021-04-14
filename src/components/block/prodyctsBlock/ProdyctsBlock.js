import s from "./ProdyctsBlock.module.scss";

import ProductsSlaider from "../productsSlaider/ProductsSlaider";

const ProdyctsBlock = (props) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.prodyctsTitle}>{props.title}</h2>
      <ul className={s.prodyctsUl}>
        <li className={s.prodyctsLi}>
          <a className={s.prodyctsLink} href="#d">
            {props.text}
          </a>
        </li>
        <li className={s.prodyctsLi}>
          <a className={s.prodyctsLink} href="#d">
            {props.text}
          </a>
        </li>
        <li className={s.prodyctsLi}>
          <a className={s.prodyctsLink} href="#d">
            {props.text}
          </a>
        </li>
        <li className={s.prodyctsLi}>
          <a className={s.prodyctsLink} href="#d">
            {props.text}
          </a>
        </li>
        <li className={s.prodyctsLi}>
          <a className={s.prodyctsLink} href="#d">
            {props.text}
          </a>
        </li>
      </ul>
      <ProductsSlaider />
      <button className={s.prodyctsBtn}>Показать еще</button>
    </div>
  );
};

export default ProdyctsBlock;
