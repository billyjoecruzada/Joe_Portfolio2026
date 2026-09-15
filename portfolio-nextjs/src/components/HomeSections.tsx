"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { defaultData, isVideoFile } from "@/lib/data";
import { useLightbox } from "@/components/Lightbox";
import BeforeAfter from "@/components/BeforeAfter";

export function Hero() {
  const { profile } = defaultData;
  const [hidden, setHidden] = useState(false);
  return (
    <section className="hero" id="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster="/Elements/Video/Fall-back-image_hyperlapse.jpg" preload="metadata">
        <source src="/Elements/Video/Hyperlapse.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="subtitle gradient-text" id="heroSubtitle">{profile.subtitle}</p>
            <h1>Hi, I&apos;m <span className="gradient-text">Billy Joe Cruzada</span></h1>
            <div className="bio-wrapper">
              {!hidden && <p className="bio" id="heroBio">{profile.bio}</p>}
              <button className="toggle-text-btn" onClick={() => setHidden((v) => !v)} aria-label="Toggle bio visibility">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </button>
            </div>
            <div className="hero-stats" id="heroStats">
              {profile.stats.map((s) => (
                <div key={s.label} className="stat">
                  <div className="stat-number">{s.number}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="hero-cta"><a href="#work" className="btn btn-primary">View My Work</a></div>
          </div>
          <div className="hero-image">
            <div className="profile-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.image} alt={profile.name} id="heroProfileImage" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Featured() {
  const { openLightbox } = useLightbox();
  return (
    <section className="featured" id="work">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Selected Projects</p>
          <h2 className="section-title">Featured Artworks</h2>
        </div>
        <div className="featured-grid" id="featuredGrid">
          {defaultData.featured.map((item, i) => (
            <div key={item.id} className="project-card" onClick={() => openLightbox(i, defaultData.featured.map((f) => ({ src: f.src, title: f.title })) as never)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.title} loading="lazy" />
              <div className="overlay"><h3>{item.title}</h3><span className="category">{item.category}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Showcases() {
  const { openLightbox } = useLightbox();
  const visible = defaultData.showcases.filter((s) => s.visible);
  return (
    <section className="showcases" id="showcases">
      <div className="container">
        <div className="section-header reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Project Showcases</h2>
        </div>
        <div className="showcases-grid" id="showcasesGrid">
          {visible.map((showcase) => {
            const imgs = showcase.images.filter((x) => !isVideoFile(x));
            const vids = showcase.images.filter(isVideoFile);
            const preview = imgs.length >= 3 ? imgs.slice(0, 3) : [...imgs, ...vids].slice(0, 4);
            return (
              <div key={showcase.id} className="showcase-card" onClick={() => openLightbox(0, showcase.images.map((src) => ({ src, title: showcase.title })) as never, showcase.title, showcase.tools)}>
                <div className="showcase-preview">
                  <div className={preview.length === 4 ? "showcase-grid-2x2 four" : "showcase-grid-2x2"}>
                    {preview.map((src) =>
                      isVideoFile(src) ? (
                        <video key={src} className="preview-tile preview-video" muted loop playsInline preload="metadata"><source src={src} /></video>
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={src} src={src} alt={showcase.title} className="preview-tile preview-img" loading="lazy" />
                      )
                    )}
                  </div>
                </div>
                <div className="showcase-title"><h3>{showcase.title}</h3><span>{showcase.category}</span>
                  {showcase.tools.length > 0 && <div className="showcase-tools">{showcase.tools.map((t) => <span key={t} className="showcase-tool-badge">{t}</span>)}</div>}
                </div>
              </div>
            );
          })}
        </div>
        <div className="section-cta reveal"><Link href="/graphic-design-gallery" className="btn btn-secondary">View Full Design Gallery <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></Link></div>
      </div>
    </section>
  );
}

export function ColorGrading() {
  const { openLightbox } = useLightbox();
  const cards = [
    { src: "/Elements/Video/Colorgrading/Color grading process 001.mov", poster: "/Elements/Video/Colorgrading/Thumbnail for - Color grading process 001.PNG", title: "Color Grading Process 001", tools: "DaVinci Resolve" },
    { src: "/Elements/Video/Colorgrading/Day to night.mov", poster: "/Elements/Video/Colorgrading/Thumbnail for - Day to night.jpg", title: "Day to Night", tools: "DaVinci Resolve" },
  ];
  return (
    <section className="video-edits" id="videoEdits">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">Video Editing</p><h2 className="section-title">Color Grading Projects</h2></div>
        <div className="video-grid">
          {cards.map((c, i) => (
            <div key={c.src} className="video-card reveal" data-video={c.src} data-title={c.title} data-tools={c.tools}
              onClick={() => openLightbox(i, cards.map((x) => ({ src: x.src, title: x.title, tools: [x.tools] })) as never, c.title, [c.tools])}
              onMouseEnter={(e) => { const v = e.currentTarget.querySelector("video") as HTMLVideoElement; if (v) { v.currentTime = 0; v.play().catch(() => {}); } }}
              onMouseLeave={(e) => { const v = e.currentTarget.querySelector("video") as HTMLVideoElement; if (v) { v.pause(); v.currentTime = 0; } }}>
              <video preload="metadata" poster={c.poster}><source src={c.src} type="video/quicktime" /></video>
              <div className="video-overlay"><button className="play-btn" aria-label="Play video">▶</button></div>
              <div className="video-info"><div className="video-title">{c.title}</div><div className="video-tools">{c.tools}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AIVideosPreview() {
  const { openLightbox } = useLightbox();
  const videos = defaultData.aiVideos.slice(0, 4);
  return (
    <section className="ai-videos" id="aiVideos">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">AI Generated</p><h2 className="section-title">AI Videos & Motion</h2></div>
        <div className="ai-video-grid" id="aiVideoGrid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" } as React.CSSProperties}>
          {videos.map((video, i) => (
            <div
              key={video.id}
              className={`ai-video-card ${video.ratio}`}
              onClick={() => openLightbox(i, videos.map((v) => ({ src: v.src, title: v.title, tools: [v.tool] })) as never, video.title, [video.tool])}
              onMouseEnter={(e) => { const v = e.currentTarget.querySelector("video") as HTMLVideoElement; if (v) { v.currentTime = 0; v.play().catch(() => {}); } }}
              onMouseLeave={(e) => { const v = e.currentTarget.querySelector("video") as HTMLVideoElement; if (v) { v.pause(); v.currentTime = 0; } }}
            >
              <video preload="metadata" muted loop playsInline><source src={video.src} type="video/mp4" /></video>
              <div className="video-overlay"><button className="play-btn" aria-label="Play video">▶</button></div>
              <div className="video-info"><div className="video-title">{video.title}</div><div className="video-tools">{video.tool}</div></div>
            </div>
          ))}
        </div>
        <div className="section-cta reveal"><Link href="/ai-videos" className="btn btn-secondary">View All Videos <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></Link></div>
      </div>
    </section>
  );
}

function TeaserGallery({ items, href, remaining }: { items: { src: string; title: string }[]; href: string; remaining: number }) {
  const { openLightbox } = useLightbox();
  const sharp = items.slice(0, 8);
  const blurred = items.slice(8, 14);
  const all = [...sharp, ...blurred];
  return (
    <div style={{ position: "relative" }}>
      <div className="gallery-grid">
        {all.map((item, idx) => {
          const isBlurred = idx >= 8;
          if (isBlurred) {
            return (
              <Link key={item.src + idx} href={href} className="gallery-item" style={{ filter: "blur(6px)", opacity: 0.65 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.src} alt={item.title} loading="lazy" />
              </Link>
            );
          }
          return (
            <div key={item.src + idx} className="gallery-item" onClick={() => openLightbox(idx, sharp.map((s) => ({ src: s.src, title: s.title })) as never)}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.title} loading="lazy" />
            </div>
          );
        })}
      </div>
      {blurred.length > 0 && remaining > 0 && (
        <Link href={href} style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "linear-gradient(135deg,#FF6B00,#FF1493)", color: "#fff", padding: "12px 24px", borderRadius: "50px", fontFamily: "Poppins", fontSize: "14px", fontWeight: 600, zIndex: 5, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}>+{remaining} more</Link>
      )}
    </div>
  );
}

export function AIAvatarsPreview() {
  const [preview, setPreview] = useState(() => defaultData.aiAvatars.slice(0, 14));
  useEffect(() => { setPreview([...defaultData.aiAvatars].sort(() => Math.random() - 0.5).slice(0, 14)); }, []);
  const remaining = Math.max(0, defaultData.aiAvatars.length - 8);
  return (
    <section className="gallery-section" id="aiAvatars">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">AI Generated</p><h2 className="section-title">AI Avatars</h2><p className="section-subtitle">Higgsfield | Seedream 4.5 | Nano Banana Pro</p></div>
        <TeaserGallery items={preview} href="/ai-avatars-gallery" remaining={remaining} />
        <div className="section-cta reveal"><Link href="/ai-avatars-gallery" className="btn btn-secondary">View All AI Avatars <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></Link></div>
      </div>
    </section>
  );
}

export function GalleryPreview() {
  const [preview, setPreview] = useState(() => defaultData.gallery.slice(0, 14));
  useEffect(() => { setPreview([...defaultData.gallery].sort(() => Math.random() - 0.5).slice(0, 14)); }, []);
  const remaining = Math.max(0, defaultData.gallery.length - 8);
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">Gallery</p><h2 className="section-title">Gallery & Moodboard</h2><p className="section-subtitle">Photography Collections</p></div>
        <TeaserGallery items={preview} href="/photography-gallery" remaining={remaining} />
        <div className="section-cta reveal"><Link href="/photography-gallery" className="btn btn-secondary">View Full Gallery <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg></Link></div>
      </div>
    </section>
  );
}

export function EditedPhotos() {
  return (
    <section className="edited-photos" id="editedPhotos">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">Photo Editing</p><h2 className="section-title">Edited Photos Samples</h2><p className="section-subtitle">Drag to compare before &amp; after</p></div>
        <div className="before-after-grid" id="beforeAfterGrid"><BeforeAfter items={defaultData.beforeAfter} /></div>
      </div>
    </section>
  );
}

export function About() {
  const { about, profile } = defaultData;
  const [hidden, setHidden] = useState(false);
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">About Me</p><h2 className="section-title">The Designer</h2></div>
        <div className="about-grid">
          <div className="about-image reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.aboutImage} alt={profile.name} id="aboutProfileImage" loading="lazy" />
          </div>
          <div className="about-content reveal reveal-delay-1">
            <p className="quote" id="aboutQuote">{about.quote}</p>
            <div className="bio-wrapper">
              {!hidden && <p id="aboutBio" style={{ whiteSpace: "pre-line" }}>{about.bio}</p>}
              <button className="toggle-text-btn" onClick={() => setHidden((v) => !v)} aria-label="Toggle bio visibility">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </button>
            </div>
            <p id="aboutLocation">{about.location}</p>
            <div className="hero-stats" id="aboutStats">
              {profile.stats.map((s) => (
                <div key={s.label} className="stat"><div className="stat-number">{s.number}</div><div className="stat-label">{s.label}</div></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">What I Do</p><h2 className="section-title">Services</h2></div>
        <div className="services-grid" id="servicesGrid">
          {defaultData.services.map((s) => (
            <div key={s.title} className="service-card">
              <div className="service-icon"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></div>
              <h3>{s.title}</h3><p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
