document.addEventListener("DOMContentLoaded", function () {
    const logo = document.getElementById("logo");
    const mainMenu = document.getElementById("navbar");

    logo.addEventListener("click", function () {
        mainMenu.style.display = "none";
    });
});
