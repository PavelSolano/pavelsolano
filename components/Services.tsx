import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="about" className="relative z-10 max-w-[1180px] mx-auto px-14 py-[72px]">
      <span className="inline-flex font-mono text-[10.5px] text-teal bg-[rgba(11,168,154,0.08)] border border-[rgba(11,168,154,0.18)] px-3 py-1 rounded-full tracking-[0.08em] uppercase mb-[18px]">
        // What I do
      </span>
      <h2 className="text-[clamp(26px,3.2vw,40px)] font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mb-3">
        Consultoría en Sistemas Complejos
      </h2>
      <p className="text-[15.5px] text-muted max-w-[500px] leading-[1.8] mb-11 font-light">
        No automatizo procesos — diseño el sistema nervioso de las
        organizaciones. VSM, cibernética y IA como capas de una misma
        arquitectura.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white border border-[#e8e8e4] rounded-[16px] p-[28px_24px] hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-[#d8d8d4] transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(11,168,154,0.08)] border border-[rgba(11,168,154,0.18)] flex items-center justify-center text-[16px] text-teal mb-[18px]">
              {s.icon}
            </div>
            <h3 className="text-[16.5px] font-bold text-ink mb-2 tracking-[-0.01em]">
              {s.title}
            </h3>
            <p className="text-[13.5px] text-muted leading-[1.72] font-light">
              {s.description}
            </p>
            <span className="mt-[18px] inline-flex font-mono text-[9.5px] text-teal bg-[rgba(11,168,154,0.08)] px-[9px] py-[3px] rounded tracking-[0.06em] uppercase">
              {s.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
