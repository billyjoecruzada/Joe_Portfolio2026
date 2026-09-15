"use client";
import { useState, useMemo } from "react";
import { defaultData } from "@/lib/data";
import { useLightbox } from "@/components/Lightbox";
import FilterTabs from "@/components/FilterTabs";
const CATS = [
  { key: "all", label: "All" },
  { key: "foodTravel", label: "Food & Travel" },
  { key: "portrait", label: "Portrait" },
  { key: "sports", label: "Sports" },
  { key: "street", label: "Street" },
];
export default function PhotoGalleryClient() {
  const [active, setActive] = useState("all");
  const { openLightbox } = useLightbox();
  const filtered = useMemo(() => (active === "all" ? defaultData.gallery : defaultData.gallery.filter((g) => g.category === active)), [active]);
  return (
    <section className="gallery-section page-top" id="photographyGallery">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">Gallery & Moodboard</p><h2 className="section-title">Photography Gallery</h2><p className="section-subtitle">Food & Travel · Portrait · Sports · Street</p></div>
        <FilterTabs categories={CATS.map((c) => c.label)} active={CATS.find((c) => c.key === active)?.label || "All"} onChange={(label) => setActive(CATS.find((c) => c.label === label)?.key || "all")} />
        <div className="gallery-grid" id="photoGalleryGrid">
          {filtered.map((item, idx) => (
            <div key={item.id} className="gallery-item" onClick={() => openLightbox(idx, filtered.map((f) => ({ src: f.src, title: f.title })) as never)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
