// Billy Joe Cruzada Portfolio - Shared Navigation Module
// Handles the mobile menu toggle on every page. Scroll-spy lives in main.js (homepage only).

function initNav() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

// Statically mark the current page's nav link as active (used on subpages).
function markActiveNav(activeKey) {
    if (!activeKey) return;
    document.querySelectorAll('.nav-links a[data-nav]').forEach(link => {
        if (link.getAttribute('data-nav') === activeKey) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initNav();
        markActiveNav(window.PORTFOLIO_ACTIVE_NAV);
    });
} else {
    initNav();
    markActiveNav(window.PORTFOLIO_ACTIVE_NAV);
}