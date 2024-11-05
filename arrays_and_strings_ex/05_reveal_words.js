function solve(words, string) {
    words = words.split(', ');

    for (const word of words) {
        string = string.replace('*'.repeat(word.length), word);
    }

    console.log(string);
}

// solve('great', 'softuni is ***** place for learning new programming languages');
// solve(
//     'great, learning',
//     'softuni is ***** place for ******** new programming languages'
// );
