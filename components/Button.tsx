"use client";

// External packages
import * as React from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

// Utilities
import { getButtonClassNames } from "@/utils/getButtonClassNames";

export type ButtonOwnProps = {
  variant?: "solid" | "outline" | "dark" | "link";
  size?: "sm" | "md";
  isVisuallyDisabled?: boolean;
};

export const Button: React.FC<
  React.ComponentPropsWithoutRef<"button"> & AriaButtonProps & ButtonOwnProps
> = ({
  variant = "solid",
  size = "md",
  isVisuallyDisabled,
  className,
  children,
  ...rest
}) => (
  <AriaButton
    {...rest}
    isDisabled={rest.disabled}
    className={twMerge(
      getButtonClassNames({ size, variant, isVisuallyDisabled }),
      className,
    )}
  >
    {children}
  </AriaButton>
);


