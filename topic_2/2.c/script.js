document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('address-form');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const inputs = form.querySelectorAll('input');

    function updateProgress() {
        let filledFields = 0;
        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                filledFields++;
            }
        });
        const progressPercentage = (filledFields / inputs.length) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        progressText.textContent = `${Math.round(progressPercentage)}%`;
    }

    inputs.forEach(input => {
        input.addEventListener('input', updateProgress);
    });
});
