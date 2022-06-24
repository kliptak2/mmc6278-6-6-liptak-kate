var hamburgerMenu = document.querySelector (".hamburger-menu")
var hamburgerBtn = document.querySelector (".hamburger-btn")
var navContainer = document.querySelector (".menu")

navContainer.onclick = function(e){
    e.stopPropagation()
    if (e.target.tagName === "BUTTON"){                //if you clicked on a button, then...
        hamburgerMenu.classList.toggle("show-menu")    // toggle swaps if a class is applied to an element
        if (hamburgerBtn.getAttribute("aria-expanded") === "true"){
            hamburgerBtn.setAttribute("aria-expanded", false)
        } else {
            hamburgerBtn.setAttribute("aria-expanded", true)
        }
    }
}

document.body.onclick = function(e){
    if (hamburgerBtn.getAttribute("aria-expanded") === "true"){
        hamburgerBtn.setAttribute("aria-expanded", false)
        hamburgerMenu.classList.remove("show-menu")
    }
}

document.onkeyup = function(e){
    if(e.code === "Escape"){
        hamburgerBtn.setAttribute("aria-expanded", false)
        hamburgerMenu.classList.remove("show-menu")
        hamburgerBtn.focus()
    }
}


// Tests To Pass
// #Should not have menu open when page loads - auto passes √
// #Should open menu when clicking the hamburger button √
// #Should set aria-expanded="true" to hamburger button when menu is opened √
// #Should close menu when clicking the hamburger button √
// #Should set aria-expanded="false" to hamburger button when menu is closed √
// #Should NOT open menu when clicking things other than the hamburger button - auto passes √
// #Should close menu when clicking outside of the menu √
// #Should NOT close menu when clicking inside of the menu - auto passes √
// #Should close menu when pressing escape and menu items are NOT focused √
// #Should close menu and focus hamburger button when pressing escape and menu items are focused √
// #Should NOT open menu when pressing escape - auto passes √