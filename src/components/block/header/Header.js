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
          <li>
            <a className={s.HeaderLink} href="//#region ">
              Магазины
            </a>
          </li>
          <li>
            <a className={s.HeaderLink} href="//#region ">
              Акции
            </a>
          </li>
          <li>
            <a className={s.HeaderLink} href="//#region ">
              Доставка и оплата
            </a>
          </li>
        </ul>
        <div className={s.LogoWrapper}>
          <Logo />
          <span className={s.LogoText}>DRIVE MOTO</span>
        </div>

        <a className={s.HeaderLink} href="http://">
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
