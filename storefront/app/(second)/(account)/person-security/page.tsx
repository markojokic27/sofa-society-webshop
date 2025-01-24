// External packages
import * as RadixDialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Input";
import { SelectCountry } from "@/components/checkout/Accordion";
import { Dialog } from "@/components/account/Dialog";

// Utilities
import { getButtonClassNames } from "@/utils/getButtonClassNames";

export default function Page() {
  return (
    <>
      <h2 className="mb-6 mt-6 text-lg font-semibold lg:mb-16 lg:mt-24 lg:text-xl">
        Personal & security
      </h2>
      <p className="mb-6 md:text-md">Personal information</p>
      <div className="max-w-150 mb-16 flex flex-col items-center border p-4 text-center md:flex-row md:items-start md:text-left">
        <Icon name="user" className="mb-4" />
        <div className="md:ml-8">
          <p className="text-2xs text-grayscale-400">Name</p>
          <p>Jovana Jerimic</p>
        </div>
        <div className="md:ml-16">
          <p className="text-2xs text-grayscale-400">Number</p>
          <p>-</p>
        </div>
        <Dialog
          trigger={
            <RadixDialog.Trigger
              className={twMerge(
                getButtonClassNames({
                  size: "md",
                  variant: "outline",
                  isVisuallyDisabled: false,
                }),
                "h-10 rounded-full py-0 text-sm md:ml-auto",
              )}
            >
              Change
            </RadixDialog.Trigger>
          }
          title="Change personal information"
          footer={
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <Button isVisuallyDisabled className="rounded-full py-3.5">
                Save changes
              </Button>
              <RadixDialog.Close asChild>
                <Button variant="outline" className="rounded-full py-3.5">
                  Cancel
                </Button>
              </RadixDialog.Close>
            </div>
          }
        >
          <div className="md:flex md:gap-6">
            <Input label="First name" className="mb-8" />
            <Input label="Last name" className="mb-8" />
          </div>
          <Input label="Phone" className="mb-10" />
        </Dialog>
      </div>
      <p className="mb-6 md:text-md">Contact</p>
      <div className="max-w-150 mb-2 flex flex-col items-center border p-4 md:flex-row">
        <Icon name="user" className="mb-4" />
        <div className="text-center md:ml-8 md:text-left">
          <p className="text-2xs text-grayscale-400">Email</p>
          <p>jovana.jerimic@gmail.com</p>
        </div>
      </div>
      <span className="text-2xs text-grayscale-400">
        If you want to change your email please contact us via customer support.
      </span>
      <p className="mb-6 mt-16 md:text-md">Address</p>
      <div className="b-2 max-w-150 mb-10 mt-6 flex flex-col items-center border p-4 text-center md:flex-row md:items-start md:text-left">
        <div>
          <Icon name="user" className="mb-4" />
        </div>
        <div className="w-full md:ml-8">
          <div className="w-full md:flex">
            <div className="mb-2 md:mb-9 md:w-1/2">
              <p className="text-2xs text-grayscale-400">Country</p>
              <p>Croatia</p>
            </div>
            <div className="mb-2 md:mb-9">
              <p className="text-2xs text-grayscale-400">Address</p>
              <p>Duvanjsa 3</p>
            </div>
          </div>
          <div className="mb-2 md:mb-9">
            <p className="text-2xs text-grayscale-400">
              Apartment, suite, etc. (Optional)
            </p>
            <p>Kat 2</p>
          </div>
          <div className="md:flex md:justify-between">
            <div className="mb-2 md:mb-0 md:w-1/2">
              <p className="text-2xs text-grayscale-400">Postal Code</p>
              <p>10000</p>
            </div>
            <div className="mb-2 md:mb-0 md:w-1/2">
              <p className="text-2xs text-grayscale-400">City</p>
              <p>Zagreb</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 md:ml-auto md:flex md:flex-row md:items-start md:justify-end">
          <Button
            variant="outline"
            iconLeft={<Icon name="trash" className="h-4 w-4" />}
            className="flex size-10 justify-center rounded-full p-0"
          />
          <Dialog
            title="Change address"
            footer={
              <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <Button isVisuallyDisabled className="rounded-full py-3.5">
                  Save changes
                </Button>
                <RadixDialog.Close asChild>
                  <Button variant="outline" className="rounded-full py-3.5">
                    Cancel
                  </Button>
                </RadixDialog.Close>
              </div>
            }
            trigger={
              <RadixDialog.Trigger
                className={twMerge(
                  getButtonClassNames({
                    size: "md",
                    variant: "outline",
                  }),
                  "h-10 rounded-full py-0 text-sm",
                )}
              >
                Change
              </RadixDialog.Trigger>
            }
          >
            <SelectCountry className="mb-8" />
            <Input label="Address" className="mb-8" />
            <Input label="Apartment, suite, etc. (Optional)" className="mb-8" />
            <div className="md:flex md:gap-6">
              <Input label="Postal Code" className="mb-8 w-full" />
              <Input label="City" className="mb-8 w-full" />
            </div>
          </Dialog>
        </div>
      </div>
      <Dialog
        title="Add address"
        footer={
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <Button className="rounded-full py-3.5" isVisuallyDisabled>
              Add address
            </Button>
            <RadixDialog.Close asChild>
              <Button variant="outline" className="rounded-full py-3.5">
                Cancel
              </Button>
            </RadixDialog.Close>
          </div>
        }
        trigger={
          <RadixDialog.Trigger
            className={twMerge(
              getButtonClassNames({
                size: "md",
                variant: "solid",
              }),
              "mx-auto rounded-full py-3 md:mx-0",
            )}
          >
            Add another address
          </RadixDialog.Trigger>
        }
      >
        <SelectCountry className="mb-8" />
        <Input label="Address" className="mb-8" />
        <Input label="Apartment, suite, etc. (Optional)" className="mb-8" />
        <div className="md:flex md:gap-6">
          <Input label="Postal Code" className="mb-8" />
          <Input label="City" className="mb-8" />
        </div>
      </Dialog>
      <p className="mb-6 mt-16 text-md">Change password</p>
      <p className="mb-10 max-w-2xl text-grayscale-500">
        To change your password, we&apos;ll send you an email. Just click on the
        reset button below.
      </p>
      <Dialog
        title="Reset password"
        trigger={
          <RadixDialog.Trigger
            className={twMerge(
              getButtonClassNames({
                size: "md",
                variant: "solid",
              }),
              "mx-auto mb-40 rounded-full py-3 hover:bg-grayscale-500 md:mx-0",
            )}
          >
            Reset password
          </RadixDialog.Trigger>
        }
      >
        <p className="w-96 text-grayscale-500">
          We have sent an email with instructions on how to change the password.
        </p>
        <RadixDialog.Close asChild>
          <Button variant="link" className="absolute right-4 top-4 h-6 w-6">
            <Icon name="x" />
          </Button>
        </RadixDialog.Close>
      </Dialog>
    </>
  );
}
