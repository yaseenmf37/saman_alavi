"use client";

import { useLocale } from "next-intl";
import "flag-icons/css/flag-icons.min.css";

export default function ContactPage() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex flex-col items-center px-[24px] py-[64px] max-w-[900px] mx-auto">
      {/* عنوان اصلی */}
      <h1 className="text-[40px] font-extrabold text-[#e7b85e] mb-[24px] tracking-[0.05em]">
        {locale === "fa" ? "تماس با ما" : "Contact Us"}
      </h1>

      {/* توضیح مقدمه */}
      <p className="text-[18px] text-[#d9d9d9] mb-[40px] text-center leading-[2] max-w-[700px]">
        {locale === "fa"
          ? "برای دریافت اطلاعات بیشتر، هماهنگی جلسات، مشاوره تخصصی یا همکاری‌های هنری با ما تماس بگیرید. تیم مؤسسه علوی آماده پاسخگویی به سوالات و نیازهای شماست."
          : "For more information, scheduling appointments, professional consultations, or artistic collaborations, please contact us. The Alavi Institute team is ready to assist with your questions and needs."}
      </p>

      {/* اطلاعات تماس */}
      <section className="w-full mb-[48px]">
        <h2 className="text-[26px] font-semibold text-[#e7b85e] mb-[16px]">
          {locale === "fa" ? "راه‌های ارتباطی" : "Contact Information"}
        </h2>
        <ul className="text-[#d9d9d9] text-[18px] leading-[2.5] space-y-[10px]">
          <li>
            📍{" "}
            {locale === "fa"
              ? "تهران، خیابان مثال، پلاک ۱۰"
              : "Tehran, Example St., No. 10"}
          </li>
          <li>📞 +98 912 000 0000</li>
          <li>✉️ info@samanalavi.com</li>
          <li>
            {locale === "fa"
              ? "ساعات کاری: همه روزه از ۹ صبح تا ۶ عصر"
              : "Working hours: Daily from 9 AM to 6 PM"}
          </li>
        </ul>
      </section>

      {/* شبکه های اجتماعی */}
      <section className="w-full mb-[64px] text-center">
        <h2 className="text-[26px] font-semibold text-[#e7b85e] mb-[24px]">
          {locale === "fa"
            ? "ما را در شبکه‌های اجتماعی دنبال کنید"
            : "Follow Us on Social Media"}
        </h2>

        <div className="flex justify-center gap-[32px]">
          {/* Instagram */}
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-[36px] h-[36px] fill-[#e7b85e] hover:fill-[#fff] transition"
          >
            <svg viewBox="0 0 448 512">
              <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,1,0,54,54A54,54,0,0,0,348.71,161.71ZM398.8,80H49.2A49.2,49.2,0,0,0,0,129.2V382.8A49.2,49.2,0,0,0,49.2,432H398.8A49.2,49.2,0,0,0,448,382.8V129.2A49.2,49.2,0,0,0,398.8,80ZM224,338.66A82.66,82.66,0,1,1,306.66,256,82.69,82.69,0,0,1,224,338.66ZM370,169a22,22,0,1,1,22-22A22,22,0,0,1,370,169Z" />
            </svg>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-[36px] h-[36px] fill-[#e7b85e] hover:fill-[#fff] transition"
          >
            <svg viewBox="0 0 496 512">
              <path d="M248,8C111.033,8,0,119.043,0,256s111.033,248,248,248,248-111.043,248-248S384.967,8,248,8Zm114.9,169.4-36.7,173.4c-2.8,12.8-10.3,16-20.8,10.1L251,318.6l-30.2,29.1c-3.3,3.3-6.1,6.1-12.5,6.1l4.5-63.8,115.9-104c5-4.5-1.1-7-7.8-2.5l-143,90.3-61.6-19.3c-13.4-4.2-13.6-13.4,2.8-19.8l240.6-92.7C367.4,138.6,376.2,144.3,362.9,177.4Z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-[36px] h-[36px] fill-[#e7b85e] hover:fill-[#fff] transition"
          >
            <svg viewBox="0 0 448 512">
              <path d="M380.9 97.1c-45.5-45.5-106-70.6-170.4-70.6-132.9 0-240.5 107.6-240.5 240.5 0 42.4 11.1 83.8 32.2 120.3L0 480l94.7-31.6c35.3 19.3 75.1 29.4 116.6 29.4h.1c132.9 0 240.5-107.6 240.5-240.5 0-64.4-25.1-124.8-70.6-170.2zm-170.4 341c-37.4 0-74.2-10-106.3-28.9l-7.6-4.5-56.1 18.7 18.7-54.5-4.9-7.8c-20.4-32.4-31.2-69.8-31.2-108.4 0-111.7 90.9-202.6 202.6-202.6 54 0 104.8 21 143 59.2s59.2 89 59.2 143c0 111.6-90.9 202.5-202.4 202.5zm111-150.6c-6.1-3-36-17.7-41.6-19.8-5.6-2.1-9.7-3-13.8 3s-15.8 19.8-19.4 23.9-7.1 4.5-13.1 1.5c-35.8-17.9-59.2-32.1-82.9-72.7-6.3-10.8 6.3-10 18-33.2 2-4.1 1-7.6-.5-10.6-1.5-3-13.8-33.2-19-45.4-5-12-10.1-10.3-13.8-10.5-3.6-.2-7.6-.2-11.6-.2s-10.6 1.5-16.2 7.6c-5.6 6.1-21.3 20.8-21.3 50.7s21.8 58.9 24.8 63c3 4.1 42.9 65.5 103.9 92 14.5 6.2 25.8 9.9 34.6 12.6 14.5 4.6 27.6 4 38-2.4 11.6-6.9 36-28.6 41-56.2 5-27.5-2.6-40-5.6-43.4z" />
            </svg>
          </a>
        </div>
      </section>

      {/* جمله پایانی */}
      <footer className="bg-[#ffffff1a] rounded-[16px] px-[32px] py-[24px] max-w-[700px] text-center text-[#d9d9d9] text-[16px] leading-[2]">
        {locale === "fa"
          ? "در مؤسسه علوی، ما به قدرت هنر و موسیقی باور داریم و مشتاقانه منتظر همکاری با شما هستیم."
          : "At Alavi Institute, we believe in the power of art and music and look forward to collaborating with you."}
      </footer>
    </div>
  );
}
