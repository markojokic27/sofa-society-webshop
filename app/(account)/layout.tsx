// Components
import { Header } from "@/components/Header";
import { Layout, LayoutRow, LayoutColumn } from "@/components/Layout";
import { Button } from "@/components/Button";
import { LayoutLinks } from "@/components/account/LayoutLinks";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header headerTheme="dark" />
      <Layout className="mt:18 md:mt-21">
        <LayoutRow className="relative">
          <LayoutColumn
            span={12}
            lgSpan={3}
            className='pulled-background-account top-18 md:top-21 z-10 mt-18 flex  before:absolute before:right-0 before:top-0 before:z-[-1] before:block before:bg-grayscale-50 before:content-[""] after:absolute after:top-0 after:z-[-1] after:block after:bg-grayscale-50 after:content-[""] md:mt-0 lg:fixed lg:after:right-0'
          >
            <div className="relative flex w-full flex-col justify-between py-4 lg:justify-start lg:py-0">
              <h2 className="mb-6 text-lg font-semibold leading-none md:mb-10 lg:mb-16 lg:mt-24 lg:text-xl lg:leading-normal">
                My account
              </h2>
              <LayoutLinks />
              <Button
                variant="link"
                size="sm"
                className="absolute right-0 top-4 no-underline md:ml-0 lg:bottom-16 lg:left-0 lg:top-auto"
              >
                Log out
              </Button>
            </div>
          </LayoutColumn>
          <LayoutColumn span={12} lgOffset={4} lgSpan={8}>
            {children}
          </LayoutColumn>
        </LayoutRow>
      </Layout>
    </div>
  );
}
