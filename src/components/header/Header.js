
import './Header.css';

function Header() {
  return (
    <div className="Header">
   <div className="Header-nav">
      <a href="http://">Магазины</a>;
      <a href="http://">Акции</a>;
      <a href="http://">Доставка и оплата</a>;
   </div>
      <img className="Logo" src="#" alt="logo"/>
      <a href="http://">Москва,  ул. Науки  25</a>;
   <div className="User-nav">
      {/* <Favorites/> */}
      <a className="Personal" href="http://">иконка</a>;
      <a className="Basket" href="http://">корзина</a>;
   </div>
    </div>
  );
}

export default Header;
