// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CollectionsScroll } from "@/components/CollectionsScroll";
import { ProductCard } from "@/components/ProductCard";
import { Filter } from "@/components/Filter";
import { MultipleSelection } from "@/components/MultipleSelection";
import { SingleSelection } from "@/components/SingleSelection";

// Assets
import Collection from "@/public/assets/images/collection.png";
import Sofa from "@/public/assets/images/product-card.png";
import { SliderSelection } from "@/components/SliderSelection";

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <CollectionsScroll className="mb-26 mt-26 md:mb-36 md:mt-48 md:hidden" />
      <Layout className="mb-26 mr-0 mt-26 hidden pr-0 sm:mx-auto md:mb-36 md:mt-48 md:flex md:pr-6">
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-8 text-xl md:text-4xl">Collections</h1>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <Link href={"/collection"}>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </Link>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <Link href={"/collection"}>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </Link>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <Link href={"/collection"}>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </Link>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <Link href={"/collection"}>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </Link>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout>
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-6 text-xl md:mb-8 md:text-4xl">Shop</h1>
          </LayoutColumn>
        </LayoutRow>

        <LayoutRow>
          <LayoutColumn className="mb-8 flex gap-4">
            <Filter name="Price">
              <SliderSelection
                defaultValue={[0, 5000]}
                maxValue={5000}
                thumbLabels={["Start", "End"]}
                aria-label="Range selection"
              />
            </Filter>
            <Filter name="Color">
              <MultipleSelection items={["Black", "Gray", "White", "Red"]} />
            </Filter>
            <Filter name="Materials">
              <MultipleSelection
                items={["Velvet", "Linen", "Bouclé", "Leather"]}
              />
            </Filter>
            <Filter name="Colection">
              <MultipleSelection
                items={[
                  "Scandinavian Simplicity",
                  "Modern Luxe",
                  "Boho Chic",
                  "Timeless Classics",
                ]}
              />
            </Filter>
            <Filter name="Sort by" className="ml-auto">
              <SingleSelection
                items={[
                  "Featured",
                  "Best selling",
                  "Lowest price",
                  "Highest price",
                ]}
              />
            </Filter>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="-mx-2 mb-20 md:-mx-4 lg:-mx-6">
          {Array(12).fill(
            <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
              <ProductCard
                name="Nordic Haven"
                price="1000€"
                image={
                  <Image
                    alt="about image"
                    src={Sofa}
                    className="mb-4 aspect-square md:mb-6 md:aspect-4/3"
                    priority={true}
                  />
                }
                className="mb-10 md:mb-16"
              />
            </LayoutColumn>,
          )}
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
