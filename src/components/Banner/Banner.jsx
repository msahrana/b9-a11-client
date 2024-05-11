import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation} from "swiper/modules";
import Slide from "./Slide";
import banner1 from "../../../public/banner/banner-1.jpg";
import banner2 from "../../../public/banner/banner-2.jpg";
import banner3 from "../../../public/banner/banner-3.jpg";
import banner4 from "../../../public/banner/banner-4.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={banner1}
            text="Search Your On Site Job portal and find your best choose"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={banner2}
            text="Search Your Remote Job portal and find your best choose"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={banner3}
            text="Search Your Part-Time Job portal and find your best choose"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={banner4}
            text="Search Your Hybrid Job portal and find your best choose"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
