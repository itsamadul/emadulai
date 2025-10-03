// Navbar scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Tool card click event (demo)
document.querySelectorAll('.tool-card a').forEach(btn => {
    btn.addEventListener('click', function(e) {
        console.log('Opening tool:', btn.textContent);
    });
});
