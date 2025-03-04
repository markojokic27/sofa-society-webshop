// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { CollectionsScroll } from "@/components/CollectionsScroll";
import { Products } from "@/components/Products";

// Lib
import { getProducts } from "@/lib/data/Products";
import { getRegion } from "@/lib/data/Regions";

// Medusa
import { HttpTypes } from "@medusajs/types";
import { ProductsPagination } from "@/components/ProductsPagination";

export default async function Page({
  params,
  searchParams,
}: {
  params: { country: string };
  searchParams: { page?: string };
}) {
  const { country } = params;
  const region = await getRegion(country);
  const activePage = searchParams.page ? parseInt(searchParams.page) : 1;
  const productsBypage = 12;

  const productListSdk = await getProducts(
    productsBypage,
    (activePage - 1) * productsBypage,
  );
  const pagesNumber = Math.ceil(productListSdk.response.count / productsBypage);

  return (
    <>
      <CollectionsScroll className="mb-26 mt-26 md:mb-36 md:mt-48" />
      <Layout className="mb-20">
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-6 text-xl md:mb-8 md:text-4xl">Shop</h1>
          </LayoutColumn>
        </LayoutRow>
        <Products
          country={country}
          region={region as HttpTypes.StoreRegion}
          products={productListSdk.response.products}
        />
        {pagesNumber > 1 && <ProductsPagination pagesNumber={pagesNumber} />}
      </Layout>
    </>
  );
}
