"use client";

import { useState } from "react";
import DarkToggle from "../Modules/DarkToggle";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const headerItems = [
    { id: 1, href: `/${locale}/`, title: "home" },
    {
      id: 2,
      title: "services",
      href: `/${locale}/services`,
      submenu: [
        { href: `/${locale}/services/concert`, title: "concert" },
        { href: `/${locale}/services/album`, title: "album" },
        { href: `/${locale}/services/certificate`, title: "certificate" },
        { href: `/${locale}/services/hall`, title: "hall" },
      ],
    },
    { id: 3, href: `/${locale}/courses`, title: "courses" },
    { id: 4, href: `/${locale}/store`, title: "store" },
    { id: 5, href: `/${locale}/about`, title: "about" },
    { id: 6, href: `/${locale}/contact`, title: "contact" },
    { id: 7, href: `/${locale}/blog`, title: "blog" },
    { id: 8, href: `/${locale}/gallery`, title: "gallery" },
  ];

  const [openSubmenuId, setOpenSubmenuId] = useState(null);
  const toggleSubmenu = (id) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  return (
    <>
      {/* هدر بالا */}
      <header className="flex items-center justify-between px-[20px] py-[12px] bg-[#000] text-white relative z-30">
        {/* لوگو */}
        <Link
          href={`/${locale}/`}
          className="text-[#fff] text-[28px] font-extrabold tracking-[0.05em] px-[12px] py-[6px] rounded-[1rem] bg-[#ffffff1a] hover:bg-[#ffffff33] transition duration-[500ms]"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("logo")}
        </Link>
        {/* serch box */}
        <div className="min-w-[30%] flex items-center mx-[1rem] flex-1 max-w-[300px] relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t("search")}
            className="
      w-full px-[40px] py-[8px] rounded-[0.75rem]
      bg-[#111] text-[#c0c0c0]
      placeholder-[#7a7a7a]
      border border-[#333]
      focus:outline-none focus:border-[#e7b85e]
      transition duration-300
    "
          />
          <svg
            className="absolute left-[12px] top-[1/2] transform -translate-y-[1/2] w-[18px] h-[18px] text-[#c0c0c0]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        {/* دکمه همبرگری موبایل (فقط موبایل نمایش) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#e7b85e] text-[28px] focus:outline-none"
          aria-label="Open menu"
        >
          &#9776;
        </button>
        {/* نوبار دسکتاپ (فقط دسکتاپ نمایش) */}
        <nav className="hidden md:flex items-center space-x-6">
          {headerItems.map(({ id, href, title, submenu }) => {
            const isHome = href === `/${locale}/` || href === "/";
            const isActive = isHome
              ? pathname === `/${locale}/` ||
                pathname === `/${locale}` ||
                pathname === "/" ||
                pathname === ""
              : pathname.startsWith(href);

            if (submenu && submenu.length > 0) {
              return (
                <div key={id} className="relative group">
                  <button
                    className={`font-semibold text-[18px] px-4 py-2 rounded-md transition-colors duration-300 ${
                      isActive ? "text-[#e7b85e]" : "text-[#d9d9d9]"
                    } hover:text-[#e7b85e]`}
                  >
                    {t(title)}
                  </button>

                  {/* زیرمنوی دسکتاپ */}
                  <ul className="absolute top-full left-0 mt-2 w-max bg-[#222] rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity pointer-events-none group-hover:pointer-events-auto">
                    {submenu.map(({ href: subHref, title: subTitle }, idx) => (
                      <li key={idx} className="px-4 py-2 whitespace-nowrap">
                        <Link
                          href={subHref}
                          className="block text-gray-300 hover:text-yellow-400"
                        >
                          {t(subTitle)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            return (
              <Link
                key={id}
                href={href}
                className={`font-semibold text-[18px] px-4 py-2 rounded-md transition-colors duration-300 ${
                  isActive ? "text-[#e7b85e]" : "text-[#d9d9d9]"
                } hover:text-[#e7b85e]`}
              >
                {t(title)}
              </Link>
            );
          })}

          {/* دکمه تاریک‌مود دسکتاپ */}
          <DarkToggle />
        </nav>
      </header>

      {/* بک‌دراپ منوی موبایل */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* منوی کشویی موبایل */}
      <nav
        className={`fixed !top-0 ${
          locale === "fa" ? "right-0" : "left-0"
        } h-full w-[260px] bg-[#111] text-[#ddd] z-50 transform transition-transform duration-300 shadow-lg overflow-auto md:hidden ${
          isMenuOpen
            ? "translate-x-0"
            : locale === "fa"
            ? "translate-x-full"
            : "-translate-x-full"
        }`}
        style={{ top: "0" }}
      >
        <ul className="flex flex-col">
          {headerItems.map(({ id, href, title, submenu }) => {
            const isHome = href === `/${locale}/` || href === "/";
            const isActive = isHome
              ? pathname === `/${locale}/` ||
                pathname === `/${locale}` ||
                pathname === "/" ||
                pathname === ""
              : pathname.startsWith(href);

            if (submenu && submenu.length > 0) {
              return (
                <li key={id} className="border-b border-[#444]">
                  <button
                    onClick={() =>
                      setOpenSubmenuId(openSubmenuId === id ? null : id)
                    }
                    className={`w-full px-[16px] py-[12px] flex justify-between items-center font-semibold text-[18px] cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? "text-[#e7b85e]"
                        : "text-[#d9d9d9] hover:text-[#e7b85e]"
                    }`}
                    aria-expanded={openSubmenuId === id}
                  >
                    {t(title)}
                    {/* آیکون فلش */}
                    <svg
                      className={`w-[16px] h-[16px] ml-[8px] transform transition-transform duration-300 ease-in-out ${
                        openSubmenuId === id
                          ? "rotate-180 text-[#e7b85e]"
                          : "rotate-0 text-[#c0c0c0]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* زیرمنوی موبایل */}
                  <ul
                    className={`pl-[16px] bg-[#222] overflow-hidden border-l-2 transition-[max-height,opacity,border-color] duration-500 ease-in-out ${
                      openSubmenuId === id
                        ? "max-h-[700px] opacity-[100%] border-[#e7b85e]"
                        : "max-h-[0] opacity-[0] border-transparent"
                    }`}
                  >
                    {submenu.map(
                      ({ href: subHref, title: subTitle }, index) => (
                        <li
                          key={index}
                          className={`py-[8px] border-[#7d7d7d78] w-[90%] ${
                            index === submenu.length - 1 ? "" : "border-b"
                          }`}
                        >
                          <Link
                            href={subHref}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-[8px] text-[16px] text-[#d9d9d9] hover:text-[#e7b85e] transition-colors duration-300"
                          >
                            {t(subTitle)}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              );
            }

            return (
              <li key={id} className="border-b border-[#444]">
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-[16px] py-[12px] font-semibold text-[18px] transition
                    ${
                      isActive
                        ? "text-[#e7b85e]"
                        : "text-[#d9d9d9] hover:text-[#e7b85e]"
                    }
                  `}
                >
                  {t(title)}
                </Link>
              </li>
            );
          })}

          {/* دکمه حالت تاریک موبایل */}
          <li className="px-[16px] py-[12px] border-t border-[#444]">
            <DarkToggle />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderLayout;
