"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function FloatingCTA() {
  const t = useTranslations();

  const locale = useLocale();
  const options = [
    {
      label: "concert",
      href: `/${locale}/services/concert`,
      xOffset: -50,
      yOffset: 80 + -50,
    }, // پایین دایره
    {
      label: "album",
      href: `/${locale}/services/album`,
      xOffset: -90,
      yOffset: 27 + -50,
    }, // مساوی با دایره
    {
      label: "certificate",
      href: `/${locale}/services/certificate`,
      xOffset: -90,
      yOffset: -27 + -50,
    }, // مساوی با دایره
    {
      label: "hall",
      href: `/${locale}/services/hall`,
      xOffset: -50,
      yOffset: -80 + -50,
    }, // بالا از دایره
  ];
  const [hovered, setHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 0); // تاخیر قبل از بسته شدن
  };
  const a = locale === "fa" ? 1 : -1;
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed [bottom:2.5rem] ${
        locale === "fa" ? "[right:2.5rem]" : "[left:2.5rem]"
      } z-[50] flex flex-col items-start justify-center h-[220px] w-[220px]`}
    >
      <div className="relative">
        {/* دایره اصلی */}
        <div className="w-[4rem] h-[4rem] rounded-full [background-color:#FFD700] flex items-center justify-center cursor-pointer [box-shadow:0_4px_6px_rgba(0,0,0,0.1)]">
          <Link href={`/${locale}/services`} className="text-[12px] font-[700]">
            {t("services")}
          </Link>
        </div>

        {/* گزینه‌ها */}
        {options.map((opt, index) => (
          <motion.div
            key={opt.label}
            initial={{ opacity: 0, y: 0 }}
            animate={
              hovered
                ? { opacity: 1, x: opt.xOffset * a, y: opt.yOffset }
                : { opacity: 0, y: 0 }
            }
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            className="absolute w-[6rem] h-[2.5rem] rounded-[0.5rem] [background-color:#000000] flex items-center justify-center [box-shadow:0_4px_6px_rgba(0,0,0,0.1)]"
          >
            <Link
              href={opt.href}
              className="text-[gold] font-semibold text-center"
            >
              {t(opt.label)}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
