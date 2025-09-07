"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

// ✅ الگوریتم رندوم قابل تکرار (همه کاربرا عدد یکسان می‌بینن)
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function getRandomInRange(seed, min, max) {
  return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}

// ✅ محاسبه عدد نهایی بر اساس بازه‌های ۴ ساعته
function calculateTarget(
  startValue,
  intervalHours = 4,
  launchDate = "2025-09-01"
) {
  const now = new Date();
  const start = new Date(launchDate);
  const diffIntervals = Math.floor(
    (now - start) / (1000 * 60 * 60 * intervalHours)
  );

  let total = startValue;
  for (let i = 0; i < diffIntervals; i++) {
    total += getRandomInRange(i, 20, 50); // 📌 عدد ثابت برای همه
  }
  return total;
}

export default function Counter({
  label,
  startValue = 500,
  intervalHours = 4,
  duration = 2000,
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [start, setStart] = useState(false);
  const [hasRun, setHasRun] = useState(false);

  // ✅ محاسبه فقط یک بار
  const target = useMemo(
    () => calculateTarget(startValue, intervalHours),
    [startValue, intervalHours]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun) {
            setStart(true);
            setHasRun(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasRun]);

  useEffect(() => {
    if (!start) return;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        min-[1300px]:bg-[rgba(0,0,0,0.5)]
        min-[1300px]:backdrop-blur-[12px]
        min-[1300px]:border border-[rgba(229,228,226,0.3)]
        min-[1300px]:shadow-[0_0_20px_rgba(255,215,0,0.15)]
        p-[40px]
        max-[1300px]:p-[15px]
        rounded-[20px]
        flex flex-col items-center
        gap-[12px]
        hover:shadow-[0_0_25px_rgba(255,215,0,0.6)]
        transition-all duration-[400ms] ease-[ease]
        m-[16px]
      "
    >
      <span
        className="
          text-[48px]
          font-[800]
          bg-gradient-to-r from-[#FFD700] to-[#DAA520]
          bg-clip-text text-transparent
          tracking-[2px]
        "
      >
        {count.toLocaleString()}
      </span>
      <p
        className="
          text-[#E5E4E2]
          text-[19px]
          font-[500]
        "
      >
        {label}
      </p>
    </motion.div>
  );
}
