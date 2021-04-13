import Favorits from "../../common/favorits/Favorits";
import "./ProducttCard.scss";

const ProducttCard = (props) => {
  return (
    <div className="Card">
      <div className="CardHeader">
        <span className="CardHeader">{props.text}</span>

        <Favorits />
      </div>
      <div className="CardContent">
        <img className="CardImg" src={props.src} alt="" />
        <p className="CardDescription">{props.description}</p>
      </div>

      <div className="CardFooter">
        <p className="CardDescription">{props.description}</p>
      </div>
    </div>
  );
};

export default ProducttCard;
