"use client";

// External packages
import * as React from "react";
import {
  Button as AriaButton,
  DialogTrigger,
  Label,
  Popover,
  DialogTriggerProps,
} from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";
import { twMerge } from "tailwind-merge";

export const Filter: React.FC<
  DialogTriggerProps & { name: string; className?: string }
> = ({ name, children, className, ...rest }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <DialogTrigger
      onOpenChange={setIsOpen}
      isOpen={isOpen}
      aria-label="Select language"
    >
      <AriaButton
        aria-label="menu"
        className={twMerge("outline-none", className)}
      >
        <div className="flex h-full gap-2 rounded-1 border px-4 py-2" {...rest}>
          <Label className="hover:cursor-pointer">{name}</Label>
          <Icon
            name="chevronDown"
            className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </AriaButton>
      <Popover
        className={`absolute left-0 z-[100] flex cursor-pointer gap-5 rounded-1 border border-grayscale-200 bg-white outline-none hover:cursor-default md:min-w-64`}
      >
        {children}
      </Popover>
    </DialogTrigger>
  );
};
