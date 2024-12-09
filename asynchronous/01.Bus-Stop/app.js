function getInfo() {
    const stopId = document.querySelector('input#stopId').value;
    const stopName = document.querySelector('div#stopName');

    fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`)
        .then((response) => response.json())
        .then((data) => {
            stopName.textContent = data.name;

            const buses = document.querySelector('ul#buses');

            Object.entries(data.buses).forEach((busInfo) => {
                const li = document.createElement('li');
                li.textContent = `Bus ${busInfo[0]} arrives  in ${busInfo[1]} minutes`;
                buses.appendChild(li);
            });
        })
        .catch((err) => (stopName.textContent = 'Error'));
}
