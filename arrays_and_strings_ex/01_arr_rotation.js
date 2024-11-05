function solve(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        const first = arr.shift();
        arr.push(first);
    }
    console.log(arr.join(' '));
}

// solve([51, 47, 32, 61, 21], 2);
