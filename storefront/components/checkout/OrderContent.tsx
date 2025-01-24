// External packages
import { twMerge } from "tailwind-merge";
import Link from "next/link";

// Components
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export const OrderContent: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    name: string;
    price: string;
    originalPrice?: string;
    material: string;
    color: string;
  }
> = ({ image, name, price, originalPrice, material, color, ...rest }) => (
  <div className="container mx-auto px-8 py-4 lg:p-0" {...rest}>
    <div className="mb-8 flex justify-between text-base lg:mb-16">
      <p>Order - 1 item</p>
      <Link href="/cart" className="underline underline-offset-4">
        Edit cart
      </Link>
    </div>
    <div className="mb-8 flex gap-4 lg:gap-6">
      <div className="min-w-24 lg:min-w-32">{image}</div>
      <div className="flex w-full justify-between sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-between">
          <h4 className="font-bold">{name}</h4>
          <div className="flex flex-col gap-2 text-2xs md:text-base">
            <p>Material: {material}</p>
            <p>Color: {color}</p>
          </div>
        </div>
        <div className="text-right">
          <p className={twMerge(originalPrice && "text-red-700", "font-bold")}>
            {price}
          </p>
          <p className="text-sm text-gray-400 line-through">{originalPrice}</p>
        </div>
      </div>
    </div>
    <div className="lg:flex lg:gap-8">
      <Input
        label="Discount code"
        className="mb-4 leading-none"
        inputProps={{ className: "h-12" }}
      />
      <Button isVisuallyDisabled className="mb-8 h-12 w-full lg:w-1/4">
        Apply
      </Button>
    </div>
    <div className="mb-2 flex justify-between text-2xs md:text-base">
      <p>Subtotal</p>
      <p>€1200</p>
    </div>
    <div className="mb-6 flex justify-between text-2xs md:text-base">
      <p>Shipping</p>
      <p>€50</p>
    </div>
    <div className="mb-8 flex justify-between text-lg">
      <p>Total</p>
      <p>€1250</p>
    </div>
  </div>
);
