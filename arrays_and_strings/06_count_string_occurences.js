function solve(string, searhcedWord) {
    let count = 0;
    for (const word of string.split(' ')) {
        if (word === searhcedWord) {
            count++;
        }
    }
    console.log(count);
}
