//* INIT AOS
AOS.init({
    duration: 600,
});

//* NAVBAR
const menuToggle = document.querySelector(".nav-toggle");
const menuToggleLine = document.querySelectorAll(".nav-toggle .line");
const navItems = document.querySelector('.nav-items');
const navItemsLink =  document.querySelectorAll('.nav-items .nav-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    menuToggleLine.forEach(line => {
        line.classList.toggle('open');
    })
    navItems.classList.toggle('open');
    navItemsLink.forEach(link => {
        link.classList.toggle('open');
    })
})

//* TOP BUTTON
const topBtn = document.querySelector('.top-btn');
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
}

//* PROJECT CARD HREF 
const projectCards = document.querySelectorAll('.project-card-main .project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectCardHref = card.dataset.hrefProject;
        window.open(projectCardHref, '_blank')
    })
})