import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle, Phone, MapPin, Instagram, Facebook, Star, Clock,
  Dumbbell, Flame, Users, Target, Activity, Zap, ArrowRight, Menu, X, Check,
} from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";
import expImg from "@/assets/experience.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import clanLogo from "@/assets/clan-logo.png";
import { useReveal } from "@/hooks/use-reveal.tsx";

export const Route = createFileRoute("/")({ component: Index });

const WHATSAPP = "https://wa.me/542216100269?text=Hola%20CLAN%20GYM%2C%20quiero%20info";
const PHONE = "tel:+5402215015574";

const services = [
  { icon: Flame, title: "CrossFit", desc: "Entrenamiento de alta intensidad en grupo, programado y supervisado." },
  { icon: Activity, title: "Funcional", desc: "Movimientos integrales para fuerza, resistencia y movilidad real." },
  { icon: Dumbbell, title: "Musculación", desc: "Sala equipada con rutinas adaptadas a tu objetivo." },
  { icon: Zap, title: "Boxeo Recreativo", desc: "Técnica, cardio y descarga. Para todos los niveles." },
  { icon: Target, title: "GAP", desc: "Glúteos, abdominales y piernas. Resultados visibles." },
  { icon: Users, title: "Personal Trainer", desc: "Atención 1 a 1 con plan medido y seguimiento real." },
];

const schedule = [
  { day: "Lunes a Viernes", time: "07:00 — 23:00" },
  { day: "Sábado", time: "09:00 — 13:00 / 17:00 — 21:00" },
  { day: "Domingo", time: "18:00 — 21:00" },
];

