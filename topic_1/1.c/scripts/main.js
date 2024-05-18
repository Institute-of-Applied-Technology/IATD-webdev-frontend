/* scripts/main.js */

// Function to include HTML content from another file using XMLHttpRequest
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

// Load includes on DOM content loaded
document.addEventListener('DOMContentLoaded', includeHTML);
