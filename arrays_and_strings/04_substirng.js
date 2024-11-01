function solve(word, index, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += word[index++];
        if (index >= word.length) {
            break;
        }
    }

    // result = word.substring(index, index + count);
    console.log(result);
}

// solve('ASentence', 1, 8);
// solve('SkipWord', 4, 7);
