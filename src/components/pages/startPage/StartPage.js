import s from "./StartPage.module.scss";

import Slaider from "./../../block/slaider/Slaider";

const StartPage = () => {
  return (
    <>
      <div className={s.StartPage}>
        <div className={s.Promotions}>
          <Slaider />
          <div>карточка</div>
        </div>
        <div className={s.SearchPage}>
          <ul>
            <li>Поиск по номеру</li>
            <li>Поиск по марке</li>
            <li>Поиск по названию товара</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StartPage;
