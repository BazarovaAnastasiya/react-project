/* eslint-disable react/jsx-no-undef */

import "./Header.css";
import Personal from "../../abstracts/personal/Personal";
import Favorits from "../../abstracts/favorits/Favorits";
import Basket from "../../abstracts/basket/Basket";
import Logo from "../../abstracts/logo/Logo";
import Lockation from "../../../assets/images/Lockation.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-nav">
        <ul className="Header-navLink">
          <li href="http://">Магазины</li>
          <li href="http://">Акции</li>
          <li href="http://">Доставка и оплата</li>
        </ul>
        <div className="LogoWrapper">
          <Logo />
          DRIVE MOTO
        </div>

        <a className="Adres" href="http://">
          <img src={Lockation} alt="Lockation" />
          Москва, ул. Науки 25
        </a>
        <div className="User-nav">
          <a className="Favorits" href="#s">
            <Favorits />
          </a>
          <a className="Personal" href="#s">
            <Personal />
          </a>
          <a className="Basket" href="#s">
            <Basket />
          </a>
        </div>
      </div>

      <ul className="mainMenu">
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