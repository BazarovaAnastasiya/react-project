import "./Categories.scss";

const Categories = (props) => {
  return (
    <div className="wrapper">
      <h2>{props.title}</h2>
      <img className="categoriesIMg" src={props.src} alt="" />
      <button>подробнее</button>
    </div>
  );
};

export default Categories;
