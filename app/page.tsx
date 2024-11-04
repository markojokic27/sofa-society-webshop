import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
export default function Home() {
  return (
    <>
      <Header headerTheme="light" />
      <div className="h-screen bg-gray-600"></div>
      <div className="h-screen bg-red-600">
        <Layout>
          <LayoutRow>
            <LayoutColumn span={6} className="h-10 bg-yellow-300" />
            <LayoutColumn span={6} lgSpan={5} lgOffset={1} className="h-10 bg-yellow-300" />
          </LayoutRow>
        </Layout>
      </div>
      <Footer />
    </>
  );
}
