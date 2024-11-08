function calculateOrder(product, quantity) {
    const productsPrices = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    };

    const price = productsPrices[product] * quantity;
    console.log(price.toFixed(2));
}

// calculateOrder('water', 5);
