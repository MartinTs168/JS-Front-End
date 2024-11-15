function solve(string) {
    const words = string.split(' ');
    const wordsCounter = {};
    for (let word of words) {
        word = word.toLowerCase();
        if (!wordsCounter.hasOwnProperty(word)) {
            wordsCounter[word] = 0;
        }
        wordsCounter[word] += 1;
    }

    const result = [];
    Object.entries(wordsCounter).forEach(([word, count]) => {
        if (count % 2 !== 0) {
            result.push(word);
        }
    });

    console.log(result.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
