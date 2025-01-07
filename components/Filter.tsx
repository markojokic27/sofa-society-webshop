"use client";

// External packages
import * as React from "react";
import {
  DialogTrigger,
  Popover,
  DialogTriggerProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

// Components
import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";

export const Filter: React.FC<
  DialogTriggerProps & {
    name: string;
    popoverAlignment?: "start" | "end";
    className?: string;
  }
> = ({ name, popoverAlignment = "start", children, className, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <DialogTrigger
      onOpenChange={setIsOpen}
      isOpen={isOpen}
      aria-label="Select language"
      {...rest}
    >
      <Button
        aria-label="menu"
        className={twMerge("border-gray-200 px-3 py-2 outline-none", className)}
        iconRight={
          <Icon
            name="chevronDown"
            className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        }
        variant="outline"
      >
        {name}
      </Button>
      <Popover
        className={`z-[100] flex cursor-pointer gap-5 rounded-1 border border-grayscale-200 bg-white outline-none hover:cursor-default md:min-w-64`}
        placement={popoverAlignment === "start" ? "bottom start" : "bottom end"}
      >
        {children}
      </Popover>
    </DialogTrigger>
  );
};
