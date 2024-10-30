import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Header } from "@/components/Header";
export default function Home() {
  return (
   <>
    <Header headerTheme="light"></Header>
    <div className="h-screen bg-gray-600"></div>
    <div className="h-screen bg-gray-200"></div>
   </>
  );
}
