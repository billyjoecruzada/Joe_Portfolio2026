// Billy Joe Cruzada Portfolio - Photography Full Collection Page
// Tiles render fully visible (no scroll reveal) so the masonry grid always shows content.
let photoGallery = [];
let filteredPhotos = [];

const PHOTO_CATEGORIES = {
    foodTravel: 'Food & Travel',
    portrait: 'Portrait',
    sports: 'Sports',
    street: 'Street'
};

function renderPhotoItems() {
    const grid = document.getElementById('photoGalleryGrid');
    if (!grid) return;

    grid.innerHTML = filteredPhotos.map((item, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        </div>
    `).join('');
}

function renderPhotoFilters() {
    const container = document.getElementById('photoFilters');
    if (!container) return;

    const tabs = ['all', ...Object.keys(PHOTO_CATEGORIES)];
    container.innerHTML = tabs.map(tab => {
        const label = tab === 'all' ? 'All' : PHOTO_CATEGORIES[tab];
        return `<button class="filter-pill ${tab === 'all' ? 'active' : ''}" data-cat="${tab}">${label}</button>`;
    }).join('');

    container.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            container.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            const cat = pill.dataset.cat;
            filteredPhotos = cat === 'all'
                ? photoGallery
                : photoGallery.filter(p => p.category === cat);

            renderPhotoItems();
        });
    });
}

function initPhotographyPage() {
    const grid = document.getElementById('photoGalleryGrid');
    if (!grid) return;

    photoGallery = portfolioData.gallery;
    filteredPhotos = photoGallery;

    renderPhotoFilters();
    renderPhotoItems();

    grid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const index = parseInt(item.dataset.index);
            if (filteredPhotos[index]) {
                openLightbox(index, filteredPhotos);
            }
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPhotographyPage);
} else {
    initPhotographyPage();
}