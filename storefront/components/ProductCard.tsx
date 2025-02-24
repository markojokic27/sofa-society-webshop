// External packages
import { twMerge } from "tailwind-merge";

// Components
import { LocalizedLink } from "./LocalizedLink";

export const ProductCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    name: string;
    description?: string;
    price: string;
    originalPrice?: string;
    country: string;
  }
> = ({
  image,
  name,
  description,
  price,
  originalPrice,
  country,
  className,
  ...rest
}) => (
  <div {...rest} className={twMerge("w-full", className)}>
    <LocalizedLink country={country} href={"/products/"}>
      <div className="mb-4 w-full md:mb-6">{image}</div>
      <div className="md:flex md:justify-between">
        <div>
          <p className="text-2xs text-gray-500 md:text-base md:text-black">
            {name}
          </p>
          <p className="mt-1 hidden text-2xs text-gray-500 md:block">
            {description}
          </p>
        </div>
        <div>
          {price && (
            <p
              className={twMerge(
                originalPrice && "text-red-700",
                "text-2xs font-semibold md:text-base md:font-bold",
              )}
            >
              {price}
            </p>
          )}
          {originalPrice && (
            <p className="text-2xs text-gray-400 line-through md:text-base">
              {originalPrice}
            </p>
          )}
        </div>
      </div>
    </LocalizedLink>
  </div>
);
