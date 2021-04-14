import "./ProductsSlaide.module.scss";
import ProductCard from "../../block/productCard/productCard";

import SwiperCore, { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import SlidesBanner from "../../../assets/images/slaider-banner.jpg";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ProductsSlaider = () => {
  return (
    <div className="main">
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <ProductCard />
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

export default ProductsSlaider;
