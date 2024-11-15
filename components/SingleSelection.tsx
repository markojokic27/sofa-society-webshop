"use client";

// External packages
import * as React from "react";
import { ListBox, ListBoxItem, ListBoxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const SingleSelection: React.FC<
  ListBoxProps<string> & { items: string[] }
> = ({ items, className, ...rest }) => {
  const [selectedValue, setSelectedValue] = React.useState("");

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
              item === selectedValue
                ? setSelectedValue("")
                : setSelectedValue(item);
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
