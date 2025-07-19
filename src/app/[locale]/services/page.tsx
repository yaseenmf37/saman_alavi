"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Music, Disc, Award, Building } from "lucide-react";

export default function ServicesPage() {
  const t = useTranslations();
  const locale = useLocale();

  const services = [
    {
      href: `/${locale}/services/concert`,
      title: t("concert"),
      icon: <Music size={32} />,
      img: "/images/concert.jpg",
      desc: t("concert_desc"),
    },
    {
      href: `/${locale}/services/album`,
      title: t("album"),
      icon: <Disc size={32} />,
      img: "/images/album.jpg",
      desc: t("album_desc"),
    },
    {
      href: `/${locale}/services/certificate`,
      title: t("certificate"),
      icon: <Award size={32} />,
      img: "/images/certificate.jpg",
      desc: t("certificate_desc"),
    },
    {
      href: `/${locale}/services/hall`,
      title: t("hall"),
      icon: <Building size={32} />,
      img: "/images/hall.jpg",
      desc: t("hall_desc"),
    },
  ];

  return (
    <div className="max-w-[1100px] mx-auto px-[16px] py-[40px]">
      <h1 className="text-[32px] font-[700] text-[#e7b85e] mb-[32px] text-center">
        {t("services")}
      </h1>

      <div className="grid grid-cols-1 [767px]:grid-cols-2 gap-[24px]">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className="group relative bg-[#1a1a1a] hover:bg-[#333] rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition transform hover:scale-[1.03] duration-[300ms]"
          >
            {/* تصویر */}
            <div className="h-[500px] w-full overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-[300ms]"
              />
            </div>

            {/* متن */}
            <div className="flex flex-col gap-[8px] p-[16px]">
              <div className="flex items-center gap-[8px] text-[#e7b85e]">
                {service.icon}
                <h2 className="text-[20px] font-[600]">{service.title}</h2>
              </div>
              <p className="text-[#d9d9d9] text-[15px] leading-[1.6]">
                {service.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
