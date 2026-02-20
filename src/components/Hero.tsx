import { ArrowRight, Download, Mail, Sparkles, BarChart3, Database } from "lucide-react";
import { content } from "@/data/content";

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* dekorasi */}
      <div className="pointer-events-none absolute -top-24 -left-28 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-28 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl" />

      <div className="min-h-[calc(100vh-96px)] grid items-center gap-10 py-10 md:grid-cols-2">
        {/* KIRI */}
        <div className="text-left">
          <div className="inline-flex items-center gap-2 rounded-full border bg-white/60 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-semibold tracking-wide text-slate-700">
              DATA • ANALYTICS • INSIGHTS
            </span>
          </div>

          <p className="mt-6 text-sm font-semibold tracking-[0.25em] text-blue-600">
            HALO, SAYA
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
            {content.name}
          </h1>

          <p className="mt-3 text-lg md:text-xl text-slate-600">{content.title}</p>

          <p className="mt-6 max-w-xl text-slate-600 leading-relaxed">
            Saya mengubah data mentah menjadi insight yang jelas lewat{" "}
            <span className="font-semibold text-slate-800">SQL</span>,{" "}
            <span className="font-semibold text-slate-800">Python</span>, dan{" "}
            <span className="font-semibold text-slate-800">dashboard</span> yang mudah dipahami.
          </p>

          <p className="mt-4 italic text-slate-500">{content.quote}</p>

          {/* tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {content.about.skills.slice(0, 6).map((s) => (
              <span
                key={s}
                className="rounded-full border bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur"
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href={content.cta.portfolio}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
            >
              Lihat Portofolio <ArrowRight size={18} />
            </a>

            <a
              href={content.cta.cv}
              className="inline-flex items-center justify-center gap-2 rounded-full border bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-white transition"
            >
              Unduh CV <Download size={18} />
            </a>

            <a
              href={content.cta.contact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Hubungi Saya <Mail size={18} />
            </a>
          </div>
        </div>

        {/* KANAN - mini dashboard */}
        <div className="relative">
          <div className="rounded-3xl border bg-white/65 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-500">HIGHLIGHTS</p>
                <p className="mt-1 text-lg font-bold text-slate-950">Impact Snapshot</p>
              </div>
              <div className="rounded-2xl border bg-white/70 p-3">
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-white/70 p-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Database className="h-4 w-4" />
                  <span className="text-xs font-semibold">Data Processing</span>
                </div>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">+35%</p>
                <p className="text-xs text-slate-500">efisiensi pipeline</p>
              </div>

              <div className="rounded-2xl border bg-white/70 p-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-xs font-semibold">Reporting</span>
                </div>
                <p className="mt-2 text-2xl font-extrabold text-slate-950">-50%</p>
                <p className="text-xs text-slate-500">waktu buat laporan</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border bg-white/70 p-4">
              <p className="text-xs font-semibold text-slate-600">Mini Dashboard</p>
              <div className="mt-3 flex items-end gap-2 h-20">
                {["h-8", "h-12", "h-10", "h-16", "h-14", "h-20", "h-16", "h-24"].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full ${h} rounded-lg bg-gradient-to-t from-blue-600/80 to-blue-400/50`}
                  />
                ))}
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Tampilan dashboard kecil biar vibe data-nya kuat dan beda dari template.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl border bg-white/70 px-4 py-3 text-sm shadow-sm backdrop-blur">
            <span className="font-semibold text-slate-900">Open to work</span>{" "}
            <span className="text-slate-600">• Remote / Hybrid</span>
          </div>
        </div>
      </div>
    </section>
  );
}
