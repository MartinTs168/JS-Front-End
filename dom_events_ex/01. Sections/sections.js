document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const button = document.querySelector('#task-input > input[type="submit"]');
    const input = document.querySelector('#task-input > input[type="text"]');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionElements = input.value.split(', ');
        sectionElements.forEach((section) => {
            const sectionElement = document.createElement('div');
            const paragraphElement = document.createElement('p');
            paragraphElement.style.display = 'none';
            paragraphElement.textContent = section;
            sectionElement.appendChild(paragraphElement);

            sectionElement.addEventListener('click', (e) => {
                e.target.querySelector('p').style.display = 'block';
            });

            document.querySelector('#content').appendChild(sectionElement);
        });
    });
}
