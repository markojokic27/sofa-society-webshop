"use client";

// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";

// Components
import { FunctionalSelect } from "@/components/FunctionalSelect";
import { ColorSelection } from "@/components/ColorSelection";
import { Counter } from "@/components/Counter";
import { Button } from "@/components/Button";

export const OrderSettings: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    materials: Array<{ name: string; value: string }>;
    colors: Array<{ name: string; value: string }>;
  }
> = ({ materials, colors, className, ...rest }) => {
  const [product, setProduct] = React.useState({
    material: "",
    color: "",
    quantity: 0,
  });
  return (
    <div {...rest} className={twMerge("w-full", className)}>
      <div className="mb-4 flex gap-6">
        <p>Materials</p>
        <p className="text-grayscale-500">{product.material}</p>
      </div>
      <FunctionalSelect
        items={materials}
        className="mb-6 border px-4 py-3"
        variant="order-settings"
        product={product}
        setProduct={setProduct}
        placeholder="Choose material"
      />
      <div
        className={
          product.material ? "visible block" : "invisible hidden sm:block"
        }
      >
        <div className="mb-4 flex gap-6">
          <p>Colors</p>
          <p className="text-grayscale-500">{product.color}</p>
        </div>

        <ColorSelection
          colors={colors}
          product={product}
          setProduct={setProduct}
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Counter />
        <Button
          className="w-full"
          isDisabled={!(product.color && product.material)}
          disabled={!(product.color && product.material)}
        >
          Add to cart{" "}
        </Button>
      </div>
    </div>
  );
};
