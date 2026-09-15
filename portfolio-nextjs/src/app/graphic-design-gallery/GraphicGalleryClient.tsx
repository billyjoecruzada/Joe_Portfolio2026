"use client";
import { useState, useMemo } from "react";
import { defaultData, isVideoFile } from "@/lib/data";
import { useLightbox } from "@/components/Lightbox";
import FilterTabs from "@/components/FilterTabs";
const CATS = ["All", "Food Product Design", "Health & Wellness", "Print", "Shopify", "AI UGC Ad", "Jewelries & Accessories"];
export default function GraphicGalleryClient() {
  const [active, setActive] = useState("All");
  const { openLightbox } = useLightbox();
  const items = useMemo(() => {
    const out: { src: string; title: string; category: string; tools: string[] }[] = [];
    defaultData.showcases.forEach((s) => { if (!s.visible) return; s.images.forEach((src) => out.push({ src, title: s.title, category: s.category, tools: s.tools })); });
    return out;
  }, []);
  const filtered = useMemo(() => (active === "All" ? items : items.filter((x) => x.category === active)), [active, items]);
  return (
    <section className="gallery-section page-top" id="designGallery">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">Featured Artworks & Showcases</p><h2 className="section-title">Graphic Design Gallery</h2><p className="section-subtitle">Every design asset across all projects</p></div>
        <FilterTabs categories={CATS} active={active} onChange={setActive} />
        <div className="gallery-grid" id="designGalleryGrid">
          {filtered.map((item, idx) => (
            <div
              key={item.src + idx}
              className={isVideoFile(item.src) ? "grid-video-tile" : "gallery-item design-tile"}
              onClick={() => openLightbox(idx, filtered.map((f) => ({ src: f.src, title: f.title, tools: f.tools })) as never, item.title, item.tools)}
              onMouseEnter={(e) => { const v = e.currentTarget.querySelector("video") as HTMLVideoElement; if (v) { v.currentTime = 0; v.play().catch(() => {}); } }}
              onMouseLeave={(e) => { const v = e.currentTarget.querySelector("video") as HTMLVideoElement; if (v) { v.pause(); v.currentTime = 0; } }}
            >
              {isVideoFile(item.src) ? (
                <>
                  <video preload="metadata" muted loop playsInline><source src={item.src} /></video>
                  <div className="video-overlay"><button className="play-btn" aria-label="Play video">▶</button></div>
                </>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.src} alt={item.title} loading="lazy" />
              )}
              <div className="design-tile-info"><span className="design-tile-title">{item.title}</span><span className="design-tile-category">{item.category}</span>{item.tools.length > 0 && <span className="lightbox-tool-badge">{item.tools.join(" · ")}</span>}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
