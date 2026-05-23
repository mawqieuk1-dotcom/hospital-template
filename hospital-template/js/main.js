(function() {
    AOS.init({ duration: 800, once: true });

    // Dark Mode
    const darkToggle = document.getElementById('darkModeToggle');
    const darkCSS = document.getElementById('dark-mode-css');
    const body = document.body;

    function setDark(enable) {
        if (enable) {
            body.classList.add('dark');
            darkCSS.disabled = false;
            darkToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            body.classList.remove('dark');
            darkCSS.disabled = true;
            darkToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        localStorage.setItem('darkMode', enable ? 'enabled' : 'disabled');
    }

    darkToggle.addEventListener('click', () => setDark(!body.classList.contains('dark')));
    if (localStorage.getItem('darkMode') === 'enabled') setDark(true);

    // Scroll Hide/Show Header & Bottom Nav
    const header = document.getElementById('header');
    const bottomNav = document.getElementById('bottomNav');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            // scroll down
            header.classList.add('header-hidden');
            if (bottomNav) bottomNav.classList.add('bottom-nav-hidden');
        } else {
            // scroll up
            header.classList.remove('header-hidden');
            if (bottomNav) bottomNav.classList.remove('bottom-nav-hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Bottom Nav Active State (لم يعد لدينا menu toggle)
    const bottomItems = document.querySelectorAll('.bottom-nav-item');
    const currentPage = window.location.pathname.split('/').pop();
    bottomItems.forEach(item => {
        if (item.getAttribute('href') === currentPage || (currentPage === '' && item.getAttribute('href') === 'index.html')) {
            item.classList.add('active');
        }
        item.addEventListener('click', function() {
            bottomItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Modal Functions
    window.openModal = function(titleKey, descKey) {
        const title = translations[currentLang]?.[titleKey] || titleKey;
        const desc = translations[currentLang]?.[descKey] || descKey;
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalDesc').textContent = desc;
        document.getElementById('infoModal').classList.add('active');
    };
    window.closeModal = function() {
        document.getElementById('infoModal').classList.remove('active');
    };
    document.getElementById('infoModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });

    // تحديث المودال عند تغيير اللغة
    window.addEventListener('languageChanged', function() {
        const modal = document.getElementById('infoModal');
        if (modal.classList.contains('active')) {
            // يمكن تخزين المفاتيح المستخدمة، لكن للتبسيط نعيد فتحها بمفاتيح افتراضية
            // يمكنك تحسينها لاحقاً
        }
    });
})();