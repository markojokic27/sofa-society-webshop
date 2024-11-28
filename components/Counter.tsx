// External packages
import {
  NumberField,
  Group,
  Input,
  Button,
  NumberFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

// Components
import { Icon } from "@/components/Icon";

export const Counter: React.FC<
  React.ComponentPropsWithoutRef<"div"> & NumberFieldProps
> = ({ className, ...rest }) => {
  return (
    <NumberField
      minValue={1}
      defaultValue={1}
      maxValue={15}
      aria-label="Counter"
      {...rest}
    >
      <Group className="flex  items-center justify-between rounded-1 border border-grayscale-200 px-6 py-3 md:w-40">
        <Button
          slot="decrement"
          className="data-[disabled=true]:text-grayscale-200"
        >
          <Icon name="minus" />
        </Button>
        <Input className="h-5 w-5 text-center outline-none" />
        <Button
          slot="increment"
          className="data-[disabled=true]:text-grayscale-200"
        >
          <Icon name="plus" />
        </Button>
      </Group>
    </NumberField>
  );
};
