// External packages
import { twMerge } from "tailwind-merge";
import * as RadixDialog from "@radix-ui/react-dialog";

export const Dialog: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    title?: string;
    footer?: React.ReactNode;
    trigger?: React.ReactNode;
    open?: boolean;
  }
> = ({ title, children, footer, trigger, open, className, ...rest }) => {
  return (
    <RadixDialog.Root {...rest} open={open}>
      {trigger}
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black bg-opacity-10" />
        <RadixDialog.Content
          className={twMerge(
            "fixed left-1/2 top-[50%] z-[60] min-w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white p-6 sm:w-full sm:min-w-0 lg:left-[60%]",
            className,
          )}
        >
          <RadixDialog.Title className="mb-10 text-md font-semibold">
            {title}
          </RadixDialog.Title>
          {children}
          {footer}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};
