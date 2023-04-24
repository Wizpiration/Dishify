import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import "swiper/css";
// import "swiper/swiper-bundle.min.css";
// import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import data from "./carouselData.js";

export default function Carousel({ slides }) {
  const card = data.map((slide) => (
    <div key={slide.id}>
      <h1>{slide.name}</h1>
    </div>
  ));

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col items-center">
            <div className="bg-white">
              <h1 className="font-bold">{slide.name}</h1>
              {slide.rating}
            </div>

            <blockquote className="relative text-center p-5 px-[4rem] w-full">
              {slide.review}
              <div className="absolute top-0">
                <FaQuoteLeft color="#d2fca8" />
              </div>
              <div className="absolute right-1 bottom-0">
                <FaQuoteRight color="#d2fca8" />
              </div>
            </blockquote>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
