import { sdk } from "@/lib/Config";

export const getCategories = async () => {
  try {
    const { product_categories } = await sdk.store.category.list();
    return product_categories;
  } catch (error) {
    throw new Error("Failed to fetch product categories");
  }
};
