import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <div className="relative z-10 max-w-[1180px] mx-auto px-14 pb-[72px]">
      <div className="grid grid-cols-4 border border-[#e8e8e4] rounded-[18px] overflow-hidden bg-[#e8e8e4] gap-px">
        {stats.map((s) => (
          <div key={s.label} className="bg-white px-[26px] pt-[26px] pb-[22px]">
            <p className="text-[32px] font-extrabold text-ink tracking-[-0.04em] leading-none mb-[6px]">
              {s.value}
              <em className="not-italic text-teal text-[0.72em]">{s.suffix}</em>
            </p>
            <p className="font-mono text-[10px] text-muted2 tracking-[0.07em] uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
