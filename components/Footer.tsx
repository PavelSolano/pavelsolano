import { siteData } from "@/lib/data";

const links = ["About", "Work", "Research", "Thinking"];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#e8e8e4] px-5 md:px-14 py-6 md:py-8 flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
      <div className="font-mono text-[12px] text-muted">
        <strong className="text-teal font-medium">ps</strong>
        {"//"}pavelsolano.mx
      </div>

      <div className="flex flex-wrap justify-center gap-5 md:gap-7">
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-[13px] font-medium text-muted hover:text-ink transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </div>

      <div className="font-mono text-[11px] text-muted2">
        © 2026 {siteData.name}
      </div>
    </footer>
  );
}
