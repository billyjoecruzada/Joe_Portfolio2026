import { defaultData } from "@/lib/data";
import type { ToolGroup } from "@/lib/data";

function Group({ group }: { group: ToolGroup }) {
  const key = group.group.toLowerCase().includes("generative") ? "ai" : group.group.toLowerCase().includes("graphic") ? "design" : "video";
  return (
    <div data-group={key} className={key === "video" ? "mt-8 pt-8 border-t border-white/10 max-[1024px]:mt-10 max-[1024px]:pt-0 max-[1024px]:border-0" : key === "design" ? "max-[1024px]:mt-10" : ""}>
      <h3 className="font-[Poppins] text-[15px] font-semibold tracking-[0.08em] uppercase text-[#FF6B00] mb-6">{group.group}</h3>
      <div className="flex flex-col gap-3.5">
        {group.tools.map((tool) => (
          <div key={tool.name} className="flex items-center gap-4 px-[18px] py-3.5 bg-[#252525] border border-transparent rounded-[50px] hover:-translate-y-1 hover:border-[rgba(255,107,0,0.45)] hover:bg-[#2A2A2A] hover:shadow-[0_12px_30px_rgba(0,0,0,0.3),0_0_24px_rgba(255,107,0,0.18)] transition-all">
            <div className="shrink-0 w-[52px] h-[52px] rounded-full bg-[#2A2A2A] flex items-center justify-center overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {tool.logo ? <img src={tool.logo} alt={tool.name} className="w-[30px] h-[30px] object-contain" loading="lazy" /> : <div className="w-[30px] h-[30px] rounded-full bg-[linear-gradient(135deg,#FF6B00,#FF1493)] flex items-center justify-center text-white text-xs font-bold">{tool.badge || tool.name.slice(0, 2).toUpperCase()}</div>}
            </div>
            <div className="min-w-0">
              <div className="text-[15px] font-semibold text-white">{tool.name}</div>
              <div className="text-[13px] text-[#B0B0B0] leading-[1.45]">{tool.purpose}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ToolsSection() {
  const aiGroup = defaultData.tools.find((g) => g.group.toLowerCase().includes("generative"));
  const rightGroups = defaultData.tools.filter((g) => !g.group.toLowerCase().includes("generative"));
  return (
    <section className="bg-[#1A1A1A] pb-[60px] py-[100px] max-[768px]:py-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-12">
          <p className="font-[Poppins] text-xs font-medium uppercase tracking-[0.15em] text-[#FF6B00] mb-3">Tools & Skillsets</p>
          <h2 className="text-[clamp(32px,5vw,48px)] font-bold relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-[60px] after:h-1 after:bg-[linear-gradient(135deg,#FF6B00,#FF1493)] after:rounded-sm">Tools & Skillsets</h2>
        </div>
        <div className="flex items-start gap-10 max-[1024px]:flex-col max-[1024px]:gap-0">
          <div className="flex-1 min-w-0 flex flex-col pr-10 border-r border-white/10 max-[1024px]:pr-0 max-[1024px]:border-r-0 max-[1024px]:flex-none max-[1024px]:w-full">
            {aiGroup && <Group group={aiGroup} />}
          </div>
          <div className="flex-1 min-w-0 flex flex-col pl-10 border-l border-white/10 max-[1024px]:pl-0 max-[1024px]:border-l-0 max-[1024px]:flex-none max-[1024px]:w-full">
            {rightGroups.map((g) => <Group key={g.group} group={g} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
