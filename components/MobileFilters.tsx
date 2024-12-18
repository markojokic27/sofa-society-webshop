"use client";

// External packages
import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "@/components/Button";

// Utilities
import { getButtonClassNames } from "@/utils/getButtonClassNames";

export const MobileFilters: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    trigger: string;
    icon?: React.ReactNode;
    contentClassName?: string;
  }
> = ({ trigger, icon, contentClassName, children, ...rest }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <RadixDialog.Root open={open} onOpenChange={setOpen} {...rest}>
      <RadixDialog.Trigger
        className={twMerge(
          getButtonClassNames({
            variant: "outline",
            size: "sm",
          }),
          "flex items-center gap-1 border-grayscale-200 py-2",
        )}
      >
        {trigger}
        {icon}
      </RadixDialog.Trigger>
      <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-10 data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow" />
      <RadixDialog.Content
        className={twMerge(
          "mobile-filter data-[state=closed]:animate-mobileFilterHide data-[state=open]:animate-mobileFilterShow fixed bottom-0 left-0 right-0 z-[70] overflow-y-scroll bg-white scrollbar-hide",
          contentClassName,
        )}
      >
        <RadixDialog.Title />
        <RadixDialog.DialogDescription />
        <div className="mb-16 p-6">{children}</div>
        <div className="fixed bottom-0 h-18 w-full border-t bg-white px-6 py-4">
          <Button
            onClick={() => {
              setOpen(false);
            }}
            className="h-full w-full py-2"
          >
            Add filters
          </Button>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
