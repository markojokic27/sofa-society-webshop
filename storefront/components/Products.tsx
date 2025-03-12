// External packages
import Image from "next/image";

// Components
import { LayoutRow, LayoutColumn } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { Filter } from "@/components/Filter";
import { MultipleSelection } from "@/components/MultipleSelection";
import { SingleSelection } from "@/components/SingleSelection";
import { MobileFilters } from "@/components/MobileFilters";
import { Icon } from "@/components/Icon";

// Medusa
import { HttpTypes } from "@medusajs/types";

export const Products: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    country: string;
    products: HttpTypes.StoreProduct[];
    region: HttpTypes.StoreRegion;
    collections?: HttpTypes.StoreCollection[];
    categories: HttpTypes.AdminProductCategory[];
    types: HttpTypes.AdminProductType[];
    collection?: string;
  }
> = ({
  country,
  products,
  region,
  collections,
  categories,
  types,
  collection,
}) => {
  return (
    <>
      <LayoutRow className="mb-8">
        <LayoutColumn className="flex justify-between md:hidden">
          <MobileFilters
            trigger="Filter"
            icon={<Icon name="plus" className="h-4 w-4" />}
            headers={["Colections", "Categories", "Types"]}
            filterNames={["collection", "category", "type"]}
            items={[
              collections?.map((c) => c.title) ?? [],
              categories?.map((c) => c.name) ?? [],
              types?.map((c) => c.value) ?? [],
            ]}
          />
          <MobileFilters
            trigger="Sort by"
            icon={<Icon name="chevronDown" className="h-4 w-4" />}
            contentClassName="h-fit"
            filterNames={["sort"]}
            headers={["Sort by"]}
            items={[["Latest Arrivals", "Lowest price", "Highest price"]]}
            radio
          />
        </LayoutColumn>
        <LayoutColumn className="hidden gap-4 md:flex">
          {!collection && (
            <Filter name="Colection">
              <MultipleSelection
                filterName="collection"
                preSelected={[collection].filter((item) => item !== undefined)}
                items={collections?.map((c) => c.title) ?? []}
              />
            </Filter>
          )}
          <Filter name="Categories">
            <MultipleSelection
              filterName="category"
              items={categories?.map((c) => c.name) ?? []}
            />
          </Filter>
          <Filter name="Types">
            <MultipleSelection
              filterName="type"
              preSelected={[collection].filter((item) => item !== undefined)}
              items={types?.map((c) => c.value) ?? []}
            />
          </Filter>
          <Filter name="Sort by" popoverAlignment="end" className="ml-auto">
            <SingleSelection
              items={["Lastest Arrivals", "Lowest price", "Highest price"]}
            />
          </Filter>
        </LayoutColumn>
      </LayoutRow>
      <LayoutRow className="-mx-2 md:-mx-4 lg:-mx-6">
        {products.map((p: HttpTypes.StoreProduct) => (
          <LayoutColumn
            key={p.id}
            span={6}
            mdSpan={4}
            className="px-2 md:px-4 lg:px-6"
          >
            <ProductCard
              product={p}
              country={country}
              region={region}
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
        ))}
      </LayoutRow>
    </>
  );
};
