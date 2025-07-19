"use client";
import { useLocale } from "next-intl";

export default function CertificatePage() {
  const locale = useLocale();
  return (
    <main className="mx-auto px-[24px] py-[32px] max-w-[900px]">
      <h1 className="text-[26px] max-[767px]:text-[23px] font-bold text-[#e7b85e] mb-[16px] text-center">
        {locale === "fa"
          ? "صدور گواهی و معرفی‌نامه رسمی"
          : "Certificates & Official Letters"}
      </h1>
      <p className="text-[#d9d9d9] mb-[24px] text-center max-[767px]:text-[14px]">
        {locale === "fa"
          ? "ارائه گواهینامه معتبر به هنرجویان پس از اتمام دوره‌ها و صدور معرفی‌نامه جهت همکاری‌های هنری."
          : "Issuing official certificates for students after course completion and providing recommendation letters for artistic collaboration."}
      </p>
      <img
        src="/images/certificate.jpg"
        alt="Certificate"
        className="w-full rounded-[12px] mb-[24px]"
      />
      <ul className="list-disc text-[#d9d9d9] pl-[20px] space-y-[8px]">
        <li>{locale === "fa" ? "گواهینامه معتبر" : "Valid certificate"}</li>
        <li>
          {locale === "fa"
            ? "معرفی‌نامه برای همکاری‌ها"
            : "Recommendation letter for collaboration"}
        </li>
        <li>
          {locale === "fa"
            ? "پس از ارزیابی و اتمام دوره"
            : "After assessment and course completion"}
        </li>
      </ul>
      <button className="mt-[24px] w-full bg-gradient-to-r from-[#D4AF37] to-[#FF8C00] text-black font-bold py-[10px] rounded-[12px] hover:scale-105 transition duration-[300ms]">
        {locale === "fa" ? "درخواست گواهی" : "Request Certificate"}
      </button>
    </main>
  );
}
