/*
    REST API Methods

        loadContacts
        createContact
        deleteContact

    DOM API Methods

        createEntry
        deleteEntry

        loadEntriesHandler
        createEntryHandler
        deleteEntryHandler

*/

function loadContacts(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error(err));
}

function createContact(baseUrl, contact, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(contact),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error(err));
}

function deleteContact(baseUrl, contact, onSuccess) {
    fetch(`${baseUrl}/${contact._id}`, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error(err));
}

function createElement(tag, properties, container = null) {
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

function init() {
    //http://localhost:3030/jsonstore/phonebook
    //http://localhost:3030/jsonstore/phonebook/:key>

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    const loadBtn = document.querySelector('#btnLoad');
    const createBtn = document.querySelector('#btnCreate');
    const phonebookEl = document.querySelector('#phonebook');

    function createEntry({ person, phone, _id }) {
        const entryEl = createElement(
            'li',
            {
                textContent: `${person}: ${phone}`,
                dataset: { person, phone, _id },
            },
            phonebookEl
        );

        createElement(
            'button',
            { textContent: 'Delete', onclick: deleteEntryHandler },
            entryEl
        );
    }

    function deleteEntry(contact) {
        phonebookEl.querySelector(`li[data-_id="${contact._id}"`).remove();
    }

    function createEntryHandler(e) {
        const inputs = document.querySelectorAll('input[type=text][id]');

        const [person, phone] = [...inputs].map((field) => field.value);

        if (!person || !phone) {
            return;
        }

        const contact = { person, phone };

        createContact(baseUrl, contact, (result) => {
            createEntry(result);
        });
    }
    function deleteEntryHandler(e) {
        entryEl = e.target.closest('li');

        const contact = Object.assign({}, entryEl.dataset); // creates object and assigns values of the object

        deleteContact(baseUrl, contact, (result) => {
            deleteEntry(result);
        });
    }

    loadBtn.addEventListener(
        'click',
        loadContacts(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        })
    );

    createBtn.addEventListener('click', createEntryHandler);
}

document.addEventListener('DOMContentLoaded', init);
