document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        document.body.classList.toggle('menu-open');

        // Toggle aria-expanded attribute
        const isExpanded = mainNav.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = mainNav.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            document.body.classList.remove('menu-open');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

