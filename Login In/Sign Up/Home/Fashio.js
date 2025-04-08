document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".zoomable");
        images.forEach(image => {
            image.addEventListener("click", () => {
                const fullscreenDiv = document.createElement("div");
                fullscreenDiv.classList.add("fullscreen");

                const fullscreenImage = document.createElement("img");
                fullscreenImage.src = image.src;

                fullscreenDiv.appendChild(fullscreenImage);
                document.body.appendChild(fullscreenDiv);

                fullscreenDiv.addEventListener("click", () => {
                    document.body.removeChild(fullscreenDiv);
                });
            });
        });

        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("nav-menu");

        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("show"); // Toggle the "show" class
        });
    });