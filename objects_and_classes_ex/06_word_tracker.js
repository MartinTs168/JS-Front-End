function countWords(words) {
    const wordsToSearch = words.shift().split(' ');
    const wordTracker = wordsToSearch.reduce(
        (matched, word) => ({ ...matched, [word]: 0 }),
        {}
    );
    words.forEach((word) => {
        if (wordTracker.hasOwnProperty(word)) {
            wordTracker[word] += 1;
        }
    });

    Object.entries(wordTracker)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => {
            console.log(`${word} - ${count}`);
        });
}

countWords([
    'this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurrences',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task',
]);

console.log('-------------------');

countWords([
    'is the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'the',
    'And',
    'finally',
    'the',
    'the',
    'sentence',
]);
