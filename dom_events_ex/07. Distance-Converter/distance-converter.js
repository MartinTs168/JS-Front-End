document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const metersToElseValues = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    };

    const inputEl = document.querySelector('#inputDistance');
    const outputEl = document.querySelector('#outputDistance');

    const convertButton = document.querySelector('#convert');

    function convert() {
        const convertFrom = document.querySelector('select#inputUnits').value;
        const convertTo = document.querySelector('select#outputUnits').value;

        const valInMeters = metersToElseValues[convertFrom] * inputEl.value;
        console.log(valInMeters);
        const outputValue = valInMeters / metersToElseValues[convertTo];
        console.log(outputValue);
        outputEl.value = outputValue;
    }
    convertButton.addEventListener('click', convert);
}
