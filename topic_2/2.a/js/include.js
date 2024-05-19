function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => {
                    if (response.ok) return response.text();
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    el.innerHTML = data;
                    el.removeAttribute('data-include');
                    includeHTML(); // Ensure nested includes are also handled
                })
                .catch(error => {
                    console.error('Error including HTML:', error);
                });
        }
    });
}

document.addEventListener('DOMContentLoaded', includeHTML);
