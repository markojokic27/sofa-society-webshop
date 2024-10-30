"use client";

// External packages
import * as React from "react";
import { Link, Button } from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";
import { HamburgerMenu } from "@/components/HamburgerMenu";

export const Header: React.FC<{
  headerTheme?: "light" | "dark";
}> = ({ headerTheme = "dark" }) => {
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = headerRef.current;

    if (element) {
      element.dataset.theme = headerTheme;
    }

    const handleScroll = () => {
      if (element && headerTheme === "light") {
        const headerHeight = window.innerWidth < 768 ? 72 : 85;
        if (window.scrollY > window.innerHeight - headerHeight) {
          element.dataset.theme = "dark";
        } else {
          element.dataset.theme = "light";
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className="group fixed top-0 z-40 w-full bg-white data-[theme=light]:bg-transparent data-[theme=dark]:border-b border-b-white"
    >
      <div className="mx-auto grid grid-cols-2 items-center p-6 md:container group-data-[theme=light]:text-white md:grid-cols-[1fr_auto_1fr] md:py-8">
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
            <Button className="uppercase focus:outline-none">hr</Button>
          </li>
          <li className="hidden items-center md:flex">
            <Button className="focus:outline-none">
              <Icon name="search" />
            </Button>
          </li>
          <li>
            <Link href="/my-orders" className="focus:outline-none">
              <Icon name="bag" />
            </Link>
          </li>
          <li className="flex h-6 w-6 items-center md:hidden">
            <HamburgerMenu headerTheme={headerTheme} />
          </li>
        </ul>
      </div>
    </div>
  );
};
