function factorialDivide(num1, num2) {
    let fact1 = 1;
    let fact2 = 1;
    for (let i = 1; i <= num1; i++) {
        fact1 *= i;
    }
    for (let i = 1; i <= num2; i++) {
        fact2 *= i;
    }
    console.log((fact1 / fact2).toFixed(2));
}

// factorialDivide(5, 2);
