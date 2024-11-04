// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

// Assets
import HeaderImage from "@/public/assets/images/header.png";

export default function Home() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="mt-18 md:mb-26 mb-8 w-full overflow-hidden md:mt-0 md:h-screen">
        <Image
          alt="header image"
          src={HeaderImage}
          className="w-full object-cover md:h-full"
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 md:mb-34">
          <LayoutColumn mdSpan={8} className="mb-6 md:mb-0">
            <h3 className="text-xl md:text-4xl">
              Elevate Your Living Space with Unmatched Comfort & Style
            </h3>
          </LayoutColumn>
          <LayoutColumn
            mdSpan={4}
            className="flex flex-col justify-center md:text-lg"
          >
            <p>Discover Your Perfect Sofa Today</p>
            <Button variant="link">Explore Now</Button>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <div className="h-screen w-full bg-red-500"></div>
      <Layout>
        <LayoutRow>
          <LayoutColumn span={6} className="h-10 bg-yellow-300"></LayoutColumn>
          <LayoutColumn
            span={6}
            lgSpan={5}
            lgOffset={1}
            className="h-10 bg-yellow-300"
          />
        </LayoutRow>
      </Layout>
      <Footer />
    </>
  );
}
