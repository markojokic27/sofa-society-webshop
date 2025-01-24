// External packages
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import Image from "next/image";

// Components
import { Icon } from "@/components/Icon";
import { OrderContent } from "@/components/checkout/OrderContent";

// Assets
import ImageOrder from "@/public/assets/images/product1.png";

export const Collapsible = () => {
  return (
    <RadixCollapsible.Root className="group mt-18 bg-grayscale-50 lg:hidden">
      <RadixCollapsible.Trigger className="trigger container mx-auto mt-18 flex items-center justify-end gap-4 px-8 py-4">
        <p className="mr-auto">Order Summary</p>
        <p>€1250</p>
        <Icon
          name="chevronDown"
          className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
        />
      </RadixCollapsible.Trigger>
      <RadixCollapsible.Content className="collapsible-content overflow-hidden bg-grayscale-50 data-[state=closed]:animate-slideUpCollapsible data-[state=open]:animate-slideDownCollapsible">
        <OrderContent
          image={
            <Image
              src={ImageOrder}
              priority
              alt="product"
              className="w-full object-cover"
              width={99}
              height={132}
            />
          }
          name="Paloma Haven"
          price="€1200"
          material="Linen"
          color="Gray"
        />
      </RadixCollapsible.Content>
    </RadixCollapsible.Root>
  );
};
