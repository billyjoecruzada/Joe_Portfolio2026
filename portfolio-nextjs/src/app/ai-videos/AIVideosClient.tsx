"use client";
import { defaultData } from "@/lib/data";
import { useLightbox } from "@/components/Lightbox";
export default function AIVideosClient() {
  const { openLightbox } = useLightbox();
  const videos = defaultData.aiVideos;
  return (
    <section className="ai-videos page-top" id="aiVideos">
      <div className="container">
        <div className="section-header reveal"><p className="section-label">AI Generated</p><h2 className="section-title">AI Videos & Motion</h2><p className="section-subtitle">Higgsfield | Seedance | Kling | ComfyUI workflows</p></div>
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
      </div>
    </section>
  );
}
