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

    // 2. Floating Ambient Tropical Petals (Kalachuchi, Hibiscus, Sampaguita, & Golden Sun Drift)
    const petalsContainer = document.getElementById('petals');
    if (petalsContainer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const petalCount = 20;
        const petalTypes = [
            'petal-plumeria',
            'petal-plumeria',
            'petal-hibiscus',
            'petal-sampaguita',
            'petal-gold-drift',
            'petal-sakura'
        ];
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            const type = petalTypes[i % petalTypes.length];
            petal.className = `petal ${type}`;
            const size = Math.random() * 8 + 8;
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.35}px`;
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.animationDelay = `${Math.random() * 12}s`;
            petal.style.animationDuration = `${Math.random() * 8 + 9}s`;
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

    // 4. Smart Auto-Hide HUD Navigation on Scroll
    // Smoothly scrolls away when scrolling down, reveals when scrolling up or at top
    const hud = document.getElementById('header');
    if (hud) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        function handleHUDScroll() {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;

            if (currentScrollY <= 30) {
                // At top of page: always reveal
                hud.classList.remove('hud-hidden');
            } else if (scrollDelta > 8 && currentScrollY > 60) {
                // Scrolling down: hide HUD
                hud.classList.add('hud-hidden');
            } else if (scrollDelta < -8) {
                // Scrolling up: reveal HUD
                hud.classList.remove('hud-hidden');
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(handleHUDScroll);
                ticking = true;
            }
        }, { passive: true });
    }
});
