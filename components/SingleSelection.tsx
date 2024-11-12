"use client";

// External packages
import * as React from "react";
import { ListBox, ListBoxItem } from "react-aria-components";

export const SingleSelection: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { items: string[] }
> = ({ items, className, ...rest }) => {
  const [selectedValue, setSelectedValue] = React.useState("");
  return (
    <ListBox className={`w-full overflow-y-auto outline-none`}>
      {items.map((item, key) => {
        return (
          <ListBoxItem
            key={key}
            onAction={() => {
              setSelectedValue(item);
            }}
            className={`border-none p-4 outline-none ${item === selectedValue ? "font-semibold" : ""}`}
          >
            {item}
          </ListBoxItem>
        );
      })}
    </ListBox>
  );
};
