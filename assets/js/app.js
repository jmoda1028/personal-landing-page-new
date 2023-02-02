const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const btnExit = document.querySelector('.btn-exit');
const menuItems = document.querySelectorAll('.mobile-nav--link');
const mainNav = document.querySelector('.main-nav');
const toTop = document.querySelector('.to--top');
const mainNavLink = document.querySelectorAll('.main-nav ul li a');
const mobileNavLink = document.querySelectorAll('.mobile-nav ul li a');
const section = document.querySelectorAll('main section');


const toggleMenu = () => {
    backdrop.classList.toggle('show-backdrop')
    mobileNav.classList.toggle('show-mobile--nav')
}

const fixNav = () => {
    if(window.scrollY > mainNav.offsetHeight + 150) {
        mainNav.classList.add('nav--active')
    } else {
        mainNav.classList.remove('nav--active')
    }
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleMenu)
})

window.addEventListener('scroll', fixNav)

toggleButton.addEventListener("click", toggleMenu)
btnExit.addEventListener("click", toggleMenu)
backdrop.addEventListener("click", toggleMenu)

// go to top button
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })

// active main navbar menu
function activeMainMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    mainNavLink.forEach(ltx => ltx.classList.remove("nav-link--active"));
    mainNavLink[len].classList.add("nav-link--active");
}

activeMainMenu();
window.addEventListener("scroll", activeMainMenu);

// active mobile navbar menu
function activeMobileMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    mobileNavLink.forEach(ltx => ltx.classList.remove("nav-link--active"));
    mobileNavLink[len].classList.add("nav-link--active");
}

activeMobileMenu();
window.addEventListener("scroll", activeMobileMenu);