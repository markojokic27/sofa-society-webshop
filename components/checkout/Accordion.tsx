"use client";

// External packages
import * as React from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import {
  Button as AriaButton,
  ListBox,
  ListBoxItem,
  Popover,
  SelectValue,
  Form,
  Select,
  SelectProps,
  RadioGroup,
  FieldError,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

// Components
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Checkbox } from "@/components/Checkbox";
import { RadioButton, RadioButtonVissualy } from "@/components/RadioGroup";
import { LinkAsButton } from "@/components/LinkAsButton";

export const Accordion = () => {
  const items = ["item1", "item2", "item3", "item4", "finish"];
  const [open, setOpen] = React.useState("item1");
  const [filled, setFilled] = React.useState<string[]>([]);

  const handleNext = (item: string) => {
    const index = items.indexOf(item);
    if (index === items.length - 1) return;
    setOpen(items.find((item) => !filled.includes(item)) || "");
    setFilled((prevFilled) => {
      return prevFilled.includes(item) ? prevFilled : [...prevFilled, item];
    });
  };

  return (
    <>
      <RadixAccordion.Root type="single" value={open} className="lg:mt-32">
        <RadixAccordion.Item value="item1" className="group w-full border-b">
          <RadixAccordion.Header className="accordion-header hover:cursor-default group-data-[state=open]:font-bold lg:pt-0">
            {filled.includes("item1") && open !== "item1" ? (
              <div>
                <div className="flex justify-between">
                  <p>1. Email</p>
                  <RadixAccordion.Trigger>
                    <a
                      className="accordion-change"
                      onClick={() => {
                        setOpen("item1");
                      }}
                    >
                      Change
                    </a>
                  </RadixAccordion.Trigger>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Email</p>
                  <p>jovana.jerimic@gmail.com</p>
                </div>
              </div>
            ) : (
              <p>1. Email</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
            {open === "item1" && (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleNext("item1");
                }}
              >
                <Input
                  isRequired
                  inputProps={{
                    type: "email",
                    validationError: "You forgot your email",
                  }}
                  className="mb-8"
                  label="Email"
                />

                <Checkbox className="mb-8 gap-2">
                  <p className="text-2xs text-gray-400">
                    What to get news and offers? Ok, yes and some discounts. But
                    only if you subscribe.
                  </p>
                </Checkbox>
                <Button type="submit" className="mb-8 py-3">
                  Next
                </Button>
              </Form>
            )}
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item2" className="group w-full border-b">
          <RadixAccordion.Header className="accordion-header hover:cursor-default group-data-[state=open]:font-bold">
            {filled.includes("item2") && open !== "item2" ? (
              <div>
                <div className="flex justify-between">
                  <p>2. Shipping Address</p>
                  <RadixAccordion.Trigger>
                    <a
                      className="accordion-change"
                      onClick={() => {
                        setOpen("item2");
                      }}
                    >
                      Change
                    </a>
                  </RadixAccordion.Trigger>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Name</p>
                  <p className="">Jovana Jerimic</p>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Ship to</p>
                  <p className="">Duvanjs 3, 10000 Zagreb, Croata</p>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Phone</p>
                  <p className="">+385 226 2266</p>
                </div>
              </div>
            ) : (
              <p>2. Shipping Address</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleNext("item2");
              }}
            >
              <SelectCountry />
              <div className="lg:flex lg:gap-12">
                <Input
                  isRequired
                  inputProps={{
                    type: "text",
                    validationError: "First name is required",
                  }}
                  className="mb-8"
                  label="First name"
                />
                <Input
                  isRequired
                  inputProps={{
                    type: "text",
                    validationError: "Last name is required",
                  }}
                  className="mb-8"
                  label="Last name"
                />
              </div>
              <Input
                isRequired
                inputProps={{
                  type: "text",
                  validationError: "Address is required",
                }}
                label="Address"
                className="mb-8"
              />
              <Input
                label="Apartment, suite, etc. (Optional)"
                className="mb-8"
              />
              <div className="lg:flex lg:gap-12">
                <Input
                  isRequired
                  inputProps={{
                    type: "text",
                    validationError: "Postal Code is required",
                  }}
                  className="mb-8"
                  label="Postal Code"
                />
                <Input
                  isRequired
                  inputProps={{
                    type: "text",
                    validationError: "City is required",
                  }}
                  className="mb-8"
                  label="City"
                />
              </div>
              <Input
                isRequired
                inputProps={{
                  type: "text",
                  validationError: "Phone is required",
                }}
                className="mb-8"
                label="Phone"
              />

              <Button type="submit" className="mb-8 py-3">
                Next
              </Button>
            </Form>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item3" className="group w-full border-b">
          <RadixAccordion.Header className="accordion-header hover:cursor-default group-data-[state=open]:font-bold">
            {filled.includes("item3") && open !== "item3" ? (
              <div>
                <div className="flex justify-between">
                  <p>3. Shipping Method</p>
                  <RadixAccordion.Trigger>
                    <a
                      className="accordion-change"
                      onClick={() => {
                        setOpen("item3");
                      }}
                    >
                      Change
                    </a>
                  </RadixAccordion.Trigger>
                </div>
                <div className="mt-6 flex-wrap items-center justify-start sm:flex sm:gap-16">
                  <p className="text-2xs text-gray-400">Shipping</p>
                  <p className="">Stand delivery 3 — 5 days</p>
                </div>
              </div>
            ) : (
              <p>3. Shipping method</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleNext("item3");
              }}
            >
              <RadioGroup
                isRequired
                aria-label="Shipping options"
                className="flex flex-col gap-2"
              >
                <RadioButton
                  value="€5"
                  labelLeft={<p>Stand delivery 3 — 5 days</p>}
                  labelRight={<p>€5</p>}
                />
                <RadioButton
                  value="€10"
                  labelLeft={<p>Fast delivery 1 — 2 days</p>}
                  labelRight={<p>€10</p>}
                />
              </RadioGroup>

              <Button type="submit" className="mb-8 mt-10 py-3">
                Next
              </Button>
            </Form>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
        <RadixAccordion.Item value="item4" className="group w-full">
          <RadixAccordion.Header className="accordion-header hover:cursor-default group-data-[state=open]:font-bold">
            {filled.includes("item4") && open !== "item4" ? (
              <div className="flex justify-between">
                <p className="">4. Paymant</p>
                <RadixAccordion.Trigger>
                  <a
                    className="accordion-change"
                    onClick={() => {
                      setOpen("item4");
                    }}
                  >
                    Change
                  </a>
                </RadixAccordion.Trigger>
              </div>
            ) : (
              <p>4. Payment</p>
            )}
          </RadixAccordion.Header>
          <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
            <RadixAccordion.Root
              type="single"
              collapsible
              className="group w-full"
            >
              <RadioGroup
                aria-label="Shipping options"
                className="flex flex-col gap-2"
              >
                <RadixAccordion.Item value="item41" className="mb-2">
                  <RadixAccordion.Trigger className="trigger group/trigger w-full">
                    <RadioButtonVissualy labelLeft={<p>Card</p>} />
                  </RadixAccordion.Trigger>
                  <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          handleNext("item4");
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
                <RadixAccordion.Item value="item42" className="mb-2">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger group/trigger w-full">
                      <RadioButtonVissualy labelLeft={<p>Google Pay</p>} />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          handleNext("item4");
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
                <RadixAccordion.Item value="item43" className="mb-2">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger group/trigger w-full">
                      <RadioButtonVissualy labelLeft={<p>Apple Pay</p>} />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content overflow-hidden data-[state=closed]:animate-slideUpAccordion data-[state=open]:animate-slideDownAccordion">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          handleNext("item4");
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
                <RadixAccordion.Item value="item44">
                  <RadixAccordion.Header>
                    <RadixAccordion.Trigger className="trigger group/trigger w-full">
                      <RadioButtonVissualy labelLeft={<p>Pay Pal</p>} />
                    </RadixAccordion.Trigger>
                  </RadixAccordion.Header>
                  <RadixAccordion.Content className="accordion-content">
                    <div className="flex h-20 w-full items-center justify-center border">
                      <Button
                        onPress={() => {
                          handleNext("item4");
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </RadixAccordion.Content>
                </RadixAccordion.Item>
              </RadioGroup>
            </RadixAccordion.Root>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      </RadixAccordion.Root>
      <LinkAsButton
        href="/confirmation"
        className="mb-24 mt-10 block w-full py-4 text-center"
        isVisuallyDisabled={open === "finish" ? false : true}
      >
        Place an order
      </LinkAsButton>
    </>
  );
};

export const SelectCountry: React.FC<SelectProps<object>> = ({ ...rest }) => {
  const [selected, setSelected] = React.useState("");
  return (
    <Select
      aria-label="Country"
      className="group relative mb-8"
      placeholder=""
      selectedKey={selected}
      onSelectionChange={(country) => setSelected(country.toString())}
      isRequired
      {...rest}
    >
      <AriaButton className="relative flex h-14 w-full rounded-1 border border-grayscale-50 px-4 text-left outline-none hover:border-grayscale-500 focus:outline-none active:outline-none group-data-[invalid]:border-red-700">
        <SelectValue className="pb-3 pt-5" />

        <label
          className={twMerge(
            "pt-4 text-grayscale-400",
            selected !== "" && "absolute top-1.5 pt-0 text-2xs",
          )}
        >
          Country
        </label>
      </AriaButton>
      <Popover className="react-aria-Popover rounded-1 border *:outline-none">
        <ListBox className="w-full bg-white">
          <ListBoxItem className="listBoxItem">Croatia</ListBoxItem>
          <ListBoxItem className="listBoxItem">Slovenia</ListBoxItem>
          <ListBoxItem className="listBoxItem">Germany</ListBoxItem>
        </ListBox>
      </Popover>

      <FieldError className="absolute mt-1 hidden text-2xs text-red-500 group-data-[invalid=true]:block">
        Country is required
      </FieldError>
    </Select>
  );
};
