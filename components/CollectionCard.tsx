// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

// Assets
import ImageBackground from "@/public/assets/shopImages/background.png";

export const CollectionCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    name: string;
    description?: string;
  }
> = ({ name, description, image, className, ...rest }) => (
  <div {...rest} className={twMerge("md:min-w-124", className)}>
    <div>{image}</div>
    <h3 className="mb-2 md:mb-4 lg:text-xl">Scandinavian Simplicity</h3>
    <p className="text-2xs text-grayscale-500 lg:text-lg">
      Minimalistic designs, neutral colors, and high-quality textures
    </p>
  </div>
);
