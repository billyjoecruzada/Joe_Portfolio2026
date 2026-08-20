// Billy Joe Cruzada Portfolio - Graphic Design Full Collection Page
// Tiles render fully visible (no scroll reveal) so the masonry grid always shows content.
let designItems = [];
let filteredItems = [];

function buildDesignItems() {
    const items = [];
    portfolioData.showcases.forEach(showcase => {
        if (showcase.visible === false) return;
        showcase.images.forEach(src => {
            items.push({
                src,
                title: showcase.title,
                category: showcase.category,
                tools: showcase.tools || []
            });
        });
    });
    return items;
}

function renderDesignItems() {
    const grid = document.getElementById('designGalleryGrid');
    if (!grid) return;

    grid.innerHTML = filteredItems.map((item, index) => {
        const isVideo = isVideoFile(item.src);
        const badge = item.tools.length > 0
            ? `<div class="lightbox-tool-badge">${item.tools.join(' · ')}</div>`
            : '';
        const infoBar = `
            <div class="design-tile-info">
                <span class="design-tile-title">${item.title}</span>
                <span class="design-tile-category">${item.category}</span>
                ${badge}
            </div>
        `;

        if (isVideo) {
            return `
                <div class="grid-video-tile design-tile" data-index="${index}">
                    <video preload="metadata" muted loop playsinline>
                        <source src="${item.src}" type="${/\.mov$/i.test(item.src) ? 'video/quicktime' : 'video/mp4'}">
                    </video>
                    <div class="video-overlay">
                        <button class="play-btn" aria-label="Play video">▶</button>
                    </div>
                    ${infoBar}
                </div>
            `;
        }

        return `
            <div class="gallery-item design-tile" data-index="${index}">
                <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
                ${infoBar}
            </div>
        `;
    }).join('');

    // Show first frame as thumbnail for video tiles.
    grid.querySelectorAll('.grid-video-tile video').forEach(v => {
        v.addEventListener('loadedmetadata', function() {
            this.currentTime = 0.01;
        });
        v.addEventListener('seeked', function() {
            this.pause();
        }, { once: true });
    });

    // Hover-to-play.
    grid.querySelectorAll('.grid-video-tile').forEach(tile => {
        const video = tile.querySelector('video');
        tile.addEventListener('mouseenter', () => {
            if (video) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
        });
        tile.addEventListener('mouseleave', () => {
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        });
    });
}

function renderDesignFilters() {
    const container = document.getElementById('designFilters');
    if (!container) return;

    const categories = ['all', ...Array.from(new Set(designItems.map(item => item.category)))];
    container.innerHTML = categories.map(cat => `
        <button class="filter-pill ${cat === 'all' ? 'active' : ''}" data-cat="${cat}">${cat === 'all' ? 'All' : cat}</button>
    `).join('');

    container.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const cat = pill.dataset.cat;
            filteredItems = cat === 'all'
                ? designItems
                : designItems.filter(item => item.category === cat);

            renderDesignItems();
        });
    });
}

function initDesignGalleryPage() {
    const grid = document.getElementById('designGalleryGrid');
    if (!grid) return;

    designItems = buildDesignItems();
    filteredItems = designItems;

    renderDesignFilters();
    renderDesignItems();

    grid.addEventListener('click', (e) => {
        const tile = e.target.closest('.grid-video-tile');
        if (tile) {
            const index = parseInt(tile.dataset.index);
            const item = filteredItems[index];
            if (item) openLightbox(index, filteredItems, item.title, item.tools);
            return;
        }

        const item = e.target.closest('.design-tile');
        if (item) {
            const index = parseInt(item.dataset.index);
            const designItem = filteredItems[index];
            if (designItem) openLightbox(index, filteredItems, designItem.title, designItem.tools);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDesignGalleryPage);
} else {
    initDesignGalleryPage();
}