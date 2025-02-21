// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { CollectionsScroll } from "@/components/CollectionsScroll";
import { Products } from "@/components/Products";

// Lib
import { getProducts } from "@/lib/data/Products";

// Medusa
import { HttpTypes } from "@medusajs/types";

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  const productList: HttpTypes.StoreProductListResponse = await getProducts();
  

  return (
    <>
      <CollectionsScroll className="mb-26 mt-26 md:mb-36 md:mt-48" />
      <Layout>
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-6 text-xl md:mb-8 md:text-4xl">Shop</h1>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Products country={country} products={productList.products} />
    </>
  );
}
