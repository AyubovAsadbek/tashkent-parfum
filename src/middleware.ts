import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["uz", "ru", "la"],

  // Used when no locale matches
  defaultLocale: "uz",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(uz|ru|la)/:path*"],
};
