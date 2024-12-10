function solve(input) {
    const heroesCount = Number(input.shift()); // takes the first el and remoes it
    const heroesInput = input.splice(0, heroesCount); // takes the first heroesCount elements and removes them

    const heroes = heroesInput.reduce((heroes, hero) => {
        let [heroName, power, energy] = hero.split('-');
        power = power.split(',');

        heroes[heroName] = {
            power,
            energy: Number(energy),
        };

        return heroes;
    }, {});

    input.forEach((entry) => {
        const line = entry.split(' * ');
        const command = line.shift();
        let name = '';

        switch (command) {
            case 'Use Power':
                name = line.shift();
                let [usedPower, energyCost] = line;
                energyCost = Number(energyCost);

                if (
                    heroes[name].energy - energyCost > 0 &&
                    heroes[name].power.includes(usedPower)
                ) {
                    heroes[name].energy -= energyCost;
                    console.log(
                        `${name} has used ${usedPower} and now has ${heroes[name].energy} energy!`
                    );
                } else {
                    console.log(
                        `${name} is unable to use ${usedPower} or lacks energy!`
                    );
                }

                break;

            case 'Train':
                name = line.shift();
                let [gainedEnergy] = line;

                if (heroes[name].energy < 100) {
                    heroes[name].energy += Number(gainedEnergy);

                    if (heroes[name].energy > 100) {
                        const remaeinder = heroes[name].energy - 100;
                        gainedEnergy -= remaeinder;

                        heroes[name].energy = 100;
                    }

                    console.log(
                        `${name} has trained and gained ${gainedEnergy} energy!`
                    );
                } else {
                    console.log(`${name} is already at full energy!`);
                }

                break;

            case 'Learn':
                name = line.shift();
                let [gainedPower] = line;

                if (heroes[name].power.includes(gainedPower)) {
                    console.log(`${name} already knows ${gainedPower}.`);
                } else {
                    heroes[name].power.push(gainedPower);
                    console.log(`${name} has learned ${gainedPower}!`);
                }

                break;
        }
    });

    Object.keys(heroes).forEach((name) => {
        let output = '';

        output += `Superhero: ${name}\n`;
        output += `- Superpowers: ${heroes[name].power.join(', ')}\n`;
        output += `- Energy: ${heroes[name].energy}`;

        console.log(output);
    });
}

solve([
    '3',
    'Iron Man-Repulsor Beams,Flight-80',
    'Thor-Lightning Strike,Hammer Throw-10',
    'Hulk-Super Strength-60',
    'Use Power * Iron Man * Flight * 30',
    'Train * Thor * 20',
    'Train * Hulk * 50',
    'Learn * Hulk * Thunderclap',
    'Use Power * Hulk * Thunderclap * 70',
    'Evil Defeated!',
]);
