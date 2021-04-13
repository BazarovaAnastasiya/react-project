import s from "./StartPage.module.scss";

import Slaider from "./../../block/slaider/Slaider";
import ProducttCard from "../../block/producttCard/ProducttCard";
import Categories from "../../block/categories/Categories";

import ProdImg from "../../../assets/images/product.png";

const StartPage = () => {
  return (
    <>
      <div className={s.StartPage}>
        <div className={s.Promotions}>
          <Slaider />
          <ProducttCard
            text="акция"
            src={ProdImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </div>

        <div className={s.SearchPage}>
          <ul className={s.СhoiceWrapper}>
            <li className={s.Сhoice}>
              <button>Поиск по номеру</button>
            </li>
            <li className={s.Сhoice}>
              <button>Поиск по марке</button>
            </li>
            <li className={s.Сhoice}>
              <button>Поиск по названию товара</button>
            </li>
          </ul>
          <form action="">
            <input
              className={s.Search}
              type="text"
              placeholder="Введите марку "
            />
            <button className={s.SearchBtn}>искать</button>
          </form>
        </div>

        <div className={s.Categories}>
          <Categories title="Квадроциклы" />
          <Categories title="Гидроциклы" />
          <Categories title="Катера" />
          <Categories title="Снегоходы" />
          <Categories title="Вездеходы" />
          <Categories title="Двигатели" />
        </div>
      </div>
    </>
  );
};

export default StartPage;
