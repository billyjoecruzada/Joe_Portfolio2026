"use client";
import { useRef, useState } from "react";
import type { BeforeAfterPair } from "@/lib/data";

function BeforeAfterWidget({ item }: { item: BeforeAfterPair }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(75);
  const [dragging, setDragging] = useState(false);

  const updateFromX = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (!rect.width) return;
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.preventDefault();
    setDragging(true);
    updateFromX(e.clientX);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    updateFromX(e.clientX);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    setDragging(false);
    try { (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId); } catch {}
  };
  const onKeyDown = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 25 : 5;
    if (e.key === "ArrowRight") { e.preventDefault(); setPos((p) => Math.min(100, p + step)); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); setPos((p) => Math.max(0, p - step)); }
    else if (e.key === "Home") { e.preventDefault(); setPos(0); }
    else if (e.key === "End") { e.preventDefault(); setPos(100); }
  };

  return (
    <div className="overflow-hidden">
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`relative rounded-2xl overflow-hidden bg-[#2A2A2A] border border-[#2A2A2A] select-none touch-none cursor-ew-resize transition-[box-shadow,border-color] ${dragging ? "border-[rgba(255,107,0,0.6)] shadow-[0_16px_36px_rgba(0,0,0,0.35),0_0_24px_rgba(255,107,0,0.12)]" : "hover:border-[rgba(255,107,0,0.4)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35),0_0_24px_rgba(255,107,0,0.12)]"}`}
        style={{ touchAction: "none" } as React.CSSProperties}
      >
        <img src={item.after} alt={`${item.title} - After`} className="block w-full h-auto object-cover select-none" draggable={false} style={{ touchAction: "none" }} />
        <img src={item.before} alt={`${item.title} - Before`} className="absolute inset-0 w-full h-full object-cover select-none" draggable={false} style={{ clipPath: `inset(0 0 0 ${pos}%)`, touchAction: "none" }} />
        <span className="absolute top-3 right-3 font-[Poppins] text-[11px] font-bold tracking-widest px-3 py-1 rounded-full bg-[linear-gradient(135deg,#FF6B00,#FF1493)] text-white pointer-events-none z-10">AFTER</span>
        <span className="absolute top-3 left-3 font-[Poppins] text-[11px] font-bold tracking-widest px-3 py-1 rounded-full bg-[rgba(26,26,26,0.75)] text-white pointer-events-none z-10">BEFORE</span>
        <div
          role="slider"
          tabIndex={0}
          aria-label="Before and after comparison"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={onKeyDown}
          className="absolute top-0 bottom-0 w-0 pointer-events-none z-20 outline-none"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-[linear-gradient(135deg,#FF6B00,#FF1493)] shadow-[0_0_12px_rgba(255,107,0,0.6)]" />
          <div className={`absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#252525] border-2 border-[#FF6B00] flex items-center justify-center text-[#FF6B00] text-base shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform ${dragging ? "scale-110" : ""}`}>↔</div>
        </div>
      </div>
      <p className="text-center mt-3.5 font-[Poppins] text-[15px] font-semibold">{item.title}</p>
    </div>
  );
}

export default function BeforeAfter({ items }: { items: BeforeAfterPair[] }) {
  if (!items.length) return null;
  return (
    <div className="grid grid-cols-2 gap-6 max-[768px]:grid-cols-1">
      {items.map((item) => <BeforeAfterWidget key={item.id} item={item} />)}
    </div>
  );
}
