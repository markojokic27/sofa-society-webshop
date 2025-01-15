"use client";

// External packages
import * as React from "react";
import { twMerge } from "tailwind-merge";
import {
  Slider,
  SliderOutput,
  SliderTrack,
  SliderThumb,
  SliderProps,
} from "react-aria-components";

export const SliderSelection: React.FC<
  SliderProps & { thumbLabels?: string[] }
> = ({ thumbLabels, className, ...rest }) => {
  const [value, setValue] = React.useState([0, 5000]);
  return (
    <Slider
      {...rest}
      value={value}
      maxValue={5000}
      onChange={(value: number | number[]) =>
        setValue(value as [number, number])
      }
      className={twMerge("w-full", className as string)}
    >
      <SliderTrack className="relative mb-4 h-[1px] w-full bg-black hover:cursor-pointer">
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb
              key={i}
              index={i}
              aria-label={thumbLabels ? thumbLabels[i] : `Thumb ${i + 1}`}
              className="absolute h-4 w-4 rounded-full border border-black bg-white"
            />
          ))
        }
      </SliderTrack>
      <SliderOutput className="-mx-2 flex justify-between text-2xs">
        <p>€{Math.round(value[0])}</p>
        <p>€{Math.round(value[1])}</p>
      </SliderOutput>
    </Slider>
  );
};
