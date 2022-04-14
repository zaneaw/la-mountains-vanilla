// Navbar change display on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav__container");

    nav.classList.toggle("scrolling-active", window.scrollY > 0);
});

// Carousel Component
const arrows = document.querySelectorAll("[data-carousel-button]");
const slides = document.querySelector("[data-slides]");

arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
        // if 'next' arrow clicked, go next, otherwise go back
        const switchImg = arrow.dataset.carouselButton === "next" ? 1 : -1;
        const activeSlide = slides.querySelector("[data-active]");
        // grab index of active slide. switchImg is initially 0.
        let newIndex = [...slides.children].indexOf(activeSlide) + switchImg;

        /* 
        When index changes, if it's less than 0, loops to the end of the slides.
        If it's greater than or equal to the length of the amount of slides, then
        it will loop back to the first slide.
        */
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // set the new slide to data-active and delete the old slides data-active attribute
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
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
