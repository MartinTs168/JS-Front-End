function solve(x1, y1, x2, y2) {
    function calculate(x1, y1, x2, y2) {
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const isValid = Number.isInteger(distance);
        return `{${x1}, ${y1}} to {${x2}, ${y2}} is ${
            isValid ? 'valid' : 'invalid'
        }`;
    }

    console.log(calculate(x1, y1, 0, 0));
    console.log(calculate(x2, y2, 0, 0));
    console.log(calculate(x1, y1, x2, y2));
}

// solve(3, 0, 0, 4);
// solve(2, 1, 1, 1);
