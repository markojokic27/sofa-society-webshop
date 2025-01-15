"use client";

// External packages
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { twMerge } from "tailwind-merge";

//components
import { Arrow } from "@/components/Arrow";

export const ImageSwiper: React.FC<
  SwiperProps & { images: React.ReactNode[] }
> = ({ className, images, ...rest }) => {
  const pagination = {
    el: ".custom-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${twMerge("z-30 cursor-pointer swiper-pagination-bullet-active", className)}">${index + 1}</span>`;
    },
  };
  return (
    <div className="relative">
      <Swiper
        pagination={pagination}
        spaceBetween={16}
        breakpoints={{
          1024: {
            slidesPerView: 1.4,
          },
        }}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className={twMerge("", className)}
        {...rest}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>{image}</SwiperSlide>
        ))}
      </Swiper>

      <button className="swiper-button-prev group absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 transform sm:flex">
        <Arrow
          variant="left"
          className="group-disabled:bg-transparent group-disabled:text-black"
        />
      </button>
      <button className="swiper-button-next group absolute right-2 top-1/2 z-10 h-10 w-10 -translate-y-1/2">
        <Arrow
          variant="left"
          className="rotate-180 group-disabled:bg-transparent group-disabled:text-black"
        />
      </button>
      <div className="custom-pagination -mt-10 mb-8 flex justify-center gap-2 sm:mb-0 sm:mt-6"></div>
    </div>
  );
};
