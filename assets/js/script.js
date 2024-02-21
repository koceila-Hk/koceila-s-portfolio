// ========== NAVBAR ===========

let menuBurger = document.querySelector('.menu-burger');
let navLinks = document.querySelector('.nav-links');

function close() {
    navLinks.classList.toggle('mobile-menu');
}

menuBurger.addEventListener('click', close);

let closeNav = document.querySelectorAll('.close-nav');
closeNav.forEach(items => { 
    items.addEventListener('click', close);
});

// ========== NAVBAR BACKGROUND COLOR ========

let navBar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 0.5) {
        navBar.classList.add('nav-active'); // Correction ici
    } else {
        navBar.classList.remove('nav-active'); // Correction ici
    }
    console.log(navBar);
};

// ========== FOOTER ==========

const year = document.querySelector('.year');
const date = new Date();
year.innerHTML += date.getFullYear();