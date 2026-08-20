// Billy Joe Cruzada Portfolio - Homepage Logic (main.js)
// Depends on data.js, lightbox.js, nav.js, before-after.js
// Note: `currentGallery` lives in lightbox.js (shared across grids on this page).

let currentAIAvatars = [];

// DOM Elements
const heroSubtitle = document.getElementById('heroSubtitle');
const heroBio = document.getElementById('heroBio');
const heroStats = document.getElementById('heroStats');
const aboutProfileImage = document.getElementById('aboutProfileImage');
const aboutQuote = document.getElementById('aboutQuote');
const aboutBio = document.getElementById('aboutBio');
const aboutLocation = document.getElementById('aboutLocation');
const aboutStats = document.getElementById('aboutStats');
const featuredGrid = document.getElementById('featuredGrid');
const aiAvatarsGrid = document.getElementById('aiAvatarsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const servicesGrid = document.getElementById('servicesGrid');
const showcasesGrid = document.getElementById('showcasesGrid');
const beforeAfterGrid = document.getElementById('beforeAfterGrid');
const toolsLayout = document.getElementById('toolsLayout');
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const nav = document.querySelector('.floating-nav');
const sections = document.querySelectorAll('section');

function getRandomGallery(pool) {
    return [...pool].sort(() => Math.random() - 0.5);
}

// Render Functions
function renderStats(el, stats) {
    if (!el || !stats || stats.length === 0) return;
    el.innerHTML = stats.map(s => `
        <div class="stat">
            <div class="stat-number">${s.number}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
}

function renderProfile() {
    if (heroSubtitle && portfolioData.profile.subtitle) heroSubtitle.textContent = portfolioData.profile.subtitle;
    if (heroBio) heroBio.textContent = portfolioData.profile.bio;
    renderStats(heroStats, portfolioData.profile.stats);
    if (aboutProfileImage && portfolioData.about.aboutImage) aboutProfileImage.src = portfolioData.about.aboutImage;
    if (aboutQuote && portfolioData.about.quote) aboutQuote.textContent = portfolioData.about.quote;
    if (aboutBio && portfolioData.about.bio) aboutBio.innerHTML = portfolioData.about.bio.replace(/\n/g, '<br>');
    if (aboutLocation && portfolioData.about.location) aboutLocation.textContent = portfolioData.about.location;
    renderStats(aboutStats, portfolioData.profile.stats);

    if (portfolioData.about.bioVisible === false) {
        heroBio.classList.add('hidden');
        aboutBio.classList.add('hidden');
        document.getElementById('toggleHeroBio')?.classList.add('hidden-text');
        document.getElementById('toggleAboutBio')?.classList.add('hidden-text');
    }
}

function renderSocial() {
    const instagramLink = document.getElementById('socialInstagram');
    const linkedinLink = document.getElementById('socialLinkedin');
    const behanceLink = document.getElementById('socialBehance');
    const emailLink = document.getElementById('socialEmail');

    if (instagramLink) instagramLink.href = portfolioData.social.instagram;
    if (linkedinLink) linkedinLink.href = portfolioData.social.linkedin;
    if (behanceLink) behanceLink.href = portfolioData.social.behance;
    if (emailLink) emailLink.href = `mailto:${portfolioData.social.email}`;
}

function renderFeatured() {
    if (!featuredGrid) return;
    featuredGrid.innerHTML = portfolioData.featured.map((item, index) => `
        <div class="project-card reveal reveal-delay-${(index % 5) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="overlay">
                <h3>${item.title}</h3>
                <span class="category">${item.category}</span>
            </div>
        </div>
    `).join('');

    observeReveals(featuredGrid);
}

function renderShowcases() {
    if (!showcasesGrid) return;
    const visibleShowcases = portfolioData.showcases.filter(s => s.visible);

    if (visibleShowcases.length === 0) {
        showcasesGrid.innerHTML = '<p style="color: var(--text-secondary); text-align: center; grid-column: 1/-1;">No showcases available.</p>';
        return;
    }

    showcasesGrid.innerHTML = visibleShowcases.map((showcase, index) => {
        const imageItems = showcase.images.filter(img => !isVideoFile(img));
        const videoItems = showcase.images.filter(img => isVideoFile(img));
        let previewItems;
        if (imageItems.length >= 3) {
            previewItems = imageItems.slice(0, 3);
        } else {
            previewItems = [...imageItems, ...videoItems].slice(0, 4);
        }
        const gridClass = previewItems.length === 4 ? 'showcase-grid-2x2 four' : (previewItems.length === 3 ? 'showcase-grid-2x2' : '');
        const toolsHtml = showcase.tools && showcase.tools.length > 0
            ? `<div class="showcase-tools">${showcase.tools.map(t => `<span class="showcase-tool-badge">${t}</span>`).join('')}</div>`
            : '';

        return `
            <div class="showcase-card reveal reveal-delay-${(index % 3) + 1}" data-index="${index}">
                <div class="showcase-preview" style="position: relative;">
                    <div class="${gridClass}">
                        ${previewItems.map((item, i) => isVideoFile(item) ? `
                            <video class="preview-tile preview-video" data-img-index="${i}" muted loop playsinline preload="metadata">
                                <source src="${item}" type="${/\.mov$/i.test(item) ? 'video/quicktime' : (/\.webm$/i.test(item) ? 'video/webm' : 'video/mp4')}">
                            </video>
                        ` : `
                            <img src="${item}" alt="${showcase.title}" class="preview-tile preview-img" data-img-index="${i}" loading="lazy" decoding="async">
                        `).join('')}
                    </div>
                </div>
                <div class="showcase-title">
                    <h3>${showcase.title}</h3>
                    <span>${showcase.category}</span>
                    ${toolsHtml}
                </div>
            </div>
        `;
    }).join('');

    showcasesGrid.querySelectorAll('.preview-video').forEach(v => {
        v.addEventListener('loadedmetadata', function() {
            this.currentTime = 0.01;
        });
        v.addEventListener('seeked', function() {
            this.pause();
        }, { once: true });
    });

    observeReveals(showcasesGrid);
}

function renderGallery() {
    if (!galleryGrid) return;
    const shuffledGallery = getRandomGallery(portfolioData.gallery);
    currentGallery = shuffledGallery;
    const initialCount = 8;

    galleryGrid.innerHTML = shuffledGallery.slice(0, initialCount).map((item, index) => `
        <div class="gallery-item reveal reveal-delay-${(index % 4) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        </div>
    `).join('');

    observeReveals(galleryGrid);

    // Remove any legacy in-place expansion controls (replaced by the full-gallery CTA link).
    const existingTeasers = galleryGrid.parentNode.querySelector('.gallery-teasers');
    if (existingTeasers) existingTeasers.remove();
    const existingWrapper = galleryGrid.parentNode.querySelector('.gallery-show-more');
    if (existingWrapper) existingWrapper.remove();
}

function renderAIAvatars() {
    if (!aiAvatarsGrid) return;
    const shuffledAvatars = getRandomGallery(portfolioData.aiAvatars);
    currentAIAvatars = shuffledAvatars;
    const initialCount = 8;

    aiAvatarsGrid.innerHTML = shuffledAvatars.slice(0, initialCount).map((item, index) => `
        <div class="gallery-item reveal reveal-delay-${(index % 4) + 1}" data-index="${index}">
            <img src="${item.src}" alt="${item.title}" loading="lazy" decoding="async">
        </div>
    `).join('');

    observeReveals(aiAvatarsGrid);

    const existingTeasers = document.querySelector('.gallery-teasers-ai');
    if (existingTeasers) existingTeasers.remove();
    const existingWrapper = document.querySelector('.gallery-show-more-ai');
    if (existingWrapper) existingWrapper.remove();
}

function renderAIVideos() {
    const aiVideoGrid = document.getElementById('aiVideoGrid');
    if (!aiVideoGrid) return;

    const videos = portfolioData.aiVideos.slice(0, 4);

    aiVideoGrid.innerHTML = videos.map((video, index) => `
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

    aiVideoGrid.querySelectorAll('video').forEach(v => {
        v.addEventListener('loadedmetadata', function() {
            this.currentTime = 0.01;
        });
        v.addEventListener('seeked', function() {
            this.pause();
        }, { once: true });
    });

    aiVideoGrid.querySelectorAll('.ai-video-card').forEach((card, index) => {
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

    observeReveals(aiVideoGrid);
}

function renderServices() {
    if (!servicesGrid) return;
    servicesGrid.innerHTML = portfolioData.services.map((service, index) => `
        <div class="service-card reveal reveal-delay-${index + 1}">
            <div class="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description.replace(/\n/g, '<br>')}</p>
        </div>
    `).join('');

    observeReveals(servicesGrid);
}

function renderTools() {
    if (!toolsLayout || !portfolioData.tools || portfolioData.tools.length === 0) return;

    const buildGroup = (group) => {
        const items = group.tools.map((tool, index) => {
            const mark = tool.logo
                ? `<img src="${encodeURI(tool.logo)}" alt="${tool.name}" class="tool-logo-img" loading="lazy">`
                : `<div class="tool-text-badge">${tool.badge || tool.name.slice(0, 2).toUpperCase()}</div>`;
            return `
                <div class="tool-row">
                    <div class="tool-badge-wrap">${mark}</div>
                    <div class="tool-body">
                        <div class="tool-name">${tool.name}</div>
                        <div class="tool-purpose">${tool.purpose}</div>
                    </div>
                </div>
            `;
        }).join('');
        return `
            <div class="tools-group" data-group="${group.group.toLowerCase().includes('generative') ? 'ai'
                : group.group.toLowerCase().includes('graphic') ? 'design' : 'video'}">
                <h3 class="tools-group-title">${group.group}</h3>
                <div class="tools-list">${items}</div>
            </div>
        `;
    };

    const aiGroup = portfolioData.tools.find(g => g.group.toLowerCase().includes('generative'));
    const rightGroups = portfolioData.tools.filter(g => !g.group.toLowerCase().includes('generative'));

    toolsLayout.innerHTML = `
        <div class="tools-column tools-col-left">
            ${aiGroup ? buildGroup(aiGroup) : ''}
        </div>
        <div class="tools-column tools-col-right">
            ${rightGroups.map(buildGroup).join('')}
        </div>
    `;

    observeReveals(toolsLayout);
}

// Navigation / Scroll-spy (homepage only)
function handleScroll() {
    if (!nav || !sections.length) return;

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links > li > a[data-nav]').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav') === current) {
            link.classList.add('active');
        }
    });
}

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});

