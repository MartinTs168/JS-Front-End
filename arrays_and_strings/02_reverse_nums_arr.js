function solve(count, arr) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(arr[i]);
    }

    result.reverse();

    console.log(result.join(' '));
}

// solve(3, [10, 20, 30, 40, 50]);
