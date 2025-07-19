"use client";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function StorePage() {
  const locale = useLocale();

  const products = [
    {
      id: "1",
      title: locale === "fa" ? "آلبوم موسیقی کلاسیک" : "Classical Music Album",
      price: locale === "fa" ? "۲۰۰٬۰۰۰ تومان" : "$25",
      image: "/images/album.jpg",
    },
    {
      id: "2",
      title: locale === "fa" ? "دف موسیقی سنتی" : "Traditional Daf Drum",
      price: locale === "fa" ? "۱٬۵۰۰٬۰۰۰ تومان" : "$45",
      image: "/images/album.jpg",
    },
    {
      id: "3",
      title: locale === "fa" ? "پوستر امضا شده" : "Signed Poster",
      price: locale === "fa" ? "۳۵۰٬۰۰۰ تومان" : "$10",
      image: "/images/album.jpg",
    },
    {
      id: "4",
      title: locale === "fa" ? "تی‌شرت رسمی گروه" : "Official Band T-Shirt",
      price: locale === "fa" ? "۷۵۰٬۰۰۰ تومان" : "$20",
      image: "/images/album.jpg",
    },
  ];

  return (
    <main className="mx-auto px-[24px] py-[32px] max-w-[1280px]">
      <h1 className="text-[24px] font-[700] text-[#e7b85e] mb-[24px] text-center">
        {locale === "fa" ? "فروشگاه محصولات" : "Store"}
      </h1>

      <div className="flex flex-wrap justify-center gap-[20px] px-[12px]">
        {products.map((product) => (
          <div
            key={product.id}
            className="max-[768px]:!w-[100%] bg-[#1a1a1a] rounded-[12px] overflow-hidden shadow-md hover:shadow-lg transition
                 w-[calc(50%-10px)] sm:w-[calc(33.333%-13.33px)] [767px]:w-[calc(25%-15px)]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[240px] object-cover"
            />
            <div className="p-[16px] text-[#d9d9d9] flex flex-col">
              <h2
                className="text-[16px] font-[600] mb-[8px] truncate"
                title={product.title}
              >
                {product.title}
              </h2>
              <p className="text-[14px] mb-[12px]">{product.price}</p>

              <Link
                href={`/${locale}/store/${product.id}`}
                className="inline-block
                    w-full
                    text-center
                    bg-gradient-to-r
                    from-[#D4AF3]
                    to-[#BFA437]
                    text-black
                    font-[700]
                    py-[10px]
                    rounded-[12px]
                    hover:from-[#D4AF37]
                    hover:to-[#BFA437]
                    hover:scale-[1.05]
                    transition
                    duration-[300ms]
                    ease-in-out"
              >
                {locale === "fa" ? "مشاهده" : "View"}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
