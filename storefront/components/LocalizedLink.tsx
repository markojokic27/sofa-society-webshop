// External packages
import { LinkProps } from "next/link";
import Link from "next/link";

type LocalizedLinkProps = React.ComponentPropsWithoutRef<"a"> &
  LinkProps & {
    country: string;
  };

export const LocalizedLink = ({
  children,
  country,
  href,
  ...rest
}: LocalizedLinkProps) => {
  return (
    <Link {...rest} href={`/${country}${href}`}>
      {children}
    </Link>
  );
};
