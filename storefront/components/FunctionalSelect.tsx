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

export const FunctionalSelect: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    variant?:
      | "language-select-desktop"
      | "language-select-mobile"
      | "order-settings";
    defaultValue?: string;
    placeholder?: string;
    items: Array<{ name: string; value: string }>;
    setProduct?: React.Dispatch<
      React.SetStateAction<{
        material: string;
        color: string;
        quantity: number;
      }>
    >;
  }
> = ({
  variant = "language-select-desktop",
  items,
  defaultValue,
  placeholder,
  setProduct,
  className,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Select
      className={twMerge(
        "rounded-1 border-grayscale-200 sm:max-w-60",
        className,
      )}
      onOpenChange={setIsOpen}
      isOpen={isOpen}
      aria-label="single-select"
      placeholder={placeholder}
    >
      <AriaButton aria-label="menu" className="w-full outline-none">
        <div
          className={twMerge(
            "flex",
            variant === "order-settings" ? "justify-between" : "",
            selectedValue ? "" : "text-grayscale-500",
          )}
          {...rest}
        >
          <SelectValue>{selectedValue}</SelectValue>
          <Icon
            name={
              variant === "language-select-mobile" ? "chevronUp" : "chevronDown"
            }
            className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </AriaButton>
      <Popover
        offset={20}
        crossOffset={-17}
        className={twMerge(
          "z-[100] flex w-60 cursor-pointer gap-5 rounded-1 border border-grayscale-200 bg-white outline-none transition-none data-[entering]:animate-popoverShow data-[exiting]:animate-popoverHide",
          variant === "order-settings" ? "popout-width sm:min-w-60" : "",
        )}
      >
        <ListBox
          className={twMerge(
            `max-h-48 w-full overflow-y-auto outline-none`,
            variant === "order-settings" ? "max-h-fit min-w-full" : "",
          )}
        >
          {Object.values(items).map((item, key) => {
            return (
              <ListBoxItem
                key={key}
                onAction={() => {
                  setSelectedValue(item.value);
                  setIsOpen(false);
                  if (setProduct) {
                    setProduct((prev) => ({ ...prev, material: item.name }));
                  }
                }}
                className={`border-none p-4 outline-none ${item.value === selectedValue ? "font-semibold" : ""}`}
              >
                {item.name}
              </ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </Select>
  );
};
