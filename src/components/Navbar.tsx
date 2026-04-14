"use client";

import { useEffect, useMemo, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { getContent, Lang } from "@/data/content";

type NavItem = { label: string; href: string };

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const content = getContent(lang);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: content.labels.navHome, href: "#beranda" },
      { label: content.labels.navAbout, href: "#tentang" },
      { label: content.labels.navSkills, href: "#keahlian" },
      { label: content.labels.navExperience, href: "#pengalaman" },
      { label: content.labels.navProjects, href: "#proyek" },
      { label: content.labels.navCertificates, href: "#sertifikat" },
      { label: content.labels.navContact, href: "#kontak" },
    ],
    [content]
  );

  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [active, setActive] = useState<string>("#beranda");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const hero = document.getElementById("beranda");

    const onScroll = () => {
      const heroBottom = hero ? hero.offsetTop + hero.offsetHeight : window.innerHeight;
      setPastHero(window.scrollY + 88 >= heroBottom);

      const ids = navItems.map((n) => n.href).filter((h) => h.startsWith("#"));
      let current = ids[0] || "#beranda";

      for (const id of ids) {
        const el = document.querySelector(id) as HTMLElement | null;
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 140) current = id;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems]);

  const shellClass = pastHero
    ? "border-slate-200/70 bg-white/70 text-slate-900 shadow-md"
    : "border-white/10 bg-slate-950/30 text-white shadow-sm";

  const linkBase = pastHero ? "text-slate-700 hover:text-slate-950" : "text-white/80 hover:text-white";
  const linkActive = pastHero ? "text-blue-700" : "text-white";

  const cvBtnClass = pastHero
    ? "bg-slate-950 text-white hover:bg-slate-900 border-slate-900/10"
    : "bg-white/10 text-white hover:bg-white/15 border-white/15";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className={`mt-4 rounded-2xl border backdrop-blur-md transition-all duration-200 ${shellClass}`}>
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#beranda" className="text-lg font-extrabold tracking-tight">
              <span className={pastHero ? "text-blue-600" : "text-blue-400"}>Asraf </span>
              <span className={pastHero ? "text-slate-900" : "text-white"}>Ayyasi</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
              {navItems.map((it) => (
                <a
                  key={it.href}
                  href={it.href}
                  className={`transition ${active === it.href ? linkActive : linkBase}`}
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <div
                className={`hidden md:flex items-center rounded-xl border p-1 ${
                  pastHero ? "border-slate-200/70 bg-white/60" : "border-white/15 bg-white/5"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    lang === "en"
                      ? "bg-blue-600 text-white"
                      : pastHero
                      ? "text-slate-700"
                      : "text-white/80"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                    lang === "id"
                      ? "bg-blue-600 text-white"
                      : pastHero
                      ? "text-slate-700"
                      : "text-white/80"
                  }`}
                >
                  ID
                </button>
              </div>

              <a
                href={content.cta?.cv || "#"}
                target={content.cta?.cv ? "_blank" : undefined}
                rel={content.cta?.cv ? "noreferrer" : undefined}
                className={`hidden md:inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${cvBtnClass}`}
              >
                {content.labels.downloadCv} <Download size={16} />
              </a>

              <button
                type="button"
                className={`md:hidden rounded-xl border p-2 transition ${
                  pastHero ? "border-slate-200/70 bg-white/60 text-slate-900" : "border-white/10 bg-slate-950/30 text-white"
                }`}
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {open && (
            <div className={`md:hidden border-t px-4 py-3 transition ${pastHero ? "border-slate-200/70" : "border-white/10"}`}>
              <div className="mb-3 flex items-center rounded-xl border border-slate-200/70 bg-white/60 p-1">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    lang === "en" ? "bg-blue-600 text-white" : "text-slate-700"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    lang === "id" ? "bg-blue-600 text-white" : "text-slate-700"
                  }`}
                >
                  ID
                </button>
              </div>

              <nav className={`flex flex-col gap-3 text-sm font-medium ${pastHero ? "text-slate-700" : "text-white/80"}`}>
                {navItems.map((it) => (
                  <a
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className={`py-1 transition ${active === it.href ? (pastHero ? "text-blue-700" : "text-white") : ""}`}
                  >
                    {it.label}
                  </a>
                ))}

                <a
                  href={content.cta?.cv || "#"}
                  target={content.cta?.cv ? "_blank" : undefined}
                  rel={content.cta?.cv ? "noreferrer" : undefined}
                  className={`mt-2 inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition ${cvBtnClass}`}
                >
                  {content.labels.downloadCv} <Download size={16} />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}