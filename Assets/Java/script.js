document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    // Check if cookies have already been accepted
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "flex"; // Show the banner immediately
    }

    // Handle "Accept" button click
    acceptCookiesButton.addEventListener("click", () => {
        localStorage.setItem("cookiesAccepted", "true"); // Save acceptance in localStorage
        cookieBanner.style.display = "none"; // Hide the banner
    });
});