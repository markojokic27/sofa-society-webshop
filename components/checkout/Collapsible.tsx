"use client";

// External packages
import * as RadixCollapsible from "@radix-ui/react-collapsible";

// Components
import { Icon } from "@/components/Icon";
import { OrderContent } from "@/components/checkout/OrderContent";

export const Collapsible = () => {
  return (
    <RadixCollapsible.Root className="mt-21 group bg-grayscale-50 lg:hidden">
      <RadixCollapsible.Trigger className="trigger container mx-auto mt-18 flex items-center justify-end gap-4 px-8 py-4">
        <p className="mr-auto">Order Summary</p>
        <p>€1250</p>
        <Icon
          name="chevronDown"
          className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
        />
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className="collapsible-content data-[state=open]:animate-slideDownCollapsible data-[state=closed]:animate-slideUpCollapsible overflow-hidden bg-grayscale-50">
        <OrderContent />
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
