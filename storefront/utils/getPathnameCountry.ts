import { usePathname } from "next/navigation";

export const getPathnameCountry = () => {
  const pathname = usePathname();
  const country = pathname.split("/")[1];
  return country;
};
