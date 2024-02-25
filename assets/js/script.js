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

// ========= FLIP IMAGES ========

const portfolioCards = document.querySelectorAll('.portfolioCard-content');

portfolioCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('flip'); 
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('flip'); 
    });
});

// ========== FOOTER ==========

const year = document.querySelector('.year');
const date = new Date();
year.innerHTML += date.getFullYear();



// ========= CLASS ACTIVE =========

// let navContainer = document.getElementById('class-active');
// let links = Array.from(document.querySelectorAll('.close-nav'));

// links.forEach(function(link) {
//   link.addEventListener('click', function() {
//     let current = document.querySelector('#class-active .active');
//     if (current) {
//       current.classList.remove('active');
//     }
//     this.classList.add('active');  
//   });
// });

let navContainer = document.getElementById('class-active');
let links = Array.from(document.querySelectorAll('.close-nav'));

// Ajouter un écouteur d'événement pour le défilement de la page
window.addEventListener('scroll', function() {
  // Calculer la position de la moitié de la page
  let halfwayPoint = window.innerHeight / 2;
  // Itérer sur chaque lien
  links.forEach(function(link) {
    // Récupérer l'élément cible lié au lien
    let target = document.querySelector(link.getAttribute('href'));
    // Vérifier si la position de l'élément cible est inférieure à la moitié de la page
    if (target.getBoundingClientRect().top < halfwayPoint) {
      // Retirer la classe active de tous les liens
      links.forEach(function(link) {
        link.classList.remove('active');
      });
      // Ajouter la classe active uniquement au lien actuel
      link.classList.add('active');
    }
  });
});






  
