// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Assets
import HeaderImage from "@/public/assets/images/header-about.png";
import AboutImage1 from "@/public/assets/images/about1.png";
import AboutImage2 from "@/public/assets/images/about2.png";
import AboutImage3 from "@/public/assets/images/about3.png";

export default function Page() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="mb-8 mt-18 w-full overflow-hidden md:mb-26 md:mt-0 md:h-screen">
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
              At Sofa Society, we believe that a sofa is the heart of every
              home.
            </h2>
          </LayoutColumn>
          <LayoutColumn lgSpan={5} className="mt-6 md:mt-18 md:text-lg">
            <p>
              Welcome to Sofa Society, where we believe that comfort and style
              should be effortlessly intertwined. Our mission is to help you
              create beautiful, functional spaces that bring warmth and
              relaxation into your home. <br />
              <br />
              Every piece in our collection is designed with care, blending
              timeless craftsmanship with modern aesthetics to offer you the
              perfect balance between form and function.
            </p>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-8 md:mb-26">
          <LayoutColumn>
            <Image
              alt="sofa image"
              src={AboutImage1}
              className="w-full object-cover"
              priority={true}
              height={702}
              width={1248}
            />
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn lgSpan={7} className="mb-6 md:mb-10">
            <h2 className="text-xl md:text-4xl">
              We are here to make your living space a true reflection of your
              personal style.
            </h2>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-16 md:mb-36">
          <LayoutColumn lgSpan={5}>
            <p>
              Welcome to Sofa Society, where we believe that comfort and style
              should be effortlessly intertwined. Our mission is to help you
              create beautiful, functional spaces that bring warmth and
              relaxation into your home.
              <br />
              <br />
              Every piece in our collection is designed with care, blending
              timeless craftsmanship with modern aesthetics to offer you the
              perfect balance between form and function.
            </p>
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn mdSpan={6}>
            <div className="mx-auto mb-16 w-fit md:mb-0 md:w-full">
              <Image
                alt="sofa image"
                src={AboutImage2}
                className="w-full object-cover"
                priority={true}
                width={600}
                height={800}
              />
            </div>
          </LayoutColumn>
          <LayoutColumn mdSpan={6} lgSpan={5} lgOffset={1}>
            <p className="mb-6 md:mb-36">
              Our design philosophy revolves around creating pieces that are
              both beautiful and practical. Inspired by Scandinavian simplicity,
              modern luxury, and timeless classics, our collections are curated
              to suit a wide variety of tastes and lifestyles. We understand
              that every home is different, so we offer a diverse range of
              styles, colors, and textures to help you find the perfect fit.
              Whether you prefer sleek modern lines or soft, inviting
              silhouettes, we have something to suit every space and
              personality.
            </p>
            <p className="mb-6 md:mb-0 md:text-lg">
              We believe that great design should be environmentally conscious,
              which is why we strive to minimise our environmental footprint
              through responsible sourcing and production practices.
            </p>
            <p className="text-lg">
              Our commitment to sustainability ensures that our products are not
              only beautiful but also kind to the planet.
            </p>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
      <div className="mx-auto px-4 pb-8 md:mb-26 md:w-full md:px-0">
        <Image
          alt="sofa image"
          src={AboutImage3}
          className="w-full object-cover"
          priority={true}
          width={1440}
          height={809}
        />
      </div>
      <Layout>
        <LayoutRow className="mb-26 md:mb-36">
          <LayoutColumn lgSpan={6}>
            <h2 className="text-xl md:text-4xl">
              Our customers are at the center of everything we do!
            </h2>
          </LayoutColumn>
          <LayoutColumn
            lgSpan={5}
            lgOffset={1}
            className="mt-6 md:mt-18 md:text-lg"
          >
            <p className="md:mb-6">
              Our team is here to help guide you through the process, offering
              personalised support to ensure that you find exactly what you’re
              looking for.
            </p>
            <p className="mb-6 md:mb-0">
              We’re not just selling sofas – we’re helping you create spaces
              where you can relax, recharge, and make lasting memories.
            </p>
            <p className="text-lg">
              Thank you for choosing Sofa Society to be a part of your home!
            </p>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
