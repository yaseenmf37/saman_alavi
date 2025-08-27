"use client";

import Image from "next/image";
import image from "../../../../public/images/saman_alavi.png";
import { useTranslations } from "next-intl";
import "flag-icons/css/flag-icons.min.css";

const Main = () => {
  // const Locale = useLocale();
  const t = useTranslations();
  const flagsImage = [
    { class: "fi fi-tr" },
    { class: "fi fi-am" },
    { class: "fi fi-ir" },
    { class: "fi fi-ge" },
    { class: "fi fi-ru" },
    { class: "fi fi-az" },
  ];
  return (
    <main className="h-[calc(100vh-60px)] flex justify-center">
      <div className="relative w-[640px] h-full">
        {/* عکس */}
        <Image src={image} alt="Saman Alavi" fill className="object-cover" />

        {/* محتوای پایین عکس */}
        <div className="absolute bottom-6 left-1/2 bottom-[100px] transform -translate-x-1/2 text-white flex flex-col items-center w-full max-[767px]:w-[80%]">
          {/* دوتا SVG و متن بینشون */}
          <div className="flex items-center space-x-4 mb-4 flex flex-col [767px]:gap-[1rem]">
            <svg
              width="100%"
              height="20"
              viewBox="0 0 200 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* فلش سمت چپ (دوخطی توخالی با انحنا) */}
              <path
                d="M8 7 Q5 10 8 13" // منحنی پایین فلش چپ
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M10 7 Q7 10 10 13" // منحنی بالای فلش چپ
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />

              {/* دایره سمت چپ */}
              <circle cx="20" cy="10" r="3" fill="#e7b85e" />

              {/* خط وسط */}
              <line
                x1="23"
                y1="10"
                x2="177"
                y2="10"
                stroke="#e7b85e"
                strokeWidth="2"
              />

              {/* دایره سمت راست */}
              <circle cx="180" cy="10" r="3" fill="#e7b85e" />

              {/* فلش سمت راست (دوخطی توخالی با انحنا) */}
              <path
                d="M192 7 Q195 10 192 13" // منحنی پایین فلش راست
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M190 7 Q193 10 190 13" // منحنی بالای فلش راست
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <span className="block w-[85%] text-[#e7b85e] text-[114%] font-bold leading-relaxed text-center font-[600] leading-[2.5rem] max-[767px]:text-[15px] max-[767px]:font-[500] max-[767px]:leading-[25px]">
              {t("description")}
            </span>

            <svg
              width="100%"
              height="20"
              viewBox="0 0 200 20"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              {/* فلش سمت چپ (دوخطی توخالی با انحنا) */}
              <path
                d="M8 7 Q5 10 8 13" // منحنی پایین فلش چپ
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M10 7 Q7 10 10 13" // منحنی بالای فلش چپ
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />

              {/* دایره سمت چپ */}
              <circle cx="20" cy="10" r="3" fill="#e7b85e" />

              {/* خط وسط */}
              <line
                x1="23"
                y1="10"
                x2="177"
                y2="10"
                stroke="#e7b85e"
                strokeWidth="2"
              />

              {/* دایره سمت راست */}
              <circle cx="180" cy="10" r="3" fill="#e7b85e" />

              {/* فلش سمت راست (دوخطی توخالی با انحنا) */}
              <path
                d="M192 7 Q195 10 192 13" // منحنی پایین فلش راست
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M190 7 Q193 10 190 13" // منحنی بالای فلش راست
                stroke="#e7b85e"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* پرچم‌ها */}
          <div className="flex space-x-2 mt-[1rem]">
            {flagsImage.map((flagImage) => (
              <span
                key={flagImage.class}
                className={`${flagImage.class} !w-[4rem] max-[767px]:!w-[3rem] h-[2rem]`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
