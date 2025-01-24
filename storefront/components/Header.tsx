"use client";

// External packages
import { Button } from "react-aria-components";
import Link from "next/link";

// Components
import { Icon } from "@/components/Icon";
import { Drawer } from "@/components/Drawer";
import { FunctionalSelect } from "@/components/FunctionalSelect";
import { HeaderWrapper } from "@/components/HeaderWrapper";

export const Header: React.FC = () => {
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
            <FunctionalSelect
              items={[
                { name: "Arabic", value: "AR" },
                { name: "Chinese", value: "ZH" },
                { name: "Hrvatski", value: "HR" },
                { name: "English", value: "EN" },
                { name: "Français", value: "FR" },
                { name: "Deutsch", value: "DE" },
                { name: "Italiano", value: "IT" },
                { name: "Japanese", value: "JA" },
                { name: "Russian", value: "RU" },
                { name: "Español", value: "ES" },
              ]}
              defaultValue={"HR"}
            />
          </li>
          <li className="hidden items-center md:flex">
            <Button className="focus:outline-none">
              <Icon name="search" />
            </Button>
          </li>
          <li>
            <Link href="/cart" className="focus:outline-none">
              <Icon name="bag" />
            </Link>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <Drawer />
          </li>
        </ul>
      </div>
    </HeaderWrapper>
  );
};
