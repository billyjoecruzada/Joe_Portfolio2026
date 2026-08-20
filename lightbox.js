// Billy Joe Cruzada Portfolio - Shared Lightbox Module
// Reuses the exact same lightbox markup/behavior on every page.

let currentGallery = [];
let currentGalleryIndex = 0;

let _lbImage = null;
let _lbVideo = null;
let _lbTitle = null;
let _lbCounter = null;
let _lbTools = null;
let _lbRoot = null;

function isVideoFile(src) {
    return /\.(mov|mp4|webm)$/i.test(src);
}

function setLightboxGallery(gallery) {
    currentGallery = gallery || [];
}

function _lightboxEls() {
    if (!_lbRoot) {
        _lbRoot = document.getElementById('lightbox');
        _lbImage = document.getElementById('lightboxImage');
        _lbVideo = document.getElementById('lightboxVideo');
        _lbTitle = document.getElementById('lightboxTitle');
        _lbCounter = document.getElementById('lightboxCounter');
        _lbTools = document.getElementById('lightboxTools');
    }
}

function openLightbox(index, gallery, title, tools) {
    _lightboxEls();
    if (!_lbRoot) return;
    setLightboxGallery(gallery);
    currentGalleryIndex = index;

    const currentSrc = currentGallery[currentGalleryIndex].src || currentGallery[currentGalleryIndex];

    if (isVideoFile(currentSrc)) {
        _lbImage.style.display = 'none';
        _lbVideo.style.display = 'block';
        _lbVideo.src = currentSrc;
        _lbVideo.play();
    } else {
        _lbVideo.style.display = 'none';
        _lbVideo.pause();
        _lbImage.style.display = 'block';
        _lbImage.src = currentSrc;
    }

    _lbTitle.textContent = title || '';
    _lbCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;

    const toolsArr = (tools || []).slice();
    if (toolsArr.length > 0) {
        _lbTools.innerHTML = toolsArr.map(tool => `<span class="lightbox-tool-badge">${tool}</span>`).join('');
        _lbTools.style.display = 'flex';
    } else {
        _lbTools.style.display = 'none';
    }

    _lbRoot.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    _lightboxEls();
    if (!_lbRoot) return;
    _lbRoot.classList.remove('active');
    if (_lbVideo) {
        _lbVideo.pause();
        _lbVideo.src = '';
    }
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    _lightboxEls();
    if (!_lbRoot) return;
    const currentItem = currentGallery[currentGalleryIndex];
    if (!currentItem) return;
    const currentSrc = currentItem.src || currentItem;

    if (isVideoFile(currentSrc)) {
        _lbImage.style.display = 'none';
        _lbVideo.style.display = 'block';
        _lbVideo.src = currentSrc;
        _lbVideo.play();
    } else {
        _lbVideo.style.display = 'none';
        _lbVideo.pause();
        _lbImage.style.display = 'block';
        _lbImage.src = currentSrc;
    }
    _lbCounter.textContent = `${currentGalleryIndex + 1} / ${currentGallery.length}`;

    if (currentItem.title) {
        _lbTitle.textContent = currentItem.title;
    }

    const itemTools = currentItem.tools || (currentItem.tool ? [currentItem.tool] : []);
    if (itemTools.length > 0) {
        _lbTools.innerHTML = itemTools.map(t => `<span class="lightbox-tool-badge">${t}</span>`).join('');
        _lbTools.style.display = 'flex';
    } else {
        _lbTools.style.display = 'none';
    }
}

function nextImage() {
    if (currentGallery.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGallery.length;
    updateLightboxContent();
}

function prevImage() {
    if (currentGallery.length === 0) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightboxContent();
}

function initLightbox() {
    _lightboxEls();
    if (!_lbRoot) return;

    const closeBtn = document.querySelector('.lightbox-close');
    const nextBtn = document.querySelector('.lightbox-next');
    const prevBtn = document.querySelector('.lightbox-prev');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);

    _lbRoot.addEventListener('click', (e) => {
        if (e.target === _lbRoot) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!_lbRoot.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLightbox);
} else {
    initLightbox();
}