"use client";
import { useState } from "react";

export default function JobForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("فرم با موفقیت ارسال شد!");
    setFormData({ name: "", email: "", phone: "", resume: null, about: "" });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-[linear-gradient(to_bottom,#000,#111,#000)] py-[80px] px-[24px]">
      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-[24px]
          bg-[rgba(0,0,0,0.6)]
          backdrop-blur-[12px]
          border border-[rgba(229,228,226,0.3)]
          rounded-[20px]
          p-[40px]
          max-w-[600px]
          w-full
          shadow-[0_0_25px_rgba(255,215,0,0.2)]
        "
      >
        <h2 className="text-[28px] font-[700] text-[#FFD700] text-center">
          فرم استخدام
        </h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="نام و نام خانوادگی"
          required
          className="
            p-[12px]
            rounded-[12px]
            border border-[rgba(229,228,226,0.3)]
            bg-[rgba(255,255,255,0.05)]
            text-[#E5E4E2]
            focus:outline-none focus:border-[#FFD700] focus:ring-[2px] focus:ring-[#FFD700]
            placeholder:text-[#ccc]
          "
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ایمیل"
          required
          className="
            p-[12px] rounded-[12px] border border-[rgba(229,228,226,0.3)]
            bg-[rgba(255,255,255,0.05)]
            text-[#E5E4E2]
            focus:outline-none focus:border-[#FFD700] focus:ring-[2px] focus:ring-[#FFD700]
            placeholder:text-[#ccc]
          "
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="شماره تماس"
          required
          className="
            p-[12px] rounded-[12px] border border-[rgba(229,228,226,0.3)]
            bg-[rgba(255,255,255,0.05)]
            text-[#E5E4E2]
            focus:outline-none focus:border-[#FFD700] focus:ring-[2px] focus:ring-[#FFD700]
            placeholder:text-[#ccc]
          "
        />

        <input
          type="file"
          name="resume"
          onChange={handleChange}
          className="
            p-[12px] rounded-[12px] border border-[rgba(229,228,226,0.3)]
            bg-[rgba(255,255,255,0.05)]
            text-[#E5E4E2]
            file:bg-[#FFD700] file:text-black file:px-[12px] file:py-[6px] file:rounded-[8px] file:border-none
          "
        />

        <textarea
          name="about"
          value={formData.about}
          onChange={handleChange}
          placeholder="چند خط درباره خود بنویسید"
          rows={4}
          className="
            p-[12px] rounded-[12px] border border-[rgba(229,228,226,0.3)]
            bg-[rgba(255,255,255,0.05)]
            text-[#E5E4E2]
            focus:outline-none focus:border-[#FFD700] focus:ring-[2px] focus:ring-[#FFD700]
            placeholder:text-[#ccc]
          "
        />

        <button
          type="submit"
          className="
            bg-[#FFD700]
            text-black
            font-[600]
            py-[12px]
            rounded-[12px]
            hover:bg-[#e6c200]
            transition-all duration-[300ms]
          "
        >
          ارسال فرم
        </button>
      </form>
    </div>
  );
}
