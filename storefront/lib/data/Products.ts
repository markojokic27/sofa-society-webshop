// Lib
import { sdk } from "@/lib/Config";
import { getProductPrice } from "@/lib/data/GetProductPrice";
import { HttpTypes } from "@medusajs/types";

type ProductWithPrice = HttpTypes.StoreProduct & {
  cheapestPrice: {
    calculated_price_number: number;
  };
};

export const getProducts = async (
  limit?: number,
  offset?: number,
  collectionsId?: string | string[],
  typesId?: string | string[],
  categoriesId?: string | string[],
  sort?: string,
) => {
  const order = sort === "created_at" ? "created_at" : undefined;
  const limitSort = Boolean(sort?.startsWith("price")) ? undefined : limit;
  const offsetSort = sort?.startsWith("price") ? undefined : offset;

  return sdk.store.product
    .list({
      limit: limitSort,
      offset: offsetSort,
      fields: "*variants.calculated_price,+variants.inventory_quantity",
      type_id: typesId,
      collection_id: collectionsId,
      category_id: categoriesId,
      order: order,
    })
    .then(({ products, count }) => {
      let productsWithPrice: ProductWithPrice[] = products.map((product) => {
        const cheapestPrice = getProductPrice({ product }).cheapestPrice ?? {
          calculated_price_number: 0,
        };
        return {
          ...product,
          cheapestPrice,
        };
      });
      (sort === "price-asc" || sort === "price-desc") &&
        productsWithPrice.sort((a, b) => {
          const diff =
            a.cheapestPrice.calculated_price_number -
            b.cheapestPrice.calculated_price_number;
          if (sort === "price-asc") return diff;
          return -diff;
        });
      if (!limitSort) {
        productsWithPrice = productsWithPrice.slice(
          offset as number,
          (offset as number) + (limit as number),
        );
      }
      return {
        response: {
          products: productsWithPrice,
          count,
        },
      };
    });
};

export const getRelatedProducts = async (
  handle: string,
  collection_id: string,
) => {
  return sdk.store.product
    .list(
      {
        collection_id: collection_id,
        fields: "*variants.calculated_price,+variants.inventory_quantity",
      },
      { next: { tags: ["products"] } },
    )
    .then(({ products }) => {
      let productsWithPrice: ProductWithPrice[] = products.map((product) => {
        const cheapestPrice = getProductPrice({ product }).cheapestPrice ?? {
          calculated_price_number: 0,
        };
        return {
          ...product,
          cheapestPrice,
        };
      });

      return productsWithPrice.filter((product) => product.handle !== handle);
    });
};

// export const getProductsById = cache(async function ({
//   ids,
//   regionId,
// }: {
//   ids: string[];
//   regionId: string;
// }) {
//   return sdk.store.product
//     .list(
//       {
//         id: ids,
//         region_id: regionId,
//         fields: "*variants.calculated_price,+variants.inventory_quantity",
//       },
//       { next: { tags: ["products"] } },
//     )
//     .then(({ products }) => products);
// });
