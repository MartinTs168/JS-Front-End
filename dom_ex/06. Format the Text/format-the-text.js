function solve() {
    const text = document.querySelector('#input').value;
    const maxSentencesPerPar = 3;
    const sentences = text.split('. ');

    const parCount = Math.ceil(sentences.length / 3);

    for (let i = 0; i < parCount; i++) {
        const start = i * maxSentencesPerPar;
        const end = start + maxSentencesPerPar;
        const par = sentences.slice(start, end).join('. ');
        const parElement = `<p>${par}</p>`;
        document.querySelector('#output').innerHTML += parElement;
    }
}
