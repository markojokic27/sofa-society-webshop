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
import { Arrow } from "@/components/Arrow";
import { LinkAsButton } from "@/components/LinkAsButton";

// Lib
import { getCollections } from "@/lib/data/Collections";

// Medusa
import { HttpTypes } from "@medusajs/types";

export const CollectionsScroll: React.FC<
  React.ComponentPropsWithoutRef<"div"> & SwiperProps
> = ({ className, ...rest }) => {
  const [collections, setCollections] = React.useState<
    HttpTypes.StoreCollection[]
  >([]);
  React.useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await getCollections();
        setCollections(data);
      } catch (err) {
        console.error("Error fetching regions:", err);
      }
    };
    fetchTypes();
  }, []);
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
                <Arrow
                  variant="right"
                  color="white"
                  className="ml-6 hidden rotate-180 group-disabled:bg-transparent group-disabled:text-black md:flex"
                />
              </button>

              <button className="swiper-next group hidden md:block">
                <Arrow
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
          {collections.map((c) => (
            <SwiperSlide key={c.id}>
              <CollectionCard
                image={
                  <Image
                    alt="collection image"
                    src={(c.metadata?.image as { url: string })?.url}
                    className="mb-4 w-full object-cover lg:mb-10"
                    height={661}
                    width={496}
                  />
                }
                name={c.title}
                description={c.metadata?.description as string}
                route={c.handle}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
