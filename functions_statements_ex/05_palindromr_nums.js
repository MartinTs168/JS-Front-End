function solve(arr) {
    for (let el of arr) {
        el = el.toString();
        console.log(true ? el === el.split('').reverse().join('') : false);
    }
}

// solve([123, 323, 421, 121]);
