import { sdk } from "@/lib/Config";
//import { cache } from "react";

export const getProducts = async (limit?: number, offset?: number) => {
  return sdk.store.product
    .list({
      limit,
      offset,
      fields: "*variants.calculated_price,+variants.inventory_quantity",
    })
    .then(({ products, count }) => {
      return {
        response: {
          products,
          count,
        },
      };
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
