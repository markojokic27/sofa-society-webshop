"use client";

// External packages
import * as React from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "@/components/Button";
import { MultipleSelection } from "@/components/MultipleSelection";
import { RadioButton, RadioGroup } from "@/components/RadioGroup";

// Utilities
import { getButtonClassNames } from "@/utils/getButtonClassNames";

export const MobileFilters: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    trigger: string;
    icon?: React.ReactNode;
    contentClassName?: string;
    headers: string[];
    items: string[][];
    filterNames: string[];
    radio?: boolean;
  }
> = ({
  trigger,
  icon,
  contentClassName,
  headers,
  items,
  filterNames,
  radio = false,
  ...rest
}) => {
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
      {/* TODO: Scroll na malim ekranima problem */}
      <RadixDialog.Overlay className="data-[state=closed]:animate-overlayHide data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-black bg-opacity-10" />
      <RadixDialog.Content
        className={twMerge(
          "fixed bottom-0 left-0 right-0 z-[70] max-h-[80vh] overflow-hidden bg-white data-[state=closed]:animate-mobileFilterHide data-[state=open]:animate-mobileFilterShow",
          contentClassName,
        )}
      >
        <RadixDialog.Title />
        <RadixDialog.DialogDescription />
        <div className="mb-16 overflow-y-scroll p-6">
          {radio ? (
            <div>
              <h2 className="mb-6 text-lg font-bold">{headers[0]}</h2>
              <RadioGroup className="mb-3">
                {items[0]?.map((item, i) => (
                  <RadioButton
                    key={i}
                    value={item}
                    labelLeft={item}
                    className="flex-row-reverse justify-between border-0 p-0"
                  />
                ))}
              </RadioGroup>
            </div>
          ) : (
            items?.map((item, i) => (
              <div key={i}>
                <h2 className="mb-6 text-lg font-bold">{headers?.[i]}</h2>
                <MultipleSelection
                  filterName={filterNames[i]}
                  items={item}
                  checkboxClassName="px-0 flex-row-reverse justify-between text-base"
                />
                {items.length !== i + 1 && (
                  <hr className="my-6 bg-grayscale-200" />
                )}
              </div>
            ))
          )}
        </div>
        <div className="fixed bottom-0 h-18 w-full border-t bg-white px-6 py-4">
          <Button
            onClick={() => {
              setOpen(false);
            }}
            className="h-full w-full py-2"
          >
            Show results
          </Button>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Root>
  );
};
