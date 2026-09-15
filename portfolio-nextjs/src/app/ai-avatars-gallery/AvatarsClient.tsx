"use client";
import { defaultData } from "@/lib/data";
import { useLightbox } from "@/components/Lightbox";
export default function AvatarsClient() {
  const { openLightbox } = useLightbox();
  const avatars = defaultData.aiAvatars;
  return (
    <section className="gallery-section page-top" id="aiAvatarsGallery">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">AI Generated</p><h2 className="section-title">AI Avatars Gallery</h2><p className="section-subtitle">Higgsfield | Seedream 4.5 | Nano Banana Pro</p></div>
        <div className="gallery-grid" id="aiAvatarsGalleryGrid">
          {avatars.map((item, idx) => (
            <div key={item.id} className="gallery-item" onClick={() => openLightbox(idx, avatars.map((a) => ({ src: a.src, title: a.title })) as never)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.title} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
