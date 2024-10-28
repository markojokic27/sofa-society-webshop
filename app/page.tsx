import { Button } from "@/components/Button";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { LinkAsButton } from "@/components/LinkAsButton";

export default function Home() {
  return (
    <div>
      <Layout>
        <LayoutRow className="mb-10">
          <LayoutColumn span={6} className="text-xl font-black">
            Sofa society
          </LayoutColumn>
          <LayoutColumn
            span={6}
            className="align text-right text-md font-light"
          >
            Webshop
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow>
          <LayoutColumn span={3} className="text-center">
            <button className="mb-4 rounded-1 border border-black bg-black px-6 py-4 leading-none text-white hover:border-grayscale-500 hover:bg-grayscale-500">
              Label
            </button>
            <Button variant="solid" size="md">
              Ladel
            </Button>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center">
            <button className="mb-4 rounded-1 border border-black px-6 py-4 leading-none hover:border-grayscale-500 hover:text-grayscale-500">
              Label
            </button>
            <Button variant="outline">Ladel</Button>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center">
            <button className="mb-4 rounded-1 border border-black bg-black px-4 py-2.5 leading-none text-white hover:border-grayscale-500 hover:bg-grayscale-500">
              Label
            </button>
            <Button variant="solid" size="sm">
              Ladel
            </Button>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center">
            <button className="mb-4 rounded-1 border border-black px-4 py-2.5 leading-none hover:border-grayscale-500 hover:text-grayscale-500">
              Label
            </button>
            <Button variant="outline" size="sm">
              Ladel
            </Button>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center">
            <button className="mb-4 rounded-1 border border-grayscale-200 bg-grayscale-200 px-6 py-4 leading-none text-white">
              Label
            </button>
            <Button variant="solid" size="md" isVisuallyDisabled>
              Ladel
            </Button>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center">
            <button className="mb-4 rounded-1 border border-grayscale-200 px-6 py-4 leading-none text-grayscale-200">
              Label
            </button>
            <Button variant="outline" size="md" isVisuallyDisabled>
              Ladel
            </Button>
            
          </LayoutColumn>
        </LayoutRow>
        <LayoutRow className="bg-black">
          <LayoutColumn span={3} className="text-center p-2">
            <Button variant="dark" size="md">Label</Button>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center p-2">
            <Button variant="dark" isVisuallyDisabled>AAAa</Button>
          </LayoutColumn>
          
        </LayoutRow>
        <LayoutRow className="my-4" >
          <LayoutColumn span={3} className="text-center p-2">
            <LinkAsButton href={"a"} variant="solid" size="md">Label</LinkAsButton>
          </LayoutColumn>
          <LayoutColumn span={3} className="text-center p-2 text-2xs">
            <Button variant="link" size="sm">Kabek</Button>
            <Button variant="link" size="md">Kabek</Button>

            
          </LayoutColumn>
        
        </LayoutRow>
      </Layout>
    </div>
  );
}
