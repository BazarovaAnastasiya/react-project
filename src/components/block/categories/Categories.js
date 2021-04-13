import "./Categories.scss";

const Categories = (props) => {
  return (
    <div className="Wrapper">
      <h2>{props.title}</h2>
      <img className="CategoriesIMg" src={props.src} alt="" />
      <button>подробнее</button>
    </div>
  );
};

export default Categories;
