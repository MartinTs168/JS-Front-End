/*

    API methods
        getAppointments
        createAppointment
        updateAppointment
        deleteAppointment

    DOM methods

        loadApointments
        createEntry
        removeEntry

        createEntryHandler
        updateEntryHandler
        deleteEntryHandler

*/

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

function getAppointments(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function createAppointment(baseUrl, appointment, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(appointment),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function updateAppointment(baseUrl, appointment, onSuccess) {
    fetch(baseUrl + appointment._id, {
        method: 'PUT',
        body: JSON.stringify(appointment),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function deleteAppointment(baseUrl, appointment, onSuccess) {
    fetch(baseUrl + appointment._id, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function init() {
    const baseUrl = 'http://localhost:3030/jsonstore/appointments/';
    const listEl = document.querySelector('ul#appointments-list');
    const loadAppointmentsBtn = document.querySelector('#load-appointments');
    const fields = [
        ...document.querySelectorAll(
            '#main-container input, #main-container select'
        ),
    ].sort();

    console.log(fields);

    const addBtn = document.querySelector('#add-appointment');
    const editBtn = document.querySelector('#edit-appointment');
    addBtn.addEventListener('click', createEntryHandler);
    editBtn.addEventListener('click', updateEntryHandler);

    loadAppointmentsBtn.addEventListener('click', loadEntries);

    function loadEntries() {
        listEl.innerHTML = '';

        getAppointments(baseUrl, (data) => {
            Object.values(data).forEach((entry) => {
                createEntry(entry);
            });
        });
    }

    function createEntry({ model, date, service, _id }) {
        const liEl = createElement(
            'li',
            {
                className: 'appointment',
                dataset: { model, date, service, _id },
            },
            listEl
        );

        createElement('h2', { textContent: model }, liEl);
        createElement('h3', { textContent: date }, liEl);
        createElement('h3', { textContent: service }, liEl);
        const buttonsEl = createElement(
            'div',
            { className: 'buttons-appointment' },
            liEl
        );

        createElement(
            'button',
            {
                textContent: 'Change',
                className: 'change-btn',
                onclick: changeEntryHandler,
            },
            buttonsEl
        );

        createElement(
            'button',
            {
                textContent: 'Delete',
                className: 'delete-btn',
                onclick: deleteEntryHandler,
            },
            buttonsEl
        );
    }

    function createEntryHandler(e) {
        e.preventDefault();

        const [model, date, service] = fields.map((f) => f.value);

        if (!model || !service || !date) {
            return;
        }

        createAppointment(baseUrl, { model, service, date }, (result) => {
            createEntry(result);
        });

        loadEntries();
        fields.forEach((f) => (f.value = ''));
    }

    function updateEntryHandler(e) {
        e.preventDefault();

        const _id = e.target.closest('#main-container #form').dataset._id;
        const [model, date, service] = fields.map((f) => f.value);

        if (!model || !service || !date || !_id) {
            return;
        }

        console.log(`Model: ${model}, Service: ${service}, Date: ${date}`);

        updateAppointment(baseUrl, { model, service, date, _id }, (result) => {
            loadEntries();
        });

        fields.forEach((f) => (f.value = ''));

        addBtn.disabled = false;
        editBtn.disabled = true;
    }
    function changeEntryHandler(e) {
        const entryEl = e.target.closest('li');

        const values = Object.values(entryEl.dataset);
        console.log(values);

        fields.forEach((field, index) => (field.value = values[index]));

        document.querySelector('#main-container #form').dataset._id =
            entryEl.dataset._id;

        addBtn.disabled = true;
        editBtn.disabled = false;
    }

    function deleteEntryHandler(e) {
        const entryEl = e.target.closest('li');
        const _id = entryEl.dataset._id;

        deleteAppointment(baseUrl, { _id }, (result) => {
            loadEntries();
        });
    }
}

document.addEventListener('DOMContentLoaded', init);
