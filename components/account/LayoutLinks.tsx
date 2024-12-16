"use client";

// External packages
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import * as React from "react";
import { usePathname } from "next/navigation";

export const LayoutLinks = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-1 md:gap-4 lg:gap-8">
      <Link
        href="/person-security"
        className={twMerge(
          "w-fit hover:cursor-pointer",
          pathname.includes("/person-security") && "font-bold",
        )}
      >
        Personal & security
      </Link>
      <Link
        href="/person-security"
        className={twMerge(
          "w-fit hover:cursor-pointer",
          pathname.includes("/my-orders") && "font-bold",
        )}
      >
        My orders
      </Link>
    </div>
  );
};
