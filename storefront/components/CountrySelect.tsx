"use client";

// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";
import {
  Button as AriaButton,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Components
import { Icon } from "@/components/Icon";

// Lib
import { getRegions } from "@/lib/data/Regions";

// Medusa
import { HttpTypes } from "@medusajs/types";

export const CountrySelect: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    variant?: "desktop" | "mobile";
    defaultValue?: string;
  }
> = ({ variant = "desktop", defaultValue, className, ...rest }) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [regions, setRegions] = React.useState<HttpTypes.StoreRegion[]>([]);
  const pathName = usePathname();

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
    <Select
      className={twMerge(
        "rounded-1 border-grayscale-200 sm:max-w-60",
        className,
      )}
      onOpenChange={setIsOpen}
      isOpen={isOpen}
      aria-label="single-select"
    >
      <AriaButton aria-label="menu" className="w-full outline-none">
        <div
          className={twMerge("flex", selectedValue ? "" : "text-grayscale-500")}
          {...rest}
        >
          <SelectValue>{pathName.slice(1, 3).toUpperCase()}</SelectValue>
          <Icon
            name={variant === "mobile" ? "chevronUp" : "chevronDown"}
            className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </AriaButton>
      <Popover
        offset={20}
        crossOffset={-17}
        className="z-[100] flex w-60 cursor-pointer gap-5 rounded-1 border border-grayscale-200 bg-white outline-none transition-none data-[entering]:animate-popoverShow data-[exiting]:animate-popoverHide"
      >
        <ListBox className="max-h-48 w-full overflow-y-auto outline-none hover:cursor-auto">
          {regions.length > 0 &&
            regions[0].countries &&
            regions[0].countries?.map((item, key) => {
              return (
                <ListBoxItem
                  key={key}
                  textValue={item.display_name}
                  className="w-full border-none p-4 outline-none"
                >
                  <Link
                    className={`block w-full ${
                      item.iso_2 === pathName.slice(1, 3) ? "font-semibold" : ""
                    }`}
                    onClick={() => {
                      setSelectedValue(item.iso_2?.toUpperCase() || "");
                      setIsOpen(false);
                    }}
                    href={`/${item.iso_2}${pathName.replace(/^\/[a-z]{2}/, "")}`}
                  >
                    {item.display_name}
                  </Link>
                </ListBoxItem>
              );
            })}
        </ListBox>
      </Popover>
    </Select>
  );
};
