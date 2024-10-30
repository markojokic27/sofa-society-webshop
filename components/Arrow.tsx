"use client";

// External packages
import * as React from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Icon } from "./Icon";

export type ArrowOwnProps = {
  variant?: "left" | "right";
  color?: "black" | "white";
  size?: "sm" | "md";
};

export const Arrow: React.FC<
  React.ComponentPropsWithoutRef<"button"> & AriaButtonProps & ArrowOwnProps
> = ({
  variant = "right",
  color = "black",
  size = "md",
  className,
  ...rest
}) => (
  <AriaButton
    {...rest}
    isDisabled={rest.disabled}
    className={twMerge(
      "flex h-10 w-10 items-center justify-center rounded-full border border-black bg-black text-white outline-none focus:outline-none",
      color === "white" && "bg-white text-black",
      size === "sm" && "h-6 w-6 border-[0.5px]",
      className,
    )}
  >
    <Icon
      name={variant === "left" ? "arrowLeft" : "arrowRight"}
      className={size === "sm" ? "h-3.5 w-3.5" : ""}
    ></Icon>
  </AriaButton>
);
