import { ButtonOwnProps } from "@/components/Button";
import { twJoin } from "tailwind-merge";

export const getButtonClassNames = ({
  size = "md",
  variant,
  isVisuallyDisabled,
}: {
  size: ButtonOwnProps["size"];
  variant: ButtonOwnProps["variant"];
  isVisuallyDisabled?: ButtonOwnProps["isVisuallyDisabled"];
}): string =>
  twJoin(
    "bg-transparent hover:bg-transparent rounded-1 border border-black hover:border-grayscale-500 outline-none focus:outline-none",
    variant === "solid" && "text-white bg-black hover:bg-grayscale-500",
    variant === "outline" &&
      "hover:border-grayscale-500 hover:text-grayscale-500",
    variant === "dark" &&
      "text-white border-white hover:border-grayscale-200 hover:text-grayscale-200",
    size === "sm" && "px-4 py-2.5 text-2xs leading-none",
    size === "md" && "px-6 py-4 text-base leading-none",
    variant === "link" &&
      "border-0 bg-transparent hover:bg-transparent underline underline-offset-4 disabled:bg-transparent disabled:text-blue-100 text-black p-0 m-0 h-auto font-normal not-italic focus:outline-none text-base hover:no-underline active:no-outline text-left md:text-lg md:underline-offset-8",
    variant === "link" && size === "sm" && "text-base underline-offset-4",
    isVisuallyDisabled &&
      variant === "solid" &&
      "border-grayscale-200 bg-grayscale-200 hover:bg-grayscale-200 hover:border-grayscale-200",
    isVisuallyDisabled &&
      variant === "outline" &&
      "border-grayscale-200 text-grayscale-200 hover:text-grayscale-200 hover:border-grayscale-200",
    isVisuallyDisabled &&
      variant === "dark" &&
      "text-grayscale-500 border-grayscale-500 hover:text-grayscale-500 hover:border-grayscale-500",
  );
