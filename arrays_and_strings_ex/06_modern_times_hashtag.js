function solve(string) {
    const result = string.match(/(?<=#)[a-zA-Z]+/gm);
    for (const word of result) {
        console.log(word);
    }
}

// solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
// solve(
//     'The symbol # is known #variously in English-speaking #regions as the #number sign'
// );
