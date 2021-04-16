import Btn from "./Btn/Btn";
import s from "./Categories.module.scss";

const Categories = (props) => {
  return (
    <div className={s.wrapper}>
      <h2>{props.title}</h2>
      <img className={s.categoriesIMg} src={props.src} alt="" />
      <Btn />
    </div>
  );
};

export default Categories;
