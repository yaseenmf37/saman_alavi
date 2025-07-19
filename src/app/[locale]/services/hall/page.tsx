"use client";
import { useLocale } from "next-intl";

export default function HallPage() {
  const locale = useLocale();
  return (
    <main className="mx-auto px-[24px] py-[32px] max-w-[900px]">
      <h1 className="text-[26px] max-[767px]:text-[23px] font-[700] text-[#e7b85e] mb-[16px] text-center">
        {locale === "fa"
          ? "سالن همایش و اجرا"
          : "Conference & Performance Hall"}
      </h1>
      <p className="text-[#d9d9d9] mb-[24px] text-center max-[767px]:text-[14px]">
        {locale === "fa"
          ? "سالن مجهز برای اجرای کنسرت، همایش و رویدادهای فرهنگی با سیستم صوتی و تصویری پیشرفته."
          : "Equipped hall for concerts, conferences and cultural events with advanced audio and video systems."}
      </p>
      <img
        src="/images/hall.jpg"
        alt="Hall"
        className="w-full rounded-[12px] mb-[24px]"
      />
      <ul className="list-disc text-[#d9d9d9] pl-[20px] space-y-[8px]">
        <li>{locale === "fa" ? "ظرفیت بالا" : "High capacity"}</li>
        <li>
          {locale === "fa"
            ? "امکانات نور و صدا"
            : "Lighting and sound facilities"}
        </li>
        <li>{locale === "fa" ? "دسترسی مناسب" : "Convenient access"}</li>
        <li>
          {locale === "fa"
            ? "رزرو برای همایش و کنسرت"
            : "Booking for events and concerts"}
        </li>
      </ul>
      <button className="mt-[24px] w-full bg-gradient-to-r from-[#D4AF37] to-[#BFA437] text-black font-[700] py-[10px] rounded-[12px] hover:scale-105 transition duration-[300ms]">
        {locale === "fa" ? "رزرو سالن" : "Book the Hall"}
      </button>
    </main>
  );
}
