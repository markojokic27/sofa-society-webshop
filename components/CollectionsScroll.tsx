"use client";

// External packages
import * as React from "react";
import Image from "next/image";

// Components
import {
  Layout,
  LayoutRow,
  LayoutColumn,
  LayoutRowRef,
} from "@/components/Layout";
import { CollectionCard } from "@/components/CollectionCard";
import { Button } from "@/components/Button";
import { Arrow } from "@/components/Arrow";

// Assets
import Collection from "@/public/assets/images/collection.png";
import { twMerge } from "tailwind-merge";

export const CollectionsScroll: React.FC<
  React.ComponentPropsWithoutRef<"div">
> = ({ className, ...rest }) => {
  const rowRef = React.useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth;
      rowRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className={twMerge("w-full", className)} {...rest}>
      <Layout>
        <LayoutRow>
          <LayoutColumn
            span={12}
            className="mb-8 flex justify-between md:mb-15"
          >
            <h2 className="text-xl md:text-4xl">Collections</h2>
            <div className="flex items-center">
              <Button size="sm" className="md:h-10 md:py-0 md:leading-10">
                View All
              </Button>
              <Arrow
                variant="left"
                color="white"
                className="ml-6 hidden md:flex"
                onPress={() => handleScroll("left")}
              />
              <Arrow
                color="white"
                className="ml-2 hidden md:flex"
                onPress={() => handleScroll("right")}
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout className="mr-0 pr-0 md:container sm:mx-auto">
        <LayoutRowRef
          className="mb-26 flex-nowrap overflow-x-auto pr-4 scrollbar-hide md:mb-36 md:pr-0"
          ref={rowRef}
        >
          <LayoutColumn span={8} mdSpan={5} className="shrink-0">
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                  priority={true}
                  height={661}
                  width={496}
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
          <LayoutColumn span={8} mdSpan={5} className="shrink-0">
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                  priority={true}
                  height={661}
                  width={496}
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
          <LayoutColumn span={8} mdSpan={5} className="shrink-0">
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                  priority={true}
                  height={661}
                  width={496}
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
          <LayoutColumn span={8} mdSpan={5} className="shrink-0">
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                  priority={true}
                  height={661}
                  width={496}
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
        </LayoutRowRef>
      </Layout>
    </div>
  );
};
