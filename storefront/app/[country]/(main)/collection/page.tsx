// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { MobileFilters } from "@/components/MobileFilters";
import { Icon } from "@/components/Icon";
import { SliderSelection } from "@/components/SliderSelection";
import { MultipleSelection } from "@/components/MultipleSelection";
import { RadioButton, RadioGroup } from "@/components/RadioGroup";
import { Filter } from "@/components/Filter";
import { SingleSelection } from "@/components/SingleSelection";
import { ProductCard } from "@/components/ProductCard";

// Assets
import HeaderImage from "@/public/assets/images/header.png";
import Sofa from "@/public/assets/images/sofa.png";

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  return (
    <>
      <div className="mb-8 mt-18 w-full overflow-hidden md:mb-16 md:mt-0 md:h-screen">
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
        <LayoutRow className="mb-26 lg:mb-36">
          <LayoutColumn lgSpan={6} className="mb-6 text-xl lg:text-4xl">
            Scandinavian Simplicity: Effortless elegance, timeless comfort
          </LayoutColumn>
          <LayoutColumn lgSpan={6} className="lg:text-lg">
            <p className="lg:ml-15 lg:mt-18">
              Minimalistic designs, neutral colors, and high-quality textures.
              Perfect for those who seek comfort with a clean and understated
              aesthetic. <br />
              <br /> This collection brings the essence of Scandinavian elegance
              to your living room.
            </p>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout>
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-6 text-xl md:mb-8 md:text-4xl">
              Scandinavian Simplicity
            </h1>
          </LayoutColumn>
        </LayoutRow>

        <LayoutRow className="mb-8">
          <LayoutColumn className="flex justify-between md:hidden">
            <MobileFilters
              trigger="Filter"
              icon={<Icon name="plus" className="h-4 w-4" />}
            >
              <h2 className="mb-7 text-lg font-bold">Price</h2>
              <SliderSelection className="px-2" />
              <hr className="my-6 bg-grayscale-200" />
              <h2 className="mb-6 text-lg font-bold">Color</h2>
              <MultipleSelection
                items={["Black", "Gray", "White", "Red"]}
                checkboxClassName="px-0 flex-row-reverse justify-between text-base"
              />
              <hr className="my-6 bg-grayscale-200" />
              <h2 className="mb-6 text-lg font-bold">Materials</h2>
              <MultipleSelection
                items={["Velvet", "Linen", "Bouclé", "Leather"]}
                checkboxClassName="px-0 flex-row-reverse justify-between  text-base"
              />
              <hr className="my-6 bg-grayscale-200" />
              <h2 className="mb-6 text-lg font-bold">Colections</h2>
              <MultipleSelection
                items={[
                  "Scandinavian Simplicity",
                  "Modern Luxe",
                  "Boho Chic",
                  "Timeless Classics",
                ]}
                checkboxClassName="px-0 flex-row-reverse justify-between  text-base"
              />
            </MobileFilters>
            <MobileFilters
              trigger="Sort by"
              icon={<Icon name="chevronDown" className="h-4 w-4" />}
              contentClassName="h-fit"
            >
              <h2 className="mb-6 text-lg font-bold">Sort by</h2>
              <RadioGroup className="mb-3">
                <RadioButton
                  value="Featured"
                  labelLeft="Featured"
                  className="flex-row-reverse justify-between border-0 p-0"
                />
                <RadioButton
                  value="Best selling"
                  labelLeft="Best selling"
                  className="flex-row-reverse justify-between border-0 p-0"
                />
                <RadioButton
                  value="Lowest price"
                  labelLeft="Lowest price"
                  className="flex-row-reverse justify-between border-0 p-0"
                />
                <RadioButton
                  value="Highest price"
                  labelLeft="Highest price"
                  className="flex-row-reverse justify-between border-0 p-0"
                />
              </RadioGroup>
            </MobileFilters>
          </LayoutColumn>
          <LayoutColumn className="hidden gap-4 md:flex">
            <Filter name="Price">
              <SliderSelection
                thumbLabels={["Start", "End"]}
                aria-label="Range selection"
                className="px-6 pb-4 pt-6"
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
            <Filter name="Sort by" popoverAlignment="end" className="ml-auto">
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
        <LayoutRow className="-mx-2 mb-26 md:-mx-4 lg:-mx-6 lg:mb-36">
          <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
            <ProductCard
              country={country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square object-cover md:mb-6 md:aspect-4/3"
                />
              }
              className="mb-10 md:mb-16"
            />
          </LayoutColumn>
          <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
            <ProductCard
              country={country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              originalPrice="1200€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square object-cover md:mb-6 md:aspect-4/3"
                />
              }
              className="mb-10 md:mb-16"
            />
          </LayoutColumn>
          <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
            <ProductCard
              country={country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square object-cover md:mb-6 md:aspect-4/3"
                />
              }
              className="mb-10 md:mb-16"
            />
          </LayoutColumn>
          <LayoutColumn span={6} mdSpan={4} className="px-2 md:px-4 lg:px-6">
            <ProductCard
              country={country}
              name="Nordic Haven"
              description="Scandinavian Simplicity"
              price="1000€"
              originalPrice="1200€"
              image={
                <Image
                  alt="about image"
                  src={Sofa}
                  className="mb-4 aspect-square object-cover md:mb-6 md:aspect-4/3"
                />
              }
              className="mb-10 md:mb-16"
            />
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
