"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getContent, Lang } from "@/data/content";
import {
  Mail,
  Linkedin,
  Phone,
  Instagram,
  ArrowUpRight,
  ChevronDown,
  Github,
  MapPin,
  BarChart3,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";
import BackToTop from "@/components/BackToTop";

function waHref(phone?: string) {
  const digits = String(phone || "").replace(/\D/g, "");
  return digits.length >= 10 ? `https://wa.me/${digits}` : "#";
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
  const featuredProject = content.projects?.[0];

  const heroStats = [
    { value: "3+", label: "Years of Learning", icon: BarChart3 },
    { value: "20+", label: "Projects Completed", icon: Code2 },
    { value: "5+", label: "Certificates Earned", icon: Database },
    { value: "100%", label: "Commitment", icon: Sparkles },
  ];

  const skillHighlights = [
    { title: "Data Analytics", desc: "SQL, Python, EDA, dashboarding", icon: BarChart3 },
    { title: "Data Engineering Basics", desc: "Database, cleaning, transformation", icon: Database },
    { title: "Machine Learning", desc: "Modeling, computer vision, evaluation", icon: Code2 },
    { title: "Digital Growth", desc: "Campaign, SEO, reporting", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      {/* HERO SECTION */}
      <section id="beranda" className="relative min-h-screen overflow-hidden px-4 pb-20 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-60" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-120px] top-32 h-[460px] w-[460px] rounded-full bg-violet-600/16 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-blue-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.8)]" />
              Data • Analytics • Digital Marketing
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-white md:text-7xl">
              <span className="block">Asraf Ayyasi</span>
              <span className="text-gradient-blue block">Putra</span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-blue-100 md:text-2xl">
              {content.title}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
              Turning raw data into actionable insights and building strategies that drive growth,
              clarity, and measurable impact.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={content.cta.contact}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                {content.labels.letsConnect}
                <ArrowUpRight size={17} />
              </a>

              <a
                href={content.cta.portfolio}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                {content.labels.checkMyWork}
                <Code2 size={17} />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={content.contact.github.url}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                aria-label="Github"
              >
                <Github size={18} />
              </a>

              <a
                href={content.contact.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href={`mailto:${content.contact.email}`}
                className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>

              <div className="ml-0 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-300 sm:ml-2">
                <MapPin size={16} className="text-blue-300" />
                Jakarta, Indonesia
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {heroStats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div key={stat.label} className="tech-card rounded-3xl p-5">
                    <div className="mb-4 grid h-10 w-10 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                      <Icon size={18} />
                    </div>

                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-600/30 via-cyan-400/10 to-violet-600/30 blur-2xl" />

              <div className="tech-card relative overflow-hidden rounded-[2rem] p-4">
                <div className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open to Work
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                  <img
                    src={content.contact.photo || "/me.jpg"}
                    alt={content.name}
                    className="h-[520px] w-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl">
                    <p className="text-lg font-black text-white">{content.name}</p>
                    <p className="mt-1 text-sm text-slate-300">{content.title}</p>
                  </div>
                </div>
              </div>

              <div className="tech-card absolute -left-5 bottom-28 hidden w-56 rounded-2xl p-4 md:block">
                <p className="font-code text-[11px] text-slate-500">portfolio.sql</p>
                <div className="mt-3 space-y-1 font-code text-xs leading-relaxed">
                  <p>
                    <span className="text-violet-300">SELECT</span>{" "}
                    <span className="text-cyan-200">purpose</span>
                  </p>
                  <p>
                    <span className="text-violet-300">FROM</span>{" "}
                    <span className="text-blue-200">passion</span>
                  </p>
                  <p>
                    <span className="text-violet-300">WHERE</span>{" "}
                    <span className="text-emerald-300">impact</span> &gt; 0;
                  </p>
                </div>
              </div>

              <div className="tech-card absolute -right-6 top-28 hidden w-48 rounded-2xl p-4 md:block">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-slate-400">Data Projects</p>
                  <BarChart3 size={16} className="text-blue-300" />
                </div>

                <p className="mt-3 text-3xl font-black text-white">20+</p>

                <div className="mt-4 flex h-16 items-end gap-1.5">
                  {[35, 52, 42, 68, 55, 76, 88].map((height, index) => (
                    <span
                      key={index}
                      className="flex-1 rounded-t bg-gradient-to-t from-blue-600 to-cyan-300"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {featuredProject && (
          <div className="relative mx-auto mt-14 max-w-7xl">
            <div className="tech-card overflow-hidden rounded-[2rem]">
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="border-b border-white/10 p-6 lg:col-span-5 lg:border-b-0 lg:border-r">
                  <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">
                    Featured Project
                  </p>

                  <h2 className="mt-4 text-2xl font-black leading-tight text-white md:text-3xl">
                    {featuredProject.title}
                  </h2>

                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-400">
                    {featuredProject.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.tech?.slice(0, 5).map((tech: string) => (
                      <span
                        key={tech}
                        className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featuredProject.link && (
                    <a
                      href={featuredProject.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
                    >
                      Open Project
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>

                <div className="relative min-h-[280px] bg-slate-900 lg:col-span-7">
                  {featuredProject.embed ? (
                    <iframe
                      src={featuredProject.embed}
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="fullscreen"
                    />
                  ) : (
                    <div className="absolute inset-0 grid place-items-center text-sm text-slate-500">
                      Preview unavailable
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CONTENT */}
      <div className="bg-dots">
        <main className="mx-auto max-w-6xl px-4">
          {/* ABOUT */}
          <section id="tentang" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
              <div className="absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute right-[-120px] bottom-10 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-5">
                <div className="sticky top-28 space-y-5">
                  <div className="tech-card overflow-hidden rounded-[2rem] p-4">
                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
                      <img
                        src={content.contact.photo || "/me.jpg"}
                        alt={content.name}
                        className="h-[420px] w-full object-cover object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                      <div className="absolute left-5 top-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 font-code text-[11px] uppercase tracking-[0.2em] text-blue-200 backdrop-blur">
                        profile.config
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl">
                        <p className="text-lg font-black text-white">{content.name}</p>
                        <p className="mt-1 text-sm text-slate-300">{content.title}</p>

                        <div className="mt-4 grid gap-2 sm:grid-cols-3">
                          {content.about.meta.map((m: any) => (
                            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{m.label}</p>
                              <p className="mt-1 text-xs font-bold text-slate-100">{m.value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech-card rounded-[2rem] p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">
                        education.track
                      </p>
                      <Database size={18} className="text-blue-300" />
                    </div>

                    <div className="mt-5 space-y-5">
                      {content.about.timeline
                        .filter((t: any) => ["pendidikan", "education"].includes(t.title?.toLowerCase()))
                        .map((t: any) => (
                          <div key={`${t.title}-${t.year}`} className="relative pl-6">
                            <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                            <span className="absolute bottom-0 left-[5px] top-6 w-px bg-blue-400/20" />

                            <div className="flex flex-wrap items-start justify-between gap-3">
                              <div>
                                <h3 className="text-lg font-black text-white">{t.place}</h3>
                                <p className="mt-1 text-sm font-semibold text-blue-200">{t.desc}</p>
                              </div>

                              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                                {t.year}
                              </span>
                            </div>

                            {t.thesis && (
                              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                                <span className="font-semibold text-slate-200">{content.labels.thesis}:</span>{" "}
                                <span className="italic">{t.thesis}</span>
                              </p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                  {content.about.kicker}
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  {content.about.headline}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                  {content.about.summary}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {skillHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="tech-card group rounded-3xl p-5 transition hover:-translate-y-1 hover:border-blue-400/30">
                        <div className="flex items-start gap-4">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Icon size={20} />
                          </div>

                          <div>
                            <h3 className="font-black text-white">{item.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 tech-card overflow-hidden rounded-[2rem]">
                  <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    </div>
                    <p className="font-code text-xs text-slate-500">about_asraf.ts</p>
                  </div>

                  <div className="grid gap-0 lg:grid-cols-12">
                    <div className="border-b border-white/10 p-6 lg:col-span-7 lg:border-b-0 lg:border-r">
                      <div className="space-y-2 font-code text-sm leading-relaxed">
                        <p><span className="text-violet-300">const</span> profile = &#123;</p>
                        <p className="pl-4"><span className="text-blue-200">role</span>: <span className="text-emerald-300">"Data Analyst"</span>,</p>
                        <p className="pl-4"><span className="text-blue-200">focus</span>: <span className="text-emerald-300">"Insight, dashboard, growth"</span>,</p>
                        <p className="pl-4"><span className="text-blue-200">mindset</span>: <span className="text-emerald-300">"analytical + impact-oriented"</span>,</p>
                        <p>&#125;;</p>
                      </div>
                    </div>

                    <div className="p-6 lg:col-span-5">
                      <p className="text-sm font-bold text-slate-200">Profile Keywords</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {content.about.skills.slice(0, 10).map((s: string) => (
                          <span
                            key={s}
                            className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="keahlian" className="relative py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                {content.skillsSection.kicker}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                {content.skillsSection.title}
              </h2>
              <p className="mt-4 text-slate-400">{content.skillsSection.subtitle}</p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              <div className="tech-card rounded-[2rem] p-6 lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">
                      stack.matrix
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">{content.labels.coreSkills}</h3>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold text-slate-300">
                    {content.skillsSection.hard.length} {content.labels.items}
                  </span>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {content.skillsSection.hard.map((s: string, index: number) => (
                    <div
                      key={s}
                      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-bold text-slate-100">{s}</p>
                        <span className="font-code text-[10px] text-slate-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-violet-500"
                          style={{ width: `${72 + (index % 5) * 5}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 lg:col-span-5">
                <div className="tech-card rounded-[2rem] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">
                        human.skills
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-white">{content.labels.softSkills}</h3>
                    </div>
                    <Sparkles size={22} className="text-blue-300" />
                  </div>

                  <div className="mt-6 grid gap-3">
                    {content.skillsSection.soft.map((s: string) => (
                      <div
                        key={s}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"
                      >
                        <span className="grid h-8 w-8 place-items-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                          <Sparkles size={14} />
                        </span>
                        <p className="text-sm font-semibold text-slate-200">{s}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="tech-card rounded-[2rem] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">
                        learning.log
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-white">{content.labels.coursesTraining}</h3>
                    </div>
                    <Database size={22} className="text-blue-300" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {content.skillsSection.trainings.map((t: any) => (
                      <div key={`${t.name}-${t.org}`} className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-bold text-white">{t.name}</p>
                            <p className="mt-1 text-sm text-slate-400">{t.org}</p>
                          </div>

                          <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-100">
                            {t.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#sertifikat"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-blue-400/25 bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                  >
                    {content.labels.viewCertificates}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="pengalaman" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute bottom-0 right-[-120px] h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                {content.workSection.kicker}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                {content.workSection.title}
              </h2>
              <p className="mt-4 text-slate-400">{content.workSection.subtitle}</p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="sticky top-28 tech-card overflow-hidden rounded-[2rem]">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">
                      work.timeline
                    </p>
                    <h3 className="mt-2 text-2xl font-black text-white">Professional Track</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      Selected work experiences, responsibilities, and tools that support my data and digital portfolio.
                    </p>
                  </div>

                  <div className="grid gap-0 divide-y divide-white/10">
                    <div className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                          <Database size={20} />
                        </div>
                        <div>
                          <p className="text-3xl font-black text-white">{content.workSection.items.length}</p>
                          <p className="text-sm text-slate-400">Experience Records</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex flex-wrap gap-2">
                        {["Analytics", "Reporting", "Research", "Operations", "Strategy"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-tech-grid p-6">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-code text-xs leading-relaxed text-slate-400">
                        <p><span className="text-violet-300">const</span> work = [</p>
                        <p className="pl-4"><span className="text-emerald-300">"learn"</span>,</p>
                        <p className="pl-4"><span className="text-emerald-300">"analyze"</span>,</p>
                        <p className="pl-4"><span className="text-emerald-300">"deliver impact"</span></p>
                        <p>];</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="relative space-y-5 before:absolute before:left-6 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-blue-400/20 md:before:block">
                  {content.workSection.items.map((it: any, idx: number) => (
                    <details
                      key={`${it.company}-${it.role}-${idx}`}
                      className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 shadow-sm backdrop-blur transition hover:border-blue-400/30 hover:bg-slate-900/60 open:border-blue-400/30 open:bg-slate-900/70"
                    >
                      <summary className="list-none cursor-pointer px-5 py-5 md:pl-16">
                        <span className="absolute left-4 top-7 hidden h-4 w-4 rounded-full border border-blue-300/50 bg-slate-950 shadow-[0_0_20px_rgba(96,165,250,0.55)] md:block" />

                        <div className="flex items-start justify-between gap-4">
                          <div className="flex min-w-0 items-center gap-4">
                            {it.logo ? (
                              <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                                <img src={it.logo} alt={it.company} className="h-9 w-9 object-contain" />
                              </div>
                            ) : (
                              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-lg font-black text-blue-200">
                                {String(it.company || "C").slice(0, 1)}
                              </div>
                            )}

                            <div className="min-w-0">
                              <h3 className="text-base font-black leading-snug text-white md:text-xl">
                                {it.role}
                              </h3>

                              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                                <span className="font-bold text-blue-200">{it.company}</span>
                                {it.location && (
                                  <>
                                    <span className="text-slate-600">•</span>
                                    <span className="inline-flex items-center gap-1 text-slate-400">
                                      <MapPin size={13} />
                                      {it.location}
                                    </span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0">
                            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition group-hover:text-blue-200 group-open:rotate-180 group-open:text-blue-200">
                              <ChevronDown size={18} />
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2 md:pl-[72px]">
                          {it.period && (
                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">
                              {it.period}
                            </span>
                          )}
                          {it.type && (
                            <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100">
                              {it.type}
                            </span>
                          )}
                        </div>
                      </summary>

                      <div className="px-5 pb-6 md:pl-16">
                        <div className="h-px w-full bg-white/10" />

                        {it.bullets?.length > 0 && (
                          <ul className="mt-5 space-y-3 text-sm text-slate-300">
                            {it.bullets.map((b: string) => (
                              <li key={b} className="flex items-start gap-3">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
                                <span className="leading-relaxed">{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {it.tools?.length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {it.tools.slice(0, 12).map((t: string) => (
                              <span
                                key={t}
                                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
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
              </div>
            </div>
          </section>

          {/* ORGANIZATION */}
          <section id="organisasi" className="relative py-24">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                {content.orgSection.kicker}
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                {content.orgSection.title}
              </h2>
              <p className="mt-4 text-slate-400">{content.orgSection.subtitle}</p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {content.orgSection.items.map((it: any, index: number) => (
                <article
                  key={`${it.title}-${it.role}`}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/30 hover:bg-slate-900/70"
                >
                  <div className="relative">
                    <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <img
                        src={it.image}
                        alt={it.title}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        style={{ objectPosition: index % 2 === 0 ? "50% 20%" : "50% 35%" }}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 font-code text-[11px] uppercase tracking-[0.2em] text-blue-100 backdrop-blur">
                      leadership.log
                    </div>

                    {it.period && (
                      <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-bold text-slate-200 backdrop-blur">
                        {it.period}
                      </div>
                    )}

                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-xl font-black leading-snug text-white">{it.title}</h3>
                      <p className="mt-1 text-sm font-bold text-blue-200">{it.role}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <ul className="space-y-3 text-sm text-slate-300">
                      {it.bullets.slice(0, 4).map((b: string) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.8)]" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {it.bullets.length > 4 && (
                      <p className="mt-5 text-xs font-semibold text-slate-500">
                        +{it.bullets.length - 4} {content.labels.morePoints}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>


          {/* PROJECTS */}
          <section id="proyek" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
              <div className="absolute left-[-140px] top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute right-[-140px] bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                  {content.labels.portfolioKicker}
                </p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                  {content.labels.featuredProjects}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                  {content.labels.projectsSubtitle}
                </p>
              </div>

              <div className="tech-card rounded-3xl p-4">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-2xl font-black text-white">{content.projects.length}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-2xl font-black text-white">4</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">Domains</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <p className="text-2xl font-black text-white">∞</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500">Growth</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {content.projects.slice(1, 7).map((p: any, index: number) => (
                <article
                  key={`${p.title}-${index}`}
                  className="group tech-card overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-950">
                    {p.embed ? (
                      <>
                        <iframe
                          src={p.embed}
                          className="absolute inset-0 h-full w-full"
                          loading="lazy"
                          allow="fullscreen"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10 opacity-70" />
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
                    ) : p.thumb ? (
                      <>
                        <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-tech-grid text-sm text-slate-500">
                        {content.labels.previewUnavailable}
                      </div>
                    )}

                    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                      {(p.type || p.year) && (
                        <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur">
                          {p.type || p.year}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-code text-[11px] uppercase tracking-[0.22em] text-slate-500">
                          project.{String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-3 text-xl font-black leading-snug text-white">
                          {p.title}
                        </h3>
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noreferrer"
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                          aria-label={`Open ${p.title}`}
                        >
                          <ArrowUpRight size={18} />
                        </a>
                      )}
                    </div>

                    <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-400">
                      {p.desc}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech?.slice(0, 7).map((t: string) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {content.projects.length > 7 && (
              <div className="mt-8 tech-card rounded-[2rem] p-5">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                  <div>
                    <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">
                      project.archive
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      Additional portfolio works are kept in a compact archive to keep the page clean and fast.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {content.projects.slice(7).map((p: any, index: number) => (
                      <a
                        key={`${p.title}-archive-${index}`}
                        href={p.link || "#"}
                        target={p.link ? "_blank" : undefined}
                        rel={p.link ? "noreferrer" : undefined}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                      >
                        {p.title.length > 34 ? `${p.title.slice(0, 34)}...` : p.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* CERTIFICATES */}
          <section id="sertifikat" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
              <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-4">
                <div className="sticky top-28">
                  <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                    {content.certSection.kicker}
                  </p>
                  <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                    {content.certSection.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-400 md:text-base">
                    {content.certSection.subtitle}
                  </p>

                  <div className="mt-8 tech-card rounded-[2rem] p-5">
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <p className="text-3xl font-black text-white">
                          {content.certSection.featured.length + content.certSection.micro.length}+
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          Verified learning records
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/60 p-4 font-code text-xs leading-relaxed text-slate-400">
                      <p><span className="text-blue-300">const</span> learning = [</p>
                      <p className="pl-4 text-slate-300">"Machine Learning",</p>
                      <p className="pl-4 text-slate-300">"Digital Marketing",</p>
                      <p className="pl-4 text-slate-300">"Data Analytics"</p>
                      <p>];</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <div className="grid gap-6 md:grid-cols-2">
                  {content.certSection.featured.map((c: any) => (
                    <article
                      key={c.title}
                      className="group tech-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                            <img src={c.logo} alt={c.issuer} className="h-10 w-10 object-contain" />
                          </div>

                          <div>
                            <p className="text-lg font-black leading-snug text-white">{c.title}</p>
                            <p className="mt-1 text-sm font-bold text-blue-200">{c.issuer}</p>
                          </div>
                        </div>

                        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                          {c.year}
                        </span>
                      </div>

                      <p className="mt-5 line-clamp-6 text-sm leading-relaxed text-slate-400">
                        {c.desc}
                      </p>

                      {c.link && (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-4 py-2.5 text-sm font-bold text-blue-100 transition hover:border-blue-300/40 hover:bg-blue-500/20 hover:text-white"
                        >
                          {content.labels.viewCertificates}
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                    </article>
                  ))}
                </div>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <p className="font-code text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                    {content.labels.otherCertificates}
                  </p>
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="mt-8 grid gap-3">
                  {content.certSection.micro.map((m: any, index: number) => (
                    <a
                      key={`${m.title}-${m.issuer}-${index}`}
                      href={m.link || "#"}
                      target={m.link ? "_blank" : undefined}
                      rel={m.link ? "noreferrer" : undefined}
                      className="group tech-card flex items-center gap-4 rounded-2xl p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30"
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white p-2">
                        <img
                          src={m.icon || "/icons/certificate.svg"}
                          alt={m.issuer}
                          className="h-9 w-9 object-contain"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="line-clamp-1 text-sm font-black text-white group-hover:text-blue-100">
                          {m.title}
                        </p>
                        <p className="mt-1 truncate text-xs font-semibold text-slate-500">
                          {m.issuer}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-3">
                        {m.year && (
                          <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-400 sm:inline-flex">
                            {m.year}
                          </span>
                        )}
                        <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-blue-400/30 group-hover:text-white">
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>


          {/* CONTACT */}
          <section id="kontak" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                    {content.labels.contactKicker}
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">
                    {content.labels.contactTitle}
                  </h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                    {content.labels.contactSubtitle}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="tech-card rounded-[2rem] p-5">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white">{content.labels.availableForCollab}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">
                          {content.labels.connectSubtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <div className="tech-card relative overflow-hidden rounded-[2rem] p-4">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.22),transparent_42%)]" />
                    <div className="absolute inset-0 bg-tech-grid opacity-30" />

                    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950">
                      <img
                        src={content.contact.photo || "/me.jpg"}
                        alt={content.name}
                        className="h-[430px] w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-300 backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                        {content.labels.availableForCollab}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-5 backdrop-blur-xl">
                        <p className="text-lg font-black text-white">{content.name}</p>
                        <p className="mt-1 text-sm text-slate-300">{content.title}</p>

                        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-400">
                          <MapPin size={15} className="text-blue-300" />
                          Jakarta, Indonesia
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tech-card mt-6 rounded-[2rem] p-5">
                    <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">
                      contact.config
                    </p>
                    <div className="mt-4 space-y-1 font-code text-xs leading-relaxed text-slate-400">
                      <p><span className="text-violet-300">const</span> status = <span className="text-emerald-300">"open"</span>;</p>
                      <p><span className="text-violet-300">const</span> focus = <span className="text-cyan-200">["data", "insight", "impact"]</span>;</p>
                      <p><span className="text-slate-500">// response channel: email / linkedin / whatsapp</span></p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="tech-card overflow-hidden rounded-[2rem]">
                    <div className="border-b border-white/10 p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">
                            {content.labels.connectTitle}
                          </p>
                          <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                            Choose your preferred channel
                          </h3>
                        </div>

                        <a
                          href={`mailto:${content.contact.email}`}
                          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                        >
                          Send Email
                          <ArrowUpRight size={16} />
                        </a>
                      </div>
                    </div>

                    <div className="grid gap-0 md:grid-cols-2">
                      <a
                        href={`mailto:${content.contact.email}`}
                        className="group border-b border-white/10 p-6 transition hover:bg-blue-500/5 md:border-r"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Mail size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                          {content.labels.email}
                        </p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">
                          {content.contact.email}
                        </p>
                      </a>

                      <a
                        href={content.contact.linkedin.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group border-b border-white/10 p-6 transition hover:bg-blue-500/5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Linkedin size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                          {content.labels.linkedin}
                        </p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">
                          {content.contact.linkedin.label}
                        </p>
                      </a>

                      <a
                        href={waHref(content.contact.whatsapp.number)}
                        target="_blank"
                        rel="noreferrer"
                        className="group border-b border-white/10 p-6 transition hover:bg-blue-500/5 md:border-b-0 md:border-r"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Phone size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                          {content.labels.whatsapp}
                        </p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">
                          {content.contact.whatsapp.label}
                        </p>
                      </a>

                      <a
                        href={content.contact.instagram.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group p-6 transition hover:bg-blue-500/5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Instagram size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                          {content.labels.instagram}
                        </p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">
                          {content.contact.instagram.label}
                        </p>
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="tech-card rounded-[2rem] p-6">
                      <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">github.status</p>
                      <div className="mt-5 flex items-center gap-4">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300">
                          <Github size={20} />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-black text-white">{content.contact.github.label}</p>
                          <p className="mt-1 text-xs text-slate-500">Project repository & code activity</p>
                        </div>
                      </div>
                      <a
                        href={content.contact.github.url}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white"
                      >
                        {content.labels.footerGithub}
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    <div className="tech-card rounded-[2rem] p-6">
                      <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">response.time</p>
                      <div className="mt-5 space-y-3">
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                          <span className="text-sm font-semibold text-slate-300">Email</span>
                          <span className="text-sm font-black text-white">Formal</span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                          <span className="text-sm font-semibold text-slate-300">LinkedIn</span>
                          <span className="text-sm font-black text-white">Career</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="relative overflow-hidden py-10">
            <div className="mx-auto max-w-7xl px-4">
              <div className="tech-card rounded-[2rem] p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-lg font-black text-blue-300">
                        A
                      </span>
                      <div>
                        <p className="text-sm font-black text-white">{content.name}</p>
                        <p className="mt-1 text-xs text-slate-500">{content.title}</p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-slate-500">
                      © {new Date().getFullYear()} {content.name}. Built with clarity, data, and continuous learning.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                      href={content.contact.linkedin.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content.labels.footerLinkedin}
                    </a>
                    <a
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                      href={content.contact.github.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {content.labels.footerGithub}
                    </a>
                    <a
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-blue-400/30 hover:text-white"
                      href={`mailto:${content.contact.email}`}
                    >
                      {content.labels.footerEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>

      <BackToTop />
    </div>
  );
}