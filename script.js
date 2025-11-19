function toggleMenu() {
    const menu = document.getElementById('navMenu');
    const toggle = document.querySelector('.menu-toggle');
    const overlay = document.querySelector('.menu-overlay');

    menu.classList.toggle('active');
    toggle.classList.toggle('active');
    overlay.classList.toggle('active');
}

document.querySelectorAll('#navMenu li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.getElementById('navMenu');
        const toggle = document.querySelector('.menu-toggle');
        const overlay = document.querySelector('.menu-overlay');

        menu.classList.remove('active');
        toggle.classList.remove('active');
        overlay.classList.remove('active');
    });
});
