function solve(fruit, grams, pricePerKilo) {
    let kgWeight = grams / 1000;
    let price = (kgWeight * pricePerKilo).toFixed(2);
    console.log(
        `I need $${price} to buy ${kgWeight.toFixed(2)} kilograms ${fruit}.`
    );
}
