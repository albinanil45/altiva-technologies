const menu = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});
