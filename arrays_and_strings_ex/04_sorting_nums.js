function solve(arr) {
    const result = [];
    while (arr.length > 0) {
        const min = Math.min(...arr);
        result.push(min);
        arr.splice(arr.indexOf(min), 1);

        if (arr.length <= 0) {
            break;
        }

        const max = Math.max(...arr);
        result.push(max);
        arr.splice(arr.indexOf(max), 1);
    }

    return result;
}

// console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
