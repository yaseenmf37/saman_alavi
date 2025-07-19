"use client";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const locale = useLocale();

  const products = [
    {
      id: "1",
      title: locale === "fa" ? "آلبوم موسیقی کلاسیک" : "Classical Music Album",
      price: locale === "fa" ? "۲۰۰٬۰۰۰ تومان" : "25 tooman",
      image: "/images/album.jpg",
      description:
        locale === "fa"
          ? `این آلبوم شامل مجموعه‌ای از قطعات برجسته موسیقی کلاسیک است که با دقت و ظرافت انتخاب شده‌اند تا حس آرامش، زیبایی و ظرافت را به شنونده منتقل کنند. هر قطعه با اجرای استادان برجسته و کیفیت صدای بی‌نظیر ضبط شده است. این آلبوم مناسب برای لحظات استراحت، مطالعه یا هر زمانی که نیاز به آرامش ذهنی دارید، می‌باشد. از عاشقان موسیقی کلاسیک دعوت می‌کنیم تا این مجموعه بی‌نظیر را تجربه کنند و لذت ببرند.`
          : `This album features a carefully curated collection of outstanding classical music pieces, designed to evoke feelings of peace, beauty, and elegance. Each track is performed by renowned musicians and recorded with exceptional sound quality. Ideal for moments of relaxation, study, or whenever you need mental calmness. We invite classical music lovers to experience and enjoy this unique collection.`,
    },
    // اگه محصولای بیشتری داری اینجا اضافه کن
  ];

  const product = products.find((p) => p.id === productId);

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <p className="text-center text-[#d9d9d9] mt-[32px]">محصول یافت نشد</p>
    );
  }

  return (
    <main className="max-w-[1000px] mx-auto px-[24px] py-[40px]">
      <div className="flex flex-col [767px]:flex-row gap-[32px]">
        {/* عکس محصول */}
        <div className="[767px]:flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-[16px] max-h-[500px] object-cover shadow-lg"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="[767px]:flex-1 flex flex-col justify-between text-[#d9d9d9]">
          <div>
            <h1 className="text-[28px] font-[700] text-[#e7b85e] mb-[16px]">
              {product.title}
            </h1>
            <p className="mb-[24px] leading-relaxed">{product.description}</p>
          </div>

          <div>
            <p className="text-[22px] font-semibold text-[#e7b85e] mb-[24px]">
              {product.price}
            </p>

            <button
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#BFA437] text-black font-bold py-[12px] rounded-[14px] hover:from-[#BFA437] hover:to-[#D4AF37] hover:scale-[1.05] transition duration-[300ms] ease-in-out"
              onClick={() =>
                alert(`خرید ${quantity} عدد از محصول: ${product.title}`)
              }
            >
              {locale === "fa" ? "خرید" : "buy"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
