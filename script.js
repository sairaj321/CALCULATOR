document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = "";

    // Add click event listeners to number buttons
    const numberButtons = document.querySelectorAll(".number");
    numberButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            currentInput += button.textContent;
            updateScreen();
        });
    });

    // Add click event listeners to operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (currentOperator !== "") {
                calculate();
            }
            currentOperator = button.textContent;
            firstOperand = currentInput;
            currentInput = "";
        });
    });

    // Clear button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function () {
        clear();
    });

    // Equals button
    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", function () {
        calculate();
    });

    // Decimal button
    const decimalButton = document.getElementById("decimal");
    decimalButton.addEventListener("click", function () {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateScreen();
        }
    });

    // Function to update the calculator screen
    function updateScreen() {
        screen.textContent = currentInput;
    }

    // Function to clear the calculator
    function clear() {
        currentInput = "";
        currentOperator = "";
        firstOperand = "";
        updateScreen();
    }

    // Function to perform the calculation
    function calculate() {
        if (currentInput === "" || firstOperand === "") {
            return;
        }

        const operand1 = parseFloat(firstOperand);
        const operand2 = parseFloat(currentInput);

        switch (currentOperator) {
            case "+":
                currentInput = (operand1 + operand2).toString();
                break;
            case "-":
                currentInput = (operand1 - operand2).toString();
                break;
            case "*":
                currentInput = (operand1 * operand2).toString();
                break;
            case "/":
                if (operand2 === 0) {
                    alert("Cannot divide by zero.");
                    clear();
                    return;
                }
                currentInput = (operand1 / operand2).toString();
                break;
            default:
                break;
        }

        currentOperator = "";
        firstOperand = "";
        updateScreen();
    }
});
