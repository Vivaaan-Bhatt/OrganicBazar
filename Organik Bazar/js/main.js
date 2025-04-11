document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for the "Discover More" button
    document.querySelector('.hero-section .btn-success').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#services').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // General smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
