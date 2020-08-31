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

//* Top Button
const topBtn = document.querySelector('.top-btn');
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log('1');
        topBtn.style.display = "flex";
    } else {
        console.log('0');
        topBtn.style.display = "none";
    }
}