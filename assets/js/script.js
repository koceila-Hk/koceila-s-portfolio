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

// const portfolioCards = document.querySelectorAll('.portfolioCard');
// console.log(portfolioCards);

// portfolioCards.forEach(card => {
//     card.addEventListener('mouseover', () => {
//         card.classList.add('flip'); 
//     });

//     card.addEventListener('mouseout', () => {
//         card.classList.remove('flip'); 
//     });
// });

// ========= CLASS ACTIVE =========

let navBar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLi = document.querySelectorAll('#class-active li a');

window.onscroll = () => {
    if (window.scrollY > 0.5) {
        navBar.classList.add('nav-active'); 
    } else {
        navBar.classList.remove('nav-active'); 
    }
    
    let fromTop = window.scrollY;
    
    sections.forEach(sec => {
        let top = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (fromTop >= top && fromTop < top + height) {
            navLi.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('#class-active li a[href="#' + id + '"]').classList.add('active');
        }
    });
};

// ========== ROTATE ICON ==========

const iconRotate = document.querySelectorAll('.icon');

iconRotate.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(360deg)';
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0deg)';
    });
});


// ========== FOOTER ==========

const year = document.querySelector('.year');
const date = new Date();
year.innerHTML += date.getFullYear();







