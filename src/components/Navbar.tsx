"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { getContent, Lang } from "@/data/content";

type NavItem = {
  label: string;
  href: string;
  key: string;
  hash?: string;
};

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const pathname = usePathname();
  const content = getContent(lang);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: content.labels.navHome, href: "/#beranda", key: "#beranda", hash: "#beranda" },
      { label: content.labels.navAbout, href: "/#tentang", key: "#tentang", hash: "#tentang" },
      { label: content.labels.navSkills, href: "/#keahlian", key: "#keahlian", hash: "#keahlian" },
      { label: content.labels.navExperience, href: "/#pengalaman", key: "#pengalaman", hash: "#pengalaman" },
      { label: content.labels.navProjects, href: "/projects", key: "/projects" },
      { label: content.labels.navCertificates, href: "/certificates", key: "/certificates" },
      { label: content.labels.navContact, href: "/#kontak", key: "#kontak", hash: "#kontak" },
    ],
    [content]
  );

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(["/projects", "/certificates"].includes(pathname || "") ? pathname || "#beranda" : "#beranda");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      if (pathname !== "/") {
        setActive(pathname || "/");
        return;
      }

      const hashes = navItems.map((item) => item.hash).filter(Boolean) as string[];
      let current = hashes[0] || "#beranda";

      for (const hash of hashes) {
        const el = document.querySelector(hash) as HTMLElement | null;
        if (!el) continue;

        const top = el.getBoundingClientRect().top;
        if (top <= 140) current = hash;
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [navItems, pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`mt-4 rounded-2xl border border-white/10 bg-slate-950/70 text-white backdrop-blur-xl transition-all duration-300 ${
            scrolled ? "shadow-2xl shadow-blue-950/30" : "shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3">
            <a href="/#beranda" className="group flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/10 text-lg font-black text-blue-300 shadow-lg shadow-blue-950/30">
                A
              </span>

              <div className="leading-tight">
                <p className="font-space text-base font-bold tracking-tight text-white">
                  Asraf Ayyasi
                </p>
                <p className="hidden text-[10px] uppercase tracking-[0.28em] text-slate-500 sm:block">
                  Portfolio
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
              {navItems.map((item) => {
                const isActive = active === item.key;

                return (
                  <a
                    key={item.key}
                    href={item.href}
                    className={`relative transition ${
                      isActive ? "text-blue-300" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-400 shadow-[0_0_16px_rgba(96,165,250,0.8)]" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden items-center rounded-xl border border-white/10 bg-white/[0.04] p-1 md:flex">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    lang === "en" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" : "text-slate-400 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    lang === "id" ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25" : "text-slate-400 hover:text-white"
                  }`}
                >
                  ID
                </button>
              </div>

              <a
                href={content.cta?.cv || "#"}
                target={content.cta?.cv ? "_blank" : undefined}
                rel={content.cta?.cv ? "noreferrer" : undefined}
                className="hidden items-center gap-2 rounded-xl border border-blue-400/25 bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 md:inline-flex"
              >
                {content.labels.downloadCv}
                <Download size={16} />
              </a>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] p-2 text-white transition hover:bg-white/[0.08] lg:hidden"
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 pb-4 pt-3 lg:hidden">
              <div className="mb-4 flex items-center rounded-xl border border-white/10 bg-white/[0.04] p-1 md:hidden">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold transition ${
                    lang === "en" ? "bg-blue-600 text-white" : "text-slate-400"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs font-bold transition ${
                    lang === "id" ? "bg-blue-600 text-white" : "text-slate-400"
                  }`}
                >
                  ID
                </button>
              </div>

              <nav className="flex flex-col gap-2 text-sm font-medium">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 transition ${
                      active === item.key ? "bg-blue-500/10 text-blue-300" : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}

                <a
                  href={content.cta?.cv || "#"}
                  target={content.cta?.cv ? "_blank" : undefined}
                  rel={content.cta?.cv ? "noreferrer" : undefined}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  {content.labels.downloadCv}
                  <Download size={16} />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
