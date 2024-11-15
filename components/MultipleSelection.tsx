"use client";

// External packages
import * as React from "react";
import { CheckboxGroup, CheckboxGroupProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

// Components
import { Checkbox } from "@/components/Checkbox";

export const MultipleSelection: React.FC<
  CheckboxGroupProps & { items: string[]; checkboxClassName?: string }
> = ({ items, className, checkboxClassName, ...rest }) => {
  let [selected, setSelected] = React.useState([] as string[]);

  return (
    <CheckboxGroup
      value={selected}
      onChange={setSelected}
      className={`h-full w-full overflow-y-auto outline-none`}
      aria-label="Select items"
      {...rest}
    >
      {items.map((item, key) => {
        return (
          <Checkbox
            value={item}
            key={key}
            isSelected={selected.includes(item)}
            className={twMerge(
              "w-full items-center gap-4 border-none p-4 text-2xs outline-none hover:cursor-pointer",
              checkboxClassName,
            )}
          >
            <p className="group-data-[selected=true]:font-semibold md:text-base">
              {item}
            </p>
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};
