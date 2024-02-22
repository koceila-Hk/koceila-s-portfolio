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

// ========== HANDLE INTERSECTION =========

let ratio = 0.1;
let options = {
    root: null,
    rootMargin: "0px",
    threshold: ratio
};

let handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }        
    });
};

let observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('[class*="reveal-"]').forEach(function(r) {
    observer.observe(r)
});



// ========== FOOTER ==========

const year = document.querySelector('.year');
const date = new Date();
year.innerHTML += date.getFullYear();





// Sélectionnez tous les éléments avec la classe .portfolioCard-content
const portfolioCards = document.querySelectorAll('.portfolioCard-content');

// Ajoutez un gestionnaire d'événements pour chaque élément
portfolioCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('flip'); // Ajoute la classe flip lors du survol
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('flip'); // Retire la classe flip lorsque la souris quitte l'élément
    });
});
