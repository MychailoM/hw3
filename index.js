document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");
    const loadButton = document.getElementById("loadImages");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            loadImage(entry.target);
            observer.unobserve(entry.target);
        }
        });
    }, options);

    images.forEach((img) => imageObserver.observe(img));

    loadButton.addEventListener("click", () => {
        images.forEach((img) => loadImage(img));
    });

    function loadImage(img) {
        if (!img.src) {
            img.src = img.getAttribute("data-src");
            img.onload = () => img.classList.add("loaded");
        }
    }
});
