"use client";

import { siteData } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { useT } from "@/lib/i18n";

export default function ContactCTA() {
  const { lang } = useLanguage();
  const tr = useT(lang);
  const c = tr.contact;

  return (
    <div id="contact" className="relative z-10 max-w-[1180px] mx-auto px-5 md:px-14 pb-14 md:pb-20">
      <div className="relative bg-[#0d0d0d] rounded-[20px] p-8 md:p-[52px] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-10 overflow-hidden">
        <div className="contact-glow-1" />
        <div className="contact-glow-2" />

        <div className="relative z-10">
          <h2 className="text-[clamp(24px,2.8vw,36px)] font-extrabold text-white tracking-[-0.025em] mb-[10px]">
            {c.title}
          </h2>
          <p className="text-[15px] text-white/50 max-w-[400px] leading-[1.75] font-light">
            {c.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-[10px] flex-shrink-0 relative z-10 w-full md:w-auto">
          <a
            href={`mailto:${siteData.email}`}
            className="inline-flex items-center justify-center gap-2 bg-teal-soft text-white text-[14px] font-bold px-[22px] md:px-[26px] py-[13px] rounded-full hover:bg-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(11,168,154,0.35)] transition-all duration-200 text-center"
          >
            {siteData.email} →
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white/55 text-[14px] font-semibold px-[22px] md:px-[26px] py-[13px] rounded-full border-[1.5px] border-white/15 hover:text-white hover:border-white/40 transition-all duration-200 text-center"
          >
            ↗ LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
