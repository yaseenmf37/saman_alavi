"use client";
import { useLocale } from "next-intl";

export default function AlbumPage() {
  const locale = useLocale();
  return (
    <main className="mx-auto px-[24px] py-[32px] max-w-[900px]">
      <h1 className="text-[26px] max-[767px]:text-[23px] font-[700] text-[#e7b85e] mb-[16px] text-center">
        {locale === "fa"
          ? "تولید آلبوم و کلیپ موسیقی"
          : "Music Album & Video Production"}
      </h1>
      <p className="text-[#d9d9d9] mb-[24px] text-center max-[767px]:text-[14px]">
        {locale === "fa"
          ? "ضبط و تولید آلبوم‌های حرفه‌ای با همکاری آهنگسازان مطرح، طراحی کاور و ساخت موزیک ویدئو."
          : "Recording and producing professional albums with famous composers, cover design and music videos."}
      </p>
      <img
        src="/images/album.jpg"
        alt="Album"
        className="w-full rounded-[12px] mb-[24px]"
      />
      <ul className="list-disc text-[#d9d9d9] pl-[20px] space-y-[8px]">
        <li>
          {locale === "fa"
            ? "ضبط در استودیو مجهز"
            : "Recording in equipped studio"}
        </li>
        <li>
          {locale === "fa"
            ? "همکاری با آهنگسازان حرفه‌ای"
            : "Working with top composers"}
        </li>
        <li>{locale === "fa" ? "طراحی کاور آلبوم" : "Album cover design"}</li>
        <li>
          {locale === "fa" ? "ساخت موزیک ویدئو" : "Music video production"}
        </li>
      </ul>
      <button className="mt-[24px] w-full bg-gradient-to-r from-[#D4AF37] to-[#BFA437] text-black font-[700] py-[10px] rounded-[12px] hover:scale-105 transition duration-[300ms]">
        {locale === "fa" ? "تماس برای مشاوره" : "Contact for Consultation"}
      </button>
    </main>
  );
}
