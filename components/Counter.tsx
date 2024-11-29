// External packages
import * as React from "react";
import {
  NumberField,
  Group,
  Input,
  Button,
  NumberFieldProps,
} from "react-aria-components";

// Components
import { Icon } from "@/components/Icon";

export const Counter: React.FC<
  React.ComponentPropsWithoutRef<"div"> & NumberFieldProps
> = ({ className, ...rest }) => {
  const [value, setValue] = React.useState<number>(1);

  return (
    <NumberField
      value={value}
      onChange={setValue}
      minValue={1}
      maxValue={15}
      aria-label="Counter"
      {...rest}
    >
      <Group className="flex items-center justify-between rounded-1 border border-grayscale-200 px-6 py-3 md:w-40">
        <Button
          slot="decrement"
          className="outline-none data-[disabled=true]:text-grayscale-200"
        >
          <Icon name="minus" />
        </Button>
        <Input
          inputMode="numeric"
          className="h-5 w-5 text-center outline-none"
        />
        <Button
          slot="increment"
          className="outline-none data-[disabled=true]:text-grayscale-200"
        >
          <Icon name="plus" />
        </Button>
      </Group>
    </NumberField>
  );
};
