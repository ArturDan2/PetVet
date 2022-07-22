

let nav = document.querySelector('.nav');
let mobileMenuBars = document.querySelector('.fa-bars');
let navLinks = document.querySelector('.nav-links');
let menuBars = document.querySelector ('.fa-bars');
let menuCancel = document.querySelector ('.fa-times');
let dropMenuMobile = document.querySelector('.drop-menu-mobile');
let dropBtn = document.querySelectorAll('.drop-btn');
let dropMenu = document.querySelectorAll ('.drop-menu');
let arrow = document.querySelectorAll ('.fa-angle-down')
const mQuery = window.matchMedia("(min-width: 1155px)");



function colorNavWhenScrolled() {
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            nav.classList.replace('nav-transparent', 'nav-colored')
        } else {
            nav.classList.replace('nav-colored', 'nav-transparent')
        }};
}
// This function gives color to transparent navbar when the browsers window being scrolled down


function sideMenu() {
    menuBars.addEventListener('click', function () {
        navLinks.classList.replace('nav-hidden','nav-visible')
    })


    menuCancel.addEventListener ('click', function () {
        navLinks.classList.replace('nav-visible', 'nav-hidden')
    });
}



function sideMenuDropdown () {
    for (let i = 0; i < dropBtn.length; i++) {
        dropBtn[i].addEventListener ('click', function (){
            if (dropMenu[i].classList.contains('drop-menu-mobile-invisible')) {
                dropMenu[i].classList.replace('drop-menu-mobile-invisible', 'drop-menu-mobile-visible');
                dropBtn[i].classList.add('drop-btn-mobile');
                arrow[i].style.transform = 'rotateX(180deg)';
            } else if ( dropMenu[i].classList.contains('drop-menu-mobile-visible')) {
                dropMenu[i].classList.replace('drop-menu-mobile-visible', 'drop-menu-mobile-invisible');
                dropBtn[i].classList.remove('drop-btn-mobile')
                arrow[i].style.transform = 'rotateX(360deg)'
            };
        })

    }
}







colorNavWhenScrolled ();
sideMenu();
// mQuery.addListener(dropdownMenuHoveredHighlight);
sideMenuDropdown();
