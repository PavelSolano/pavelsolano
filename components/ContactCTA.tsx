import { siteData } from "@/lib/data";

export default function ContactCTA() {
  return (
    <div id="contact" className="relative z-10 max-w-[1180px] mx-auto px-14 pb-20">
      <div className="relative bg-[#0d0d0d] rounded-[20px] p-[52px] flex items-center justify-between gap-10 overflow-hidden">
        <div className="contact-glow-1" />
        <div className="contact-glow-2" />

        <div className="relative z-10">
          <h2 className="text-[clamp(24px,2.8vw,36px)] font-extrabold text-white tracking-[-0.025em] mb-[10px]">
            Trabajemos juntos.
          </h2>
          <p className="text-[15px] text-white/50 max-w-[400px] leading-[1.75] font-light">
            Si estás construyendo algo complejo y necesitas un arquitecto que
            entienda tanto el sistema como la organización — hablemos.
          </p>
        </div>

        <div className="flex gap-[10px] flex-shrink-0 flex-wrap relative z-10">
          <a
            href={`mailto:${siteData.email}`}
            className="inline-flex items-center gap-2 bg-teal-soft text-white text-[14px] font-bold px-[26px] py-[13px] rounded-full hover:bg-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(11,168,154,0.35)] transition-all duration-200"
          >
            {siteData.email} →
          </a>
          <a
            href={siteData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/55 text-[14px] font-semibold px-[26px] py-[13px] rounded-full border-[1.5px] border-white/15 hover:text-white hover:border-white/40 transition-all duration-200"
          >
            ↗ LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
