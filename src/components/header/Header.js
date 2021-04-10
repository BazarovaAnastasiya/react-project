/* eslint-disable react/jsx-no-undef */

import './Header.css';
import Personal from "../personal/Personal";
import Favorits from "../favorits/Favorits";
import Basket from "../basket/Basket";


const Header = () =>{
  return (
    <div className="Header">
   <div className="Header-nav">
      <a href="http://">Магазины</a>
      <a href="http://">Акции</a>
      <a href="http://">Доставка и оплата</a>
   </div>
      <img className="Logo" src="#" alt="logo"/>
      <a href="http://">Москва,  ул. Науки  25</a>
   <div className="User-nav">
       <a className="Favorits" href="#s"> 
      <Favorits/>
      </a>
      <a className="Personal" href="#s">
         <Personal/>
         </a>
      <a className="Basket" href="#s"> 
      <Basket/>
      </a>
   </div>
    </div>
  );
}

export default Header;
