import { sdk } from "@/lib/Config";

export const getProducts = async (
  limit?: number,
  offset?: number,
  collectionId?: string,
) => {
  return sdk.store.product
    .list({
      limit,
      offset,
      fields: "*variants.calculated_price,+variants.inventory_quantity",
    })
    .then(({ products, count }) => {
      collectionId &&
        (products = products.filter(
          (product) => product.collection_id === collectionId,
        ));
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
