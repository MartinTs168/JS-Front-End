function solve() {
    const text = document.querySelector('#text').value.toLowerCase();
    const convention = document
        .querySelector('#naming-convention')
        .value.toLowerCase();
    const result = document.querySelector('#result');
    debugger;
    switch (convention) {
        case 'pascal case': {
            let words = text.split(' ');
            words.forEach((element, index) => {
                words[index] =
                    element.charAt(0).toUpperCase() + element.slice(1);
            });

            result.textContent = words.join('');
            break;
        }

        case 'camel case': {
            const words = text.split(' ');
            for (let i = 1; i < words.length; i++) {
                words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            }

            result.textContent = words.join('');
            break;
        }

        default: {
            result.textContent = 'Error!';
            break;
        }
    }
}
