const weatherIcons = {
    Sunny: '&#x2600;',
    'Partly sunny': '&#x26C5;',
    Overcast: '&#x2601;',
    Rain: '&#x2614;',
    Degrees: '&#176;',
};

function attachEvents() {
    document
        .querySelector('input#submit')
        .addEventListener('click', getWeather);
}

async function getWeather() {
    const forecastEl = document.querySelector('div#forecast');
    forecastEl.style.display = 'block';
    const location = document.querySelector('input#location').value;

    const locationCode = await fetch(
        'http://localhost:3030/jsonstore/forecaster/locations'
    )
        .then((respones) => respones.json())
        .then((data) => {
            return data.find(({ name }) => name === location).code;
        })
        .catch(() => {
            forecastEl.textContent = 'Error';
        });

    const locationWheatherToday = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${locationCode}`
    )
        .then((respones) => respones.json())
        .then((data) => data)
        .catch(() => {
            forecastEl.textContent = 'Error';
        });

    const locationWheatherUpcoming = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${locationCode}`
    )
        .then((respones) => respones.json())
        .then((data) => data)
        .catch(() => {
            forecastEl.textContent = 'Error';
        });

    try {
        createForecastTemplateToday(locationWheatherToday);
        createForecastTemplateUpcoming(locationWheatherUpcoming);
    } catch (error) {
        forecastEl.textContent = 'Error';
        console.error(error);
    }
}

function createForecastTemplateToday(data) {
    const parser = new DOMParser();
    const degreesSymbol = parser.parseFromString(
        weatherIcons.Degrees,
        'text/html'
    ).body.textContent;

    const currentEl = document.querySelector('#forecast > #current');
    const forecastsDiv = document.createElement('div');
    forecastsDiv.classList.add('forecast-info');

    const spanSymbol = document.createElement('span');
    spanSymbol.classList.add('condition', 'symbol');
    spanSymbol.textContent = parser.parseFromString(
        weatherIcons[data.forecast.condition],
        'text/html'
    ).body.textContent;

    const spanCondition = document.createElement('span');
    spanCondition.classList.add('condition');

    const spanName = document.createElement('span');
    spanName.classList.add('forecast-data');
    spanName.textContent = data.name;

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('forecast-data');
    spanTemp.textContent = `${data.forecast.low}${degreesSymbol}/${data.forecast.high}${degreesSymbol}`;

    const spanConditionText = document.createElement('span');
    spanConditionText.classList.add('forecast-data');
    spanConditionText.textContent = data.forecast.condition;

    spanCondition.appendChild(spanName);
    spanCondition.appendChild(spanTemp);
    spanCondition.appendChild(spanConditionText);

    forecastsDiv.appendChild(spanSymbol);
    forecastsDiv.appendChild(spanCondition);

    currentEl.appendChild(forecastsDiv);
}

function createForecastTemplateUpcoming(data) {
    const parser = new DOMParser();
    const degreesSymbol = parser.parseFromString(
        weatherIcons.Degrees,
        'text/html'
    ).body.textContent;

    const upcomingDivEl = document.querySelector('#forecast > #upcoming');
    const forecastInfoDiv = document.createElement('div');
    forecastInfoDiv.classList.add('forecast-info');

    console.log(data);

    data.forecast.forEach((currData) => {
        const upcomingSpanEl = document.createElement('span');
        upcomingSpanEl.classList.add('upcoming');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('symbol');
        symbolSpan.textContent = parser.parseFromString(
            weatherIcons[currData.condition],
            'text/html'
        ).body.textContent;

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.textContent = `${currData.low}${degreesSymbol}/${currData.high}${degreesSymbol}`;

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('forecast-data');
        conditionSpan.textContent = currData.condition;

        upcomingSpanEl.appendChild(symbolSpan);
        upcomingSpanEl.appendChild(tempSpan);
        upcomingSpanEl.appendChild(conditionSpan);

        forecastInfoDiv.appendChild(upcomingSpanEl);
    });

    upcomingDivEl.appendChild(forecastInfoDiv);
}

attachEvents();
