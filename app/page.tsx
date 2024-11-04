// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Arrow } from "@/components/Arrow";

// Assets
import HeaderImage from "@/public/assets/images/header.png";
import Sofa from "@/public/assets/images/sofa.png";
import Collection from "@/public/assets/images/collection.png";
import { CollectionCard } from "@/components/CollectionCard";

export default function Home() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="mt-18 md:mb-26 mb-8 w-full overflow-hidden md:mt-0 md:h-screen">
        <Image
          alt="header image"
          src={HeaderImage}
          className="w-full object-cover md:h-full"
          priority={true}
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
              />
            </div>
            <p className="text-2xs md:text-lg">Sofas</p>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn
            span={12}
            className="md:mb-15 mb-8 flex justify-between"
          >
            <h2 className="text-xl md:text-4xl">Collections</h2>
            <div className="flex items-center">
              <Button size="sm" className="md:h-10 md:py-0 md:leading-10">
                View All
              </Button>
              <Arrow
                variant="left"
                color="white"
                className="ml-6 hidden md:block"
              />
              <Arrow color="white" className="ml-2 hidden md:block" />
            </div>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-26 flex-nowrap overflow-x-auto md:mb-36">
          <LayoutColumn span={8} mdSpan={5}>
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
          <LayoutColumn span={8} mdSpan={5}>
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
          <LayoutColumn span={8} mdSpan={5}>
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
          <LayoutColumn span={8} mdSpan={5}>
            <CollectionCard
              image={
                <Image
                  alt="collection image"
                  src={Collection}
                  className="mb-4 w-full object-cover md:mb-10"
                />
              }
              name="Scandinavian Simplicity"
              description="Minimalistic designs, neutral colors, and high-quality textures"
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
