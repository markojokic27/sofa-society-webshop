// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Assets
import HeaderImage from "@/public/assets/images/header-inspiration.png";
import AboutImage1 from "@/public/assets/images/about1.png";
import AboutImage2 from "@/public/assets/images/about2.png";
import AboutImage3 from "@/public/assets/images/about3.png";

export default function Page() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="mt-18 md:mb-26 mb-8 w-full overflow-hidden md:mt-0 md:h-screen">
        <Image
          alt="header image"
          src={HeaderImage}
          className="w-full object-cover md:h-full"
          priority={true}
          height={750}
          width={1440}
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn lgSpan={7}>
            <h2 className="text-xl md:text-4xl">
              The Astrid Curve sofa is a masterpiece of minimalism and luxury.
            </h2>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
