// ImageSwiper.tsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
interface ImageSwiperProps {
  images: string[];
}

const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
  return (
    <div className="swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="custom-swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSwiper;
