"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Kembali ke atas"
      className={[
        "fixed bottom-6 right-6 z-50",
        "h-12 w-12 rounded-2xl",
        "border border-slate-200/70 bg-white/80 shadow-md backdrop-blur",
        "grid place-items-center",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:bg-white hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-blue-200/70",
      ].join(" ")}
    >
      <ArrowUp size={18} className="text-slate-700" />
    </button>
  );
}