const reviews = [
  { name: "Martín G.", stars: 5, text: "Los coaches están siempre encima de la técnica. Mejoré muchísimo en 3 meses." },
  { name: "Lucía R.", stars: 5, text: "Los horarios me salvan, voy temprano antes del trabajo. Equipamiento impecable." },
  { name: "Diego P.", stars: 4, text: "Ambiente copado y motivador. A veces se llena en horario pico, pero se entrena bien." },
];

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={clanLogo} alt="CLAN GYM" className="h-6 sm:h-7 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wider">
            <a href="#servicios" className="hover:text-primary transition">Servicios</a>
            <a href="#experiencia" className="hover:text-primary transition">Experiencia</a>
            <a href="#horarios" className="hover:text-primary transition">Horarios</a>
            <a href="#galeria" className="hover:text-primary transition">Galería</a>
            <a href="#contacto" className="hover:text-primary transition">Contacto</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-2 rounded-md bg-gradient-primary px-4 py-2 text-sm font-bold uppercase tracking-wide shadow-glow hover:scale-105 transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden bg-background/95 backdrop-blur border-t border-border">
            <div className="px-5 py-4 flex flex-col gap-4 text-sm font-semibold uppercase tracking-wider">
              {["servicios","experiencia","horarios","galeria","contacto"].map(s => (
                <a key={s} href={`#${s}`} onClick={() => setOpen(false)}>{s}</a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="rounded-md bg-gradient-primary px-4 py-3 text-center">WhatsApp</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Atleta entrenando en CLAN GYM" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-gradient-radial opacity-70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 grid lg:grid-cols-12 gap-10 items-center w-full">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> La Plata · Calle 45 Nº 552
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-display leading-[0.9] animate-fade-up">
              Entrená<br /><span className="text-gradient-primary">diferente</span><br />
              <span className="text-foreground">en La Plata.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
              Entrenamiento guiado, coaches profesionales y horarios pensados para vos.
              No vengas a entrenar. Vení a cambiar.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:240ms]">
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-gradient-primary px-7 py-4 font-display text-lg tracking-widest shadow-glow hover:scale-105 transition">
                <MessageCircle className="h-5 w-5" /> Escribinos por WhatsApp
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#servicios"
                className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-border bg-card/30 backdrop-blur px-7 py-4 font-display text-lg tracking-widest hover:border-primary hover:text-primary transition">
                Ver servicios
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl text-sm animate-fade-up [animation-delay:360ms]">
              <InfoChip icon={MapPin} label="Calle 45 Nº 552 esq. 6" />
              <InfoChip icon={Phone} label="0221 501-5574" />
              <InfoChip icon={MessageCircle} label="221 610-0269" />
              <InfoChip icon={Clock} label="Abierto todos los días" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground animate-bounce">
          Scroll ↓
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-card/40 overflow-hidden py-5">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-12">
              {["Disciplina", "Comunidad", "Resultados", "Energía", "Coaches Reales", "Sin Excusas"].map((w) => (
                <span key={w} className="flex items-center gap-12">
                  {w} <span className="text-primary">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SOBRE NOSOTROS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Sobre nosotros</p>
            <h2 className="mt-4 text-4xl lg:text-6xl font-display leading-tight">
              No somos un gym.<br /><span className="text-gradient-primary">Somos un clan.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              En CLAN GYM no entrenás solo. Te recibe un equipo que te conoce por tu nombre,
              te corrige la técnica y te empuja cuando ya no querés más. Acá la evolución no
              es promesa: es rutina.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {["Coaches que te guían","Rutinas personalizadas","Ambiente motivador","Equipamiento completo"].map(f => (
                <li key={f} className="flex items-center gap-3 rounded-lg border border-border bg-card/40 px-4 py-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-primary"><Check className="h-3.5 w-3.5" /></span>
                  <span className="font-semibold">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            <Stat value="+200" label="Reseñas reales" />
            <Stat value="4.5★" label="Calificación promedio" highlight />
            <Stat value="7" label="Días abiertos" highlight />
            <Stat value="6+" label="Disciplinas" />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 lg:py-32 bg-card/30 border-y border-border relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-40 pointer-events-none" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8 relative">
          <div className="max-w-2xl reveal">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Servicios</p>
            <h2 className="mt-3 text-4xl lg:text-6xl font-display">Elegí cómo querés <span className="text-gradient-primary">explotar.</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">Seis disciplinas, un solo objetivo: hacerte fuerte de verdad.</p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="reveal group relative overflow-hidden rounded-xl border border-border bg-card p-7 shadow-card hover:border-primary transition" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/30 transition" />
                <s.icon className="h-10 w-10 text-primary group-hover:scale-110 transition" />
                <h3 className="mt-5 text-2xl font-display tracking-wide">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition">
                  Saber más <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section id="experiencia" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-2xl" />
            <img src={expImg} alt="Coach guiando atleta" loading="lazy" width={1280} height={1280}
              className="relative rounded-2xl border border-border shadow-card w-full h-[520px] object-cover" />
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-gradient-primary px-6 py-4 rounded-xl shadow-glow font-display text-2xl tracking-widest">
              Seguimiento real
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Experiencia CLAN</p>
            <h2 className="mt-4 text-4xl lg:text-6xl font-display leading-tight">
              Entrenamiento real.<br /><span className="text-gradient-primary">Resultados reales.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Olvidate de hacer la fila para una máquina sin saber qué hacer. Acá tenés un plan,
              un coach atento y un grupo que te banca.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { t: "Rutinas personalizadas", d: "Diseñadas según tu objetivo y nivel actual." },
                { t: "Coaches atentos", d: "Te miran, te corrigen y te exigen." },
                { t: "Corrección técnica", d: "Entrenás seguro y aprovechás cada repetición." },
                { t: "Evolución progresiva", d: "Medimos tu avance y ajustamos el plan." },
              ].map((it, i) => (
                <div key={it.t} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-primary font-display text-lg shadow-glow">{i + 1}</div>
                  <div>
                    <h4 className="font-display text-xl tracking-wide">{it.t}</h4>
                    <p className="text-muted-foreground text-sm">{it.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center max-w-2xl mx-auto reveal">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Horarios</p>
            <h2 className="mt-3 text-4xl lg:text-6xl font-display">Abiertos cuando <span className="text-gradient-primary">vos podés.</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">Uno de los pocos gimnasios de La Plata abiertos los 7 días.</p>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {schedule.map((s, i) => (
              <div key={s.day} className="reveal relative rounded-xl border border-border bg-card p-8 text-center shadow-card hover:border-primary transition" style={{ transitionDelay: `${i * 80}ms` }}>
                <Clock className="h-8 w-8 mx-auto text-primary" />
                <h3 className="mt-4 font-display text-2xl tracking-wide">{s.day}</h3>
                <p className="mt-3 text-muted-foreground">{s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="reveal flex flex-col lg:flex-row items-end justify-between gap-6">
            <div>
              <p className="text-primary font-semibold tracking-widest uppercase text-sm">Comunidad</p>
              <h2 className="mt-3 text-4xl lg:text-6xl font-display">Lo que dice <span className="text-gradient-primary">el clan.</span></h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-6 w-6 fill-primary text-primary" />)}
              </div>
              <div className="font-display text-3xl">4.5/5</div>
              <div className="text-muted-foreground text-sm">+200 reseñas</div>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={r.name} className="reveal rounded-xl border border-border bg-card p-7 shadow-card" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex">
                  {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">"{r.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center font-display text-lg">{r.name[0]}</div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground">Cliente CLAN</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="reveal relative overflow-hidden rounded-2xl border border-primary/40 bg-gradient-primary p-8 lg:p-14 shadow-glow">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <p className="font-semibold tracking-widest uppercase text-sm text-white/80">Promoción</p>
                <h3 className="mt-3 text-4xl lg:text-5xl font-display">15% OFF con Amffa Salud</h3>
                <p className="mt-3 text-white/90 max-w-xl">Pago en efectivo + credencial digital. No acumulable con otras promociones.</p>
              </div>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-background text-foreground px-6 py-4 font-display text-lg tracking-widest hover:scale-105 transition">
                Consultá ahora <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl reveal">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Galería</p>
            <h2 className="mt-3 text-4xl lg:text-6xl font-display">El ambiente <span className="text-gradient-primary">CLAN.</span></h2>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[g1, g2, g3, g4, g5, g6, g7, g3].map((src, i) => (
              <div key={i} className={`reveal group relative overflow-hidden rounded-xl border border-border ${i % 5 === 0 ? "lg:row-span-2 lg:h-[520px]" : "h-60"}`}>
                <img src={src} alt="" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACION */}
      <section className="py-24 lg:py-32 bg-card/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm">Ubicación</p>
            <h2 className="mt-3 text-4xl lg:text-6xl font-display">En pleno centro de <span className="text-gradient-primary">La Plata.</span></h2>
            <p className="mt-4 text-muted-foreground text-lg">Calle 45 Nº 552 esquina 6, fácil acceso y a metros del transporte.</p>
            <div className="mt-6 space-y-3">
              <a href={PHONE} className="flex items-center gap-3 hover:text-primary transition"><Phone className="h-5 w-5 text-primary" /> 0221 501-5574</a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition"><MessageCircle className="h-5 w-5 text-primary" /> 221 610-0269</a>
              <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /> Calle 45 Nº 552, La Plata</div>
            </div>
          </div>
          <div className="reveal rounded-2xl overflow-hidden border border-border shadow-card h-[420px]">
            <iframe
              title="Mapa CLAN GYM"
              src="https://www.google.com/maps?q=Calle+45+552,+La+Plata&output=embed"
              className="w-full h-full grayscale contrast-125"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section id="contacto" className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-gradient-radial" />
        </div>
        <div className="relative mx-auto max-w-4xl px-5 lg:px-8 text-center reveal">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm">Empezá hoy</p>
          <h2 className="mt-4 text-5xl lg:text-7xl font-display leading-[0.95]">
            Tu cambio<br /><span className="text-gradient-primary">arranca acá.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">Respuesta rápida por WhatsApp y MD. Sin compromiso.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-md bg-gradient-primary px-8 py-4 font-display text-lg tracking-widest shadow-glow hover:scale-105 transition">
              <MessageCircle /> WhatsApp
            </a>
            <a href={PHONE} className="inline-flex items-center justify-center gap-3 rounded-md border-2 border-border bg-card/30 backdrop-blur px-8 py-4 font-display text-lg tracking-widest hover:border-primary transition">
              <Phone /> Llamar
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition"><Instagram className="h-5 w-5" /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-12 w-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card/40 py-10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-muted-foreground">
          <img src={clanLogo} alt="CLAN GYM" className="h-6 w-auto" />
          <div>© {new Date().getFullYear()} CLAN GYM · La Plata · Todos los derechos reservados.</div>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.17_150)] text-white shadow-glow animate-pulse-glow hover:scale-110 transition">
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}

function InfoChip({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card/40 backdrop-blur px-3 py-2">
      <Icon className="h-4 w-4 text-primary shrink-0" />
      <span className="text-xs sm:text-sm font-medium truncate">{label}</span>
    </div>
  );
}

function Stat({ value, label, highlight }: { value: string; label: string; highlight?: boolean }) {
  return (
    <div className={`rounded-xl border border-border p-6 shadow-card ${highlight ? "bg-gradient-primary" : "bg-card"}`}>
      <div className="font-display text-5xl tracking-wide">{value}</div>
      <div className="mt-2 text-sm uppercase tracking-widest opacity-80">{label}</div>
    </div>
  );
}
