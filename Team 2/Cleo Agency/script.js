const hamburger  = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".nav-link");
const navA  = document.querySelectorAll(".nav-link a");

navA.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
