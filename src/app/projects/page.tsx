'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { getContent, Lang } from '@/data/content';
import { ArrowLeft, ArrowUpRight, BarChart3, Code2, Github, Layers3, Search, Sparkles } from 'lucide-react';

export default function ProjectsPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [activeType, setActiveType] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'id') {
      setLang(saved);
    }
  }, []);

  const content = getContent(lang);

  const projectTypes = useMemo(() => {
    const types = content.projects.map((project: any) => String(project.type || '').trim()).filter(Boolean);

    return ['All', ...Array.from(new Set(types))];
  }, [content.projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return content.projects.filter((project: any) => {
      const projectType = String(project.type || '').trim();
      const typeMatch = activeType === 'All' || projectType === activeType;

      const searchableText = [project.title, project.desc, project.type, project.year, ...(project.tech || [])].filter(Boolean).join(' ').toLowerCase();

      const queryMatch = !normalizedQuery || searchableText.includes(normalizedQuery);
      return typeMatch && queryMatch;
    });
  }, [activeType, content.projects, query]);

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
      <Navbar lang={lang} setLang={setLang} />

      <main className="relative px-4 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-50" />
        <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-140px] top-24 h-[460px] w-[460px] rounded-full bg-violet-600/15 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <section className="relative mx-auto max-w-7xl">
          <a
            href="/#proyek"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
          >
            <ArrowLeft size={16} />
            {lang === 'id' ? 'Kembali ke beranda' : 'Back to homepage'}
          </a>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">{lang === 'id' ? 'PROJECT ARCHIVE' : 'PROJECT ARCHIVE'}</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">{lang === 'id' ? 'All Projects & Case Studies' : 'All Projects & Case Studies'}</h1>
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">{content.labels.projectsSubtitle}</p>
            </div>

            <div className="lg:col-span-4">
              <div className="tech-card rounded-[2rem] p-5">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-black text-white">{content.projects.length}+</p>
                    <p className="mt-1 text-[11px] text-slate-500">Projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-black text-white">5</p>
                    <p className="mt-1 text-[11px] text-slate-500">Domains</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-black text-white">∞</p>
                    <p className="mt-1 text-[11px] text-slate-500">Curiosity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-color:rgba(96,165,250,0.65)_rgba(15,23,42,0.7)] [scrollbar-width:thin]">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setActiveType(type)}
                    className={`shrink-0 rounded-2xl border px-5 py-2.5 text-sm font-bold transition ${
                      activeType === type ? 'border-blue-400/40 bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'border-white/10 bg-white/[0.04] text-slate-300 hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <label className="relative block">
                <Search size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={lang === 'id' ? 'Cari project, tools, atau topik...' : 'Search project, tools, or topic...'}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-3 pl-11 pr-4 text-sm font-medium text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/40 focus:bg-blue-500/10"
                />
              </label>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project: any, index: number) => (
              <article key={`${project.title}-${index}`} className="group tech-card overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30">
                <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-slate-950">
                  {project.embed ? (
                    <iframe src={project.embed} title={project.title} className="absolute inset-0 h-full w-full border-0" loading="lazy" allowFullScreen />
                  ) : project.thumb ? (
                    <>
                      <img src={project.thumb} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 grid place-items-center bg-tech-grid text-sm text-slate-500">Preview unavailable</div>
                  )}

                
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-code text-[11px] uppercase tracking-[0.22em] text-blue-300">project.{String(index + 1).padStart(2, '0')}</p>
                      <h2 className="mt-3 line-clamp-2 text-xl font-black leading-snug text-white">{project.title}</h2>
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-400/30 hover:bg-blue-500/10 hover:text-white"
                        aria-label={`Open ${project.title}`}
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>

                  <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-400">{project.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech?.slice(0, 5).map((tech: string) => (
                      <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="mt-10 tech-card rounded-[2rem] p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                <Search size={22} />
              </div>
              <h2 className="mt-5 text-2xl font-black text-white">{lang === 'id' ? 'Project tidak ditemukan' : 'No project found'}</h2>
              <p className="mt-2 text-sm text-slate-400">{lang === 'id' ? 'Coba gunakan kata kunci atau kategori lain.' : 'Try another keyword or category.'}</p>
            </div>
          )}
        </section>
      </main>

      <BackToTop />
    </div>
  );
}
