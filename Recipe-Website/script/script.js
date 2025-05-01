// ? Navbar Menu
const mobileMenuContainer = document.querySelector(".menu-click-list-container");
const menuClickDom = document.getElementById("menu-click-list");
menuClickDom.addEventListener("click", function () {
    mobileMenuContainer.classList.toggle("menu-open")
})
// ? Navbar Menu

// ! Adding The Current Year in Footer
const date = new Date().getFullYear();
const dateDom = document.getElementById("date");

dateDom.innerHTML = (date);
// ! Adding The Current Year in Footer