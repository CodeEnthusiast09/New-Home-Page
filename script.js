var nav = document.querySelector("nav");
var menuBtn = document.getElementById('menu-btn');
var closeBtn = document.getElementById('close-btn');
var body = document.querySelector('body');

const showNav = () => {
    nav.classList.add("navlink");
    body.classList.add("bodyUnscroll");
    document.getElementById('dim').classList.add('dim-background')
}

const closeNav = () => {
    nav.classList.remove("navlink");
    body.classList.remove("bodyUnscroll");
    document.getElementById('dim').classList.remove('dim-background')
}