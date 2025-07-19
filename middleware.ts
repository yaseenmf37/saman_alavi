import createMiddleware from "next-intl/middleware";
import type { NextMiddleware } from "next/server";

const middleware: NextMiddleware = createMiddleware({
  locales: ["en", "fa"],
  defaultLocale: "fa",
});

export default middleware;

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
