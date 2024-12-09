function solve() {
    let currentStopId = 'depot';
    const stopInfoEl = document.querySelector('span.info');
    const departButton = document.querySelector('#depart');
    const arriveButton = document.querySelector('#arrive');
    1;

    function changeButtonState(button) {
        button.disabled = !button.disabled;
    }

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`)
            .then((respones) => respones.json())
            .then((data) => {
                stopInfoEl.textContent = `Next stop ${data.name}`;
                changeButtonState(departButton);
                changeButtonState(arriveButton);
            })
            .catch((err) => (stopInfoEl.textContent = 'Error'));
    }

    async function arrive() {
        const data = await fetch(
            `http://localhost:3030/jsonstore/bus/schedule/${currentStopId}`
        )
            .then((respones) => respones.json())
            .then((data) => data);

        stopInfoEl.textContent = `Arriving at ${data.name}`;
        currentStopId = data.next;
        changeButtonState(departButton);
        changeButtonState(arriveButton);
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
