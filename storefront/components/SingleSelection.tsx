"use client";

// External packages
import * as React from "react";
import { ListBox, ListBoxItem, ListBoxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { useSearchParams, useRouter } from "next/navigation";

export const SingleSelection: React.FC<
  ListBoxProps<string> & { items: string[]; closePopover?: () => void }
> = ({ items, className, closePopover, ...rest }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const codes = ["created_at", "price-asc", "price-desc"];

  const [selectedValue, setSelectedValue] = React.useState(
    items[codes.indexOf(searchParams.get("sort") ?? "")],
  );

  const onSelectChange = (item: string, isSelected: boolean) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("sort");
    params.delete("page");

    const paramItem = codes[items.indexOf(item)] || "";
    if (!isSelected) {
      params.append("sort", paramItem);
      setSelectedValue(item);
    } else {
      setSelectedValue("");
    }
    if (closePopover) closePopover();
    router.push(`?${params.toString()}`);
  };

  return (
    <ListBox
      className={twMerge(
        `w-full overflow-y-auto outline-none`,
        className as string,
      )}
      aria-label="Select item"
      {...rest}
    >
      {items.map((item, key) => {
        return (
          <ListBoxItem
            key={key}
            onAction={() => {
              onSelectChange(item, item === selectedValue);
            }}
            className={`border-none p-4 text-2xs outline-none hover:cursor-pointer md:text-base ${item === selectedValue ? "font-semibold" : ""}`}
          >
            {item}
          </ListBoxItem>
        );
      })}
    </ListBox>
  );
};
