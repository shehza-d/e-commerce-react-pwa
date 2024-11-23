import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

function Slider() {
  return (
    <div className="my-8 px-4 md:px-8 lg:px-16">
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: {      // Mobile
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {      // Tablets
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {     // Desktops
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {     // Large screens
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        onSlideChange={() => console.log('Slide changed')}
        onSwiper={(swiper) => console.log(swiper)}
      >
       <SwiperSlide> <img src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-36193.jpg?t=st=1732323419~exp=1732327019~hmac=85be8024dcbe6d5eef493458ee9f6ff6741f9d61141338356d1b2c35359e842e&w=740" alt="" srcset="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://img.freepik.com/free-photo/pair-man-woman-wearing-glasses-carried-lots-paper-bags-shopping_1150-27740.jpg?t=st=1732323355~exp=1732326955~hmac=4e3a119e3bd03c9ea1798b5acc4d94b87d93360f1cf275f035be4a0e3d1b917e&w=740" alt="" srcset="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://img.freepik.com/free-photo/pair-man-woman-wearing-glasses-carried-lots-paper-bags-shopping_1150-27739.jpg?t=st=1732323375~exp=1732326975~hmac=c1844f121bf70752d499883a82ab0971fb2c968999bcc253ea86c9ceb406cf92&w=740" alt="" srcset="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://img.freepik.com/free-photo/young-woman-with-purchases-man-holding-money-grey-wall_176420-3383.jpg?t=st=1732323397~exp=1732326997~hmac=b83dc0a53b3932ef96051bfc014313cd1dc3dc10a799acd4411857f5371edd3f&w=740" alt="" srcset="" /> </SwiperSlide>
        

        <SwiperSlide> <img src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-36193.jpg?t=st=1732323419~exp=1732327019~hmac=85be8024dcbe6d5eef493458ee9f6ff6741f9d61141338356d1b2c35359e842e&w=740" alt="" srcset="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://img.freepik.com/free-photo/young-woman-with-purchases-man-holding-money-grey-wall_176420-3383.jpg?t=st=1732323397~exp=1732326997~hmac=b83dc0a53b3932ef96051bfc014313cd1dc3dc10a799acd4411857f5371edd3f&w=740" alt="" srcset="" /> </SwiperSlide>
        <SwiperSlide> <img src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-36193.jpg?t=st=1732323419~exp=1732327019~hmac=85be8024dcbe6d5eef493458ee9f6ff6741f9d61141338356d1b2c35359e842e&w=740" alt="" srcset="" /> </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Slider;
