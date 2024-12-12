function solve(input) {
    const n = Number(input.shift());
    const elements = input.splice(0, n);

    const elementsObj = elements.reduce((acc, el) => {
        const [element, quantity] = el.split(' # ');
        acc[element] = { quantity: Number(quantity) };
        return acc;
    }, {});

    input.forEach((line) => {
        const commandInfo = line.split(' # ');
        const command = commandInfo.shift();

        switch (command) {
            case 'Mix':
                let [element1, element2, requiredAmount] = commandInfo;
                requiredAmount = Number(requiredAmount);
                const quantity1 = elementsObj[element1].quantity;
                const quantity2 = elementsObj[element2].quantity;

                if (quantity1 < requiredAmount || quantity2 < requiredAmount) {
                    console.log(
                        `Insufficient quantity of ${element1}/${element2} to mix.`
                    );
                } else {
                    elementsObj[element1].quantity -= requiredAmount;
                    elementsObj[element2].quantity -= requiredAmount;

                    console.log(
                        `${element1} and ${element2} have been mixed. ${requiredAmount} units of each were used.`
                    );
                }

                break;

            case 'Replenish':
                let [element, replenishAmount] = commandInfo;
                replenishAmount = Number(replenishAmount);
                if (!elementsObj[element]) {
                    console.log(
                        `The Chemical ${element} is not available in the lab.`
                    );
                } else {
                    const futureQuantity =
                        elementsObj[element].quantity + replenishAmount;
                    if (futureQuantity > 500) {
                        const addedAmount = 500 - elementsObj[element].quantity;

                        elementsObj[element].quantity = 500;
                        console.log(
                            `${element} quantity increased by ${addedAmount} units, reaching maximum capacity of 500 units!`
                        );
                    } else {
                        elementsObj[element].quantity = futureQuantity;
                        console.log(
                            `${element} quantity increased by ${replenishAmount} units!`
                        );
                    }
                }

                break;

            case 'Add Formula':
                const [currElement, formula] = commandInfo;

                if (!elementsObj[currElement]) {
                    console.log(
                        `The Chemical ${currElement} is not available in the lab.`
                    );
                } else {
                    elementsObj[currElement]['formula'] = formula;
                    console.log(
                        `${currElement} has been assigned the formula ${formula}.`
                    );
                }

                break;
        }
    });

    Object.keys(elementsObj).forEach((key) => {
        const quantity = elementsObj[key].quantity;
        const formula = elementsObj[key]['formula'];

        let result = `Chemical: ${key}, Quantity: ${quantity}`;

        if (formula) {
            result += `, Formula: ${formula}`;
        }

        console.log(result);
    });
}

solve([
    '3',
    'Sodium # 300',
    'Chlorine # 100',
    'Hydrogen # 200',
    'Mix # Sodium # Chlorine # 200',
    'Replenish # Sodium # 250',
    'Add Formula # Sulfuric Acid # H2SO4',
    'Add Formula # Sodium # Na',
    'Mix # Hydrogen # Chlorine # 50',
    'End',
]);
