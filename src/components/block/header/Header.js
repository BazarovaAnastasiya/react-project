/* eslint-disable react/jsx-no-undef */

import s from "./Header.module.scss";
import Personal from "../../common/personal/Personal";
import Favorits from "../../common/favorits/Favorits";
import Basket from "../../common/basket/Basket";
import Logo from "../../common/logo/Logo";
import Lockation from "../../../assets/images/Lockation.svg";

const Header = () => {
  return (
    <div className={s.Header}>
      <div className={s.HeaderNav}>
        <ul className={s.HeaderNavLink}>
          <li href="http://">Магазины</li>
          <li href="http://">Акции</li>
          <li href="http://">Доставка и оплата</li>
        </ul>
        <div className={s.LogoWrapper}>
          <Logo />
          DRIVE MOTO
        </div>

        <a className={s.Adres} href="http://">
          <img src={Lockation} alt="Lockation" />
          Москва, ул. Науки 25
        </a>
        <div className={s.UserNav}>
          <a className={s.Favorits} href="#s">
            <Favorits />
          </a>
          <a className={s.Personal} href="#s">
            <Personal />
          </a>
          <a className={s.Basket} href="#s">
            <Basket />
          </a>
        </div>
      </div>

      <ul className={s.mainMenu}>
        <li href="http://">Квадроциклы</li>
        <li href="http://">Катера</li>
        <li href="http://">Гидроциклы</li>
        <li href="http://">Лодки</li>
        <li href="http://">Вездеходы</li>
        <li href="http://">Снегоходы</li>
        <li href="http://">Двигатели</li>
        <li href="http://">Двигатели</li>
      </ul>
    </div>
  );
};

export default Header;
