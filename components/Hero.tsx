import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative z-10 max-w-[1180px] mx-auto px-14 pt-[130px] pb-20 grid grid-cols-[1fr_400px] gap-16 items-center min-h-screen">
      {/* LEFT */}
      <div className="flex flex-col">
        {/* Eyebrow */}
        <div className="flex items-center gap-[10px] font-mono text-[11px] text-teal tracking-[0.1em] uppercase mb-8 font-medium">
          <span className="w-[18px] h-[1.5px] bg-teal rounded-full flex-shrink-0" />
          Systems Scientist · Complex Systems Designer
        </div>

        {/* Name */}
        <p className="text-[13px] font-semibold text-muted tracking-[0.12em] uppercase mb-[18px]">
          Pavel Solano García
        </p>

        {/* H1 */}
        <h1 className="text-[clamp(42px,5.2vw,68px)] font-extrabold leading-[1.07] tracking-[-0.035em] text-ink mb-7">
          Orquestando
          <br />
          sistemas que
          <br />
          <span className="text-teal">se sostienen</span>
          <br />
          a sí mismos.
        </h1>

        {/* Description */}
        <p className="text-[16px] text-muted leading-[1.8] max-w-[480px] mb-11 font-light">
          <strong className="text-ink2 font-semibold">Strategic Project Manager</strong>{" "}
          especializado en la orquestación de software complejo y ciclos de vida
          de IA. Traduzco visión ejecutiva en{" "}
          <strong className="text-ink2 font-semibold">
            arquitecturas técnicas resilientes
          </strong>{" "}
          usando Agile, VSM y Pensamiento Sistémico.
        </p>

        {/* CTAs */}
        <div className="flex gap-3 items-center">
          <a
            href="#work"
            className="inline-flex items-center gap-2 bg-ink text-white text-[14px] font-bold px-[26px] py-[13px] rounded-full hover:bg-ink2 hover:-translate-y-[2px] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)] transition-all duration-200"
          >
            Ver proyectos →
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-muted text-[14px] font-semibold px-[26px] py-[13px] rounded-full border-[1.5px] border-[#d8d8d4] hover:text-ink hover:border-ink2 transition-all duration-200"
          >
            Hablemos
          </a>
        </div>
      </div>

      {/* RIGHT — Photo */}
      <div className="flex items-center justify-center relative">
        <div className="relative w-[360px] h-[460px]">
          {/* Glow */}
          <div className="photo-glow" />

          {/* Frame */}
          <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden bg-[#e8e8e4] border border-[#d8d8d4] shadow-[0_2px_4px_rgba(0,0,0,0.04),0_20px_60px_rgba(0,0,0,0.10)]">
            <Image
              src="/images/pavel-photo.jpg"
              alt="Pavel Solano García"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Badge */}
          <div className="absolute bottom-0 left-0 right-0 bg-[rgba(255,255,255,0.92)] backdrop-blur-[10px] border-t border-[#e8e8e4] px-[18px] py-[14px] rounded-b-[24px] text-center z-20">
            <p className="font-mono text-[9.5px] text-teal tracking-[0.1em] uppercase mb-[3px]">
              PhD · IPN ESIME Zacatenco
            </p>
            <p className="text-[13px] font-bold text-ink">
              Systems Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
