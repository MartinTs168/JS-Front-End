function extract(content) {
    const elementText = document.querySelector('#' + content).textContent;
    const regex = /(?<=\().*?(?=\))/g;
    const matches = elementText.match(regex);
    return matches.join(';');
}
