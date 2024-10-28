import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <LayoutRow>
          <LayoutColumn span={6} className="text-xl font-black">
            Sofa society
          </LayoutColumn>
          <LayoutColumn span={6} className="text-md font-light text-right align">
            Webshop
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
