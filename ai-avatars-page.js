// Billy Joe Cruzada Portfolio - AI Avatars Full Collection Page
function initAIAvatarsPage() {
    const grid = document.getElementById('aiAvatarsGalleryGrid');
    if (!grid) return;

    const avatars = [...portfolioData.aiAvatars].sort(() => Math.random() - 0.5);

    grid.innerHTML = avatars.map((item, index) => `
        <div class="gallery-item reveal reveal-delay-${(index % 4) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        </div>
    `).join('');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = parseInt(item.dataset.index);
            if (avatars[index]) {
                openLightbox(index, avatars);
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIAvatarsPage);
} else {
    initAIAvatarsPage();
}