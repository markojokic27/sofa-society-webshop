// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { ImageSwiper } from "@/components/ImageSwiper";
import { OrderSettings } from "@/components/product/OrderSettings";

// Assets
import AboutImage from "@/public/assets/images/about1.png";
import AboutImage2 from "@/public/assets/images/about2.png";
import AboutImage3 from "@/public/assets/images/about3.png";
import Sofa from "@/public/assets/images/product-card.png";
import Product1 from "@/public/assets/images/product1.png";
import Product2 from "@/public/assets/images/product2.png";

export default function Page({ params }: { params: { country: string } }) {
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
                    src={Product1}
                    className="w-full object-cover"
                    priority={true}
                    height={612}
                    width={459}
                  />,
                  <Image
                    key="2"
                    alt="sofa image"
                    src={Product2}
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
              <p className="mb-2 text-grayscale-500">Modern Luxe</p>
              <h2 className="mb-2 text-lg font-bold sm:font-normal md:text-3xl">
                Paloma Haven
              </h2>
              <h3 className="mb-8 text-lg">€12000</h3>
              <p className="sm:md-16 mb-8 text-2xs text-grayscale-500 sm:text-black md:text-base xl:mb-16">
                Minimalistic designs, neutral colors, and high-quality textures.
                Perfect for those who seek comfort with a clean and understated
                aesthetic. This collection brings the essence of Scandinavian
                elegance to your living room.
              </p>
              <OrderSettings
                materials={[
                  { name: "Welvet", value: "Welwet" },
                  { name: "Linen", value: "Linen" },
                  { name: "Boucle", value: "Boucle" },
                  { name: "Leather", value: "Leather" },
                ]}
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
              Collection Inspired Interior
            </h2>
          </LayoutColumn>
          <LayoutColumn>
            <Image
              alt="sofa image"
              src={AboutImage}
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
          src={AboutImage3}
          className="w-full object-cover"
          priority={true}
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
                src={AboutImage2}
                className="w-full object-cover"
                priority={true}
              />
            </div>
          </LayoutColumn>
          <LayoutColumn span={12} lgSpan={7}>
            <p className="mb-8 text-lg lg:ml-15 lg:mt-20 lg:text-4xl">
              The Paloma Haven sofa is a masterpiece of minimalism and luxury.
            </p>
            <Link
              href={"/collection"}
              className="underline underline-offset-4 md:text-base lg:ml-15 lg:text-lg"
            >
              See more out of &apos;Modern Luxe&apos; collection
            </Link>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-8 md:mb-16">
          <LayoutColumn>
            <h2 className="text-xl lg:text-4xl">Related products</h2>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="l -mx-2 mb-24 md:-mx-4 md:mb-36 lg:-mx-6">
          <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
            <ProductCard
              country={params.country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square w-full md:mb-6 md:aspect-4/3"
                  priority={true}
                />
              }
            />
          </LayoutColumn>
          <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
            <ProductCard
              country={params.country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              originalPrice="1200€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square w-full md:mb-6 md:aspect-4/3"
                  priority={true}
                />
              }
            />
          </LayoutColumn>
          <LayoutColumn span={6} mdSpan={4} className="hidden md:flex">
            <ProductCard
              country={params.country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square w-full md:mb-6 md:aspect-4/3"
                  priority={true}
                />
              }
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
