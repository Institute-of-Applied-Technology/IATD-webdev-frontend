document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseTypeSelect = document.getElementById('expense-type');
    const customExpenseInput = document.getElementById('custom-expense');
    const expenseAmountInput = document.getElementById('expense-amount');
    const expenseMonthSelect = document.getElementById('expense-month');
    const expenseYearSelect = document.getElementById('expense-year');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    expenseTypeSelect.addEventListener('change', function() {
        if (this.value === 'Other') {
            customExpenseInput.style.display = 'block';
        } else {
            customExpenseInput.style.display = 'none';
        }
    });

    function updateTotal() {
        const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
        totalAmount.textContent = total.toFixed(2);
    }

    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${expense.month} ${expense.year} - ${expense.name}: $${expense.amount.toFixed(2)} <button data-index="${index}">Delete</button>`;
            expenseList.appendChild(li);
        });
        updateTotal();
    }

    function addExpense(name, amount, month, year) {
        const expense = { name, amount, month, year };
        expenses.push(expense);
        renderExpenses();
        saveExpenses();
    }

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const selectedType = expenseTypeSelect.value;
        const name = selectedType === 'Other' ? customExpenseInput.value.trim() : selectedType;
        const amount = parseFloat(expenseAmountInput.value.trim());
        const month = expenseMonthSelect.value;
        const year = expenseYearSelect.value;

        if (name && !isNaN(amount) && month && year) {
            addExpense(name, amount, month, year);
            customExpenseInput.value = '';
            expenseAmountInput.value = '';
            expenseMonthSelect.value = '';
            expenseYearSelect.value = '';
            expenseTypeSelect.value = '';
            customExpenseInput.style.display = 'none';
        }
    });

    expenseList.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const index = event.target.getAttribute('data-index');
            expenses.splice(index, 1);
            renderExpenses();
            saveExpenses();
        }
    });

    renderExpenses();
});
