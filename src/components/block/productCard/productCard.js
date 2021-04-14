import Favorits from "../../common/favorits/Favorits";
import s from "./productCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardHeader}>{props.text}</span>

        <Favorits />
      </div>
      <div className={s.cardContent}>
        <img className={s.carddImg} src={props.src} alt="" />
        <p className={s.cardDescription}>{props.description}</p>
      </div>

      <div className={s.cardFooter}>
        <p className={s.cardDescription}>{props.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
