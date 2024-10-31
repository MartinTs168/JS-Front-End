function solve(num, ...args) {
    num = Number(num);
    for (const command of args) {
        switch (command) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
        }
        console.log(num.toFixed(1));
    }
}

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
