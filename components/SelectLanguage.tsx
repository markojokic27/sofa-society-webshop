"use client";

// External packages
import * as React from "react";
import {
  Button as AriaButton,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";

export const SelectLanguage: React.FC<
  React.ComponentPropsWithoutRef<"div"> & { variant?: "default" | "mobile" }
> = ({ variant = "default", className, ...rest }) => {
  const [selectedValue, setSelectedValue] = React.useState("HR");
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const selectItems = {
    arabic: { name: "Arabic", value: "AR" },
    chinese: { name: "Chinese", value: "ZH" },
    croatian: { name: "Hrvatski", value: "HR" },
    english: { name: "English", value: "EN" },
    french: { name: "Français", value: "FR" },
    german: { name: "Deutsch", value: "DE" },
    italian: { name: "Italiano", value: "IT" },
    japanese: { name: "Japanese", value: "JA" },
    russian: { name: "Russian", value: "RU" },
    spanish: { name: "Español", value: "ES" },
  };

  return (
    <Select
      className=""
      onOpenChange={setIsOpen}
      isOpen={isOpen}
      aria-label="Select language"
    >
      <AriaButton aria-label="menu" className="outline-none">
        <div className="flex" {...rest}>
          <SelectValue>{selectedValue}</SelectValue>
          <Icon
            name={variant === "mobile" ? "chevronUp" : "chevronDown"}
            className={`color-grayscale-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </AriaButton>
      <Popover
        className={`z-[100] mr-5 flex w-60 cursor-pointer gap-5 rounded-1 border border-grayscale-200 bg-white outline-none`}
      >
        <ListBox className={`max-h-48 w-full overflow-y-auto outline-none`}>
          {Object.values(selectItems).map((item, key) => {
            return (
              <ListBoxItem
                key={key}
                onAction={() => {
                  setSelectedValue(item.value);
                  setIsOpen(false);
                }}
                className={`border-none p-4 outline-none ${item.value === selectedValue ? "font-semibold" : ""}`}
              >
                {item.name}
              </ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </Select>
  );
};
