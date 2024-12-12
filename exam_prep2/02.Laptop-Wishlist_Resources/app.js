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

    function addLaptop(e) {
        e.preventDefault();
        if (!model.value || !storage.value || !price.value) {
            return;
        }

        const liEl = createElement(
            'li',
            {
                className: 'laptop-item',
                dataset: {
                    model: model.value,
                    storage: storage.value,
                    price: price.value,
                },
            },
            checkListEl
        );

        const article = createElement('article', {}, liEl);

        createElement('p', { textContent: model.value }, article);
        createElement(
            'p',
            { textContent: `Memory: ${storage.value} TB` },
            article
        );
        createElement('p', { textContent: `Price: ${price.value}$` }, article);
        createElement(
            'button',
            { textContent: 'edit', className: 'btn edit', onclick: editLaptop },
            liEl
        );

        createElement(
            'button',
            {
                textContent: 'ok',
                className: 'btn ok',
                onclick: pushLaptop,
            },
            liEl
        );

        addBtn.disabled = true;
        [model, storage, price].forEach((input) => (input.value = ''));
    }

    function editLaptop(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        model.value = entryEl.dataset.model;
        storage.value = entryEl.dataset.storage;
        price.value = entryEl.dataset.price;

        addBtn.disabled = false;
    }

    function pushLaptop(e) {
        const entryEl = e.target.closest('li');
        entryEl.remove();

        const liEl = createElement(
            'li',
            {
                className: 'laptop-item',
                dataset: {
                    model: model.value,
                    storage: storage.value,
                    price: price.value,
                },
            },
            wishListEl
        );

        const article = createElement('article', {}, liEl);

        createElement('p', { textContent: entryEl.dataset.model }, article);
        createElement(
            'p',
            { textContent: `Memory: ${entryEl.dataset.storage} TB` },
            article
        );
        createElement(
            'p',
            { textContent: `Price: ${entryEl.dataset.price}$` },
            article
        );

        addBtn.disabled = false;
    }

    const addBtn = document.querySelector('#add-btn');
    const [model, storage, price] = [
        ...document.querySelectorAll('form.laptop-info input'),
    ];
    const checkListEl = document.querySelector('#check-list');
    const wishListEl = document.querySelector('#laptops-list');

    document.querySelector('button.clear').addEventListener('click', () => {
        window.location.reload();
    });

    addBtn.addEventListener('click', addLaptop);
}
