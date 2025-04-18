"use client";

// External packages
import { Checkbox as AriaCheckbox, CheckboxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

// Component
import { Icon } from "@/components/Icon";

export const Checkbox: React.FC<
  React.ComponentPropsWithoutRef<"label"> & CheckboxProps
> = ({ children, className, ...rest }) => (
  <AriaCheckbox
    {...rest}
    className={twMerge(
      "group flex items-start hover:cursor-pointer",
      className,
    )}
  >
    <div className="hover:text-graysacle-600 relative inline-flex min-h-4 min-w-4 items-center justify-center border border-l-grayscale-200 hover:cursor-pointer hover:border-grayscale-600">
      <Icon name="checkbox" />
    </div>
    {children}
  </AriaCheckbox>
);
