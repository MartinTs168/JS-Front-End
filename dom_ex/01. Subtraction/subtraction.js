function subtract() {
    const num1 = Number(document.querySelector('#firstNumber').value);
    const num2 = Number(document.querySelector('#secondNumber').value);
    const res = num1 - num2;
    document.querySelector('#result').textContent = res;
}
