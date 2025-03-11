// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { CollectionsScroll } from "@/components/CollectionsScroll";
import { LocalizedLink } from "@/components/LocalizedLink";
import { ProductTypes } from "@/components/ProductTypes";

// Assets
import HeaderImage from "@/public/assets/images/header.png";
import AboutImage from "@/public/assets/images/about-sofa.png";
export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  return (
    <>
      <div className="mb-8 mt-18 w-full overflow-hidden md:mb-26 md:mt-0 md:h-screen">
        <Image
          alt="header image"
          src={HeaderImage}
          className="w-full object-cover md:h-full"
          priority
          height={750}
          width={1440}
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 md:mb-34">
          <LayoutColumn mdSpan={8} className="mb-6 md:mb-0">
            <h2 className="text-xl md:text-4xl">
              Elevate Your Living Space with Unmatched Comfort & Style
            </h2>
          </LayoutColumn>
          <LayoutColumn
            mdSpan={4}
            className="flex flex-col justify-center md:text-lg"
          >
            <p>Discover Your Perfect Sofa Today</p>
            <LocalizedLink
              country={country}
              href="/shop"
              className="md:underline-offset- underline underline-offset-4"
            >
              Explore Now
            </LocalizedLink>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <ProductTypes country={country} />
      <CollectionsScroll />
      <Layout>
        <LayoutRow>
          <LayoutColumn span={12} className="mb-8 md:mb-15">
            <h2 className="text-xl md:text-4xl">About Sofa Society</h2>
          </LayoutColumn>
          <LayoutColumn span={12} className="mb-8 md:mb-16">
            <Image
              src={AboutImage}
              alt="About image"
              className="w-full object-cover"
              height={702}
              width={1248}
            />
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn mdSpan={6}>
            <h3 className="mb-6 text-xl md:mb-0 md:text-4xl">
              At Sofa Society, we believe that a sofa is the heart of every
              home.
            </h3>
          </LayoutColumn>
          <LayoutColumn mdSpan={6} className="md:mt-18 md:text-lg lg:pl-20">
            <p className="mb-6 md:mb-10">
              We are dedicated to delivering high-quality, thoughtfully designed
              sofas that merge comfort and style effortlessly.
            </p>
            <p className="md:6 mb-4">
              Our mission is to transform your living space into a sanctuary of
              relaxation and beauty, with products built to last.
            </p>
            <LocalizedLink
              country={country}
              href="/about"
              className="underline underline-offset-4"
            >
              Read more about Sofa Society
            </LocalizedLink>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
