// External packages
import { twMerge } from "tailwind-merge";

// Components
import { LocalizedLink } from "@/components/LocalizedLink";

// Utilis
import { getPathnameCountry } from "@/utils/getPathnameCountry";

export const CollectionCard: React.FC<
  React.ComponentPropsWithoutRef<"div"> & {
    image: React.ReactNode;
    name: string;
    description?: string;
  }
> = ({ name, description, image, className, ...rest }) => {
  const country = getPathnameCountry();
  return (
    <div {...rest} className={twMerge("", className)}>
      <LocalizedLink country={country} href={"/collection"}>
        <div className="w-full">{image}</div>
        <h3 className="mb-2 lg:mb-4 lg:text-xl">{name}</h3>
        <p className="text-2xs text-grayscale-500 lg:text-lg">{description}</p>
      </LocalizedLink>
    </div>
  );
};