// Grid Click Handlers
function initGridClicks() {
    if (aiAvatarsGrid) {
        aiAvatarsGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                const index = parseInt(item.dataset.index);
                openLightbox(index, currentAIAvatars);
            }
        });
    }

    if (galleryGrid) {
        galleryGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item) {
                const index = parseInt(item.dataset.index);
                openLightbox(index, currentGallery);
            }
        });
    }

    if (featuredGrid) {
        featuredGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.project-card');
            if (item) {
                const index = parseInt(item.dataset.index);
                openLightbox(index, portfolioData.featured, portfolioData.featured[index].title);
            }
        });
    }

    if (showcasesGrid) {
        showcasesGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.showcase-card');
            if (item) {
                const index = parseInt(item.dataset.index);
                const visibleShowcases = portfolioData.showcases.filter(s => s.visible);
                const showcase = visibleShowcases[index];
                if (showcase && showcase.images.length > 0) {
                    openLightbox(0, showcase.images.map((src, i) => ({ src, title: showcase.title })), showcase.title, showcase.tools || []);
                }
            }
        });
    }

    // Color grading video cards (static markup).
    document.querySelectorAll('.video-card').forEach((card, index) => {
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
            const cards = document.querySelectorAll('.video-card');
            const allData = Array.from(cards).map(c => ({
                src: c.dataset.video,
                title: c.dataset.title,
                tools: c.dataset.tools ? c.dataset.tools.split(',').map(t => t.trim()) : []
            }));
            if (allData[index] && allData[index].src) {
                openLightbox(index, allData, allData[index].title, allData[index].tools);
            }
        });
    });
}

