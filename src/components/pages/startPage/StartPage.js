import s from "./StartPage.module.scss";

import Slaider from "./slaider/Slaider";
import ProducttCard from "../../block/productCard/productCard";
import Categories from "../../block/categories/Categories";

import ProdImg from "../../../assets/images/product.png";

import ImgCard1 from "../../../assets/images/C1.png";
import ImgCard2 from "../../../assets/images/C2.png";
import ImgCard3 from "../../../assets/images/C3.png";
import ImgCard4 from "../../../assets/images/C4.png";
import ImgCard5 from "../../../assets/images/C5.png";
import ImgCard6 from "../../../assets/images/C6.png";

import ProdyctsBlock from "../../block/productsBlock/ProductsBlock";
import ProductsBlockBtn from "../../block/productsBlock/productsBlockBtn/ProductsBlockBtn";

const StartPage = () => {
  return (
    <>
      <div className={s.startPage}>
        <div className={s.promotions}>
          <Slaider />
          <ProducttCard
            text="акция"
            src={ProdImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </div>

        <div className={s.searchPage}>
          <ul className={s.choiceWrapper}>
            <li className={s.choice}>
              <ProductsBlockBtn text="Поиск по номеру" />
            </li>
            <li className={s.choice}>
              <ProductsBlockBtn text="Поиск по марке" />
            </li>
            <li className={s.choice}>
              <ProductsBlockBtn text="Поиск по названию товара" />
            </li>
          </ul>
          <form className={s.searchForm} action="">
            <input
              className={s.search}
              type="text"
              placeholder="Введите марку "
            />
            <button className={s.searchBtn}>искать</button>
          </form>
        </div>

        <div className={s.categories}>
          <Categories title="Квадроциклы" src={ImgCard1} />
          <Categories title="Гидроциклы" src={ImgCard2} />
          <Categories title="Катера" src={ImgCard3} />
          <Categories title="Снегоходы" src={ImgCard4} />
          <Categories title="Вездеходы" src={ImgCard5} />
          <Categories title="Двигатели" src={ImgCard6} />
        </div>

        <div className={s.productsBlock}>
          <ProdyctsBlock title="Популярные товары" />
        </div>
      </div>
    </>
  );
};

export default StartPage;
