// Navbar change display on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav__container");

    nav.classList.toggle("scrolling-active", window.scrollY > 0);
});

// Tab Components
const tabs = document.querySelectorAll(".climb__tab-button");
const contents = document.querySelectorAll(".climb__tab-content");

tabs.forEach((button, i) => {
    button.addEventListener("click", () => {
        contents.forEach((content) => {
            content.classList.remove("is-active");
        });
        tabs.forEach((button) => {
            button.classList.remove("is-active");
        });
        contents[i].classList.add("is-active");
        tabs[i].classList.add("is-active");
    });
});
