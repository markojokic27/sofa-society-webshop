"use client";

// External packages
import * as React from "react";
import { ListBox, ListBoxItem } from "react-aria-components";

// Components
import { Checkbox } from "@/components/Checkbox";

export const MultipleSelection: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { items: string[] }
> = ({ items, className, ...rest }) => {
  let [selectedItems, setSelectedItems] = React.useState<string[]>([]);
  const handleFilterChange = (item: string) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item],
    );
    console.log(selectedItems);
  };

  return (
    <ListBox
      selectedKeys={new Set(selectedItems)}
      onSelectionChange={(keys) => {
        const selectedArray = Array.from(keys) as string[];
        setSelectedItems(selectedArray);
      }}
      selectionMode="multiple"
      className={`w-full overflow-y-auto outline-none`}
    >
      {items.map((item, key) => {
        return (
          <ListBoxItem
            id={item}
            key={item}
            textValue={item}
            className={`border-none p-4 outline-none`}
            onAction={() => {
              handleFilterChange(item);
            }} //TODO: not working
          >
            <Checkbox
              data-selected={selectedItems.includes(item)}
              className="h-full w-full items-center hover:cursor-pointer"
            >
              <p className="ml-4 group-data-[selected=true]:font-semibold">
                {item}
              </p>
            </Checkbox>
          </ListBoxItem>
        );
      })}
    </ListBox>
  );
};
