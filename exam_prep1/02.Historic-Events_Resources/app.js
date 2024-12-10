window.addEventListener('load', solve);

function solve() {
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

    function createEntry({ name, time, description }) {
        // li > article > p, p, p < div.buttons > button.edit-btn, button.next-btn

        const entryEl = createElement(
            'li',
            { dataset: { name, time, description } },
            previewListEl
        );

        const articleEl = createElement('article', {}, entryEl);
        createElement('p', { textContent: name }, articleEl);
        createElement('p', { textContent: time }, articleEl);
        createElement('p', { textContent: description }, articleEl);

        const buttonsDiv = createElement(
            'div',
            { className: 'buttons' },
            entryEl
        );

        createElement(
            'button',
            {
                textContent: 'Edit',
                className: 'edit-btn',
                onclick: editEntryHandler,
            },
            buttonsDiv
        );

        createElement(
            'button',
            {
                textContent: 'Next',
                className: 'next-btn',
                onclick: nextEntryHandler,
            },
            buttonsDiv
        );
    }

    function editEntryHandler(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        const values = [
            entryEl.dataset.name,
            entryEl.dataset.time,
            entryEl.dataset.description,
        ];

        fields.forEach((field, index) => (field.value = values[index]));

        addElBtn.disabled = false;
    }

    function nextEntryHandler(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        entryEl.querySelector('div.buttons').remove();

        createElement(
            'button',
            {
                className: 'archive-btn',
                textContent: 'Archive',
                onclick: archiveEntryHandler,
            },
            entryEl
        );

        archiveListEl.appendChild(entryEl);
    }

    function archiveEntryHandler(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        addElBtn.disabled = false;
    }

    const fields = [...document.querySelectorAll('#name, #time, #description')];
    const addElBtn = document.querySelector('#add-btn');

    const previewListEl = document.querySelector('#preview-list');
    const archiveListEl = document.querySelector('#archive-list');

    addElBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const [name, time, description] = fields.map((f) => f.value);

        if (!name || !time || !description) {
            return;
        }

        createEntry({ name, time, description });

        fields.forEach((f) => (f.value = ''));
        addElBtn.disabled = true;
    });
}
