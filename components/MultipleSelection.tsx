"use client";

// External packages
import * as React from "react";
import { CheckboxGroup, CheckboxGroupProps } from "react-aria-components";

// Components
import { Checkbox } from "@/components/Checkbox";

export const MultipleSelection: React.FC<
  CheckboxGroupProps & { items: string[] }
> = ({ items, className, ...rest }) => {
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
            className="w-full items-center border-none p-4 outline-none hover:cursor-pointer"
          >
            <p className="ml-4 group-data-[selected=true]:font-semibold">
              {item}
            </p>
          </Checkbox>
        );
      })}
    </CheckboxGroup>
  );
};
