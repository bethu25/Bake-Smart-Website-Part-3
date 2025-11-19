// miniscreen.js
// Small script that toggles mobile navigation visibility

// Elements: the menu (bar) button, close button, and the navigation container
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

// When the mobile "bar" (hamburger) is clicked, add the 'active' class
// to the navigation so it becomes visible on small screens.
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

// When the close icon is clicked, remove the 'active' class to hide
// the mobile navigation again.
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}