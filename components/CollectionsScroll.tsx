"use client";

// External packages
import * as React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { CollectionCard } from "@/components/CollectionCard";
import { ArrowIcon } from "@/components/Arrow";
import { LinkAsButton } from "./LinkAsButton";

// Assets
import Collection from "@/public/assets/images/collection2.png";

export const CollectionsScroll: React.FC<
  React.ComponentPropsWithoutRef<"div"> & SwiperProps
> = ({ className, ...rest }) => {
  return (
    <div
      className={twMerge("mb-26 w-full overflow-hidden md:mb-36", className)}
      {...rest}
    >
      <Layout>
        <LayoutRow>
          <LayoutColumn
            span={12}
            className="mb-8 flex justify-between md:mb-15"
          >
            <h2 className="text-xl md:text-4xl">Collections</h2>
            <div className="flex items-center">
              <LinkAsButton
                href={"/shop"}
                size="sm"
                className="py-3 md:h-10 md:py-0 md:leading-10"
              >
                View All
              </LinkAsButton>

              <button className="swiper-prev group hidden md:block">
                <ArrowIcon
                  variant="left"
                  color="white"
                  className="ml-6 hidden group-disabled:bg-transparent group-disabled:text-black md:flex"
                />
              </button>

              <button className="swiper-next group right-2 top-1/2 hidden md:block">
                <ArrowIcon
                  color="white"
                  variant="right"
                  className="ml-2 group-disabled:bg-transparent group-disabled:text-black"
                />
              </button>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <div className="swiper-container">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.4}
          slidesPerGroup={1}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              spaceBetween: 40,
              slidesPerView: 2.5,
            },
          }}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          className={twMerge("swiper-padding overflow-visible")}
          {...rest}
        >
          {[...Array(4)].map((_, index) => (
            <SwiperSlide key={index}>
              <CollectionCard
                image={
                  <Image
                    alt="collection image"
                    src={Collection}
                    className="mb-4 w-full object-cover lg:mb-10"
                    priority={true}
                    height={661}
                    width={496}
                  />
                }
                name="Scandinavian Simplicity"
                description="Minimalistic designs, neutral colors, and high-quality textures"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
