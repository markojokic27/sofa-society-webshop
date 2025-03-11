import { sdk } from "@/lib/Config";

export const getProducts = async (
  limit?: number,
  offset?: number,
  collectionsId?: string | string[],
  typesId?: string | string[],
  categoriesId?: string | string[],
  sort?: string,
) => {
  console.log("ACAA", collectionsId);

  return sdk.store.product
    .list({
      limit,
      offset,
      fields: "*variants.calculated_price,+variants.inventory_quantity",
      type_id: typesId,
      collection_id: collectionsId,
      category_id: categoriesId,
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
