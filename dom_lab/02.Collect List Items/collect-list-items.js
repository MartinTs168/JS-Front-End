function extractText() {
    const list = [...document.querySelector('#items').children];
    const textArea = document.querySelector('#result');

    list.forEach((element) => {
        textArea.value += element.textContent + '\n';
    });
}
