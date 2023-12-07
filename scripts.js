// scripts.js
// Highlight active link in navigation

document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.href;

    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        if (link.href === currentPage) {
            link.classList.add("active");
        }
    });
});