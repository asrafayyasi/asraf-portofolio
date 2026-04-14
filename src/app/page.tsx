"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getContent, Lang } from "@/data/content";
import { Mail, Linkedin, Phone, Instagram, ArrowUpRight, ChevronDown } from "lucide-react";
import BackToTop from "@/components/BackToTop";

function waHref(phone?: string) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits ? `https://wa.me/${digits}` : "#";
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "en" || saved === "id") {
      setLang(saved);
    }
  }, []);

  const content = getContent(lang);

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION */}
      <section id="beranda" className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900" />
        <div className="pointer-events-none absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl animate-blob1" />
        <div className="pointer-events-none absolute -bottom-32 right-[-140px] h-[520px] w-[520px] rounded-full bg-sky-400/15 blur-3xl animate-blob2" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{ backgroundImage: "url('/noise.png')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.55)_100%)]" />

        <div className="relative mx-auto max-w-6xl px-4 h-screen flex items-center justify-center text-center pt-24">
          <div className="max-w-3xl">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur animate-fadeUp">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Data • Digital Marketing • Insights
            </div>

            <h1 className="mt-7 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] animate-fadeUp [animation-delay:120ms]">
              {content.name}
            </h1>

            <p className="text-sm md:text-base font-semibold tracking-wide">
              <span className="bg-gradient-to-r from-blue-300 via-white to-sky-200 bg-clip-text text-transparent animate-titleGradient">
                {content.title}
              </span>
            </p>

            <div className="pointer-events-none absolute inset-0 hero-aurora" />

            <p className="mt-6 text-white/70 leading-relaxed animate-fadeUp [animation-delay:320ms]">
              {content.quote}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeUp [animation-delay:420ms]">
              <a
                href={content.cta.contact}
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition hover:-translate-y-0.5"
              >
                {content.labels.letsConnect}
              </a>

              <a
                href={content.cta.portfolio}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition hover:-translate-y-0.5"
              >
                {content.labels.checkMyWork}
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[11px] font-semibold tracking-[0.25em]">
              {content.labels.scroll}
            </span>
            <span className="h-8 w-px bg-white/30 animate-scrollDown" />
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="bg-dots">
        <main className="mx-auto max-w-6xl px-4">
          {/* ABOUT */}
          <section id="tentang" className="py-20">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              <div className="md:sticky md:top-28">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-sm">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-slate-900/5" />
                  <img src="/me.jpg" alt="Profile" className="h-[420px] w-full object-cover object-center" />

                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/30 bg-slate-950/35 p-4 text-white backdrop-blur">
                    <p className="text-sm font-semibold">{content.name}</p>
                    <p className="text-xs text-white/80">{content.title}</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {content.about.meta.map((m: any) => (
                    <div key={m.label} className="rounded-2xl border border-slate-200/70 bg-white/60 p-4">
                      <p className="text-xs text-slate-500">{m.label}</p>
                      <p className="mt-1 text-sm font-semibold text-slate-900">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                  {content.about.kicker}
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                  {content.about.headline}
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">{content.about.summary}</p>

                <h3 className="mt-10 text-sm font-bold tracking-[0.25em] text-slate-500">
                  {content.labels.education}
                </h3>

                <div className="mt-4 rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm">
                  <div className="space-y-5">
                    {content.about.timeline
                      .filter((t: any) =>
                        ["pendidikan", "education"].includes(t.title?.toLowerCase())
                      )
                      .map((t: any) => (
                        <div key={`${t.title}-${t.year}`} className="flex gap-4">
                          <div className="mt-2 h-2 w-2 rounded-full bg-blue-600" />

                          <div className="flex-1">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                              <p className="text-lg font-extrabold text-slate-950">{t.place}</p>
                              <p className="text-xs font-semibold text-slate-500">{t.year}</p>
                            </div>

                            <p className="mt-1 text-sm font-semibold text-blue-700">{t.desc}</p>

                            {t.thesis && (
                              <p className="mt-2 text-sm text-slate-600">
                                <span className="font-semibold text-slate-800">
                                  {content.labels.thesis}:
                                </span>{" "}
                                <span className="italic">{t.thesis}</span>
                              </p>
                            )}

                            <div className="mt-5 flex flex-wrap gap-2">
                              {content.about.skills.slice(0, 10).map((s: string) => (
                                <span
                                  key={s}
                                  className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="keahlian" className="py-20">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                {content.skillsSection.kicker}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                {content.skillsSection.title}
              </h2>
              <p className="mt-3 text-slate-600">{content.skillsSection.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {content.labels.coreSkills}
                  </h3>
                  <span className="text-xs text-slate-500">
                    {content.skillsSection.hard.length} {content.labels.items}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {content.skillsSection.hard.map((s: string) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 hover:bg-white transition"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {content.labels.softSkills}
                </h3>

                <div className="mt-6 space-y-3">
                  {content.skillsSection.soft.map((s: string) => (
                    <div
                      key={s}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3"
                    >
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      <p className="text-sm font-medium text-slate-800">{s}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200/70 bg-white/60 p-6 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900">
                  {content.labels.coursesTraining}
                </h3>

                <div className="mt-6 space-y-5">
                  {content.skillsSection.trainings.map((t: any) => (
                    <div key={`${t.name}-${t.org}`} className="flex gap-4">
                      <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm font-semibold text-slate-950">{t.name}</p>
                          <p className="text-xs font-semibold text-slate-500">{t.year}</p>
                        </div>
                        <p className="mt-1 text-sm text-slate-600">{t.org}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#sertifikat"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-white transition"
                >
                  {content.labels.viewCertificates}
                </a>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="pengalaman" className="py-20">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                {content.workSection.kicker}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                {content.workSection.title}
              </h2>
              <p className="mt-3 text-slate-600">{content.workSection.subtitle}</p>
            </div>

            <div className="mt-12 mx-auto max-w-4xl space-y-4">
              {content.workSection.items.map((it: any, idx: number) => (
                <details
                  key={`${it.company}-${it.role}-${idx}`}
                  className={[
                    "group rounded-3xl border border-slate-200/70 bg-white/60 shadow-sm overflow-hidden",
                    "transition-all duration-200",
                    "hover:bg-white/85 hover:shadow-md hover:border-blue-200/70",
                    "open:bg-white/90 open:border-blue-200/70 open:ring-2 open:ring-blue-200/40",
                  ].join(" ")}
                >
                  <summary className="list-none cursor-pointer px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4 min-w-0">
                        {it.logo ? (
                          <div className="h-12 w-12 overflow-hidden rounded-2xl border border-slate-200/70 bg-white grid place-items-center shrink-0">
                            <img src={it.logo} alt={it.company} className="h-8 w-8 object-contain" />
                          </div>
                        ) : (
                          <div className="h-12 w-12 rounded-2xl border border-slate-200/70 bg-white/70 grid place-items-center text-slate-700 font-extrabold shrink-0">
                            {String(it.company || "C").slice(0, 1)}
                          </div>
                        )}

                        <div className="min-w-0">
                          <h3 className="text-base md:text-lg font-extrabold text-slate-950 leading-snug">
                            {it.role}
                          </h3>

                          <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                            <span className="font-semibold text-blue-700">{it.company}</span>
                            {it.location && (
                              <>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-600">{it.location}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        {it.period && (
                          <span className="hidden sm:inline-flex rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                            {it.period}
                          </span>
                        )}
                        {it.type && (
                          <span className="hidden sm:inline-flex rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                            {it.type}
                          </span>
                        )}

                        <span className="h-10 w-10 rounded-2xl border border-slate-200/70 bg-white/70 grid place-items-center text-slate-600 transition group-[open]:rotate-180 group-hover:border-blue-200/70 group-hover:text-blue-700">
                          <ChevronDown size={18} />
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 sm:hidden">
                      {it.period && (
                        <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                          {it.period}
                        </span>
                      )}
                      {it.type && (
                        <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                          {it.type}
                        </span>
                      )}
                    </div>
                  </summary>

                  <div className="px-6 pb-6">
                    <div className="h-px w-full bg-slate-200/80" />

                    {it.bullets?.length > 0 && (
                      <ul className="mt-5 space-y-2 text-sm text-slate-700">
                        {it.bullets.map((b: string) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {it.tools?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {it.tools.slice(0, 12).map((t: string) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ORGANIZATION */}
          <section id="organisasi" className="py-20">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                {content.orgSection.kicker}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                {content.orgSection.title}
              </h2>
              <p className="mt-3 text-slate-600">{content.orgSection.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {content.orgSection.items.map((it: any) => (
                <article
                  key={`${it.title}-${it.role}`}
                  className={[
                    "group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/60 shadow-sm",
                    "hover:bg-white/85 hover:shadow-md transition",
                  ].join(" ")}
                >
                  <div className="relative md:hidden">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="h-full w-full object-cover md:object-center"
                        style={{ objectPosition: "0% 20%" }}
                      />
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="hidden md:flex gap-5">
                      <div className="w-full md:w-40 h-44 md:h-full shrink-0 overflow-hidden rounded-2xl border border-slate-200/70 bg-white">
                        <img src={it.image} alt={it.title} className="h-full w-full object-cover object-top md:object-center" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="text-lg font-extrabold text-slate-950 leading-snug line-clamp-2">
                              {it.title}
                            </h3>
                            <p className="mt-1 text-sm font-semibold text-blue-700">{it.role}</p>
                          </div>

                          {it.period && (
                            <span className="shrink-0 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                              {it.period}
                            </span>
                          )}
                        </div>

                        <ul className="mt-4 space-y-2 text-sm text-slate-700">
                          {it.bullets.slice(0, 4).map((b: string) => (
                            <li key={b} className="flex items-start gap-3">
                              <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                              <span className="leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>

                        {it.bullets.length > 4 && (
                          <p className="mt-4 text-xs text-slate-500">
                            +{it.bullets.length - 4} {content.labels.morePoints}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:hidden">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <h3 className="text-base font-extrabold text-slate-950 leading-snug">
                            {it.title}
                          </h3>
                          <p className="mt-1 text-sm font-semibold text-blue-700">{it.role}</p>
                        </div>

                        {it.period && (
                          <span className="shrink-0 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-600">
                            {it.period}
                          </span>
                        )}
                      </div>

                      <ul className="mt-4 space-y-2 text-sm text-slate-700">
                        {it.bullets.slice(0, 4).map((b: string) => (
                          <li key={b} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-blue-600 shrink-0" />
                            <span className="leading-relaxed">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {it.bullets.length > 4 && (
                        <p className="mt-4 text-xs text-slate-500">
                          +{it.bullets.length - 4} {content.labels.morePoints}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="proyek" className="py-20">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                {content.labels.portfolioKicker}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                {content.labels.featuredProjects}
              </h2>
              <p className="mt-3 text-slate-600">{content.labels.projectsSubtitle}</p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {content.projects.slice(1).map((p: any) => (
                <article
                  key={p.title}
                  className="group rounded-[24px] border border-slate-200/70 bg-white/60 shadow-sm overflow-hidden hover:bg-white/85 transition"
                >
                  <div className="relative bg-slate-50/60">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {p.embed ? (
                        <>
                          <iframe
                            src={p.embed}
                            className="absolute inset-0 h-full w-full"
                            loading="lazy"
                            allow="fullscreen"
                          />
                          {p.link && (
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noreferrer"
                              className="absolute inset-0"
                              aria-label={`Open ${p.title}`}
                            />
                          )}
                        </>
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-sm text-slate-500">
                          {content.labels.previewUnavailable}
                        </div>
                      )}
                    </div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/0 via-slate-950/0 to-slate-950/10 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <div className="p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2" />

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-semibold text-blue-700 hover:text-blue-800 transition"
                        >
                          {content.labels.open}
                        </a>
                      )}
                    </div>

                    <h3 className="mt-3 text-lg font-extrabold text-slate-950">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.desc}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tech?.slice(0, 8).map((t: string) => (
                        <span
                          key={t}
                          className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* CERTIFICATES */}
          <section id="sertifikat" className="py-20">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                {content.certSection.kicker}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                {content.certSection.title}
              </h2>
              <p className="mt-3 text-slate-600">{content.certSection.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {content.certSection.featured.map((c: any) => (
                <article
                  key={c.title}
                  className="rounded-[28px] border border-slate-200/70 bg-white/60 p-7 shadow-sm hover:bg-white/80 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-2xl border border-slate-200/70 bg-white grid place-items-center">
                        <img src={c.logo} alt={c.issuer} className="h-8 w-8 object-contain" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">{c.title}</p>
                        <p className="text-sm text-blue-700 font-semibold">{c.issuer}</p>
                      </div>
                    </div>

                    <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
                      {c.year}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{c.desc}</p>

                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-900 transition"
                    >
                      {content.labels.viewCertificates}
                    </a>
                  )}
                </article>
              ))}
            </div>

            <div className="mt-14 flex items-center gap-4">
              <div className="h-px flex-1 bg-slate-200/80" />
              <p className="text-sm font-semibold text-slate-700">{content.labels.otherCertificates}</p>
              <div className="h-px flex-1 bg-slate-200/80" />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-1 lg:grid-cols-2">
              {content.certSection.micro.map((m: any) => (
                <a
                  key={`${m.title}-${m.issuer}`}
                  href={m.link || "#"}
                  target={m.link ? "_blank" : undefined}
                  rel={m.link ? "noreferrer" : undefined}
                  className={[
                    "group relative overflow-hidden rounded-xl",
                    "border border-slate-200/70 bg-white/60 shadow-sm",
                    "px-5 py-4",
                    "transition-all duration-200",
                    "hover:bg-blue-50/90 hover:border-blue-200",
                    "hover:shadow-md hover:-translate-y-0.5",
                    "hover:ring-2 hover:ring-blue-200/60",
                  ].join(" ")}
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-transparent transition group-hover:bg-blue-500" />

                  <div className="flex items-center gap-4">
                    <div className="h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-slate-200/70 bg-white grid place-items-center">
                      <img
                        src={m.icon || "/icons/certificate.svg"}
                        alt={m.issuer}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-extrabold text-slate-950 leading-snug line-clamp-2">
                        {m.title}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-600 truncate">{m.issuer}</p>
                    </div>

                    <div className="shrink-0 flex items-center gap-3">
                      {m.year && <span className="text-[11px] font-semibold text-slate-500">{m.year}</span>}
                      <span className="h-9 w-9 rounded-lg border border-slate-200/70 bg-white/70 grid place-items-center text-slate-500 transition group-hover:border-blue-200 group-hover:text-blue-700">
                        ↗
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="kontak" className="py-24">
            <div className="text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-blue-600">
                {content.labels.contactKicker}
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
                {content.labels.contactTitle}
              </h2>
              <p className="mt-3 text-slate-600">{content.labels.contactSubtitle}</p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-stretch">
              <div className="lg:col-span-5">
                <div className="relative h-[460px] overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 shadow-sm">
                  <div className="absolute inset-0 p-1">
                    <div className="absolute inset-0 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(37,99,235,0.25),rgba(15,23,42,0.10),rgba(37,99,235,0.25))]" />
                    <div className="absolute inset-[6px] rounded-[22px] bg-white/40" />
                  </div>

                  <img
                    src={content.contact.photo || "/me.jpg"}
                    alt="Photo"
                    className="absolute inset-[10px] h-[calc(100%-20px)] w-[calc(100%-20px)] rounded-[20px] object-cover object-center"
                  />

                  <div className="absolute inset-[10px] rounded-[20px] bg-gradient-to-t from-slate-950/25 via-transparent to-transparent" />
                  <div className="absolute inset-[10px] rounded-[20px] bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_45%)]" />

                  <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/35 p-5 backdrop-blur-md">
                    <p className="text-sm font-extrabold text-slate-950">{content.name}</p>
                    <p className="mt-1 text-xs text-slate-700">{content.title}</p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/30 px-3 py-1 text-[11px] font-semibold text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-blue-600" />
                      {content.labels.availableForCollab}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-3xl border border-slate-200/70 bg-white/60 shadow-sm overflow-hidden">
                  <div className="relative px-6 py-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.14),transparent_60%)]" />
                    <div className="relative">
                      <p className="text-sm font-extrabold text-slate-950">{content.labels.connectTitle}</p>
                      <p className="mt-1 text-sm text-slate-600">{content.labels.connectSubtitle}</p>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-200/70">
                    <a
                      href={`mailto:${content.contact.email}`}
                      className="group flex items-center gap-4 px-6 py-4 hover:bg-blue-50/80 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl bg-blue-600/10 grid place-items-center text-blue-700 border border-blue-200/50">
                        <Mail size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-wide text-slate-500">
                          {content.labels.email}
                        </p>
                        <p className="mt-0.5 text-sm font-extrabold text-slate-950 leading-snug break-words">
                          {content.contact.email}
                        </p>
                      </div>

                      <ArrowUpRight className="text-slate-500 group-hover:text-blue-700 transition" size={18} />
                    </a>

                    <a
                      href={content.contact.linkedin.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 px-6 py-4 hover:bg-blue-50/80 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl bg-slate-900/5 grid place-items-center text-slate-700 border border-slate-200/70 group-hover:text-blue-700 transition">
                        <Linkedin size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-wide text-slate-500">
                          {content.labels.linkedin}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 leading-snug break-words">
                          {content.contact.linkedin.label}
                        </p>
                      </div>

                      <ArrowUpRight className="text-slate-500 group-hover:text-blue-700 transition" size={18} />
                    </a>

                    <a
                      href={waHref(content.contact.whatsapp.number)}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 px-6 py-4 hover:bg-blue-50/80 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl bg-slate-900/5 grid place-items-center text-slate-700 border border-slate-200/70 group-hover:text-blue-700 transition">
                        <Phone size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-wide text-slate-500">
                          {content.labels.whatsapp}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 leading-snug break-words">
                          {content.contact.whatsapp.label}
                        </p>
                      </div>

                      <ArrowUpRight className="text-slate-500 group-hover:text-blue-700 transition" size={18} />
                    </a>

                    <a
                      href={content.contact.instagram.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 px-6 py-4 hover:bg-blue-50/80 transition"
                    >
                      <div className="h-11 w-11 rounded-2xl bg-slate-900/5 grid place-items-center text-slate-700 border border-slate-200/70 group-hover:text-blue-700 transition">
                        <Instagram size={18} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold tracking-wide text-slate-500">
                          {content.labels.instagram}
                        </p>
                        <p className="mt-0.5 text-sm font-semibold text-slate-900 leading-snug break-words">
                          {content.contact.instagram.label}
                        </p>
                      </div>

                      <ArrowUpRight className="text-slate-500 group-hover:text-blue-700 transition" size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <section className="py-10">
            <div className="mx-auto max-w-6xl px-4">
              <div className="h-px w-full bg-slate-200/80" />
              <div className="mt-6 flex flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">
                <p>
                  © {new Date().getFullYear()} {content.name}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-slate-300">•</span>
                  <a
                    className="hover:text-slate-700 transition"
                    href={content.contact.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content.labels.footerLinkedin}
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    className="hover:text-slate-700 transition"
                    href={content.contact.github.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {content.labels.footerGithub}
                  </a>
                  <span className="text-slate-300">•</span>
                  <a className="hover:text-slate-700 transition" href={`mailto:${content.contact.email}`}>
                    {content.labels.footerEmail}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <BackToTop />
    </div>
  );
}