// Contact Form with Formspree
function initContactForm() {
    if (!contactForm || !formSuccess) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                contactForm.style.display = 'none';
                formSuccess.classList.add('show');
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            alert('Something went wrong. Please try again or contact via Telegram.');
        }
    });
}

// Text Toggle
function initTextToggles() {
    const toggleHeroBio = document.getElementById('toggleHeroBio');
    const toggleAboutBio = document.getElementById('toggleAboutBio');

    if (toggleHeroBio) {
        toggleHeroBio.addEventListener('click', () => {
            heroBio.classList.toggle('hidden');
            toggleHeroBio.classList.toggle('hidden-text');
            portfolioData.about.bioVisible = !heroBio.classList.contains('hidden');
            localStorage.setItem('portfolio_about', JSON.stringify(portfolioData.about));
        });
    }

    if (toggleAboutBio) {
        toggleAboutBio.addEventListener('click', () => {
            aboutBio.classList.toggle('hidden');
            toggleAboutBio.classList.toggle('hidden-text');
            portfolioData.about.bioVisible = !aboutBio.classList.contains('hidden');
            localStorage.setItem('portfolio_about', JSON.stringify(portfolioData.about));
        });
    }
}

// Intersection Observer for reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

function observeReveals(scope) {
    const els = scope
        ? scope.querySelectorAll('.reveal:not(.visible)')
        : document.querySelectorAll('.reveal:not(.visible)');
    els.forEach(el => observer.observe(el));
}

// Back to top
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return;
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize
function initHomepage() {
    renderProfile();
    renderSocial();
    renderFeatured();
    renderShowcases();
    renderAIAvatars();
    renderGallery();
    renderServices();
    renderAIVideos();
    renderTools();
    renderBeforeAfterSection(beforeAfterGrid, portfolioData.beforeAfter);
    initTextToggles();
    initContactForm();
    initGridClicks();
    initBackToTop();

    handleScroll();

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

    setTimeout(handleScroll, 100);

    // Auto-scroll when arriving at index.html#section from a subpage nav link.
    if (window.location.hash && document.querySelector(window.location.hash)) {
        const target = document.querySelector(window.location.hash);
        setTimeout(() => {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomepage);
} else {
    initHomepage();
}