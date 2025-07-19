"use client";
import { useLocale } from "next-intl";

export default function ConcertPage() {
  const locale = useLocale();
  return (
    <main className="mx-auto px-[24px] py-[32px] max-w-[900px]">
      <h1 className="text-[26px] max-[767px]:text-[23px] font-[700] text-[#e7b85e] mb-[16px] text-center">
        {locale === "fa"
          ? "اجرای زنده و کنسرت‌های حرفه‌ای"
          : "Live Concerts & Performances"}
      </h1>
      <p className="text-[#d9d9d9] mb-[24px] text-center max-[767px]:text-[14px]">
        {locale === "fa"
          ? "برگزاری کنسرت‌های داخلی و بین‌المللی با طراحی صحنه و حرکات نمایشی ویژه برای تجربه‌ای فراموش‌نشدنی."
          : "Organizing domestic and international concerts with stage design and special performances for an unforgettable experience."}
      </p>
      <img
        src="/images/concert.jpg"
        alt="Concert"
        className="w-full rounded-[12px] mb-[24px]"
      />
      <ul className="list-disc text-[#d9d9d9] pl-[20px] space-y-[8px]">
        <li>
          {locale === "fa" ? "مدیریت نور و صدا" : "Lighting & Sound Management"}
        </li>
        <li>
          {locale === "fa" ? "طراحی صحنه حرفه‌ای" : "Professional Stage Design"}
        </li>
        <li>{locale === "fa" ? "تیم اجرایی مجرب" : "Experienced Team"}</li>
        <li>
          {locale === "fa"
            ? "برنامه‌ریزی هنری دقیق"
            : "Precise Artistic Planning"}
        </li>
      </ul>
      <button className="mt-[24px] w-full bg-gradient-to-r from-[#D4AF37] to-[#BFA437] text-black font-[700] py-[10px] rounded-[12px] hover:scale-105 transition duration-[300ms]">
        {locale === "fa" ? "تماس برای هماهنگی" : "Contact for Booking"}
      </button>
    </main>
  );
}
