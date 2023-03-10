import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Swipper.css";

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

// if you want to use array
// const slide_img = [
//   "https://swiperjs.com/demos/images/nature-1.jpg",
//   "https://swiperjs.com/demos/images/nature-2.jpg",
//   "https://swiperjs.com/demos/images/nature-3.jpg",
//   "https://swiperjs.com/demos/images/nature-4.jpg",
//   "https://swiperjs.com/demos/images/nature-5.jpg",
//   "https://swiperjs.com/demos/images/nature-6.jpg",
//   "https://swiperjs.com/demos/images/nature-7.jpg",
//   "https://swiperjs.com/demos/images/nature-8.jpg",
//   "https://swiperjs.com/demos/images/nature-9.jpg",
// ];

const Swipper = ({arrImg}) => {
  console.log(arrImg);
  return (
    <div className="main-swiper">
      <Swiper
        effect={"coverflow"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
      >
        {arrImg.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Swipper;