/**
 * Function to perform the specified operation on the two input numbers.
 */
function performOperation() {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    // Ensure input values are numbers
    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        // Perform operation based on selected operation
        switch (operation) {
            case 'add':
                result = add(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            default:
                result = 'Unknown operation';
        }
    }

    // Display result
    document.getElementById('result').textContent = `Result: ${result}`;
}

/**
 * Function to add two numbers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number} Sum of a and b.
 */
function add(a, b) {
    return a + b;
}

/**
 * Function to subtract two numbers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number} Difference of a and b.
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Function to multiply two numbers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number} Product of a and b.
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Function to divide two numbers.
 * @param {number} a First number.
 * @param {number} b Second number.
 * @returns {number|string} Result of division or "Cannot divide by zero".
 */
function divide(a, b) {
    if (b === 0) {
        return 'Cannot divide by zero';
    }
    return a / b;
}
