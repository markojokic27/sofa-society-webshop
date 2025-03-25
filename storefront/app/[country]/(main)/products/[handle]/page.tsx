// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { ImageSwiper } from "@/components/ImageSwiper";
import { OrderSettings } from "@/components/product/OrderSettings";
import { ProductCard } from "@/components/ProductCard";

// Lib
import { getRegion } from "@/lib/data/Regions";
import { getProductByHandle } from "@/lib/data/Product";
import { getRelatedProducts } from "@/lib/data/Products";
import { HttpTypes } from "@medusajs/types";

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ country: string; handle: string }>;
}) {
  const params = await paramsPromise;
  const region = await getRegion(params.country);
  const country = params.country;

  const { product, cheapestPrice } = await getProductByHandle(
    params.handle,
    region!,
  );
  const relatedProducts = (await getRelatedProducts(
    product.handle,
    product.collection_id || "",
  )) as (HttpTypes.StoreProduct & {
    cheapestPrice: {
      calculated_price: string;
      calculated_price_number: number;
      original_price: string;
      original_price_number: number;
    };
  })[];

  console.log(relatedProducts);

  return (
    <>
      <Layout className="mb-16 mt-18 sm:mt-36 md:mb-26">
        <LayoutRow>
          <LayoutColumn smSpan={6}>
            <div className="-mx-4 sm:-mr-2 sm:ml-0 md:-mr-8 lg:-mr-12">
              <ImageSwiper
                images={[
                  <Image
                    key="1"
                    alt="sofa image"
                    src={product?.images?.[0]?.url || ""}
                    className="w-full object-cover"
                    priority={true}
                    height={612}
                    width={459}
                  />,
                  <Image
                    key="2"
                    alt="sofa image"
                    src={product?.images?.[1]?.url || ""}
                    className="w-full object-cover"
                    priority={true}
                    height={612}
                    width={459}
                  />,
                ]}
              />
            </div>
          </LayoutColumn>
          <LayoutColumn smSpan={6}>
            <div className="sm:ml-8 lg:ml-10">
              <p className="mb-2 text-grayscale-500">
                {product.collection?.title}
              </p>
              <h2 className="mb-2 text-lg font-bold sm:font-normal md:text-3xl">
                {product.title}
              </h2>
              <h3 className="mb-8 text-lg">{cheapestPrice.calculated_price}</h3>
              <p className="sm:md-16 mb-8 text-2xs text-grayscale-500 sm:text-black md:text-base xl:mb-16">
                {product.description}
              </p>
              <OrderSettings
                materials={
                  (product?.options?.[1]?.values ?? []).map((material) => ({
                    name: material.value,
                    value: material.value,
                  })) || []
                }
                // materials={[
                //   { name: "Welvet", value: "Welwet" },
                //   { name: "Linen", value: "Linen" },
                //   { name: "Boucle", value: "Boucle" },
                //   { name: "Leather", value: "Leather" },
                // ]}

                //TODO Problem sa bojama, nema #hex vrijednosti
                //triba za svaki materijal posebno dobavljat boje fashion/[product_handle]
                colors={[
                  { name: "Dark Gray", value: "#a2a2a2" },
                  { name: "Black", value: "#353535" },
                  { name: "White", value: "#e8e8e8" },
                ]}
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout>
        <LayoutRow className="mb-8 lg:mb-20">
          <LayoutColumn className="mb-8 lg:mb-6">
            <h2 className="text-xl lg:text-4xl">
              {product.collection?.metadata?.product_page_heading?.toString() ||
                ""}
            </h2>
          </LayoutColumn>
          <LayoutColumn>
            <Image
              alt="sofa image"
              src={
                (
                  product.collection?.metadata?.product_page_image as {
                    url: string;
                  }
                )?.url
              }
              className="w-full object-cover"
              priority={true}
              height={702}
              width={1248}
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <div className="mx-auto mb-8 px-4 sm:w-full sm:px-0 md:mb-20">
        <Image
          alt="sofa image"
          src={
            (
              product.collection?.metadata?.product_page_wide_image as {
                url: string;
              }
            )?.url
          }
          className="w-full object-cover"
          width={1440}
          height={809}
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn span={9} lgSpan={5}>
            <div className="mx-auto mb-8 w-full lg:mb-0 lg:w-fit">
              <Image
                alt="sofa image"
                width={492}
                height={656}
                src={
                  (
                    product.collection?.metadata?.product_page_cta_image as {
                      url: string;
                    }
                  )?.url
                }
                className="w-full object-cover"
              />
            </div>
          </LayoutColumn>
          <LayoutColumn span={12} lgSpan={7}>
            <p className="mb-8 text-lg lg:ml-15 lg:mt-20 lg:text-4xl">
              {product.collection?.metadata?.product_page_cta_heading?.toString()}
            </p>
            <Link
              href={`/collections/${product.collection?.handle}`}
              className="underline underline-offset-4 md:text-base lg:ml-15 lg:text-lg"
            >
              {product.collection?.metadata?.product_page_cta_link?.toString()}
            </Link>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-8 md:mb-16">
          <LayoutColumn>
            <h2 className="text-xl lg:text-4xl">Related products</h2>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="-mx-2 md:-mx-4 lg:-mx-6">
          {relatedProducts.map(
            (
              p: HttpTypes.StoreProduct & {
                cheapestPrice: {
                  calculated_price: string;
                  calculated_price_number: number;
                  original_price: string;
                  original_price_number: number;
                };
              },
            ) => (
              <LayoutColumn
                key={p.id}
                span={6}
                mdSpan={4}
                className="px-2 md:px-4 lg:px-6"
              >
                <ProductCard
                  product={p}
                  country={country}
                  image={
                    <Image
                      alt="about image"
                      src={p.thumbnail || ""}
                      className="mb-4 aspect-square object-cover md:mb-6"
                      width={459}
                      height={612}
                      priority
                    />
                  }
                  className="mb-10 md:mb-16"
                />
              </LayoutColumn>
            ),
          )}
        </LayoutRow>
      </Layout>
    </>
  );
}
