"use client";

// External packages
import * as React from "react";
import Link from "next/link";

// Components
import { Icon } from "@/components/Icon";
import { Drawer } from "@/components/Drawer";
import { HeaderWrapper } from "@/components/HeaderWrapper";
import { CountrySelect } from "@/components/CountrySelect";

// Medusa
import { HttpTypes } from "@medusajs/types";

// Lib
import { getRegions } from "@/lib/data/Regions";

export const Header: React.FC = () => {
  const [regions, setRegions] = React.useState<HttpTypes.StoreRegion[]>([]);

  React.useEffect(() => {
    const fetchRegions = async () => {
      try {
        const dataRegions = await getRegions();
        setRegions(dataRegions);
      } catch (err) {
        console.error("Error fetching regions:", err);
      }
    };
    fetchRegions();
  }, []);

  return (
    <HeaderWrapper>
      <div className="mx-auto grid grid-cols-2 items-center px-8 py-6 sm:container md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-7.5 md:group-data-[theme=light]:text-white">
        <Link
          href="/"
          className="justify-self-start text-lg leading-none focus:outline-none"
        >
          SofaSocietyCo.
        </Link>
        <div className="hidden gap-8 md:flex">
          <Link href="/about" className="self-center focus:outline-none">
            About
          </Link>
          <Link href="/inspiration" className="self-center focus:outline-none">
            Inspiration
          </Link>
          <Link href="/shop" className="self-center focus:outline-none">
            Shop
          </Link>
        </div>
        <ul className="flex items-center gap-8 justify-self-end">
          <li className="hidden md:flex">
            <CountrySelect defaultValue="HR" />
          </li>
          <li className="hidden items-center md:flex">
            <Link href={"/"} className="focus:outline-none">
              <Icon name="search" />
            </Link>
          </li>
          <li>
            <Link href="/cart" className="focus:outline-none">
              <Icon name="bag" />
            </Link>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <Drawer regions={regions} />
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};
