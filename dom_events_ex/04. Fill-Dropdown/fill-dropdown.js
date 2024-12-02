document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const selectEl = document.querySelector('select#menu');

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const newItemText = e.target.querySelector('input#newItemText').value;
        const newItemValue = e.target.querySelector('input#newItemValue').value;

        if (newItemText == '' || newItemValue == '') {
            return;
        }

        const newOption = document.createElement('option');
        newOption.textContent = newItemText;
        newOption.setAttribute('value', newItemValue);
        selectEl.appendChild(newOption);

        e.target.reset();
    });
}
