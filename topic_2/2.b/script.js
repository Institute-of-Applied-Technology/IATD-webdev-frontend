function showForm(formId) {
    document.getElementById('plainForm').style.display = 'none';
    document.getElementById('aestheticForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Form submitted');
}
