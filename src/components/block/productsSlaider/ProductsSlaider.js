import s from "./ProductsSlaide.moduler.scss";
import ProductCard from "../../block/productCard/productCard";

import ProImg from "../../../assets/images/C2.png";

import SwiperCore, { Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

// install Swiper modules
SwiperCore.use([Navigation]);

const ProductsSlaider = () => {
  return (
    <div className={s.slaiderConteiner}>
      <Swiper spaceBetween={5} slidesPerView={4} navigation>
        <SwiperSlide>
          <ProductCard
            text="акция"
            src={ProImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            text="акция"
            src={ProImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            text="акция"
            src={ProImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            text="акция"
            src={ProImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            text="акция"
            src={ProImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard
            text="акция"
            src={ProImg}
            description="Лодочный мотор Suzuki DF9.9BRS"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlaider;
