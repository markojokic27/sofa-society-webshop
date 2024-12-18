// External packages
import * as RadixDialog from "@radix-ui/react-dialog";
import Link from "next/link";

// Components
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { FunctionalSelect } from "@/components/FunctionalSelect";

export const HamburgerMenu: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    headerTheme?: "light" | "dark";
  }
> = ({ headerTheme = "dark", ...rest }) => (
  <RadixDialog.Root {...rest}>
    <RadixDialog.Trigger className="group h-6 w-6 focus:outline-none">
      <Icon name="hamburger" className="group-data-[state=open]:hidden" />
    </RadixDialog.Trigger>
    <RadixDialog.Overlay className="data-[state=closed]:animate-overlayShow data-[state=open]:animate-overlayHide">
      <RadixDialog.Content
        className={`hamburger-menu fixed bottom-0 left-0 top-0 z-[70] bg-black data-[state=closed]:animate-hamburgerMenuOut data-[state=open]:animate-hamburgerMenu`}
      >
        <RadixDialog.Title />
        <RadixDialog.DialogDescription />
        <div className="flex h-full flex-col justify-between">
          <div>
            <div className="relative flex h-18 w-full items-center border-b border-b-white px-8 text-white">
              <Icon name="search" className="scale-110" />
              <Input
                label="Search"
                className="-mb-2 self-start p-0"
                inputProps={{
                  className:
                    "bg-black text-white h-18 m-0 border-0 border-b border-white rounded-none hover:border-white focus:border-white active:border-white ",
                }}
              />
              <RadixDialog.Trigger>
                <Icon name="x" className="scale-110 hover:cursor-pointer" />
              </RadixDialog.Trigger>
            </div>
            <ul className="m-8 flex flex-col gap-8 text-xl text-grayscale-10">
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/inspiration"}>Inspiration</Link>
              </li>
              <li>
                <Link href={"/shop"}>Shop</Link>
              </li>
            </ul>
          </div>
          <div className="m-8 text-grayscale-10">
            <FunctionalSelect
              variant="language-select-mobile"
              items={[
                { name: "Arabic", value: "AR" },
                { name: "Chinese", value: "ZH" },
                { name: "Hrvatski", value: "HR" },
                { name: "English", value: "EN" },
                { name: "Français", value: "FR" },
                { name: "Deutsch", value: "DE" },
                { name: "Italiano", value: "IT" },
                { name: "Japanese", value: "JA" },
                { name: "Russian", value: "RU" },
                { name: "Español", value: "ES" },
              ]}
              defaultValue={"HR"}
            />
          </div>
        </div>
      </RadixDialog.Content>
    </RadixDialog.Overlay>
  </RadixDialog.Root>
);
