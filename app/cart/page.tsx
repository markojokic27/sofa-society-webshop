// External packages
import Image from "next/image";
import { twMerge } from "tailwind-merge";

// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Icon } from "@/components/Icon";
import { Counter } from "@/components/Counter";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { LinkAsButton } from "@/components/LinkAsButton";

// Assets
import ProductImage from "@/public/assets/images/cart-product.png";

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="mb-26 mt-26 md:mb-36 md:mt-40">
        <LayoutRow>
          <LayoutColumn span={12} mdSpan={8} xlSpan={9}>
            <h1 className="mb-8 text-xl md:mb-16 md:text-4xl">
              Your shopping cart
            </h1>
            <CartProductCard
              image={
                <Image
                  src={ProductImage}
                  alt="Product image"
                  width={118}
                  height={148}
                  className="w-full object-cover"
                />
              }
              price="€1500"
              originalPrice="€3000"
            />
            <CartProductCard
              image={
                <Image
                  src={ProductImage}
                  alt="Product image"
                  width={118}
                  height={148}
                  className="w-full object-cover"
                />
              }
              price="€2500"
            />
            <CartProductCard
              image={
                <Image
                  src={ProductImage}
                  alt="Product image"
                  width={118}
                  height={148}
                  className="w-full object-cover"
                />
              }
              price="€1500"
              originalPrice="€3000"
            />
          </LayoutColumn>
          <LayoutColumn span={12} mdSpan={4} xlSpan={3}>
            <div className="mb-4 flex justify-between border-t pt-8 md:mt-2 md:border-t-0 lg:mt-10 lg:pt-0">
              <p className="text-grayscale-400">Subtotal:</p>
              <p>€5500</p>
            </div>
            <div className="mb-8 flex justify-between border-b pb-8">
              <p className="text-grayscale-400">Shipping:</p>
              <p>Free</p>
            </div>
            <div className="mb-10 flex justify-between">
              <p className="text-lg font-bold">Total:</p>
              <p className="text-lg font-bold">€5500</p>
            </div>
            <div className="mb-6 flex items-center leading-none">
              <Input
                label="Discount code"
                className="h-12 md:text-sm lg:text-base"
                inputProps={{ className: "h-12 m-0" }}
              />
              <Button size="sm" className="ml-2 h-12 px-5 text-base">
                Apply
              </Button>
            </div>
            <LinkAsButton
              href={"/checkout"}
              className="block w-full text-center"
            >
              Proceed to checkout
            </LinkAsButton>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}

const CartProductCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    price: string;
    originalPrice?: string;
  }
> = ({ image, className, price, originalPrice, ...rest }) => {
  return (
    <div {...rest} className={twMerge("flex gap-6 border-t py-8", className)}>
      <div className="min-w-30">{image}</div>
      <div className="relative w-full">
        <div className="mb-6 w-full justify-between sm:flex md:mb-10">
          <div className="mb-4 sm:mb-0">
            <h3 className="sm:mb-1 sm:text-lg">Paloma Haven</h3>
            <p className="text-2xs text-grayscale-500 sm:text-base">
              Linen / Light Gray
            </p>
          </div>
          <div className="sm:text-right">
            <p
              className={twMerge(
                originalPrice && "text-red-700",
                "text-2xs font-bold sm:text-md sm:font-semibold",
              )}
            >
              {price}
            </p>
            <p className="text-2xs text-grayscale-500 line-through sm:text-base">
              {originalPrice}
            </p>
          </div>
        </div>
        <div className="flex items-end justify-between">
          <Counter variant="small" />
          <div className="absolute right-0 top-0 flex h-8 w-8 items-center justify-center hover:cursor-pointer hover:text-grayscale-500 sm:static sm:h-11 sm:w-11">
            <Icon name="trash" className="h-4 w-4 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};
