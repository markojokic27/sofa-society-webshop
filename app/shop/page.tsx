// External packages
import Image from "next/image";

// Components
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CollectionsScroll } from "@/components/CollectionsScroll";

// Assets
import Collection from "@/public/assets/images/collection.png";

export default function Page() {
  return (
    <>
      <Header headerTheme="dark" />
      <CollectionsScroll className="mb-26 mt-26 md:mb-36 md:mt-48 md:hidden" />
      <Layout className="mb-26 mr-0 mt-26 hidden pr-0 sm:mx-auto md:mb-36 md:mt-48 md:flex md:pr-6">
        <LayoutRow>
          <LayoutColumn>
            <h1 className="mb-8 text-xl md:text-4xl">Collections</h1>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <div>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </div>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <div>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </div>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <div>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </div>
          </LayoutColumn>
          <LayoutColumn span={3}>
            <div>
              <Image src={Collection} alt="Collection" className="mb-6" />
              <p>Scandinavian Simplicity</p>
            </div>
          </LayoutColumn>
        </LayoutRow>
      </Layout>

      <Footer />
    </>
  );
}
