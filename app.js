//  navigation bar toggle
//  --------------------------------------------------------------
const menu      = document.querySelector(".nav__menu");
const menuLinks = document.querySelectorAll(".nav__menu-link");
const hamburger = document.querySelector(".nav__toggle");
const closeIcon = document.querySelector(".icon__close");
const menuIcon  = document.querySelector(".icon__menu");

function toggleMenu() {
  if (menu.classList.contains("nav__menu-show")) {
    menu.classList.remove("nav__menu-show");
    closeIcon.style.display = "none";
    menuIcon.style.display  = "block";
  } else {
    menu.classList.add("nav__menu-show");
    closeIcon.style.display = "block";
    menuIcon.style.display  = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuLinks.forEach( 
    function(menuEachLink) { 
      menuEachLink.addEventListener("click", toggleMenu);
    }
)

//  label info toggle
//  --------------------------------------------------------------