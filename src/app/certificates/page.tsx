'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { getContent, Lang } from '@/data/content';
import { ArrowUpRight, Award, Filter, Search, Sparkles } from 'lucide-react';

export default function CertificatesPage() {
  const [lang, setLang] = useState<Lang>('en');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null;
    if (saved === 'en' || saved === 'id') {
      setLang(saved);
    }
  }, []);

  const content = getContent(lang);

  const certificates = useMemo(
    () => [
      ...content.certSection.featured.map((cert: any) => ({
        ...cert,
        image: cert.logo,
        category: 'Featured',
        description: cert.desc,
      })),
      ...content.certSection.micro.map((cert: any) => ({
        ...cert,
        image: cert.icon,
        category: cert.issuer?.includes('DeepLearning')
          ? 'DeepLearning.AI'
          : cert.issuer?.includes('Coursera')
            ? 'Coursera'
            : 'Other',
        description: cert.issuer,
      })),
    ],
    [content]
  );

  const categories = ['All', 'Featured', 'Coursera', 'DeepLearning.AI', 'Other'];

  const filteredCertificates = certificates.filter((cert: any) => {
    const keyword = `${cert.title} ${cert.issuer} ${cert.year} ${cert.category}`.toLowerCase();
    const matchesQuery = keyword.includes(query.toLowerCase());
    const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;

    return matchesQuery && matchesCategory;
  });

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--bg-main)] text-white">
      <Navbar lang={lang} setLang={setLang} />

      <main className="relative px-4 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-tech-grid opacity-50" />
        <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute right-[-120px] top-40 -z-10 h-[420px] w-[420px] rounded-full bg-violet-600/15 blur-3xl" />

        <section className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="font-code text-xs font-semibold uppercase tracking-[0.35em] text-blue-300">
                {lang === 'id' ? 'SERTIFIKASI' : 'CERTIFICATIONS'}
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                Learning. Validating. Growing.
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 md:text-lg">
                {content.certSection.subtitle}
              </p>
            </div>

            <div className="tech-card rounded-[2rem] p-6 lg:col-span-4">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Award size={22} />
                </div>
                <div>
                  <p className="text-4xl font-black text-white">{certificates.length}+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Verified learning records</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <div className="tech-card flex items-center gap-3 rounded-2xl px-4 py-3 lg:col-span-5">
              <Search size={18} className="text-blue-300" />
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={lang === 'id' ? 'Search certificates...' : 'Search certificates...'}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
              />
            </div>

            <div className="tech-card flex gap-2 overflow-x-auto rounded-2xl p-2 lg:col-span-7">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                <Filter size={16} />
              </div>

              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                      : 'border border-white/10 bg-white/[0.03] text-slate-400 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((cert: any, index: number) => (
              <a
                key={`${cert.title}-${cert.issuer}-${index}`}
                href={cert.link || '#'}
                target={cert.link ? '_blank' : undefined}
                rel={cert.link ? 'noreferrer' : undefined}
                className="group tech-card flex min-h-[260px] flex-col justify-between rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                        <img src={cert.image || '/icons/certificate.svg'} alt={cert.issuer} className="h-10 w-10 object-contain" />
                      </div>

                      <div>
                        <span className="rounded-xl border border-blue-400/15 bg-blue-500/10 px-3 py-1 text-[11px] font-bold text-blue-200">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-slate-300">
                      {cert.year}
                    </span>
                  </div>

                  <h2 className="mt-6 line-clamp-2 text-xl font-black leading-snug text-white group-hover:text-blue-100">
                    {cert.title}
                  </h2>

                  <p className="mt-2 text-sm font-bold text-blue-200">
                    {cert.issuer}
                  </p>

                  {cert.description && (
                    <p className="mt-5 line-clamp-4 text-sm leading-relaxed text-slate-400">
                      {cert.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold text-slate-500">View certificate</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-blue-400/30 group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filteredCertificates.length === 0 && (
            <div className="tech-card mt-10 rounded-[2rem] p-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                <Sparkles size={22} />
              </div>
              <h2 className="mt-5 text-xl font-black text-white">No certificates found</h2>
              <p className="mt-2 text-sm text-slate-400">Try another keyword or category.</p>
            </div>
          )}
        </section>
      </main>

      <BackToTop />
    </div>
  );
}
