function appendValue(value) {
    document.calc.display.value += value;
}

function clearDisplay() {
    document.calc.display.value = '';
}

function deleteLastChar() {
    const currentValue = document.calc.display.value;
    document.calc.display.value = currentValue.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(document.calc.display.value);
        document.calc.display.value = result;
    } catch {
        document.calc.display.value = "Error";
    }
}
