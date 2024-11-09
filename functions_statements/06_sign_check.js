function solve() {
    const isPositive = [...arguments].filter((x) => x < 0).length % 2 === 0;
    console.log(isPositive ? 'Positive' : 'Negative');
}

solve(-1, 1, 1);
solve(-1, 1, -1);
solve(-1, -1, -1);
