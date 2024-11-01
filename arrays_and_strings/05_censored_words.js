function solve(sentence, word) {
    sentence = sentence.replaceAll(word, '*'.repeat(word.length));
    console.log(sentence);
}

// solve('A small sentence with some words', 'small');
// solve('Find the hidden word', 'hidden');
