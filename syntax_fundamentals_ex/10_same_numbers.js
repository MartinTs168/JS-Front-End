function solve(num) {
    let strNum = num.toString();
    const firstDg = strNum[0];
    let same = true;
    let sum = 0;
    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] !== firstDg) {
            same = false;
        }
        sum += Number(strNum[i]);
    }

    console.log(same);
    console.log(sum);
}
