/* eslint-disable react/jsx-no-undef */

import s from "./StartPage.css";

const StartPage = () => {
  return (
    <div className={s.StartPage}>
      <div className={s.Promotions}>
        <div className={s.Slaider}>слайдер</div>
        <div>карточка</div>
      </div>
      <div className={s.SearchPage}>
        <SearchSelection />
      </div>
    </div>
  );
};

export default StartPage;
