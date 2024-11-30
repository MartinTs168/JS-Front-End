function deleteByEmail() {
    const searchStr = document
        .querySelector('input[name="email"]')
        .value.toLowerCase();
    const people = document.querySelectorAll('tbody tr td:nth-child(2)');
    const result = document.querySelector('#result');

    people.forEach((person) => {
        if (person.textContent.includes(searchStr)) {
            person.parentElement.remove(); // delete the whole row
        } else {
            result.textContent = 'Not found.';
        }
    });
}
