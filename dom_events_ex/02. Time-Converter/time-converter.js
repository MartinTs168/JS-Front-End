document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const daysInput = document.querySelector('#days-input');
    const hoursInput = document.querySelector('#hours-input');
    const minutesInput = document.querySelector('#minutes-input');
    const secondsInput = document.querySelector('#seconds-input');
    const mainArea = document.querySelector('main');

    function convertEvents(event) {
        event.preventDefault();
        let val = 0;
        switch (event.target.id) {
            case 'daysBtn':
                val = Number(daysInput.value);
                hoursInput.value = (val * 24).toFixed(2);
                minutesInput.value = (val * 1440).toFixed(2);
                secondsInput.value = (val * 86400).toFixed(2);
                break;
            case 'hoursBtn':
                val = Number(hoursInput.value);
                daysInput.value = (val / 24).toFixed(2);
                minutesInput.value = (val * 60).toFixed(2);
                secondsInput.value = (val * 3600).toFixed(2);
                break;
            case 'minutesBtn':
                val = Number(minutesInput.value);
                daysInput.value = (val / 1440).toFixed(2);
                hoursInput.value = (val / 60).toFixed(2);
                secondsInput.value = (val * 60).toFixed(2);
                break;
            case 'secondsBtn':
                val = Number(secondsInput.value);
                daysInput.value = (val / 86400).toFixed(2);
                hoursInput.value = (val / 3600).toFixed(2);
                minutesInput.value = (val / 60).toFixed(2);
                break;
        }
    }

    mainArea.addEventListener('click', convertEvents);
}
