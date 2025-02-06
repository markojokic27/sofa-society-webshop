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
          <SelectValue>{selectedValue}</SelectValue>
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
        <ListBox className="max-h-48 w-full overflow-y-auto outline-none">
          {regions.length > 0 &&
            regions[0].countries &&
            regions[0].countries?.map((item, key) => {
              return (
                <ListBoxItem
                  key={key}
                  onAction={() => {
                    setSelectedValue(item.iso_2?.toUpperCase() || "");
                    setIsOpen(false);
                  }}
                  className={`border-none p-4 outline-none ${item.display_name === selectedValue ? "font-semibold" : ""}`}
                >
                  {item.display_name}
                </ListBoxItem>
              );
            })}
        </ListBox>
      </Popover>
    </Select>
  );
};
