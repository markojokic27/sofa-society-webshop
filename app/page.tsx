// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

// Assets
import HeaderImage from "@/public/assets/images/header.png";
import Sofa from "@/public/assets/images/sofa.png";
import AboutImage from "@/public/assets/images/about-sofa.png";
import { CollectionsScroll } from "@/components/CollectionsScroll";

export default function Page() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="mt-18 md:mb-26 mb-8 w-full overflow-hidden md:mt-0 md:h-screen">
        <Image
          alt="header image"
          src={HeaderImage}
          className="w-full object-cover md:h-full"
          priority={true}
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
            <Button variant="link">Explore Now</Button>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn span={12} className="md:mb-15 mb-8">
            <h2 className="text-xl md:text-4xl">Our products</h2>
          </LayoutColumn>
          <LayoutColumn span={6}>
            <div>
              <Image
                alt="sofa image"
                src={Sofa}
                className="md:aspect-4/3 mb-2 w-full object-cover md:mb-8"
                height={225}
                width={168}
              />
            </div>
            <p className="text-2xs md:text-lg">Sofas</p>
          </LayoutColumn>
          <LayoutColumn span={6}>
            <div>
              <Image
                alt="sofa image"
                src={Sofa}
                className="md:aspect-4/3 mb-2 w-full object-cover md:mb-8"
                height={225}
                width={168}
              />
            </div>
            <p className="text-2xs md:text-lg">Sofas</p>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <CollectionsScroll />
      <Layout>
        <LayoutRow>
          <LayoutColumn span={12} className="md:mb-15 mb-8">
            <h2 className="text-xl md:text-4xl">About Sofa Society</h2>
          </LayoutColumn>
          <LayoutColumn span={12} className="mb-8 md:mb-16">
            <Image
              src={AboutImage}
              alt="About image"
              className="object-cover"
              height={702}
              width={1248}
              priority={true}
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
            <Button variant="link">Read more about Sofa Society</Button>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}
