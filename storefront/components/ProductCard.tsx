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
    <LocalizedLink country={country} href={"/product"}>
      <div className="mb-6 w-full">{image}</div>
      <div className="flex justify-between">
        <div>
          <p>{name}</p>
          <p className="mt-1 text-2xs text-gray-500">{description}</p>
        </div>
        <div>
          {price && (
            <p
              className={twMerge(originalPrice && "text-red-700", "font-bold")}
            >
              {price}
            </p>
          )}
          {originalPrice && (
            <p className="text-gray-400 line-through">{originalPrice}</p>
          )}
        </div>
      </div>
    </LocalizedLink>
  </div>
);
