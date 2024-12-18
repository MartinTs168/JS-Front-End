function solve(arr) {
    const parkingLot = new Set();

    arr.forEach((element) => {
        const [direction, carNumber] = element.split(', ');

        if (direction === 'IN') {
            parkingLot.add(carNumber);
        } else {
            parkingLot.delete(carNumber);
        }
    });

    if (parkingLot.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        console.log(
            [...parkingLot].sort((a, b) => a.localeCompare(b)).join('\n')
        );
    }
}

// Test cases
solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
]);

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU',
]);

solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
