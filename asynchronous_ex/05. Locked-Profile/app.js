function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles/';
    const main = document.querySelector('main');

    function loadEntries() {
        main.innerHTML = '';

        getInfo(baseUrl, (result) => {
            Object.values(result).forEach((entry) => {
                createEntry(entry);
            });
        });
    }

    loadEntries();

    function createEntry({ username, email, age, _id }) {
        const profileEl = createElement(
            'div',
            {
                className: 'profile',
                dataset: { username, email, age },
            },
            main
        );

        createElement(
            'img',
            {
                className: 'userIcon',
                src: './iconProfile2.png',
            },
            profileEl
        );

        createElement('label', { textContent: 'Lock' }, profileEl);
        createElement(
            'input',
            {
                type: 'radio',
                name: `locked${_id}`,
                value: 'lock',
                checked: true,
            },
            profileEl
        );

        createElement('label', { textContent: 'Unlock' }, profileEl);
        createElement(
            'input',
            {
                type: 'radio',
                name: `locked${_id}`,
                value: 'unlock',
            },
            profileEl
        );

        createElement('br', {}, profileEl);
        createElement('hr', {}, profileEl);
        createElement('label', { textContent: 'Username' }, profileEl);
        createElement(
            'input',
            {
                value: username,
                type: 'text',
                name: 'user1Username',
                disabled: true,
                readonly: true,
            },
            profileEl
        );

        const hiddenInfoEl = createElement(
            'div',
            {
                className: 'hiddenInfo',
            },
            profileEl
        );

        createElement('hr', {}, hiddenInfoEl);

        createElement('label', { textContent: 'Email' }, hiddenInfoEl);
        createElement(
            'input',
            {
                value: email,
                type: 'email',
                disabled: true,
                readonly: true,
            },
            hiddenInfoEl
        );

        createElement('label', { textContent: 'Age' }, hiddenInfoEl);
        createElement(
            'input',
            {
                value: age,
                type: 'number',
                disabled: true,
                readonly: true,
            },
            hiddenInfoEl
        );

        createElement(
            'button',
            {
                onclick: showInfoHandler,
                textContent: 'Show more',
            },
            profileEl
        );
    }
}

function getInfo(baseUrl, onSuccess) {
    fetch(baseUrl)
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

function showInfoHandler(e) {
    const hiddenInfo = e.target.previousElementSibling;

    const profile = e.target.closest('.profile');

    const isLock = profile.querySelector('input[value="lock"]').checked;

    if (!isLock) {
        hiddenInfo.classList.remove('hiddenInfo');
        e.target.textContent = 'Hide it';
    } else {
        hiddenInfo.className = 'hiddenInfo';
        e.target.textContent = 'Show more';
    }
}
