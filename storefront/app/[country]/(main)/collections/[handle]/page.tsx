// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Products } from "@/components/Products";

// Lib
import { getCollectionByHandle } from "@/lib/data/Collections";
import { getProducts } from "@/lib/data/Products";
import { getRegion } from "@/lib/data/Regions";
import { getCategories } from "@/lib/data/Categories";
import { getProductTypes } from "@/lib/data/ProductTypes";

// Medusa
import { HttpTypes } from "@medusajs/types";

export default async function Page({
  params: paramsPromise,
  searchParams,
}: {
  params: Promise<{ country: string; handle: string }>;
  searchParams: {
    page?: string;
    sort?: string;
    collection?: string[] | string;
    category?: string[] | string;
    type?: string[] | string;
  };
}) {
  const params = await paramsPromise;
  const { page, sort, category, type } = searchParams;
  const collection: (HttpTypes.StoreCollection & {
    metadata: {
      collection_page_image: { url: string };
      collection_page_heading: string;
      collection_page_content: string;
    };
  })[] = await getCollectionByHandle(params.handle);

  const { country } = await params;
  const region = await getRegion(country);
  let categories = await getCategories();
  categories = [categories[categories.length - 1], ...categories.slice(0, -1)];
  const types = await getProductTypes();

  const getFilteredIds = (
    items: { id: string; value?: string; name?: string; title?: string }[],
    filterValues?: string[] | string,
  ) => {
    if (!filterValues) return [];
    return items
      .filter((item) =>
        typeof filterValues === "string"
          ? filterValues === item.value ||
            filterValues === item.name ||
            filterValues === item.title
          : filterValues.includes(item.value!) ||
            filterValues.includes(item.name!) ||
            filterValues.includes(item.title!),
      )
      .map((item) => item.id);
  };

  const productListSdk = await getProducts(
    undefined,
    0,
    collection[0]?.id,
    getFilteredIds(types, type),
    getFilteredIds(categories, category),
  );
  return (
    <>
      <div className="mb-8 mt-18 w-full overflow-hidden md:mb-16 md:mt-0 md:h-screen">
        <Image
          alt="header image"
          src={collection[0]?.metadata?.collection_page_image?.url}
          className="w-full object-cover md:h-full"
          priority={true}
          height={750}
          width={1440}
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 lg:mb-36">
          <LayoutColumn lgSpan={6} className="mb-6 text-xl lg:text-4xl">
            {collection[0]?.metadata?.collection_page_heading}
          </LayoutColumn>
          <LayoutColumn lgSpan={6} className="lg:text-lg">
            <div className="lg:ml-15 lg:mt-18">
              {collection[0]?.metadata?.collection_page_content
                ?.split("\n")
                .map((line, index) => (
                  <p key={index}>
                    {line}
                    <br />
                  </p>
                ))}
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout>
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-6 text-xl md:mb-8 md:text-4xl">
              {collection[0]?.title}
            </h1>
          </LayoutColumn>
        </LayoutRow>
        <Products
          country={country}
          region={region as HttpTypes.StoreRegion}
          products={productListSdk.response.products}
          collection={collection[0].id}
          types={types}
          categories={categories}
        />
        {!productListSdk.response.products.length && (
          <div className="py-16 text-center">
            <p className="mb-4 text-lg">No results match!</p>
            <Link
              href={`${params.handle}`}
              className="underline underline-offset-4"
            >
              Clear filters
            </Link>
          </div>
        )}
      </Layout>
    </>
  );
}
