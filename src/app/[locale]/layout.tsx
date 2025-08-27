// src/app/[locale]/layout.tsx

import React from "react";
import { NextIntlClientProvider } from "next-intl";
import "../../app/globals.css";
import ChakraProviders from "../providers/ChakraProvider";
import HeaderLayout from "../components/Layouts/HeaderLayout";
import FloatingCTA from "../components/FloatingCTA";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateStaticParams() {
  return [{ locale: "fa" }, { locale: "en" }]; // زبان‌هایی که پشتیبانی می‌کنی
}

export default async function LocaleRootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    messages = {};
  }

  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body>
        <ChakraProviders>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="bg-[#000000ed] backdrop-blur-[10rem] min-h-screen">
              <HeaderLayout />
              {children}
              <FloatingCTA />
            </div>
          </NextIntlClientProvider>
        </ChakraProviders>
      </body>
    </html>
  );
}
