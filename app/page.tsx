import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Input } from "@/components/Input";
import { Icon } from "@/components/Icon";
export default function Home() {
  return (
    <div>
      <Layout>
        <LayoutRow className="mb-10">
          <LayoutColumn span={12} className="mt-10 h-10">
            Aaaa
            <Input
              inputProps={{ type: "text", validationError: "aaaa" }}
              label="aaa"
              icon={<Icon name="search" />}
            ></Input>
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
