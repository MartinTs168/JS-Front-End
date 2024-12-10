//-	http://localhost:3030/jsonstore/matches/
//-	http://localhost:3030/jsonstore/matches/:id

/*

API code

    Load/Read list of resources

    Create single resource
    Read single resource
    Edit single resource
    Delete single resource

DOM Code

    CreateEntry
    DeleteEntry

    UpdateEntry = CeleteEntry + CreateEntry

    Event handlers

        createHanlder
        updateHandler
        deleteHandler


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

function loadMatches(baseUrl, onSuccess) {
    fetch(baseUrl)
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function createMatch(baseUrl, match, onSuccess) {
    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(match),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function updateMatch(baseUrl, match, onSuccess) {
    fetch(baseUrl + match._id, {
        method: 'PUT',
        body: JSON.stringify(match),
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function deleteMatch(baseUrl, match, onSuccess) {
    fetch(baseUrl + match._id, {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error('Error' + err));
}

function init() {
    const baseUrl = 'http://localhost:3030/jsonstore/matches/';

    const fields = [
        ...document.querySelectorAll('#form form input[type=text]'),
    ];
    const listEl = document.querySelector('#list');
    const addBtn = document.querySelector('#add-match');
    const editBtn = document.querySelector('#edit-match');

    addBtn.addEventListener('click', createHandler);
    editBtn.addEventListener('click', updateHandler);

    function loadEntries() {
        listEl.innerHTML = '';

        loadMatches(baseUrl, (result) => {
            Object.values(result).forEach(createEntry);
        });
    }

    function createEntry({ host, score, guest, _id }) {
        const entryel = createElement(
            'li',
            {
                className: 'match',
                dataset: { host, score, guest, _id },
            },
            listEl
        );
        const infoEl = createElement('div', { className: 'info' }, entryel);
        createElement('p', { textContent: host }, infoEl);
        createElement('p', { textContent: score }, infoEl);
        createElement('p', { textContent: guest }, infoEl);
        const buttonsEl = createElement(
            'div',
            { className: 'btn-wrapper' },
            entryel
        );
        createElement(
            'button',
            {
                textContent: 'Change',
                className: 'change-btn',
                onclick: changeHandler,
            },
            buttonsEl
        );
        createElement(
            'button',
            {
                textContent: 'Delete',
                className: 'delete-btn',
                onclick: deleteHandler,
            },
            buttonsEl
        );
    }

    function deleteEntry({ host, score, guest, _id }) {
        listEl.querySelector(`li[data-_id="${_id}"]`).remove();
    }

    function changeHandler(e) {
        const entryEl = e.target.closest('li');
        console.log(entryEl);
        const values = Object.values(entryEl.dataset);

        entryEl.classList.add('active');

        fields.forEach((field, index) => (field.value = values[index]));

        editBtn.disabled = false;
        addBtn.disabled = true;
    }

    function deleteHandler(e) {
        const entryEl = e.target.closest('li');

        const match = Object.assign({}, entryEl.dataset); // creates object and assigns values of the object

        deleteMatch(baseUrl, match, (result) => {
            deleteEntry(result);
        });
    }

    function createHandler(e) {
        e.preventDefault();

        const [host, score, guest] = fields.map((field) => field.value);

        if (!host || !score || !guest) {
            return;
        }

        const match = {
            host,
            score,
            guest,
        };

        createMatch(baseUrl, match, (result) => {
            createEntry(result); // the result comes from the api
        });

        fields.forEach((field) => (field.value = ''));
    }

    function updateHandler(e) {
        e.preventDefault();

        const _id = listEl.querySelector('.active').dataset._id;
        const [host, score, guest] = fields.map((field) => field.value);

        if (!host || !score || !guest) {
            return;
        }

        const match = {
            host,
            score,
            guest,
            _id,
        };

        updateMatch(baseUrl, match, (result) => {
            loadEntries();
            editBtn.disabled = true;
            addBtn.disabled = false;

            fields.forEach((field) => (field.value = ''));
        });
    }

    loadEntries();
}

document.addEventListener('DOMContentLoaded', init);
