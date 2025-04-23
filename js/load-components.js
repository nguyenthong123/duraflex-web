document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('components/includes/header.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('header-container').innerHTML = html;
            initializeMenu();
        });

    // Load footer
    fetch('components/includes/footer.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('footer-container').innerHTML = html;
        });
});

function initializeMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    hamburger?.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navLinks?.classList.toggle('active');
    });
}