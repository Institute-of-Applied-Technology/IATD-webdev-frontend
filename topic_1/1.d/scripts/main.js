/* scripts/main.js */

function includeHTML() {
    let elements = document.querySelectorAll('[data-include-html]');
    elements.forEach(element => {
        let file = element.getAttribute('data-include-html');
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    element.innerHTML = xhr.responseText;
                } else {
                    element.innerHTML = "Content not found.";
                }
                element.removeAttribute('data-include-html');
                includeHTML(); // Call again to include nested includes
            }
        };
        xhr.open('GET', file, true);
        xhr.send();
    });
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navLinks.style.maxHeight = null;
    } else {
        navLinks.classList.add('active');
        navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
    }
}

document.addEventListener('DOMContentLoaded', includeHTML);
