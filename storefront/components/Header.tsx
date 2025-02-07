"use client";

// External packages
import * as React from "react";

// Components
import { Icon } from "@/components/Icon";
import { Drawer } from "@/components/Drawer";
import { HeaderWrapper } from "@/components/HeaderWrapper";
import { CountrySelect } from "@/components/CountrySelect";
import { LocalizedLink } from "./LocalizedLink";

// Utils
import { getPathnameCountry } from "@/utils/getPathnameCountry";

export const Header: React.FC = () => {
  const country = getPathnameCountry();
  return (
    <HeaderWrapper>
      <div className="mx-auto grid grid-cols-2 items-center px-8 py-6 sm:container md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-7.5 md:group-data-[theme=light]:text-white">
        <LocalizedLink
          href="/"
          country={country}
          className="justify-self-start text-lg leading-none focus:outline-none"
        >
          SofaSocietyCo.
        </LocalizedLink>
        <div className="hidden gap-8 md:flex">
          <LocalizedLink
            href="/about"
            className="self-center focus:outline-none"
            country={country}
          >
            About
          </LocalizedLink>
          <LocalizedLink
            href="/inspiration"
            className="self-center focus:outline-none"
            country={country}
          >
            Inspiration
          </LocalizedLink>
          <LocalizedLink
            href="/shop"
            className="self-center focus:outline-none"
            country={country}
          >
            Shop
          </LocalizedLink>
        </div>
        <ul className="flex items-center gap-8 justify-self-end">
          <li className="hidden md:flex">
            <CountrySelect defaultValue="HR" />
          </li>
          <li>
            <LocalizedLink
              country={country}
              href="/cart"
              className="focus:outline-none"
            >
              <Icon name="bag" />
            </LocalizedLink>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <Drawer />
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};
