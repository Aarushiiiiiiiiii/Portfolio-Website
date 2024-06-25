// script.js

// Add event listeners to navigation links
document.querySelectorAll('.sidebar nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'mooth' });
    });
});