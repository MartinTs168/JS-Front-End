function solve() {
    let negativeCount = 0;
    for (const num of arguments) {
        if (num < 0) {
            negativeCount++;
        }
    }

    console.log(negativeCount % 2 === 0 ? 'Positive' : 'Negative');
}

// solve(-1, 1, 1);
// solve(-1, 1, -1);
// solve(-1, -1, -1);
