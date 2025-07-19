"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function CoursesPage() {
  const locale = useLocale();

  const courses = [
    {
      id: "1",
      title:
        locale === "fa"
          ? "آموزش مقدماتی موسیقی کلاسیک"
          : "Intro to Classical Music",
      description:
        locale === "fa"
          ? "این دوره برای آشنایی اولیه با مبانی موسیقی کلاسیک طراحی شده است."
          : "This course is designed as an introduction to the fundamentals of classical music.",
      image: "/images/album.jpg",
    },
    {
      id: "2",
      title:
        locale === "fa" ? "کارگاه آواز پیشرفته" : "Advanced Vocal Workshop",
      description:
        locale === "fa"
          ? "آموزش تکنیک‌های پیشرفته آواز برای هنرجویان با تجربه."
          : "Advanced vocal techniques for experienced students.",
      image: "/images/album.jpg",
    },
    {
      id: "3",
      title:
        locale === "fa"
          ? "آشنایی با سازهای سنتی"
          : "Introduction to Traditional Instruments",
      description:
        locale === "fa"
          ? "آشنایی با تاریخچه و نحوه نواختن سازهای سنتی ایرانی."
          : "Learn about the history and playing techniques of traditional Iranian instruments.",
      image: "/images/album.jpg",
    },
  ];

  return (
    <main className="mx-auto px-[24px] py-[32px] max-w-[1280px]">
      <h1 className="text-[24px] font-[700] text-[#e7b85e] mb-[24px] text-center">
        {locale === "fa" ? "دوره‌های آموزشی" : "Our Courses"}
      </h1>

      <div className="grid grid-cols-2 max-[787px]:grid-cols-1 gap-[24px]">
        {courses.map((course) => (
          <div
            key={course.id}
            className="
        bg-[#1a1a1a]
        rounded-[16px]
        overflow-hidden
        shadow-md
        hover:shadow-lg
        transition
        flex flex-col
      "
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-[300px] object-cover" // بلندتر از قبل
            />
            <div className="p-[20px] text-[#d9d9d9] flex flex-col flex-1 justify-between">
              <h2 className="text-[20px] font-semibold mb-[10px]">
                {course.title}
              </h2>
              <p className="text-[15px] mb-[14px] leading-[1.8] line-clamp-3">
                {course.description}
              </p>
              <Link
                href={`/${locale}/courses/${course.id}`}
                className="
            w-full
            text-center
            bg-gradient-to-r
            from-[#D4AF37]
            to-[#BFA437]
            text-black
            font-bold
            py-[12px]
            rounded-[12px]
            hover:from-[#BFA437]
            hover:to-[#D4AF37]
            hover:scale-[1.05]
            transition
            duration-[300ms]
            ease-in-out
          "
              >
                {locale === "fa" ? "مشاهده جزئیات" : "View Details"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
