function solve() {
    const searchText = document
        .querySelector('#searchText')
        .value.toLowerCase();
    const towns = [...document.querySelectorAll('#towns li')];
    const result = document.querySelector('#result');
    let countMatches = 0;
    towns.forEach((town) => {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
        town.style.color = 'inherit';
    });
    towns.forEach((town) => {
        if (town.textContent.toLowerCase().includes(searchText)) {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            town.style.color = 'black';
            countMatches++;
        }
    });

    result.textContent = `${countMatches} matches found`;
}
