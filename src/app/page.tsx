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