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