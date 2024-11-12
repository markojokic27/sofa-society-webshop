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
} from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";

export const SelectSort: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { name: string; items: string[] }
> = ({ name, items, className, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Select
      className="ml-auto"
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
        
      </Popover>
    </Select>
  );
};
