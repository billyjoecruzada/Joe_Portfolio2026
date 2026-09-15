"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/#work", label: "Work", key: "work", isHash: true },
  { href: "/#showcases", label: "Showcases", key: "showcases", isHash: true },
  { href: "/ai-videos", label: "AI Videos", key: "ai-videos", isHash: false },
  { href: "/ai-avatars-gallery", label: "AI Avatars", key: "ai-avatars", isHash: false },
  { href: "/#gallery", label: "Moodboard", key: "gallery", isHash: true },
  { href: "/#about", label: "About", key: "about", isHash: true },
  { href: "/#services", label: "Services", key: "services", isHash: true },
];

const PAGE_KEY: Record<string, string> = {
  "/ai-videos": "ai-videos",
  "/ai-avatars-gallery": "ai-avatars",
  "/photography-gallery": "gallery",
  "/graphic-design-gallery": "design",
};

export default function Navigation() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(isHome ? "work" : PAGE_KEY[pathname] ?? "");

  useEffect(() => {
    if (!isHome) {
      setActive(PAGE_KEY[pathname] ?? "");
      return;
    }
    const sections = document.querySelectorAll("section[id]");
    const handler = () => {
      let cur = "work";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 150) cur = s.getAttribute("id") || cur;
      });
      setActive(cur);
    };
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handler();
          ticking = false;
        });
        ticking = true;
      }
    };
    handler();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, pathname]);

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[1000] bg-[#2A2A2A] rounded-[50px] px-2 py-[14px] pl-6 flex items-center gap-2 shadow-[0_4px_30px_rgba(0,0,0,0.4)] max-[900px]:w-[calc(100%-48px)] max-[900px]:max-w-[500px] max-[900px]:justify-between max-[900px]:px-2 before:content-[''] before:absolute before:-inset-[2px] before:bg-[linear-gradient(135deg,#FF6B00,#FF1493)] before:rounded-[50px] before:-z-10">
      <Link href="/" className="font-[Poppins] font-extrabold text-xl mr-4 bg-[linear-gradient(135deg,#FF6B00,#FF1493)] bg-clip-text text-transparent max-[1100px]:text-lg max-[1100px]:mr-2.5">BJC</Link>
      <ul className={`flex items-center gap-2.5 list-none whitespace-nowrap max-[900px]:fixed max-[900px]:top-0 max-[900px]:left-0 max-[900px]:w-[280px] max-[900px]:h-screen max-[900px]:bg-[#252525] max-[900px]:flex-col max-[900px]:py-[100px] max-[900px]:px-8 max-[900px]:gap-6 max-[900px]:transition-[left] max-[900px]:duration-400 ${open ? "max-[900px]:left-0" : "max-[900px]:-left-full"}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.key} className="whitespace-nowrap">
            <Link
              href={item.href}
              onClick={() => setOpen(false)}
              className={`font-[Poppins] font-semibold text-[15px] text-white px-2 py-1 rounded inline-block relative transition-all max-[1100px]:text-[13px] max-[1100px]:px-1.5 hover:scale-110 ${active === item.key ? "scale-110 [text-shadow:0_0_20px_rgba(255,255,255,0.5)] after:w-[calc(100%-16px)] after:h-[3px] after:shadow-[0_0_8px_rgba(255,255,255,0.6)]" : ""} after:content-[''] after:absolute after:bottom-0 after:left-2 after:w-0 after:h-0.5 after:bg-white after:rounded-sm after:transition-[width]`}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li className="relative group">
          <Link href="/#contact" onClick={() => setOpen(false)} className="font-[Poppins] font-semibold text-[15px] text-white px-2 py-1 flex items-center gap-1 max-[1100px]:text-[13px]">Contact</Link>
          <div className="absolute top-full left-1/2 -translate-x-1/2 bg-[#252525] rounded-2xl p-4 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all mt-4 shadow-[0_8px_32px_rgba(0,0,0,0.3)] max-[900px]:static max-[900px]:translate-x-0 max-[900px]:shadow-none max-[900px]:bg-transparent max-[900px]:p-0 max-[900px]:pl-4 max-[900px]:mt-2">
            <a href="https://www.instagram.com/ezii_yooow" target="_blank" className="block px-4 py-3 rounded-lg font-medium hover:bg-[rgba(255,107,0,0.15)]">Instagram</a>
            <a href="https://linkedin.com/in/iam-billycruzada/" target="_blank" className="block px-4 py-3 rounded-lg font-medium hover:bg-[rgba(255,107,0,0.15)]">LinkedIn</a>
            <a href="https://behance.net/billyjoeCrzGraphx" target="_blank" className="block px-4 py-3 rounded-lg font-medium hover:bg-[rgba(255,107,0,0.15)]">Behance</a>
            <a href="mailto:billyjoecruzada12@gmail.com" className="block px-4 py-3 rounded-lg font-medium hover:bg-[rgba(255,107,0,0.15)]">Email Me</a>
          </div>
        </li>
      </ul>
      <button aria-label="Menu" onClick={() => setOpen((v) => !v)} className={`hidden max-[900px]:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 ${open ? "open" : ""}`}>
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-x-[5px] translate-y-[5px]" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 translate-x-[5px] -translate-y-[5px]" : ""}`} />
      </button>
    </nav>
  );
}
