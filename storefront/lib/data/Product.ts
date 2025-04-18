import { sdk } from "@/lib/Config";
import { HttpTypes } from "@medusajs/types";
import { getProductPrice } from "@/lib/data/GetProductPrice";

type ProductWithPrice = HttpTypes.StoreProduct & {
  cheapestPrice: {
    calculated_price: string;
    calculated_price_number: number;
    original_price: string;
    original_price_number: number;
  };
};

export const getProductByHandle = async (
  handle: string,
  region: HttpTypes.StoreRegion,
) => {
  return sdk.store.product
    .list({
      handle,
      region_id: region.id,
      fields: `*variants.calculated_price,+variants.inventory_quantity`,
    })
    .then(({ products }) => {
      const cheapestPrice = getProductPrice({ product: products[0] })
        .cheapestPrice ?? {
        calculated_price_number: 0,
        calculated_price: "0",
        original_price_number: 0,
        original_price: "0",
      };
      let productWithPrice: ProductWithPrice = {
        ...products[0],
        cheapestPrice: cheapestPrice,
      };
      return productWithPrice;
    });
};
