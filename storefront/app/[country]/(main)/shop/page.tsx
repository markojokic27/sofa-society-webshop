// External packages
import Image from "next/image";
import Link from "next/link";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { CollectionsScroll } from "@/components/CollectionsScroll";
import { ProductCard } from "@/components/ProductCard";
import { Filter } from "@/components/Filter";
import { MultipleSelection } from "@/components/MultipleSelection";
import { SingleSelection } from "@/components/SingleSelection";
import { MobileFilters } from "@/components/MobileFilters";
import { Icon } from "@/components/Icon";
import { SliderSelection } from "@/components/SliderSelection";
import { RadioButton, RadioGroup } from "@/components/RadioGroup";
import { LocalizedLink } from "@/components/LocalizedLink";

// Assets
import Collection from "@/public/assets/images/collection.png";
import Sofa from "@/public/assets/images/product-card.png";

export default async function Page({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  return (
    <>
      <CollectionsScroll className="mb-26 mt-26 md:mb-36 md:mt-48 md:hidden" />
      <Layout className="mb-26 mr-0 mt-26 hidden pr-0 sm:mx-auto md:mb-36 md:mt-48 md:flex md:pr-6">
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-8 text-xl md:text-4xl">Collections</h1>
          </LayoutColumn>
          <LayoutColumn className="flex gap-6">
            <LocalizedLink
              country={country}
              href={"/collections"}
              className="flex-1"
            >
              <Image
                src={Collection}
                alt="Collection"
                priority
                className="mb-6"
              />
              <p>Scandinavian Simplicity</p>
            </LocalizedLink>
            <LocalizedLink
              country={country}
              href={"/collections"}
              className="flex-1"
            >
              <Image
                src={Collection}
                alt="Collection"
                priority
                className="mb-6"
              />
              <p>Scandinavian Simplicity</p>
            </LocalizedLink>
            <LocalizedLink
              country={country}
              href={"/collections"}
              className="flex-1"
            >
              <Image
                src={Collection}
                alt="Collection"
                priority
                className="mb-6"
              />
              <p>Scandinavian Simplicity</p>
            </LocalizedLink>
            <LocalizedLink
              country={country}
              href={"/collections"}
              className="flex-1"
            >
              <Image
                src={Collection}
                alt="Collection"
                priority
                className="mb-6"
              />
              <p>Scandinavian Simplicity</p>
            </LocalizedLink>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Layout>
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-6 text-xl md:mb-8 md:text-4xl">Shop</h1>
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
        <LayoutRow className="-mx-2 mb-20 md:-mx-4 lg:-mx-6">
          {Array(12)
            .fill(0)
            .map((_, index) => (
              <LayoutColumn
                key={index}
                span={6}
                mdSpan={4}
                className="px-2 md:px-4 lg:px-6"
              >
                <ProductCard
                  country={country}
                  name="Nordic Haven"
                  description="Scandinavian Simplicity"
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
              </LayoutColumn>
            ))}
        </LayoutRow>
      </Layout>
    </>
  );
}
