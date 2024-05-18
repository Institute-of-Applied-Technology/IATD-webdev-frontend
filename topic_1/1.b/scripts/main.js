/* scripts/main.js */

document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll("nav a");
    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentLocation) {
            item.classList.add("active");
        }
    });
});
