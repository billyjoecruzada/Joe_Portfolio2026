"use client";
import { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface LightboxItem { src: string; title?: string; category?: string; tools?: string[]; tool?: string; }

interface LightboxState {
  items: LightboxItem[];
  index: number;
  title: string;
  tools: string[];
  open: boolean;
}

interface LightboxCtx {
  openLightbox: (index: number, items: LightboxItem[], title?: string, tools?: string[]) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
  state: LightboxState;
}

const Ctx = createContext<LightboxCtx | null>(null);

export function useLightbox() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLightbox outside provider");
  return c;
}

function isVideo(src: string) { return /\.(mov|mp4|webm)$/i.test(src); }

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<LightboxState>({ items: [], index: 0, title: "", tools: [], open: false });

  const openLightbox = useCallback((index: number, items: LightboxItem[], title?: string, tools?: string[]) => {
    setState({ items, index, title: title || "", tools: tools || [], open: true });
  }, []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const next = useCallback(() => setState((s) => ({ ...s, index: (s.index + 1) % s.items.length })), []);
  const prev = useCallback(() => setState((s) => ({ ...s, index: (s.index - 1 + s.items.length) % s.items.length })), []);

  useEffect(() => {
    if (!state.open) { document.body.style.overflow = ""; return; }
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [state.open, close, next, prev]);

  const cur = state.items[state.index];
  const curSrc = cur ? (cur.src || (cur as unknown as string)) : "";
  const curIsVideo = curSrc ? isVideo(curSrc) : false;
  const displayTools = cur ? (cur.tools || (cur.tool ? [cur.tool] : state.tools)) : state.tools;

  return (
    <Ctx.Provider value={{ openLightbox, close, next, prev, state }}>
      {children}
      {state.open && (
        <div className="fixed inset-0 bg-black/95 z-[2000] flex items-center justify-center p-10" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center">
            <button onClick={close} aria-label="Close" className="absolute -top-12 right-0 bg-transparent border-none text-white text-[32px] cursor-pointer p-2">×</button>
            <button onClick={prev} aria-label="Previous" className="absolute top-1/2 -translate-y-1/2 -left-[70px] max-[768px]:left-2.5 w-[50px] h-[50px] rounded-full bg-[#2A2A2A] text-white flex items-center justify-center hover:bg-[#E91E63]">‹</button>
            {curIsVideo ? (
              <video src={curSrc} controls autoPlay className="max-w-full max-h-[80vh] object-contain rounded-2xl" />
            ) : (
              <img src={curSrc} alt={cur?.title || ""} className="max-w-full max-h-[80vh] object-contain rounded-2xl" />
            )}
            <button onClick={next} aria-label="Next" className="absolute top-1/2 -translate-y-1/2 -right-[70px] max-[768px]:right-2.5 w-[50px] h-[50px] rounded-full bg-[#2A2A2A] text-white flex items-center justify-center hover:bg-[#E91E63]">›</button>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            {(cur?.title || state.title) && <div className="font-[Poppins] text-lg text-white text-center">{cur?.title || state.title}</div>}
            <div className="text-sm text-[#B0B0B0]">{state.index + 1} / {state.items.length}</div>
            {displayTools.length > 0 && (
              <div className="flex gap-2 flex-wrap justify-center mt-1">
                {displayTools.map((t) => <span key={t} className="bg-[#2A2A2A] text-[#FF6B00] px-3 py-1 rounded-full text-xs font-medium font-[Poppins]">{t}</span>)}
              </div>
            )}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
