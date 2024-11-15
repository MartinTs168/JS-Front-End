function solve(arr) {
    const heroesInfo = [];

    arr.forEach((heroInfo) => {
        const [name, level, items] = heroInfo.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items,
        };

        heroesInfo.push(hero);
    });

    heroesInfo
        .sort((a, b) => a.level - b.level)
        .forEach((hero) => {
            console.log(
                `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`
            );
        });
}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
