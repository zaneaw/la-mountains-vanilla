const buttons = document.querySelectorAll(".climb--tab-button");
const contents = document.querySelectorAll(".climb--tab-content");

buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        contents.forEach((content) => {
            content.classList.remove("is-active");
        });
        buttons.forEach((button) => {
            button.classList.remove("is-active");
        });
        contents[i].classList.add("is-active");
        buttons[i].classList.add("is-active");
    });
});

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav--container");

    nav.classList.toggle("scrolling-active", window.scrollY > 0);
});
