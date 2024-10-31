function solve(sourceYield) {
    let days = 0;
    const consumtion = 26;
    let total = 0;
    while (sourceYield >= 100) {
        total += sourceYield;
        days++;
        sourceYield -= 10;
        if (total >= consumtion) {
            total -= consumtion;
        } else {
            total = 0;
        }
    }

    if (total >= consumtion) {
        total -= consumtion;
    } else {
        total = 0;
    }

    console.log(days);
    console.log(total);
}

// solve(111);
// solve(450);
