function solve(arr) {
    const addressBook = {};
    for (const line of arr) {
        const [name, address] = line.split(':');
        addressBook[name] = address;
    }

    for (const [name, address] of Object.entries(addressBook).sort((a, b) =>
        a[0].localeCompare(b[0])
    )) {
        console.log(`${name} -> ${address}`);
    }
}

solve([
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd',
]);
