import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import SlidesBanner from "../../../assets/images/slaider-banner.jpg";
import "./Slaider.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Slaider = () => {
  return (
    <div className="main">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={SlidesBanner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlidesBanner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlidesBanner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlidesBanner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlidesBanner} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SlidesBanner} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slaider;
