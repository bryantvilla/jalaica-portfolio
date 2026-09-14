/* ==========================================================================
   PIXEL ART THEME & NAVIGATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Day / Night Mode Toggle
    const themeBtn = document.getElementById('theme-button');

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        if (themeBtn) {
            const isDark = theme === 'dark';
            themeBtn.setAttribute('aria-label', isDark ? 'Switch to Day Mode' : 'Switch to Night Mode');
        }
        try {
            localStorage.setItem('pixel-portfolio-theme', theme);
        } catch (e) {}
    }

    const savedTheme = localStorage.getItem('pixel-portfolio-theme') || 'light';
    applyTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const isDark = document.documentElement.dataset.theme === 'dark';
            const nextTheme = isDark ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

    // 2. Floating Background Petals (Tropical Hibiscus, Sampaguita, & Golden Sun Drift)
    const petalsContainer = document.getElementById('petals');
    if (petalsContainer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const petalCount = 18;
        const petalTypes = ['petal-hibiscus', 'petal-sampaguita', 'petal-gold-drift', 'petal-sakura'];
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            const type = petalTypes[i % petalTypes.length];
            petal.className = `petal ${type}`;
            const size = Math.random() * 8 + 7;
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.3}px`;
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.animationDelay = `${Math.random() * 10}s`;
            petal.style.animationDuration = `${Math.random() * 8 + 8}s`;
            petalsContainer.appendChild(petal);
        }
    }

    // 3. Navigation Scroll Spy
    const navTabs = document.querySelectorAll('.nav-tab[href^="#"]');
    const sections = [...navTabs].map(tab => {
        const target = document.querySelector(tab.getAttribute('href'));
        return { tab, target };
    }).filter(item => item.target !== null);

    function updateNavHighlight() {
        const scrollPosition = window.scrollY + 120;
        let currentSection = null;

        for (const item of sections) {
            if (item.target.offsetTop <= scrollPosition) {
                currentSection = item;
            }
        }

        navTabs.forEach(tab => tab.classList.remove('active'));
        if (currentSection) {
            currentSection.tab.classList.add('active');
        }
    }

    window.addEventListener('scroll', updateNavHighlight, { passive: true });
    updateNavHighlight();
});
