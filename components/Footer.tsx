"use client";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-grayscale-50">
      <Layout>
        <LayoutRow className="py-8 md:pb-20">
          <LayoutColumn
            span={12}
            className="mb-14 md:order-last md:mb-0"
            mdOffset={1}
            mdSpan={4}
          >
            <h3 className="mb-2 text-lg">Join our newsletter</h3>
            <p className="mb-4 text-2xs">
              We will also send you our discount coupons!
            </p>
            <div className="mb-4 flex items-center leading-none">
              <Input
                label="Your email"
                className="h-12 text-2xs"
                inputProps={{ className: "h-12 text-2xs m-0" }}
              />
              <div>
                <Button size="sm" className="ml-2 py-4">
                  Subscribe
                </Button>
              </div>
            </div>
            <p className="text-2xs text-grayscale-500">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </LayoutColumn>
          <LayoutColumn span={12} mdSpan={2} className="mb-8 md:mb-0">
            <h2 className="mb-2 text-xl leading-none md:text-3xl">
              Sofa
              <br />
              Society
              <br />
              Co.
            </h2>
            <p className="text-2xs">© 2024, Sofa Society</p>
          </LayoutColumn>
          <LayoutColumn span={12} mdOffset={1} mdSpan={4}>
            <div className="flex">
              <ul className="flex flex-1 flex-col gap-4">
                <li>
                  <Link href={"FAQ"}>FAQ</Link>
                </li>
                <li>
                  <Link href={"Help"}>Help</Link>
                </li>
                <li>
                  <Link href={"Delivery"}>Delivery</Link>
                </li>
                <li>
                  <Link href={"Returns"}>Returns</Link>
                </li>
              </ul>
              <ul className="flex flex-1 flex-col gap-4">
                <li>
                  <Link href={"Instagram"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"TikTok"}>TikTok</Link>
                </li>
                <li>
                  <Link href={"Pinterest"}>Pinterest</Link>
                </li>
                <li>
                  <Link href={"Facebook"}>Facebook</Link>
                </li>
              </ul>
              <ul className="flex flex-1 flex-col gap-4">
                <li>
                  <Link href={"Privacy Policy"}>Privacy Policy</Link>
                </li>
                <li>
                  <Link href={"Cookie Policy"}>Cookie Policy</Link>
                </li>
                <li>
                  <Link href={"Terms of Use"}>Terms of Use</Link>
                </li>
              </ul>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
};
