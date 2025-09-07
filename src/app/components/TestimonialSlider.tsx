"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "امیر حسینی",
    role: "مشتری ویژه",
    avatar: "/images/concert.jpg",
    text: "خدمات این سایت فوق‌العاده و پشتیبانی سریع و حرفه‌ای بود.",
  },
  {
    name: "لیلا رضایی",
    role: "مشتری",
    avatar: "/images/concert.jpg",
    text: "کاملاً راضی هستم، تجربه کاربری خیلی خوبی داشت.",
  },
  {
    name: "محمد کریمی",
    role: "مشتری",
    avatar: "/images/concert.jpg",
    text: "سایت معتبر و قابل اعتماد، حتماً توصیه می‌کنم.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  // خودکار هر 5 ثانیه اسلاید بعدی
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <div
      style={{ height: "-webkit-fill-available" }}
      className="flex justify-center py-[80px] px-[2rem]"
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center bg-[rgba(0,0,0,0.6)] backdrop-blur-[10px] border border-[rgba(229,228,226,0.3)] rounded-[20px] max-[1300px]:fixed max-[1300px]:py-[5px] max-[1300px]:bottom-[4px] min-[1300px]:p-[32px] max-w-[500px] text-center min-[1300px]:gap-[16px] max-[1300px]:px-[1rem] max-[1300px]:w-[95%] max-[1300px]:items-center shadow-[0_0_20px_rgba(255,215,0,0.2)]"
      >
        {/* <img
          src={current.avatar}
          alt={current.name}
          className="w-[80px] h-[80px] rounded-full border-[2px] border-[#FFD700]"
        /> */}
        <p className="text-[#FFD700] max-[1300px]:text-[16px] text-[18px] font-[600]">
          {current.name}
        </p>
        <p className="text-[#E5E4E2] max-[1300px]:text-[14px] text-[16px] font-[500]">
          {current.role}
        </p>
        <p className="text-[#E5E4E2] max-[1300px]:text-[14px] text-[16px]">
          {current.text}
        </p>
      </motion.div>
    </div>
  );
}
