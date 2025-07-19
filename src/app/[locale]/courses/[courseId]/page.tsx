"use client";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

export default function CourseDetailPage() {
  const { courseId } = useParams();
  const locale = useLocale();

  // دیتا تستی برای دوره‌ها
  const courses = [
    {
      id: "1",
      title:
        locale === "fa" ? "دوره آموزش موسیقی کلاسیک" : "Classical Music Course",
      description:
        locale === "fa"
          ? `این دوره شامل آموزش تئوری موسیقی، تکنیک‌های پیشرفته و اجرای عملی می‌باشد.
            با شرکت در این دوره با مبانی و مفاهیم عمیق موسیقی کلاسیک آشنا خواهید شد.
            اساتید برجسته و جلسات کارگاهی به شما کمک خواهند کرد درک عمیق‌تری از آثار کلاسیک به دست آورید.
            محتوای آموزشی شامل ویدیو، جزوه و تمرین‌های تعاملی است.
            این دوره مناسب هنرجویان مبتدی و متوسط است که علاقه‌مند به پیشرفت در موسیقی کلاسیک هستند.`
          : `This course covers music theory, advanced techniques, and practical performance.
            You will learn the fundamentals and deep concepts of classical music.
            Expert instructors and workshops help you gain deeper understanding of classical pieces.
            Includes video lessons, notes, and interactive exercises.
            Suitable for beginners and intermediate learners who want to progress in classical music.`,
      image: "/images/album.jpg",
    },
    {
      id: "2",
      title:
        locale === "fa" ? "دوره آموزش موسیقی کلاسیک" : "Classical Music Course",
      description:
        locale === "fa"
          ? `این دوره شامل آموزش تئوری موسیقی، تکنیک‌های پیشرفته و اجرای عملی می‌باشد.
            با شرکت در این دوره با مبانی و مفاهیم عمیق موسیقی کلاسیک آشنا خواهید شد.
            اساتید برجسته و جلسات کارگاهی به شما کمک خواهند کرد درک عمیق‌تری از آثار کلاسیک به دست آورید.
            محتوای آموزشی شامل ویدیو، جزوه و تمرین‌های تعاملی است.
            این دوره مناسب هنرجویان مبتدی و متوسط است که علاقه‌مند به پیشرفت در موسیقی کلاسیک هستند.`
          : `This course covers music theory, advanced techniques, and practical performance.
            You will learn the fundamentals and deep concepts of classical music.
            Expert instructors and workshops help you gain deeper understanding of classical pieces.
            Includes video lessons, notes, and interactive exercises.
            Suitable for beginners and intermediate learners who want to progress in classical music.`,
      image: "/images/album.jpg",
    },
    {
      id: "3",
      title:
        locale === "fa" ? "دوره آموزش موسیقی کلاسیک" : "Classical Music Course",
      description:
        locale === "fa"
          ? `این دوره شامل آموزش تئوری موسیقی، تکنیک‌های پیشرفته و اجرای عملی می‌باشد.
            با شرکت در این دوره با مبانی و مفاهیم عمیق موسیقی کلاسیک آشنا خواهید شد.
            اساتید برجسته و جلسات کارگاهی به شما کمک خواهند کرد درک عمیق‌تری از آثار کلاسیک به دست آورید.
            محتوای آموزشی شامل ویدیو، جزوه و تمرین‌های تعاملی است.
            این دوره مناسب هنرجویان مبتدی و متوسط است که علاقه‌مند به پیشرفت در موسیقی کلاسیک هستند.`
          : `This course covers music theory, advanced techniques, and practical performance.
            You will learn the fundamentals and deep concepts of classical music.
            Expert instructors and workshops help you gain deeper understanding of classical pieces.
            Includes video lessons, notes, and interactive exercises.
            Suitable for beginners and intermediate learners who want to progress in classical music.`,
      image: "/images/album.jpg",
    },
  ];

  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <p className="text-center text-[#e7b85e] mt-[40px]">
        {locale === "fa" ? "دوره پیدا نشد" : "Course not found"}
      </p>
    );
  }

  return (
    <main className="max-w-[1000px] mx-auto px-[24px] py-[32px]">
      <div className="flex flex-col [767px]:flex-row gap-[24px]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full [767px]:w-[50%] h-[320px] [767px]:h-[400px] object-cover rounded-[16px]"
        />
        <div className="flex-1 flex flex-col justify-between text-[#d9d9d9]">
          <h1 className="text-[24px] font-[700] text-[#e7b85e] mb-[16px]">
            {course.title}
          </h1>
          <p className="text-[15px] mb-[24px] leading-[1.8] whitespace-pre-line">
            {course.description}
          </p>
          <button
            className="
              w-full
              bg-gradient-to-r
              from-[#D4AF37]
              to-[#BFA437]
              text-black
              font-[700]
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
            {locale === "fa" ? "ثبت نام در دوره" : "Enroll Now"}
          </button>
        </div>
      </div>
    </main>
  );
}
