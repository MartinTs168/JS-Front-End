document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const input = document.querySelector('#email');
    const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    input.addEventListener('change', (event) => {
        if (!pattern.test(event.currentTarget.value)) {
            return event.currentTarget.classList.add('error');
        }

        event.currentTarget.classList.remove('error');
    });
}
