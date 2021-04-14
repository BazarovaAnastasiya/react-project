/* eslint-disable react/jsx-no-undef */

import s from "./Header.module.scss";

import Personal from "../../common/personal/Personal";
import Favorits from "../../common/favorits/Favorits";
import Basket from "../../common/basket/Basket";
import Logo from "../../common/logo/Logo";

import Lockation from "../../../assets/images/Lockation.svg";

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerNav}>
        <ul className={s.headerNavLink}>
          <li>
            <a className={s.headerLink} href="//#region ">
              Магазины
            </a>
          </li>
          <li>
            <a className={s.headerLink} href="//#region ">
              Акции
            </a>
          </li>
          <li>
            <a className={s.headerLink} href="//#region ">
              Доставка и оплата
            </a>
          </li>
        </ul>
        <div className={s.logoWrapper}>
          <Logo />
          <span className={s.logoText}>DRIVE MOTO</span>
        </div>

        <a className={s.headerLink} href="http://">
          <img src={Lockation} alt="Lockation" />
          Москва, ул. Науки 25
        </a>
        <div className={s.userNav}>
          <a className={s.favorits} href="#s">
            <Favorits />
          </a>
          <a className={s.personal} href="#s">
            <Personal />
          </a>
          <a className={s.basket} href="#s">
            <Basket />
          </a>
        </div>
      </div>

      <ul className={s.mainMenu}>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Квадроциклы
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Катера
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Гидроциклы
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Лодки
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Вездеходы
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Снегоходы
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Двигатели
          </a>
        </li>
        <li>
          <a className={s.mainMenuLink} href="http://">
            Запчасти
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
