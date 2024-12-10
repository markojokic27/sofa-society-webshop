//External packages
import Link from "next/link";
import Image from "next/image";

// Components
import { Layout, LayoutColumn, LayoutRow } from "@/components/Layout";
import { Accordion } from "@/components/checkout/Accordion";
import { Collapsible } from "@/components/checkout/Collapsible";
import { OrderContent } from "@/components/checkout/OrderContent";

// Assets
import ImageOrder from "@/public/assets/images/product1.png";

export default function Page() {
  return (
    <>
      <div className="absolute left-0 right-0 top-0 bg-white py-6 lg:z-[-2]">
        <Layout className="px-8 md:px-8 lg:px-6">
          <LayoutRow>
            <LayoutColumn className="flex items-center justify-between">
              <Link href={"/"} className="text-lg leading-none">
                SofaSocietyCo.
              </Link>
              <h3 className="font-bold lg:hidden">Checkout</h3>
            </LayoutColumn>
          </LayoutRow>
        </Layout>
      </div>
      <Collapsible />
      <Layout className="px-8 md:px-8">
        <LayoutRow>
          <LayoutColumn lgSpan={6}>
            <Accordion />
          </LayoutColumn>
          <LayoutColumn lgSpan={5} lgOffset={1} className="hidden lg:block">
            <div className='pulled-background w-full pb-64 pt-32 after:absolute after:left-0 after:top-0 after:z-[-1] after:block after:h-full after:bg-grayscale-50 after:content-[""]'>
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
                originalPrice="€1500"
                material="Linen"
                color="Gray"
              />
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </>
  );
}
