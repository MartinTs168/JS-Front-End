function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/';
    const main = document.querySelector('#main');

    function loadEntries() {
        main.innerHTML = '';

        getAll(baseUrl, (result) => {
            Object.values(result).forEach((entry) => {
                createEntry(entry);
            });
        });
    }

    function createEntry({ _id, title }) {
        const accordion = createElement(
            'div',
            {
                className: 'accordion',
            },
            main
        );

        const head = createElement(
            'div',
            {
                className: 'head',
            },
            accordion
        );

        createElement(
            'span',
            {
                textContent: title,
            },
            head
        );

        createElement(
            'button',
            {
                className: 'button',
                textContent: 'More',
                id: _id,
                onclick: showMoreHandler,
            },
            head
        );

        const extraEl = createElement(
            'div',
            {
                className: 'extra',
            },
            accordion
        );
        get(baseUrl, _id, (result) => {
            createElement(
                'p',
                {
                    textContent: result.content,
                },
                extraEl
            );
        });
    }

    function showMoreHandler(e) {
        if (e.target.textContent == 'More') {
            const extraEl =
                e.target.parentElement.parentElement.querySelector('div.extra');
            e.target.textContent = 'Less';
            extraEl.style.display = 'block';
        } else if (e.target.textContent == 'Less') {
            e.target.textContent = 'More';
            const extraEl =
                e.target.parentElement.parentElement.querySelector('div.extra');
            extraEl.style.display = 'none';
        }
    }

    loadEntries();
    console.log(document.querySelectorAll('.accordion .extra p'));
}

function getAll(baseUrl, onSuccess) {
    fetch(baseUrl + 'list')
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error(err));
}
function get(baseUrl, id, onSuccess) {
    fetch(`${baseUrl}details/${id}`)
        .then((res) => res.json())
        .then(onSuccess)
        .catch((err) => console.error(err));
}

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

document.addEventListener('DOMContentLoaded', solution);
