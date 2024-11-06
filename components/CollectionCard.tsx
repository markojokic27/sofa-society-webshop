// External packages
import { twMerge } from "tailwind-merge";

export const CollectionCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    name: string;
    description?: string;
  }
> = ({ name, description, image, className, ...rest }) => (
  <div {...rest} className={twMerge("xl:min-w-124", className)}>
    <div className="w-full">{image}</div>
    <h3 className="mb-2 md:mb-4 lg:text-xl">{name}</h3>
    <p className="text-2xs text-grayscale-500 lg:text-lg">{description}</p>
  </div>
);
