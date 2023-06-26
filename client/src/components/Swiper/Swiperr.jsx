import React, { Children, cloneElement, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
const Swiperr = ({ items, selectTargetCategory }) => {
  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          // pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <CategoriesContainer
                category={item}
                selectTargetCategory={selectTargetCategory}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Swiperr;