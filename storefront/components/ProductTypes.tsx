"use client";

// External packages
import * as React from "react";
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components//Layout";
import { LocalizedLink } from "@/components/LocalizedLink";

// Lib
import { getProductTypes } from "@/lib/data/ProductTypes";

// Medusa
import { HttpTypes } from "@medusajs/types";

import Sofa from "@/public/assets/images/sofa.png";

export const ProductTypes: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { country: string }
> = ({ country }) => {
  const [productTypes, setProductTypes] = React.useState<
    HttpTypes.StoreProductType[]
  >([]);
  React.useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await getProductTypes();
        console.log(data);
        setProductTypes(data);
      } catch (err) {
        console.error("Error fetching regions:", err);
      }
    };
    fetchTypes();
  }, []);
  const imageLinks = [
    "http://localhost:9090/medusa/sofas-01JJBXFB607FXZZ7NQ7NX313MY.png",
    "http://localhost:9090/medusa/arm-chairs-01JJBXFB64Q8XZ66W74CGY8ZYX.png",
  ];

  console.log("A", productTypes[0]);
  return (
    <Layout>
      <LayoutRow className="mb-26 md:mb-36">
        <LayoutColumn span={12} className="mb-8 md:mb-15">
          <h2 className="text-xl md:text-4xl">Our products</h2>
        </LayoutColumn>
        {productTypes.map((type, i) => (
          <LayoutColumn span={6} key={type.id}>
            <LocalizedLink country={country} href="/shop">
              <div>
                <Image
                  alt="sofa image"
                  src={imageLinks[i]}
                  className="mb-2 w-full object-cover md:mb-8 md:aspect-4/3"
                  height={225}
                  width={168}
                />
              </div>
              <p className="text-2xs md:text-lg">{type.value}</p>
            </LocalizedLink>
          </LayoutColumn>
        ))}
      </LayoutRow>
    </Layout>
  );
};
