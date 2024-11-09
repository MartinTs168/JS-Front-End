// function charsInRange(char1, char2) {
//     const res = [];

//     const char1Code = char1.charCodeAt(0);
//     const char2Code = char2.charCodeAt(0);

//     const startCode = Math.min(char1Code, char2Code);
//     const endCode = Math.max(char1Code, char2Code);

//     for (let i = startCode + 1; i < endCode; i++) {
//         res.push(String.fromCharCode(i));
//     }

//     console.log(res.join(' '));
// }

// charsInRange('#', ':');

function charsInRange(char1, char2) {
    const start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    const end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));

    const chars = Array.from({ length: end - start - 1 }, (_, i) =>
        String.fromCharCode(start + i + 1)
    );
    const res = chars.reduce((acc, char) => acc + char + ' ', '');
    console.log(res);
}
