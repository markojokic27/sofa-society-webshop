// External packages
import Link from "next/link";

// Copmonents
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { LocalizedLink } from "@/components/LocalizedLink";

export const Footer = () => {
  return (
    <div className="bg-grayscale-50">
      <Layout className="px-8 sm:px-6">
        <LayoutRow className="py-8 md:pb-20">
          <LayoutColumn
            span={12}
            className="mb-14 md:order-last md:mb-0"
            xlOffset={1}
            xlSpan={4}
            mdSpan={4}
          >
            <h3 className="mb-2 text-lg">Join our newsletter</h3>
            <p className="mb-4 text-2xs">
              We will also send you our discount coupons!
            </p>
            <div className="mb-4 flex items-center leading-none">
              <Input label="Your email" size="sm" />
              <Button size="sm" className="ml-2 py-4">
                Subscribe
              </Button>
            </div>
            <p className="text-2xs text-grayscale-500">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </p>
          </LayoutColumn>
          <LayoutColumn span={12} mdSpan={2} className="mb-8 md:mb-0">
            <h2 className="mb-2 text-xl leading-none lg:text-3xl">
              Sofa
              <br />
              Society
              <br />
              Co.
            </h2>
            <p className="text-2xs">© 2024, Sofa Society</p>
          </LayoutColumn>
          <LayoutColumn span={12} mdSpan={6} xlOffset={1} xlSpan={4}>
            <div className="flex">
              <ul className="flex flex-1 flex-col gap-4">
                <li>
                  <LocalizedLink country="hr" href={"/faq"}>
                    FAQ
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink country="hr" href={"/help"}>
                    Help
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink country="hr" href={"/delivery"}>
                    Delivery
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink country="hr" href={"/returns"}>
                    Returns
                  </LocalizedLink>
                </li>
              </ul>
              <ul className="flex flex-1 flex-col gap-4">
                <li>
                  <Link href={"instagrm"}>Instagram</Link>
                </li>
                <li>
                  <Link href={"tiktok"}>TikTok</Link>
                </li>
                <li>
                  <Link href={"pinterest"}>Pinterest</Link>
                </li>
                <li>
                  <Link href={"facebook"}>Facebook</Link>
                </li>
              </ul>
              <ul className="flex flex-1 flex-col gap-4">
                <li>
                  <LocalizedLink country="hr" href={"/privacy-policy"}>
                    Privacy Policy
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink country="hr" href={"/cookie-policy"}>
                    Cookie Policy
                  </LocalizedLink>
                </li>
                <li>
                  <LocalizedLink country="hr" href={"/terms-of-use"}>
                    Terms of Use
                  </LocalizedLink>
                </li>
              </ul>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
};
