"use client";

// External packages
import * as React from "react";
import {
  Button as AriaButton,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";
import { Checkbox } from "@/components/Checkbox";

export const SelectFilters: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { items: string[]; name: string }
> = ({ items, name, className, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
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
    <Select
      className=""
      onOpenChange={setIsOpen}
      isOpen={isOpen}
      aria-label="Select language"
    >
      <AriaButton aria-label="menu" className="outline-none">
        <div className="flex gap-2 rounded-1 border px-4 py-2" {...rest}>
          <Label>{name}</Label>
          <Icon
            name="chevronDown"
            className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </AriaButton>
      <Popover
        className={`z-[100] mr-5 flex w-60 cursor-pointer gap-5 rounded-1 border border-grayscale-200 bg-white outline-none`}
      >
        <ListBox className={`w-full overflow-y-auto outline-none`}>
          {items.map((item, key) => {
            return (
              <ListBoxItem
                key={key}
                textValue={item}
                className={`border-none p-4 outline-none`}
                onAction={() => handleFilterChange(item)}
              >
                <Checkbox>
                  <p className="ml-4">{item}</p>
                </Checkbox>
              </ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </Select>
  );
};
