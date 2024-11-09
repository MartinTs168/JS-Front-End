function solve(num) {
    const digits = num.toString().split('');
    let oddSum = 0;
    let evenSum = 0;

    const sum = (x) => {
        if (x % 2 === 0) {
            evenSum += Number(x);
        } else {
            oddSum += Number(x);
        }
    };

    digits.forEach(sum);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

// solve(1000435);
// solve(3495892137259234);
