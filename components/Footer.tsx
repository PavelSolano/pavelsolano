import { siteData } from "@/lib/data";

const links = ["About", "Work", "Research", "Thinking"];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[#e8e8e4] px-14 py-8 flex items-center justify-between">
      <div className="font-mono text-[12px] text-muted">
        <strong className="text-teal font-medium">ps</strong>
        {"//"}pavelsolano.mx
      </div>

      <div className="flex gap-7">
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
