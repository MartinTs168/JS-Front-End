function solve(sentence) {
    let words = sentence.match(/\b\w+\b/g);
    words = words.map((word) => word.toUpperCase());
    console.log(words.join(', '));
}

// solve('Hi, how are you?');
