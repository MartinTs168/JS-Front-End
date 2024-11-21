function solve() {
    const number = Number(document.querySelector('#input').value);
    const outputEl = document.querySelector('#result');
    const convertTo = document.querySelector('#selectMenuTo').value;

    switch (convertTo) {
        case 'binary': {
            outputEl.value = number.toString(2);
            break;
        }

        case 'hexadecimal': {
            outputEl.value = number.toString(16).toUpperCase();
            break;
        }

        default: {
            outputEl.value = '';
        }
    }
}
