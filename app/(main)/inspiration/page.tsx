// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionsScroll } from "@/components/CollectionsScroll";

// Assets
import HeaderImage from "@/public/assets/images/header-inspiration.png";
import Sofa from "@/public/assets/images/product-card.png";
import AboutImage from "@/public/assets/images/about1.png";
import AboutImage2 from "@/public/assets/images/about3.png";

export default function Page() {
  return (
    <>
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
            />
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-8 md:mb-26">
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
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn lgSpan={7} className="mb-16 lg:mb-0">
            <h2 className="mb-6 text-xl md:mb-16 md:text-4xl lg:mr-4">
              Haven Sofas have minimalistic designs, neutral colors, and
              high-quality textures.
            </h2>
            <p className="md:text-lg lg:max-w-lg">
              Perfect for those who seek comfort with a clean and understated
              aesthetic. This collection brings the essence of Scandinavian
              elegance to your living room.
            </p>
          </LayoutColumn>
          <LayoutColumn lgOffset={1} mdSpan={8} mdOffset={2} lgSpan={4}>
            <ProductCard
              name="Nordic Havenc"
              description="Scandinavian Simplicity"
              price="1000€"
              image={<Image alt="about image" src={Sofa} />}
              className="mb-8 md:mb-16"
            />
            <ProductCard
              name="Nordic Havenc"
              description="Scandinavian Simplicity"
              price="1000€"
              image={<Image alt="about image" src={Sofa} />}
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <div className="mx-auto px-4 pb-8 md:mb-26 md:w-full md:px-0">
        <Image
          alt="sofa image"
          src={AboutImage2}
          className="w-full object-cover"
          priority={true}
          width={1440}
          height={809}
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn lgSpan={7} className="mb-16 lg:mb-0">
            <h2 className="mb-6 text-xl md:mb-16 md:text-4xl lg:mr-4">
              Oslo Drift is infused with playful textures and vibrant patterns
              with eclectic vibes.
            </h2>
            <p className="md:text-lg lg:max-w-lg">
              Whether you're looking for bold statement pieces or subtle
              elegance, this collection elevates your home with a touch of
              glamour, sophistication, and unmatched coziness.
            </p>
          </LayoutColumn>
          <LayoutColumn lgOffset={1} mdSpan={8} mdOffset={2} lgSpan={4}>
            <ProductCard
              name="Nordic Havenc"
              description="Scandinavian Simplicity"
              price="1000€"
              originalPrice="1200€"
              image={<Image alt="about image" src={Sofa} />}
              className="mb-8 md:mb-16"
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <CollectionsScroll />
    </>
  );
}
