"use client";

// External packages
import * as React from "react";
import { CheckboxGroup, CheckboxGroupProps } from "react-aria-components";
import { useSearchParams, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

// Components
import { Checkbox } from "@/components/Checkbox";
export const MultipleSelection: React.FC<
  CheckboxGroupProps & {
    items: string[];
    checkboxClassName?: string;
    preSelected?: string[];
    filterName: string;
    closePopover?: () => void;
  }
> = ({
  items,
  checkboxClassName,
  preSelected,
  filterName,
  closePopover,
  ...rest
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selected, setSelected] = React.useState<string[]>(() => {
    const selectedFromURL = searchParams.getAll(filterName) || [];
    return Array.from(new Set([...(preSelected || []), ...selectedFromURL]));
  });
  const onCheckboxChange = (
    item: string,
    isChecked: boolean | React.FormEvent<HTMLLabelElement>,
  ) => {
    const params = new URLSearchParams(searchParams.toString());

    if (isChecked) {
      params.append(filterName, item);
    } else {
      const updatedParams = params.getAll(filterName).filter((i) => i !== item);
      params.delete(filterName);
      updatedParams.forEach((i) => params.append(filterName, i));
    }
    params.delete("page");

    router.push(`?${params.toString()}`);
    if (closePopover) closePopover();
  };

  return (
    <CheckboxGroup
      value={selected}
      onChange={setSelected}
      className={`h-fit w-full overflow-y-auto outline-none`}
      aria-label="Select items"
      {...rest}
    >
      {items.map((item, key) => {
        return (
          <Checkbox
            value={item}
            key={key}
            isSelected={selected.includes(item)}
            onChange={(isChecked) => {
              onCheckboxChange(item, isChecked);
            }}
            className={twMerge(
              "group w-full items-center gap-4 border-none p-3 text-2xs outline-none hover:cursor-pointer",
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
