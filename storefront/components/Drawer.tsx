// External packages
import * as React from "react";
import {
  ModalOverlay,
  Dialog,
  DialogTrigger,
  Button,
  Modal,
} from "react-aria-components";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { CountrySelect } from "@/components/CountrySelect";

// Medusa
import { HttpTypes } from "@medusajs/types";

export const Drawer: React.FC<
  React.ComponentPropsWithoutRef<"button"> & {
    regions: HttpTypes.StoreRegion[];
  }
> = ({ regions }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <DialogTrigger>
        <Button
          onPress={() => setIsOpen(true)}
          className="h-6 w-6 focus:outline-none"
        >
          <Icon name="hamburger" className={isOpen ? "hidden" : ""} />
        </Button>
        <ModalOverlay
          isDismissable
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          className="fixed bottom-0 left-0 top-0 z-[70] w-full data-[entering]:animate-drawer data-[exiting]:animate-drawerOut"
        >
          <Modal className="drawer fixed bottom-0 left-0 top-0 z-[70] bg-black">
            <Dialog className="flex h-full flex-col justify-between outline-none">
              <div>
                <div className="flex h-18 w-full items-center border-b border-b-white px-8 text-white">
                  <Icon name="search" className="scale-110" />
                  <Input
                    label="Search"
                    className="-mb-2 self-start p-0"
                    inputProps={{
                      className:
                        "bg-black text-white h-18 m-0 border-0 border-b border-white rounded-none hover:border-white focus:border-white active:border-white ",
                    }}
                  />
                  <Button
                    onPress={() => setIsOpen(false)}
                    className="outline-none"
                  >
                    <Icon name="x" className="scale-110 hover:cursor-pointer" />
                  </Button>
                </div>
                <ul className="m-8 flex flex-col gap-8 text-xl text-grayscale-10">
                  <li>
                    <Link href={"/about"} onClick={() => setIsOpen(false)}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/inspiration"}
                      onClick={() => setIsOpen(false)}
                    >
                      Inspiration
                    </Link>
                  </li>
                  <li>
                    <Link href={"/shop"} onClick={() => setIsOpen(false)}>
                      Shop
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="m-8 text-grayscale-10">
                <CountrySelect defaultValue="HR" variant="mobile" />
              </div>
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </>
  );
};
