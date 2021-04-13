import "./Categories.scss";

const Categories = (props) => {
  return (
    <div className="Wrapper">
      <h2>{props.title}</h2>
      <img src={props.img} alt="" />
      <button>подробнее</button>
    </div>
  );
};

export default Categories;
