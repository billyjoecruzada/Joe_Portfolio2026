// Billy Joe Cruzada Portfolio - AI Videos Full Collection Page
function initAIVideosPage() {
    const grid = document.getElementById('aiVideoGrid');
    if (!grid) return;

    const videos = portfolioData.aiVideos;

    grid.innerHTML = videos.map((video, index) => `
        <div class="ai-video-card ${video.ratio} reveal reveal-delay-${(index % 3) + 1}"
             data-index="${index}"
             data-video="${video.src}"
             data-title="${video.title}"
             data-tools="${video.tool}">
            <video preload="metadata" muted loop playsinline>
                <source src="${video.src}" type="video/mp4">
            </video>
            <div class="video-overlay">
                <button class="play-btn" aria-label="Play video">▶</button>
            </div>
            <div class="video-info">
                <div class="video-title">${video.title}</div>
                <div class="video-tools">${video.tool}</div>
            </div>
        </div>
    `).join('');

    grid.querySelectorAll('video').forEach(v => {
        v.addEventListener('loadedmetadata', function() {
            this.currentTime = 0.01;
        });
        v.addEventListener('seeked', function() {
            this.pause();
        }, { once: true });
    });

    grid.querySelectorAll('.ai-video-card').forEach((card, index) => {
        const video = card.querySelector('video');

        card.addEventListener('mouseenter', () => {
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
        });

        card.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });

        card.addEventListener('click', () => {
            const videoData = videos[index];
            if (videoData) {
                openLightbox(index, videos, videoData.title, [videoData.tool]);
            }
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIVideosPage);
} else {
    initAIVideosPage();
}