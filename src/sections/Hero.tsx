import { CheckCircle2, MessageCircle } from "lucide-react";
import { Container } from "../components/ui/Container";
import { WhatsappButton } from "../components/ui/WhatsappButton";
import { trustPoints } from "../data/trustPoints";

export function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative flex min-h-[640px] items-center overflow-hidden bg-ink sm:min-h-[720px] lg:min-h-[860px]">
        <div className="absolute inset-0">
          <img
            src="images/hero-miniimplantes.jpg"
            alt="Anclaje esquelético con mini-implantes — ilustración clínica"
            className="h-full min-h-[640px] w-full object-cover sm:min-h-[720px] lg:min-h-[860px]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,16,15,0.55) 0%, rgba(8,16,15,0.45) 45%, rgba(8,16,15,0.85) 100%)",
            }}
          />
        </div>

        <Container className="relative z-10 pb-32 pt-32 sm:pt-40 lg:pb-48 lg:pt-44">
          <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6 text-center">
            <span className="eyebrow text-white/80">
              <span className="h-px w-6 bg-gold-400" aria-hidden />
              Exclusivo para odontólogos · Diplomado presencial en Bauru, Brasil
            </span>
            <h1
              className="text-balance font-extrabold leading-[1.08] tracking-[-0.02em] text-white"
              style={{ fontSize: "clamp(2.25rem, 1.6rem + 3vw, 3.75rem)" }}
            >
              Domina el anclaje esquelético y resuelve los casos que hoy derivas.
            </h1>
            <p className="max-w-[560px] text-[16px] leading-relaxed text-white/75 sm:text-lg">
              Diplomado presencial e intensivo de 5 días en Bauru, Brasil — con más de 9 clases
              prácticas, pacientes reales y la mentoría del Prof. Fabricio Pinelli Valarelli,
              referencia en Ortodoncia en Brasil y América Latina.
            </p>
            <WhatsappButton variant="primary" size="lg" className="mt-2">
              Participa en nuestro proceso de selección
            </WhatsappButton>
            <span className="text-[12px] text-white/50">
              Respuesta por WhatsApp en menos de 24h · Cupos limitados por grupo
            </span>
          </div>
        </Container>
      </div>

      <div className="relative z-20 px-6 sm:px-8 lg:px-10">
        <Container className="!px-0">
          <div className="-mt-20 grid gap-0 overflow-hidden rounded-3xl bg-ink shadow-panel sm:-mt-24 lg:-mt-28 lg:grid-cols-[1.1fr_1fr]">
            <div className="flex flex-col justify-center gap-6 p-8 sm:p-10 lg:p-14">
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                UniCPO · Diplomado en Mini-Implantes
              </span>
              <h2 className="text-balance text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                Lo que vas a ganar en 5 días intensivos.
              </h2>
              <ul className="flex flex-col gap-3.5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/80">
                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold-400" strokeWidth={2} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-1 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <img
                  src="images/selo-mec.png"
                  alt="Selo MEC"
                  className="h-12 w-12 shrink-0 object-contain"
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13.5px] font-bold text-white">Certificación MEC</span>
                  <span className="text-[12px] leading-snug text-white/55">
                    Reconocimiento oficial del Ministério da Educação de Brasil
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 border-t border-white/10 bg-white/[0.03] p-8 text-center sm:p-10 lg:border-l lg:border-t-0 lg:p-14">
              <span className="eyebrow text-white/70">
                <span className="h-px w-6 bg-gold-400" aria-hidden />
                Contacto directo
              </span>
              <div className="flex flex-col items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500 text-white">
                  <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Participa en nuestro proceso de selección
                </h3>
              </div>
              <p className="max-w-xs text-[14px] leading-relaxed text-white/70">
                Sin formularios: escríbenos por WhatsApp y resolvemos tus dudas sobre fechas,
                inversión y opciones de pago.
              </p>
              <WhatsappButton variant="ghost" size="lg" className="w-full">
                Hablar por WhatsApp
              </WhatsappButton>
              <span className="text-[11px] text-white/40">
                Respuesta en menos de 24h · Cupos limitados por grupo
              </span>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
