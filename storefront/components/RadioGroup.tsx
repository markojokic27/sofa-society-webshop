"use client";

// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";
import {
  Label,
  Radio as AriaRadio,
  RadioProps,
  RadioGroup as AriaRadioGroup,
  RadioGroupProps,
} from "react-aria-components";

export const RadioGroup: React.FC<
  RadioGroupProps & {
    mobileSelected?: Array<{
      filterName: string;
      item: string;
    }>;
    setMobileSelected?: React.Dispatch<
      React.SetStateAction<
        Array<{
          filterName: string;
          item: string;
        }>
      >
    >;
    items: string[];
    className?: string;
  }
> = ({
  mobileSelected,
  setMobileSelected,
  items,
  className,
  children,
  ...rest
}) => {
  return (
    <AriaRadioGroup
      className={twMerge("flex flex-col gap-6", className)}
      onChange={(value) => {
        setMobileSelected?.(() => {
          const codes = ["created_at", "price-asc", "price-desc"];
          return [
            ...(mobileSelected || []).filter((i) => i.filterName !== "sort"),
            {
              filterName: "sort",
              item: codes[items.indexOf(value)] || "",
            },
          ];
        });
      }}
      {...rest}
    >
      {children}
    </AriaRadioGroup>
  );
};

export const RadioButton: React.FC<
  RadioProps &
    React.ComponentPropsWithoutRef<"label"> & {
      labelLeft?: React.ReactNode;
      labelRight?: React.ReactNode;
      value: string;
    }
> = ({ value, labelLeft, labelRight, className, ...rest }) => {
  return (
    <AriaRadio
      {...rest}
      value={value}
      className={twMerge(
        "group/radio flex items-center justify-start gap-4 border border-grayscale-200 px-4 py-4 text-base font-normal transition-all duration-300 hover:cursor-pointer hover:border-grayscale-600",
        className,
      )}
    >
      <Radio />
      {labelLeft && <Label>{labelLeft}</Label>}
      {labelRight && <Label className="ml-auto">{labelRight}</Label>}
    </AriaRadio>
  );
};

export const Radio: React.FC<React.ComponentPropsWithoutRef<"div">> = ({
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "h-4 w-4 rounded-full border border-grayscale-200 transition-all duration-300 group-hover/radio:border-grayscale-600 group-hover/trigger:border-grayscale-600 group-data-[selected=true]/radio:border-6 group-data-[state=open]/trigger:border-6 group-data-[selected=true]/radio:border-black group-data-[state=open]/trigger:border-black",
        className,
      )}
    />
  );
};

export const RadioButtonVissualy: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    labelLeft?: React.ReactNode;
    labelRight?: React.ReactNode;
  }
> = ({ labelLeft, labelRight, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={twMerge(
        "group flex items-center justify-start gap-3 border px-4 py-5 hover:cursor-pointer hover:border-black",
        className,
      )}
    >
      <Radio />
      {labelLeft && <Label>{labelLeft}</Label>}
      {labelRight && <Label className="ml-auto">{labelRight}</Label>}
    </div>
  );
};
