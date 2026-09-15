"use client";
export default function FilterTabs({ categories, active, onChange }: { categories: string[]; active: string; onChange: (c: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`font-[Poppins] text-[13px] font-semibold px-[22px] py-2.5 rounded-[50px] border cursor-pointer transition-all ${active === cat ? "bg-[linear-gradient(135deg,#FF6B00,#FF1493)] text-white border-transparent shadow-[0_8px_24px_rgba(255,107,0,0.35)] -translate-y-0.5" : "bg-[#2A2A2A] text-[#B0B0B0] border-[#2A2A2A] hover:text-white hover:border-[rgba(255,107,0,0.5)]"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
