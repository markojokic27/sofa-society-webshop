// External packages
import { NextRequest, NextResponse } from "next/server";

// Lib
import { getSupportedCountries } from "@/lib/data/Regions";

// Medusa

// Lista svih podržanih jezika
const supportedCountries = await getSupportedCountries();
const supportedLocales = supportedCountries.map(
  (country: { iso_2: string }) => country.iso_2,
);

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Provjera da li pathname ne počinje s jednim od podržanih jezika
  const isSupportedLocale = supportedLocales.some((locale: string) =>
    pathname.startsWith(`/${locale}`),
  );

  // Ako nije podržani jezik, preusmjeravamo na `/hr`
  if (!isSupportedLocale) {
    return NextResponse.redirect(
      `${request.nextUrl.origin}/hr${pathname}`, // Preusmjerava na `/hr` + trenutni pathname
      307,
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico|_next/image|images|robots.txt).*)",
  ],
};
