const burgerOpen = document.querySelector(".nav__btn");
const navBurger = document.querySelector(".nav__list");
const burgerClose = document.querySelector(".btn__close");

burgerOpen.addEventListener("click", function(){
    navBurger.classList.toggle("active");
});


burgerClose.addEventListener("click", function(){
    navBurger.classList.remove("active");
});