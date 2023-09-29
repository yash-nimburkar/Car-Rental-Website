let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let f = false;

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    f = !f
    f ? navbar.style.top = "100%" : navbar.style.top = "-500px";
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    f = false;
    navbar.style.top = "-500px";
}

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.text', { delay: 200, origin: 'top' });
sr.reveal('.form-container form', { delay: 800, origin: 'left' });
sr.reveal('.heading', { delay: 600, origin: 'top' });
sr.reveal('.ride-container .box', { delay: 500, origin: 'top' });
sr.reveal('.services-container .box', { delay: 500, origin: 'top' });
sr.reveal('.about-container', { delay: 300, origin: 'top' });
sr.reveal('.reviews-container', { delay: 400, origin: 'top' });
sr.reveal('.newsletter .box', { delay: 400, origin: 'bottom' });