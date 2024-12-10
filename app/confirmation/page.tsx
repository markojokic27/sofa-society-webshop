// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { LinkAsButton } from "@/components/LinkAsButton";

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <Layout className="md:mt-39 mb-26 mt-24 md:mb-36">
        <LayoutRow>
          <LayoutColumn
            span={12}
            mdOffset={2}
            mdSpan={8}
            xlOffset={3}
            xlSpan={6}
          >
            <h1 className="mb-6 text-xl lg:text-4xl">
              Thank you for your order!
            </h1>
            <p className="mb-16">
              Thank you for your purchase! We are pleased to confirm that your
              order has been successfully placed and will be processed shortly.
              <br />
              <br />
              We have sent you the receipt and order details via <b>
                e-mail
              </b>. <br />
              Your order number is <b>#100002</b>
            </p>
          </LayoutColumn>
        </LayoutRow>

        <LayoutRow className="text-grayscale-500">
          <LayoutColumn
            span={12}
            smSpan={6}
            mdOffset={2}
            mdSpan={4}
            xlOffset={3}
            xlSpan={3}
            className="mb-4 md:mb-16"
          >
            <p className="mb-2 text-black">Shipping adress:</p>
            <p>Jovana Jerimic</p>
            <p>Duvanjs 3, 10000 Zagreb, Croatia</p>
            <p>+385 226 2266</p>
          </LayoutColumn>
          <LayoutColumn
            span={12}
            smOffset={2}
            smSpan={3}
            mdOffset={1}
            mdSpan={3}
            xlOffset={1}
            xlSpan={2}
            className="mb-16"
          >
            <p className="mb-2 text-black">Payment:</p>
            <p>Jovana Jerimic</p>
            <p>**** **** **** 1111</p>
            <p>Exp: 05/26</p>
          </LayoutColumn>
          <LayoutColumn
            span={12}
            mdOffset={2}
            mdSpan={8}
            xlOffset={3}
            xlSpan={6}
          >
            <LinkAsButton href={"/"} className="block w-full py-4 text-center">
              Go back to home page
            </LinkAsButton>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}
