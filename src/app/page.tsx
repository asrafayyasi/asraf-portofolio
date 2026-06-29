'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import { getContent, Lang } from '@/data/content';
import { Mail, Linkedin, Phone, Instagram, ArrowUpRight, ChevronDown, Github, MapPin, BarChart3, Code2, Database, Sparkles } from 'lucide-react';
import BackToTop from '@/components/BackToTop';

function waHref(phone?: string) {
  const digits = String(phone || '').replace(/\D/g, '');
  return digits.length >= 10 ? `https://wa.me/${digits}` : '#';
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'id') {
      setLang(saved);
    }
  }, []);

  const content = getContent(lang);
  const featuredProjects = [content.projects[1], content.projects[3]];
  const hasMoreProjects = content.projects.length > 2;

  const featuredCertificates = [...content.certSection.featured, ...content.certSection.micro].slice(0, 5);

  const heroStats = [
    { value: '1+', label: 'Years of Learning', icon: BarChart3 },
    { value: '10+', label: 'Projects Completed', icon: Code2 },
    { value: '5+', label: 'Certificates Earned', icon: Database },
    { value: '100%', label: 'Commitment', icon: Sparkles },
  ];

  const skillHighlights = [
    { title: 'Data Analytics', desc: 'SQL, Python, EDA, dashboarding', icon: BarChart3 },
    { title: 'Data Engineering Basics', desc: 'Database, cleaning, transformation', icon: Database },
    { title: 'Machine Learning', desc: 'Modeling, computer vision, evaluation', icon: Code2 },
    { title: 'Digital Growth', desc: 'Campaign, SEO, reporting', icon: Sparkles },
  ];

  type SkillContentItem =
    | string
    | {
        name: string;
        icon?: string;
        image?: string;
      };

  const normalizeSkill = (skill: SkillContentItem) => {
    if (typeof skill === 'string') {
      return {
        name: skill,
        image: undefined,
      };
    }

    return {
      name: skill.name,
      image: skill.icon || skill.image,
    };
  };

  const getFallbackSkillIcon = (skillName: string) => {
    const lower = skillName.toLowerCase();

    if (lower.includes('sql') || lower.includes('database') || lower.includes('data cleaning') || lower.includes('data entry')) {
      return Database;
    }

    if (lower.includes('marketing') || lower.includes('seo') || lower.includes('ads') || lower.includes('campaign') || lower.includes('market') || lower.includes('strategic')) {
      return Sparkles;
    }

    if (lower.includes('visual') || lower.includes('power') || lower.includes('tableau') || lower.includes('looker') || lower.includes('excel') || lower.includes('report') || lower.includes('eda')) {
      return BarChart3;
    }

    return Code2;
  };

  const skillToolItems = content.skillsSection.hard.map((skill: SkillContentItem) => {
    const normalizedSkill = normalizeSkill(skill);

    return {
      name: normalizedSkill.name,
      icon: getFallbackSkillIcon(normalizedSkill.name),
      image: normalizedSkill.image,
    };
  });

  const filteredSkillTools = skillToolItems;
  const skillsScrollerRef = useRef<HTMLDivElement | null>(null);
  const skillsAnimationRef = useRef<number | null>(null);
  const skillsPausedRef = useRef(false);

  useEffect(() => {
    const scroller = skillsScrollerRef.current;
    if (!scroller) return;

    const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);

    const animateTo = (targetLeft: number) => {
      if (skillsAnimationRef.current) {
        window.cancelAnimationFrame(skillsAnimationRef.current);
      }

      const startLeft = scroller.scrollLeft;
      const distance = targetLeft - startLeft;
      const duration = 950;
      const startTime = performance.now();

      const step = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        scroller.scrollLeft = startLeft + distance * easeOutCubic(progress);

        if (progress < 1) {
          skillsAnimationRef.current = window.requestAnimationFrame(step);
        }
      };

      skillsAnimationRef.current = window.requestAnimationFrame(step);
    };

    const interval = window.setInterval(() => {
      if (skillsPausedRef.current) return;

      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      if (maxScrollLeft <= 0) return;

      const nextLeft = scroller.scrollLeft >= maxScrollLeft - 24 ? 0 : Math.min(scroller.scrollLeft + Math.max(scroller.clientWidth * 0.42, 220), maxScrollLeft);

      animateTo(nextLeft);
    }, 3200);

    return () => {
      window.clearInterval(interval);
      if (skillsAnimationRef.current) {
        window.cancelAnimationFrame(skillsAnimationRef.current);
      }
    };
  }, [filteredSkillTools.length]);

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

            <p className="mt-5 text-xl font-semibold text-blue-100 md:text-2xl">{content.title}</p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">Turning raw data into actionable insights and building strategies that drive growth, clarity, and measurable impact.</p>

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
                  <img src={content.contact.photo || '/me.jpg'} alt={content.name} className="h-[520px] w-full object-cover object-center" />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/65 p-4 backdrop-blur-xl">
                    <p className="text-lg font-black text-white">{content.name}</p>
                    <p className="mt-1 text-sm text-slate-300">{content.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="bg-dots">
        <main className="mx-auto max-w-6xl px-4">
          {/* ABOUT */}
          <section id="tentang" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
              <div className="absolute left-[-120px] top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute right-[-120px] bottom-0 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />
            </div>

            <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7">
                <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{content.about.kicker}</p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">{content.about.headline}</h2>

                <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">{content.about.summary}</p>
              </div>

              <div className="lg:col-span-5">
                <div className="tech-card sticky top-28 overflow-hidden rounded-[2rem] p-6">
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/15 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">education.track</p>
                      <h3 className="mt-3 text-2xl font-black text-white">Universitas Airlangga</h3>
                    </div>

                    <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                      <Database size={20} />
                    </div>
                  </div>

                  <div className="relative mt-7 space-y-6">
                    {content.about.timeline
                      .filter((t: any) => ['pendidikan', 'education'].includes(t.title?.toLowerCase()))
                      .map((t: any) => (
                        <div key={`${t.title}-${t.year}`} className="relative pl-7">
                          <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />
                          <span className="absolute bottom-0 left-[5px] top-6 w-px bg-blue-400/20" />

                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                              <p className="text-sm font-semibold text-blue-200">{t.desc}</p>
                              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-500">Formal Education</p>
                            </div>

                            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">{t.year}</span>
                          </div>

                          {t.thesis && (
                            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{content.labels.thesis}</p>
                              <p className="mt-2 text-sm italic leading-relaxed text-slate-300">{t.thesis}</p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="keahlian" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{content.skillsSection.kicker}</p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">Tools, Technologies & Expertise</h2>
                  <p className="mt-4 max-w-2xl text-slate-400">{content.skillsSection.subtitle}</p>
                </div>
              </div>

              <div
                ref={skillsScrollerRef}
                onMouseEnter={() => {
                  skillsPausedRef.current = true;
                }}
                onMouseLeave={() => {
                  skillsPausedRef.current = false;
                }}
                onTouchStart={() => {
                  skillsPausedRef.current = true;
                }}
                onTouchEnd={() => {
                  skillsPausedRef.current = false;
                }}
                className="mt-10 overflow-x-auto pb-5 pr-2 scroll-smooth [scrollbar-width:thin] [scrollbar-color:rgba(96,165,250,0.7)_rgba(15,23,42,0.85)] [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-950/70 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-blue-300/20 [&::-webkit-scrollbar-thumb]:bg-blue-500/55 hover:[&::-webkit-scrollbar-thumb]:bg-cyan-400/70"
              >
                <div className="flex min-w-max gap-4">
                  {filteredSkillTools.map((skill, index: number) => {
                    const Icon = skill.icon;

                    return (
                      <div
                        key={`${skill.name}-${index}`}
                        className="group relative min-w-[138px] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 p-5 text-center shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-2xl hover:shadow-blue-950/30 sm:min-w-[156px]"
                      >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/20 bg-white text-blue-300 transition group-hover:scale-105 group-hover:border-cyan-300/40 group-hover:text-cyan-200">
                          {skill.image ? (
                            <>
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="h-8 w-8 object-contain"
                                onError={(event) => {
                                  event.currentTarget.style.display = 'none';
                                  event.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                              />
                              <span className="hidden">
                                <Icon size={25} />
                              </span>
                            </>
                          ) : (
                            <Icon size={25} />
                          )}
                        </div>

                        <p className="mt-4 line-clamp-2 min-h-[40px] text-sm font-extrabold leading-snug text-white">{skill.name}</p>
                      </div>
                    );
                  })}
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
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{content.workSection.kicker}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">{content.workSection.title}</h2>
              <p className="mt-4 text-slate-400">{content.workSection.subtitle}</p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="sticky top-28 tech-card overflow-hidden rounded-[2rem]">
                  <div className="border-b border-white/10 px-6 py-5">
                    <p className="font-code text-xs uppercase tracking-[0.25em] text-blue-300">work.timeline</p>
                    <h3 className="mt-2 text-2xl font-black text-white">Professional Track</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">Selected work experiences, responsibilities, and tools that support my data and digital portfolio.</p>
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
                        {['Analytics', 'Reporting', 'Research', 'Operations', 'Strategy'].map((tag) => (
                          <span key={tag} className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-tech-grid p-6">
                      <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 font-code text-xs leading-relaxed text-slate-400">
                        <p>
                          <span className="text-violet-300">const</span> work = [
                        </p>
                        <p className="pl-4">
                          <span className="text-emerald-300">"learn"</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-emerald-300">"analyze"</span>,
                        </p>
                        <p className="pl-4">
                          <span className="text-emerald-300">"deliver impact"</span>
                        </p>
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
                              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-lg font-black text-blue-200">{String(it.company || 'C').slice(0, 1)}</div>
                            )}

                            <div className="min-w-0">
                              <h3 className="text-base font-black leading-snug text-white md:text-xl">{it.role}</h3>

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
                          {it.period && <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-slate-300">{it.period}</span>}
                          {it.type && <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-100">{it.type}</span>}
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
                              <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300">
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
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{content.orgSection.kicker}</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">{content.orgSection.title}</h2>
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
                      <img src={it.image} alt={it.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" style={{ objectPosition: index % 2 === 0 ? '50% 20%' : '50% 35%' }} />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 font-code text-[11px] uppercase tracking-[0.2em] text-blue-100 backdrop-blur">leadership.log</div>

                    {it.period && <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs font-bold text-slate-200 backdrop-blur">{it.period}</div>}

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
              <div className="absolute right-[-140px] bottom-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">Featured Projects</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">{lang === 'id' ? 'Menyelesaikan Masalah. Menghasilkan Insight.' : 'Solving Problems. Delivering Insights.'}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">{content.labels.projectsSubtitle}</p>
              </div>

              {hasMoreProjects && (
                <a
                  href="/projects"
                  className="inline-flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                >
                  {lang === 'id' ? 'View all projects' : 'View all projects'}
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((p: any, index: number) => (
                <article key={`${p.title}-featured-${index}`} className="group tech-card overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                  <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-slate-950">
                    {p.embed ? (
                      <iframe src={p.embed} title={p.title} className="absolute inset-0 h-full w-full border-0" loading="lazy" allowFullScreen />
                    ) : p.thumb ? (
                      <>
                        <img src={p.thumb} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-tech-grid text-sm text-slate-500">Preview unavailable</div>
                    )}

                    {(p.type || p.year) && <span className="absolute left-5 bottom-5 rounded-full border border-blue-400/20 bg-blue-500/15 px-3 py-1 text-xs font-bold text-blue-100 backdrop-blur">{p.type || p.year}</span>}
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-black leading-snug text-white">{p.title}</h3>
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">{p.desc}</p>
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

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tech?.slice(0, 4).map((t: string) => (
                        <span key={t} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { value: `${content.projects.length}+`, label: lang === 'id' ? 'Projects Completed' : 'Projects Completed', icon: Code2 },
                { value: '12K+', label: lang === 'id' ? 'Lines of Code' : 'Lines of Code', icon: Github },
                { value: '5', label: lang === 'id' ? 'Domains Explored' : 'Domains Explored', icon: BarChart3 },
                { value: '∞', label: lang === 'id' ? 'Curiosity' : 'Curiosity', icon: Sparkles },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-4">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                      <Icon size={17} />
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">{item.value}</p>
                      <p className="text-[11px] leading-tight text-slate-500">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* CERTIFICATES */}
          <section id="sertifikat" className="relative py-24">
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
              <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
              <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{lang === 'id' ? 'SERTIFIKASI' : 'CERTIFICATIONS'}</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">{lang === 'id' ? 'Learning. Validating. Growing.' : 'Learning. Validating. Growing.'}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">{content.certSection.subtitle}</p>
              </div>

              <a
                href="/certificates"
                className="inline-flex w-fit items-center gap-2 rounded-2xl border border-blue-400/20 bg-blue-500/10 px-5 py-3 text-sm font-bold text-blue-100 transition hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-500/20 hover:text-white"
              >
                {lang === 'id' ? 'View all certificates' : 'View all certificates'}
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {featuredCertificates.map((cert: any, index: number) => (
                <a
                  key={`${cert.title}-${cert.issuer}-${index}`}
                  href={cert.link || '/certificates'}
                  target={cert.link ? '_blank' : undefined}
                  rel={cert.link ? 'noreferrer' : undefined}
                  className="group tech-card flex min-h-[210px] flex-col justify-between rounded-[1.5rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-blue-950/30"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                        <img src={cert.logo || cert.icon || '/icons/certificate.svg'} alt={cert.issuer} className="h-8 w-8 object-contain" />
                      </div>

                      <span className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-400">{cert.year}</span>
                    </div>

                    <h3 className="mt-5 line-clamp-2 text-base font-black leading-snug text-white group-hover:text-blue-100">{cert.title}</h3>
                    <p className="mt-2 line-clamp-1 text-xs font-semibold text-slate-500">{cert.issuer}</p>
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <span className="rounded-xl border border-blue-400/15 bg-blue-500/10 px-3 py-1.5 text-[11px] font-bold text-blue-200">Certificate</span>

                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-blue-400/30 group-hover:text-white">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="kontak" className="relative overflow-hidden py-24">
            <div className="pointer-events-none absolute left-[-120px] top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4">
              <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{content.labels.contactKicker}</p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-white md:text-5xl">{content.labels.contactTitle}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">{content.labels.contactSubtitle}</p>
                </div>

                <div className="lg:col-span-5">
                  <div className="tech-card rounded-[2rem] p-5">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-emerald-400/20 bg-emerald-500/10 text-emerald-300">
                        <Sparkles size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-black text-white">{content.labels.availableForCollab}</p>
                        <p className="mt-2 text-sm leading-relaxed text-slate-400">{content.labels.connectSubtitle}</p>
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
                      <img src={'/2.jpeg'} alt={content.name} className="h-[430px] w-full object-cover object-center" />
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
                    <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">contact.config</p>
                    <div className="mt-4 space-y-1 font-code text-xs leading-relaxed text-slate-400">
                      <p>
                        <span className="text-violet-300">const</span> status = <span className="text-emerald-300">"open"</span>;
                      </p>
                      <p>
                        <span className="text-violet-300">const</span> focus = <span className="text-cyan-200">["data", "insight", "impact"]</span>;
                      </p>
                      <p>
                        <span className="text-slate-500">// response channel: email / linkedin / whatsapp</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="tech-card overflow-hidden rounded-[2rem]">
                    <div className="border-b border-white/10 p-6">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="font-code text-xs uppercase tracking-[0.28em] text-blue-300">{content.labels.connectTitle}</p>
                          <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">Choose your preferred channel</h3>
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
                      <a href={`mailto:${content.contact.email}`} className="group border-b border-white/10 p-6 transition hover:bg-blue-500/5 md:border-r">
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Mail size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{content.labels.email}</p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">{content.contact.email}</p>
                      </a>

                      <a href={content.contact.linkedin.url} target="_blank" rel="noreferrer" className="group border-b border-white/10 p-6 transition hover:bg-blue-500/5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Linkedin size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{content.labels.linkedin}</p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">{content.contact.linkedin.label}</p>
                      </a>

                      <a href={waHref(content.contact.whatsapp.number)} target="_blank" rel="noreferrer" className="group border-b border-white/10 p-6 transition hover:bg-blue-500/5 md:border-b-0 md:border-r">
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Phone size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{content.labels.whatsapp}</p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">{content.contact.whatsapp.label}</p>
                      </a>

                      <a href={content.contact.instagram.url} target="_blank" rel="noreferrer" className="group p-6 transition hover:bg-blue-500/5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                            <Instagram size={20} />
                          </div>
                          <ArrowUpRight className="text-slate-600 transition group-hover:text-blue-300" size={18} />
                        </div>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">{content.labels.instagram}</p>
                        <p className="mt-2 break-words text-sm font-bold leading-relaxed text-white">{content.contact.instagram.label}</p>
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
                      <a href={content.contact.github.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-300 transition hover:text-white">
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
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-blue-400/25 bg-blue-500/10 text-lg font-black text-blue-300">A</span>
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
                    <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-bold text-slate-300 transition hover:border-blue-400/30 hover:text-white" href={`mailto:${content.contact.email}`}>
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
