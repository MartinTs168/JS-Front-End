function solve(num) {
    let stirngNum = num.toString();
    let sum = 0;
    for (const digit of stirngNum) {
        sum += Number(digit);
    }

    console.log(sum);
}
