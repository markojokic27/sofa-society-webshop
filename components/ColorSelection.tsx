// External packages
import * as React from "react";
import { Radio, RadioGroup, RadioGroupProps } from "react-aria-components";

export const ColorSelection: React.FC<
  RadioGroupProps & {
    colors: Array<{ name: string; value: string }>;
    product: { material: string; color: string; quantity: number };
    setProduct: React.Dispatch<
      React.SetStateAction<{
        material: string;
        color: string;
        quantity: number;
      }>
    >;
  }
> = ({ colors, product, setProduct, className, ...rest }) => {
  return (
    <RadioGroup
      value={product.color}
      onChange={(color) => {
        setProduct((prev) => ({ ...prev, color }));
      }}
      className={"mb-8 flex flex-row gap-4 sm:mb-24"}
      aria-label="Color Selection"
      {...rest}
    >
      {colors.map((color) => (
        <Radio
          key={color.name}
          value={color.name}
          className="group cursor-pointer"
        >
          <div
            className={
              "pb-2 transition-transform duration-200 group-data-[selected=true]:border-b group-data-[selected=true]:border-b-black"
            }
          >
            <div className="h-8 w-8" style={{ backgroundColor: color.value }} />
          </div>
        </Radio>
      ))}
    </RadioGroup>
  );
};
