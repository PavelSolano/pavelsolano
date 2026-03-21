"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useT } from "@/lib/i18n";

export default function Articles() {
  const { lang } = useLanguage();
  const tr = useT(lang);
  const a = tr.articles;

  return (
    <section id="thinking" className="relative z-10 max-w-[1180px] mx-auto px-5 md:px-14 py-12 md:py-[72px]">
      <span className="inline-flex font-mono text-[10.5px] text-teal bg-[rgba(11,168,154,0.08)] border border-[rgba(11,168,154,0.18)] px-3 py-1 rounded-full tracking-[0.08em] uppercase mb-[18px]">
        {a.tag}
      </span>
      <h2 className="text-[clamp(26px,3.2vw,40px)] font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mb-3">
        {a.title}
      </h2>
      <p className="text-[15.5px] text-muted max-w-[500px] leading-[1.8] mb-8 md:mb-11 font-light">
        {a.subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px]">
        {a.items.map((item) => (
          <div
            key={item.title}
            className="bg-white border border-[#e8e8e4] rounded-[16px] p-[22px] md:p-[26px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-[#d8d8d4] transition-all duration-200 cursor-pointer"
          >
            <p className="font-mono text-[10px] text-muted2 tracking-[0.07em] uppercase mb-[10px]">
              {item.date}
            </p>
            <h3 className="text-[15.5px] font-bold text-ink mb-[9px] leading-[1.4]">
              {item.title}
            </h3>
            <p className="text-[13.5px] text-muted leading-[1.72] font-light">
              {item.excerpt}
            </p>
            <div className="mt-4 font-mono text-[10.5px] text-teal flex items-center gap-[5px] font-medium tracking-[0.02em]">
              {a.readMore}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
