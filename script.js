// 🌙 Dark Mode Toggle
const toggle = document.getElementById('mode-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.innerText = document.body.classList.contains('dark-mode')
        ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// ✨ Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
