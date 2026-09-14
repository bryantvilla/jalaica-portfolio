/* ==========================================================================
   STARDEW VALLEY THEME ENGINE & HUD SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Day / Night Cycle Controller
    const themeBtn = document.getElementById('theme-button');
    const themeIcon = document.getElementById('theme-icon');
    const timeIcon = document.getElementById('time-icon');
    const timeText = document.getElementById('time-text');

    function applyTheme(theme) {
        document.documentElement.dataset.theme = theme;
        if (theme === 'dark') {
            themeIcon.textContent = '☀️';
            timeIcon.textContent = '🌙';
            timeText.textContent = 'Spring 13 · 10:00PM';
            themeBtn.setAttribute('aria-label', 'Switch to Sunny Day Mode');
        } else {
            themeIcon.textContent = '🌙';
            timeIcon.textContent = '☀️';
            timeText.textContent = 'Spring 13 · 10:00AM';
            themeBtn.setAttribute('aria-label', 'Switch to Starlight Night Mode');
        }
        try {
            localStorage.setItem('stardew-portfolio-theme', theme);
        } catch (e) {}
    }

    // Initialize from storage or preference
    const savedTheme = localStorage.getItem('stardew-portfolio-theme') || 'light';
    applyTheme(savedTheme);

    themeBtn.addEventListener('click', () => {
        const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);
    });

    // 2. Generate Floating Cherry Blossom Petals
    const petalsContainer = document.getElementById('petals');
    if (petalsContainer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const petalCount = 18;
        for (let i = 0; i < petalCount; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            const size = Math.random() * 8 + 6; // 6px to 14px
            petal.style.width = `${size}px`;
            petal.style.height = `${size * 1.3}px`;
            petal.style.left = `${Math.random() * 100}%`;
            petal.style.animationDelay = `${Math.random() * 10}s`;
            petal.style.animationDuration = `${Math.random() * 8 + 8}s`;
            petalsContainer.appendChild(petal);
        }
    }

    // 3. HUD Navigation Scroll Spy
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
