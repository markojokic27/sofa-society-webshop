// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Products } from "@/components/Products";

// Lib
import { getCollectionByHandle } from "@/lib/data/Collections";
import { getProducts } from "@/lib/data/Products";
import { getRegion } from "@/lib/data/Regions";

// Medusa
import { HttpTypes } from "@medusajs/types";

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ country: string; handle: string }>;
}) {
  const params = await paramsPromise;
  const collection: (HttpTypes.StoreCollection & {
    metadata: {
      collection_page_image: { url: string };
      collection_page_heading: string;
      collection_page_content: string;
    };
  })[] = await getCollectionByHandle(params.handle);
  const { country } = await params;
  const region = await getRegion(country);

  const productListSdk = await getProducts(undefined, 0, collection[0]?.id);
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
        />
      </Layout>
    </>
  );
}
