"use client";

// External packages
import * as React from "react";
import { usePathname } from "next/navigation";

export const HeaderWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const pathName = usePathname();
  const hasHeroImage = ["/", "/about", "/inspiration", "/collection"].includes(
    pathName,
  );
  const headerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const element = headerRef.current;

    if (element) {
      element.dataset.theme = hasHeroImage ? "light" : "dark";
    }
    const handleScroll = () => {
      if (element && hasHeroImage) {
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
      className="group fixed top-0 z-40 mx-auto w-full bg-white md:data-[theme=light]:bg-transparent"
    >
      {children}
    </div>
  );
};
