// External packages
import Image from "next/image";

// Assets
import ImageOrder from "@/public/assets/images/product1.png";

// Components
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export const OrderContent = () => (
  <div className="container mx-auto px-8 py-4 lg:p-0">
    <div className="mb-8 flex justify-between text-base lg:mb-16">
      <p>Order - 1 item</p>
      <Button variant="link" className="md:text-base">
        Edit card
      </Button>
    </div>
    <div className="mb-8 flex gap-4 lg:gap-6">
      <div className="min-w-24 lg:min-w-32">
        <Image
          src={ImageOrder}
          priority
          alt="product"
          className="w-full object-cover"
          width={99}
          height={132}
        />
      </div>
      <div className="flex w-full justify-between sm:flex-row sm:justify-between">
        <div className="flex flex-col justify-between">
          <h4 className="font-bold">Paloma Haven</h4>
          <div className="flex flex-col gap-2 text-2xs md:text-base">
            <p>Material: Linen</p>
            <p>Color: Gray</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-bold text-red-700">€1200</p>
          <p className="text-sm text-gray-400 line-through">€1500</p>
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
