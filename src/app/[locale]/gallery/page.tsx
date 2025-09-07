"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";

export default function GalleryPage() {
  const t = useTranslations();
  const locale = useLocale();

  const slides = [
    {
      id: 1,
      src: "/images/album.jpg",
      caption: locale === "fa" ? "اجرای بزرگ تهران" : "Tehran Grand Concert",
    },
    {
      id: 2,
      src: "/images/album.jpg",
      caption:
        locale === "fa" ? "کارگاه موسیقی سنتی" : "Traditional Music Workshop",
    },
    {
      id: 3,
      src: "/images/album.jpg",
      caption:
        locale === "fa" ? "تمرین گروهی آکادمی" : "Academy Group Rehearsal",
    },
    {
      id: 4,
      src: "/images/album.jpg",
      caption: locale === "fa" ? "پشت صحنه اجرا" : "Backstage Moments",
    },
    {
      id: 5,
      src: "/images/album.jpg",
      caption: locale === "fa" ? "ضبط آلبوم جدید" : "New Album Recording",
    },
  ];

  const galleryImages = [
    {
      id: 1,
      src: "/images/album.jpg",
      title: locale === "fa" ? "کنسرت ۲۰۲۴" : "Concert 2024",
    },
    {
      id: 2,
      src: "/images/album.jpg",
      title: locale === "fa" ? "کارگاه رقص" : "Dance Workshop",
    },
    {
      id: 3,
      src: "/images/album.jpg",
      title: locale === "fa" ? "ضبط آلبوم" : "Album Recording",
    },
    {
      id: 4,
      src: "/images/album.jpg",
      title: locale === "fa" ? "پشت صحنه" : "Backstage",
    },
    {
      id: 5,
      src: "/images/album.jpg",
      title: locale === "fa" ? "اجرای زنده" : "Live Show",
    },
    {
      id: 6,
      src: "/images/album.jpg",
      title: locale === "fa" ? "تمرین" : "Rehearsal",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <main className="max-w-[1400px] mx-auto py-[3rem]">
      {/* اسلایدر */}
      <div className="relative w-full h-[50vh] [767px]:h-[70vh] overflow-hidden mb-[32px] max-w-[93%] m-auto">
        <h1 className="text-[white] mb-[18px]">دیدار ها</h1>
        {slides.map((slide, index) => (
          <img
            key={slide.id}
            src={slide.src}
            alt={`Slide ${index + 1}`}
            style={{
              height: "-webkit-fill-available",
            }}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[1000ms] rounded-[16px] ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* کپشن با جهت‌گیری متفاوت */}
        <div
          className={`absolute bottom-[16px] ${
            locale === "fa" ? "right-[16px]" : "left-[16px]"
          } bg-[#00000099] rounded-[8px] px-[12px] py-[4px]`}
        >
          <p className="text-[#e7b85e] text-[16px] [767px]:text-[18px] font-semibold">
            {slides[currentSlide].caption}
          </p>
        </div>
      </div>

      {/* توضیح کلی گالری */}
      <p
        className={`text-[18px] text-[#d9d9d9] mb-[24px] px-[16px] ${
          locale === "fa" ? "text-right" : "text-left"
        }`}
      >
        {t("galleryDescription")}
      </p>

      {/* گالری فلکس رپ */}
      <div className="flex flex-wrap justify-center gap-[16px] px-[16px]">
        {galleryImages.map((image) => (
          <div key={image.id} className="flex flex-col items-start">
            <div className="relative overflow-hidden rounded-[12px] w-[280px] h-[180px] group shadow-lg">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-[700ms] group-hover:scale-110"
              />
              <div
                className={`absolute bottom-0 ${
                  locale === "fa" ? "right-0 text-right" : "left-0 text-left"
                } bg-gradient-to-t from-[#000000cc] to-transparent p-[12px] w-full opacity-0 group-hover:opacity-100 transition duration-[500ms]`}
              >
                <p className="text-[#fff] text-[14px] font-semibold">
                  {image.title}
                </p>
              </div>
            </div>
            <span
              className={`mt-[8px] text-[14px] text-[#d9d9d9] ${
                locale === "fa" ? "text-right w-full" : "text-left w-full"
              }`}
            >
              توضیح کوتاه درباره این تصویر
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
