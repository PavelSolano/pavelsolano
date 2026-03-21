import { projects, publications } from "@/lib/data";

function ProjectCard({
  num, year, client, title, description, tags,
}: (typeof projects)[0]) {
  return (
    <div className="group bg-white border border-[#e8e8e4] rounded-[16px] p-[26px_28px] flex justify-between items-start gap-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-[#d8d8d4] transition-all duration-200 cursor-pointer">
      <div className="flex-1">
        <p className="font-mono text-[10px] text-muted2 tracking-[0.06em] uppercase mb-[7px]">
          {num} · {year} · {client}
        </p>
        <h3 className="text-[18px] font-bold text-ink tracking-[-0.015em] mb-[7px]">
          {title}
        </h3>
        <p className="text-[13.5px] text-muted leading-[1.72] max-w-[540px] font-light">
          {description}
        </p>
        <div className="flex flex-wrap gap-[6px] mt-[14px]">
          {tags.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-[9px] py-[3px] rounded border border-[#e8e8e4] text-muted bg-[#f3f3f0] tracking-[0.03em]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <span className="text-[18px] text-muted2 group-hover:text-teal group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200 flex-shrink-0 mt-[2px]">
        ↗
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      {/* WORK */}
      <section id="work" className="relative z-10 max-w-[1180px] mx-auto px-14 py-[72px]">
        <span className="inline-flex font-mono text-[10.5px] text-teal bg-[rgba(11,168,154,0.08)] border border-[rgba(11,168,154,0.18)] px-3 py-1 rounded-full tracking-[0.08em] uppercase mb-[18px]">
          // Selected work
        </span>
        <h2 className="text-[clamp(26px,3.2vw,40px)] font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mb-3">
          Proyectos
        </h2>
        <p className="text-[15.5px] text-muted max-w-[500px] leading-[1.8] mb-11 font-light">
          Casos donde la teoría de sistemas se encontró con ejecución real.
        </p>
        <div className="flex flex-col gap-[10px]">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </section>

      <hr className="border-none border-t border-[#e8e8e4] mx-14" />

      {/* RESEARCH */}
      <section id="research" className="relative z-10 max-w-[1180px] mx-auto px-14 py-[72px]">
        <span className="inline-flex font-mono text-[10.5px] text-teal bg-[rgba(11,168,154,0.08)] border border-[rgba(11,168,154,0.18)] px-3 py-1 rounded-full tracking-[0.08em] uppercase mb-[18px]">
          // Research
        </span>
        <h2 className="text-[clamp(26px,3.2vw,40px)] font-extrabold text-ink tracking-[-0.025em] leading-[1.1] mb-3">
          Publicaciones
        </h2>
        <p className="text-[15.5px] text-muted max-w-[500px] leading-[1.8] mb-11 font-light">
          Trabajo indexado en MDPI y Scopus sobre sistemas viables, sustentabilidad e Industria 5.0.
        </p>
        <div className="flex flex-col gap-[10px]">
          {publications.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-[#e8e8e4] rounded-[16px] p-[26px_28px] flex justify-between items-start gap-5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:border-[#d8d8d4] transition-all duration-200"
            >
              <div className="flex-1">
                <p className="font-mono text-[10px] text-muted2 tracking-[0.06em] uppercase mb-[7px]">
                  {p.journal}
                </p>
                <h3 className="text-[18px] font-bold text-ink tracking-[-0.015em] mb-[7px]">
                  {p.title}
                </h3>
                <p className="text-[13.5px] text-muted font-light">{p.subtitle}</p>
                <div className="flex flex-wrap gap-[6px] mt-[14px]">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] px-[9px] py-[3px] rounded border border-[#e8e8e4] text-muted bg-[#f3f3f0] tracking-[0.03em]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[18px] text-muted2 group-hover:text-teal group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-200 flex-shrink-0 mt-[2px]">↗</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
