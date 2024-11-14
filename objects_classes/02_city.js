function printObject(obj) {
    for (const key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
printObject({
    name: 'Sofia',
    area: 492,
    population: 1238438,
    country: 'Bulgaria',
    postCode: '1000',
});
