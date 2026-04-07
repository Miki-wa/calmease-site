'use strict';
{
    const images = document.querySelectorAll(".works__img img");
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal__img");

    images.forEach(img => {
    img.addEventListener("click", () => {
        modal.classList.add("is-active");
        modalImg.src = img.src;
    });
    });

    modal.addEventListener("click", () => {
    modal.classList.remove("is-active");
    });
}