import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Arrow } from "@/components/Arrow";
import { Icon } from "@/components/Icon";
export default function Home() {
  return (
    <div>
      <Layout>
        <LayoutRow className="mb-10">
          <LayoutColumn
            span={12}
            className="mt-10 h-screen bg-white text-red-500"
          >
            Aaaaa
            <Icon name="arrowLeft"></Icon>
            <Icon name="arrowRight"></Icon>
            <Icon name="bag"></Icon>
            <Arrow variant="left"></Arrow>
            <Arrow variant="right"></Arrow>
            <Arrow color="white" variant="left"></Arrow>
            <Arrow  color="white"></Arrow>
            <Arrow variant="left" size="sm"></Arrow>
            <Arrow variant="right" size="sm"></Arrow>
            <Arrow color="white" variant="left" size="sm"></Arrow>
            <Arrow  color="white" size="sm"></Arrow>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
