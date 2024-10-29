function solve(count, group, day) {
    let price;
    let total;
    switch (group) {
        case 'Students':
            if (day === 'Friday') {
                price = 8.45;
            } else if (day === 'Saturday') {
                price = 9.8;
            } else if (day === 'Sunday') {
                price = 10.46;
            }

            total = price * count;

            if (count >= 30) {
                total *= 0.85;
            }
            break;

        case 'Business':
            if (day === 'Friday') {
                price = 10.9;
            } else if (day === 'Saturday') {
                price = 15.6;
            } else if (day === 'Sunday') {
                price = 16;
            }

            if (count >= 100) {
                count -= 10;
            }

            total = price * count;
            break;

        case 'Regular':
            if (day === 'Friday') {
                price = 15;
            } else if (day === 'Saturday') {
                price = 20;
            } else if (day === 'Sunday') {
                price = 22.5;
            }

            total = price * count;

            if (count >= 10 && count <= 20) {
                total *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${total.toFixed(2)}`);
}
