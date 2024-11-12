"use client";

// External packages
import * as React from "react";
import { Checkbox as AriaCheckbox, CheckboxProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

// Component
import { Icon } from "@/components/Icon";

export const Checkbox: React.FC<
  React.ComponentPropsWithoutRef<"label"> & CheckboxProps
> = ({ children, className, ...rest }) => (
  <AriaCheckbox
    {...rest}
    className={twMerge("group flex h-full items-start gap-1", className)}
  >
    <div className="hover:text-graysacle-600 relative inline-flex min-h-4 min-w-4 items-center justify-center border border-l-grayscale-200 hover:cursor-pointer hover:border-grayscale-600">
      <Icon name="checkbox" />
    </div>
    {children}
  </AriaCheckbox>
);
