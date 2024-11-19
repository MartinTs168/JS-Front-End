function solve() {
    const search = document.querySelector('#searchField');
    const searchText = search.value.toLowerCase().trim();
    search.value = '';

    const tableRows = [...document.querySelectorAll('tbody tr')];
    tableRows.forEach((row) => {
        row.classList.remove('select');
    });

    if (searchText === '') {
        return;
    }

    tableRows.forEach((row) => {
        if (row.textContent.toLowerCase().includes(searchText)) {
            row.classList.add('select');
        }
    });
}
