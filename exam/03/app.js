//-	http://localhost:3030/jsonstore/workout/

function createElement(tag, properties, container) {
    const element = document.createElement(tag);

    Object.keys(properties).forEach((key) => {
        if (typeof properties[key] == 'object') {
            Object.assign(element.dataset, properties[key]);
        } else {
            element[key] = properties[key];
        }
    });

    if (container) {
        container.append(element);
    }

    return element;
}

function loadSports(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function createSport(baseUrl, sport, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(sport),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function updateSport(baseUrl, sport, onSuccess) {
    fetch(baseUrl + sport._id, {
        method: 'PUT',
        body: JSON.stringify(sport),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function deleteSport(baseUrl, sport, onSuccess) {
    fetch(baseUrl + sport._id, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function init() {
    const baseUrl = 'http://localhost:3030/jsonstore/workout/';
    const liEl = document.querySelector('#list');
    const fields = [...document.querySelectorAll('#form form input')];
    console.log(fields);

    const addBtn = document.querySelector('#add-workout');
    addBtn.addEventListener('click', createHandler);
    const editBtn = document.querySelector('#edit-workout');
    editBtn.addEventListener('click', updateHandler);

    const loadBtn = document.querySelector('#load-workout');
    loadBtn.addEventListener('click', loadEntries);

    function loadEntries() {
        liEl.innerHTML = '';

        loadSports(baseUrl, (data) => {
            Object.values(data).forEach((sport) => {
                createEntry(sport);
            });
        });
    }

    function createEntry({ workout, location, date, _id }) {
        const container = createElement(
            'div',
            {
                className: 'container',
                dataset: { workout, location, date, _id },
            },
            liEl
        );
        createElement(
            'h2',
            {
                textContent: workout,
            },
            container
        );
        createElement(
            'h3',
            {
                textContent: date,
            },
            container
        );
        createElement(
            'h3',
            {
                id: 'location',
                textContent: location,
            },
            container
        );

        const buttonsContainer = createElement(
            'div',
            {
                id: 'buttons-container',
            },
            container
        );

        createElement(
            'button',
            {
                className: 'change-btn',
                textContent: 'Change',
                onclick: changeHandler,
            },
            buttonsContainer
        );
        createElement(
            'button',
            {
                className: 'delete-btn',
                textContent: 'Done',
                onclick: deleteHandler,
            },
            buttonsContainer
        );
    }

    function createHandler(e) {
        e.preventDefault();

        const [workout, location, date] = fields.map((f) => f.value);

        if (!workout || !location || !date) {
            return;
        }

        const sport = {
            workout,
            location,
            date,
        };

        createSport(baseUrl, sport, () => {
            loadEntries();
        });
        fields.forEach((f) => (f.value = ''));
    }

    function updateHandler(e) {
        e.preventDefault();
        const form = document.querySelector('#form');
        const [workout, location, date] = fields.map((f) => f.value);

        if (!workout || !location || !date) {
            return;
        }

        const sport = {
            workout,
            location,
            date,
            _id: form.dataset._id,
        };

        updateSport(baseUrl, sport, () => {
            loadEntries();
        });
        fields.forEach((f) => (f.value = ''));
        addBtn.disabled = false;
        editBtn.disabled = true;

        //TODO
    }

    function changeHandler(e) {
        const entryEl = e.target.closest('div.container');

        const form = document.querySelector('#form');
        form.dataset._id = entryEl.dataset._id;
        const values = Object.values(entryEl.dataset);

        fields.forEach((field, index) => {
            field.value = values[index];
        });

        addBtn.disabled = true;
        editBtn.disabled = false;
    }

    function deleteHandler(e) {
        const entryEl = e.target.closest('div.container');
        const sport = {
            _id: entryEl.dataset._id,
        };

        deleteSport(baseUrl, sport, () => {
            loadEntries();
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
