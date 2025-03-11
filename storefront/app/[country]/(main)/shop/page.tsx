// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { CollectionsScroll } from "@/components/CollectionsScroll";
import { Products } from "@/components/Products";
import { ProductsPagination } from "@/components/ProductsPagination";

// Lib
import { getProducts } from "@/lib/data/Products";
import { getRegion } from "@/lib/data/Regions";
import { getCollections } from "@/lib/data/Collections";
import { getCategories } from "@/lib/data/Categories";
import { getProductTypes } from "@/lib/data/ProductTypes";

// Medusa
import { HttpTypes } from "@medusajs/types";

// External packages
import Link from "next/link";

export default async function Page({
  params,
  searchParams,
}: {
  params: { country: string };
  searchParams: {
    page?: string;
    sort?: string;
    collection?: string[] | string;
    category?: string[] | string;
    type?: string[] | string;
  };
}) {
  const { country } = params;
  const { page, sort, collection, category, type } = searchParams;
  const region = await getRegion(country);
  const collections = await getCollections();
  const categories = await getCategories();
  const types = await getProductTypes();

  const activePage = page ? parseInt(page) : 1;
  const productsByPage = 12;

  const typesId = types
    .filter((t: HttpTypes.AdminProductType) => {
      return typeof type === "string"
        ? type === t.value
        : type?.find((ty) => ty === t.value);
    })
    .map((t: HttpTypes.AdminProductType) => t.id);

  const categoriesId = categories
    .filter((c: HttpTypes.AdminProductCategory) => {
      return typeof category === "string"
        ? category === c.name
        : category?.find((cat) => cat === c.name);
    })
    .map((c: HttpTypes.AdminProductCategory) => c.id);

  const collectionsId = collections
    .filter((c: HttpTypes.AdminCollection) => {
      console.log("COLLECTION", collection, c.title);
      return typeof collection === "string"
        ? collection === c.title
        : collection?.find((col) => col === c.title);
    })
    .map((c: HttpTypes.AdminCollection) => c.id);

  const productListSdk = await getProducts(
    productsByPage,
    (activePage - 1) * productsByPage,
    collectionsId,
    typesId,
    categoriesId,
  );
  const pagesNumber = Math.ceil(productListSdk.response.count / productsByPage);

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
          collections={collections}
          categories={categories}
          types={types}
        />
        {pagesNumber > 1 && <ProductsPagination pagesNumber={pagesNumber} />}
        {!productListSdk.response.products.length && (
          <div className="py-16 text-center">
            <p className="mb-4 text-lg">No results match!</p>
            <Link href={"shop"} className="underline underline-offset-4">
              Clear filters
            </Link>
          </div>
        )}
      </Layout>
    </>
  );
}
