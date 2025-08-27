"use client";

import { useLocale } from "next-intl";
import "flag-icons/css/flag-icons.min.css";

export default function AboutPage() {
  const locale = useLocale();

  const flagsImage = [
    { class: "fi fi-tr" },
    { class: "fi fi-am" },
    { class: "fi fi-ir" },
    { class: "fi fi-ge" },
    { class: "fi fi-ru" },
    { class: "fi fi-az" },
  ];
  return (
    <div className="flex flex-col items-center px-[16px] py-[32px] max-w-[1000px] mx-auto">
      {/* عنوان اصلی */}
      <h1 className="text-[32px] font-extrabold text-[#e7b85e] mb-[12px]">
        {locale === "fa" ? "درباره ما" : "About Us"}
      </h1>

      {/* زیرعنوان */}
      <p className="text-[16px] text-[#d9d9d9] mb-[32px] text-center max-w-[700px]">
        {locale === "fa"
          ? "با موسسه سامان علوی، نخستین مرکز بین‌المللی موسیقی و حرکات نمایشی قفقاز آشنا شوید."
          : "Get to know Saman Alavi Institute, the first international center for Caucasian music and dance."}
      </p>

      {/* عکس و توضیح استاد */}
      <div className="flex flex-col [767px]:flex-row items-center gap-[24px] mb-[32px]">
        <img
          src="/images/saman_alavi.png"
          alt="Saman Alavi"
          className="h-auto rounded-[16px] w-[280px] h-[350px] object-cover shadow-lg"
        />
        <p className="text-[14px] text-[#dedddb] text-justify leading-[1.8] max-w-[600px]">
          {locale === "fa"
            ? "موسسه سامان علوی به عنوان اولین مرکز تخصصی موسیقی و حرکات نمایشی قفقاز در ایران، با همکاری اساتید برجسته از کشورهای حوزه قفقاز (آذربایجان، گرجستان، ارمنستان و روسیه) فعالیت می‌کند. این موسسه در راستای ارتقای فرهنگ و هنر اصیل منطقه، به آموزش، تولید آثار هنری و برگزاری کنسرت‌ها می‌پردازد."
            : "Saman Alavi Institute is the first specialized center for Caucasian music and dance in Iran, collaborating with renowned masters from the Caucasus region (Azerbaijan, Georgia, Armenia, and Russia). The institute is dedicated to preserving and promoting the region's rich cultural heritage through education, artistic production, and concerts."}
        </p>
      </div>

      {/* اهداف موسسه */}
      <div className="bg-[#ffffff1a] rounded-[12px] p-[16px] mb-[32px] w-full">
        <h2 className="text-[20px] font-semibold text-[#e7b85e] mb-[8px]">
          {locale === "fa" ? "اهداف ما" : "Our Goals"}
        </h2>
        <ul
          className={`list-disc pl-[20px] text-[#d9d9d9] text-[14px] leading-[1.8] ${
            locale === "fa" ? "mr-[1rem]" : ""
          }`}
        >
          <li>
            {locale === "fa"
              ? "گسترش و ترویج موسیقی و حرکات نمایشی اصیل قفقاز"
              : "Promote authentic Caucasian music and dance"}
          </li>
          <li>
            {locale === "fa"
              ? "همکاری فرهنگی با کشورهای منطقه"
              : "Cultural cooperation with neighboring countries"}
          </li>
          <li>
            {locale === "fa"
              ? "آموزش حرفه‌ای برای تمامی علاقه‌مندان"
              : "Professional education for enthusiasts of all levels"}
          </li>
        </ul>
      </div>

      {/* افتخارات */}
      <div className="w-full mb-[32px]">
        <h2 className="text-[20px] font-semibold text-[#e7b85e] mb-[12px]">
          {locale === "fa"
            ? "افتخارات و همکاری‌های بین‌المللی"
            : "Honors & International Collaboration"}
        </h2>
        <div className="flex gap-[12px] flex-wrap">
          <div className="flex space-x-2 mt-[1rem] w-full max-[767px]:justify-between justify-center">
            {flagsImage.map((flagImage) => (
              <span
                key={flagImage.class}
                className={`${flagImage.class} !w-[4rem] max-[767px]:!w-[3rem] h-[2rem]`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* نقل قول یا شعار */}
      <blockquote className="italic text-[16px] text-[#d9d9d9] text-center max-w-[700px]">
        {locale === "fa"
          ? "«هنر، زبانی است جهانی که دل‌ها را به هم نزدیک می‌کند.»"
          : "“Art is a universal language that brings hearts closer.”"}
      </blockquote>
    </div>
  );
}
