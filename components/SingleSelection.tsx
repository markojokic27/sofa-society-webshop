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
            className={`border-none p-4 outline-none hover:cursor-pointer ${item === selectedValue ? "font-semibold" : ""}`}
          >
            {item}
          </ListBoxItem>
        );
      })}
    </ListBox>
  );
};
