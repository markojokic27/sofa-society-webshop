// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Assets
import HeaderImage from "@/public/assets/images/header-inspiration.png";
import Sofa from "@/public/assets/images/product-card.png";
import { ProductCard } from "@/components/ProductCard";

export default function Page() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="mb-8 mt-18 w-full overflow-hidden md:mb-26 md:mt-0 md:h-screen">
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
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn lgSpan={7} className="mb-16 lg:mb-0">
            <h2 className="mb-6 text-xl md:mb-16 md:text-4xl lg:mr-4">
              The Astrid Curve sofa is a masterpiece of minimalism and luxury.
            </h2>
            <p className="md:text-lg lg:max-w-lg">
              Our design philosophy revolves around creating pieces that are
              both beautiful and practical. Inspired by Scandinavian simplicity,
              modern luxury, and timeless classics.
            </p>
          </LayoutColumn>
          <LayoutColumn lgOffset={1} mdSpan={8} mdOffset={2} lgSpan={4}>
            <ProductCard
              name="Nordic Havenc"
              description="Scandinavian Simplicity"
              price="1000€"
              image={<Image alt="about image" src={Sofa} />}
            ></ProductCard>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
