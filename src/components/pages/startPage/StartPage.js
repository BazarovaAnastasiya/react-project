import s from "./StartPage.module.scss";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const StartPage = () => {
  return (
    <>
      <div className={s.StartPage}>
        <div className={s.Promotions}>
          <div className={s.Slaider}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              ...
            </Swiper>
          </div>
          <div>карточка</div>
        </div>
        <div className={s.SearchPage}>{/* <SearchSelection /> */}</div>
      </div>
    </>
  );
};

export default StartPage;
