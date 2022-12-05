//  navigation bar toggle
//  --------------------------------------------------------------
const menu      = document.querySelector(".nav__menu");
const menuLinks = document.querySelectorAll(".nav__menu-link");
const hamburger = document.querySelector(".nav__toggle");
const closeIcon = document.querySelector(".icon__nav-close");
const menuIcon  = document.querySelector(".icon__nav-menu");

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
const accordions = document.querySelectorAll(".home__info");

accordions.forEach((item, index) => {
    let accor_header = item.querySelector(".icon__info");

    accor_header.addEventListener("click", () => {
        item.classList.toggle("home__info-show");

        if(item.classList.contains("home__info-show"))
        {
            // item.querySelector(".icon__info").classList.replace("uil-plus", "uil-times");
            accor_header.classList.replace("uil-plus", "uil-times");
        }
        else{
            // item.querySelector(".icon__info").classList.replace("uil-times", "uil-plus");
            accor_header.classList.replace("uil-times", "uil-plus");
        }
        removeOpen(index);
    })
})

function removeOpen(index1) {
    accordions.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("home__info-show");
            item2.querySelector(".icon__info").classList.replace("uil-times", "uil-plus");
        }
    })
}

