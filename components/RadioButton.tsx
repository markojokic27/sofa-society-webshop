// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Label, Radio as AriaRadio, RadioProps } from "react-aria-components";

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
        "group-data-[selected=true]/radio:border-6 h-4 w-4 rounded-full border border-grayscale-200 transition-all duration-300 group-hover/radio:border-grayscale-600 group-data-[selected=true]/radio:border-black",
        className,
      )}
    />
  );
};
