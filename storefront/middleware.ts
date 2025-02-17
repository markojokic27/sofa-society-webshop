import { NextRequest, NextResponse } from "next/server";
import { getSupportedCountries } from "@/lib/data/Regions";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const supportedCountries = await getSupportedCountries();
  const supportedLocales = supportedCountries.map(
    (country: { iso_2: string }) => country.iso_2,
  );

  const isSupportedLocale = supportedLocales.some((locale: string) =>
    pathname.startsWith(`/${locale}`),
  );

  if (!isSupportedLocale && !pathname.startsWith("/hr")) {
    return NextResponse.redirect(
      `${request.nextUrl.origin}/hr${pathname}`,
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
