import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Checkbox } from "@/components/Checkbox";

export default function Home() {
  return (
    <div>
      <Layout>
        <LayoutRow className="mb-10">
          <LayoutColumn span={12} className="mt-10 h-10 text-xl font-black">
            Aaaa
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
