function appendResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculate() {
    var result = eval(document.getElementById('result').value);
    document.getElementById('result').value = result;
}

document.addEventListener('keydown', function (event) {
    var key = event.key;

    // Define the keys you want to handle
    var validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '%', '=', 'Enter', 'Backspace'];

    if (validKeys.includes(key)) {
        event.preventDefault(); // Prevent default action for the pressed key

        if (key === 'Enter') {
            calculate(); // Trigger calculate function on Enter key
        } else if (key === 'Backspace') {
            clearResult(); // Trigger clearResult function on Backspace key
        } else {
            appendResult(key); // Trigger appendResult function for other valid keys
        }
    }
});