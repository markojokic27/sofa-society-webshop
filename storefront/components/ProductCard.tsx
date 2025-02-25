// External packages
import { twMerge } from "tailwind-merge";
import { HttpTypes } from "@medusajs/types";

// Components
import { LocalizedLink } from "./LocalizedLink";

// Lib
import { getProductPrice } from "@/lib/data/GetProductPrice";

export const ProductCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    country: string;
    region: HttpTypes.StoreRegion;
    product: HttpTypes.StoreProduct;
  }
> = ({ image, country, region, product, className, ...rest }) => {
  const { cheapestPrice } = getProductPrice({
    product: product,
  });
  return (
    <div {...rest} className={twMerge("w-full", className)}>
      <LocalizedLink country={country} href={"/products/"}>
        <div className="mb-4 w-full md:mb-6">{image}</div>
        <div className="md:flex md:justify-between">
          <div>
            <p className="text-2xs text-gray-500 md:text-base md:text-black">
              {product.title}
            </p>
            <p className="mt-1 hidden text-2xs text-gray-500 md:block">
              {product.collection?.title}
            </p>
          </div>
          <div>
            {cheapestPrice?.calculated_price && (
              <p
                className={twMerge(
                  cheapestPrice.calculated_price_number !=
                    cheapestPrice.original_price_number && "text-red-700",
                  "text-2xs font-semibold md:text-base",
                )}
              >
                {cheapestPrice?.calculated_price}
              </p>
            )}
            {cheapestPrice?.calculated_price_number !=
              cheapestPrice?.original_price_number && (
              <p className="text-2xs text-gray-400 line-through md:text-base">
                {cheapestPrice?.original_price}
              </p>
            )}
          </div>
        </div>
      </LocalizedLink>
    </div>
  );
};
