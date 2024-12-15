window.addEventListener('load', solve);

// function solve() {
//     function createElement(tag, properties, container) {
//         const element = document.createElement(tag);

//         for (const key in properties) {
//             if (typeof properties[key] === 'object') {
//                 for (const dataKey in properties[key]) {
//                     element.dataset[dataKey] = properties[key][dataKey];
//                 }
//             } else {
//                 element[key] = properties[key];
//             }
//         }

//         if (container) {
//             container.appendChild(element); // Use appendChild instead of append
//         }

//         return element;
//     }

//     const nextBtn = document.querySelector('#next-btn');
//     const previewList = document.querySelector('#preview-list');
//     const eventList = document.querySelector('#event-list');
//     const [email, event, location] = Array.from(
//         document.querySelectorAll('.registerEvent input[type="text"]')
//     );

//     nextBtn.addEventListener('click', nextEventHandler);

//     function nextEventHandler(e) {
//         e.preventDefault();

//         if (!email.value || !event.value || !location.value) {
//             return;
//         }

//         const applicationLi = createElement(
//             'li',
//             {
//                 className: 'application',
//                 dataset: {
//                     email: email.value,
//                     event: event.value,
//                     location: location.value,
//                 },
//             },
//             previewList
//         );

//         const article = createElement('article', {}, applicationLi);

//         createElement(
//             'h4',
//             {
//                 textContent: email.value,
//             },
//             article
//         );

//         const firstPar = createElement('p', {}, article);
//         firstPar.innerHTML = `<strong>Location:</strong><br>${location.value}`;

//         const secondPar = createElement('p', {}, article);
//         secondPar.innerHTML = `<strong>Location:</strong><br>${location.value}`;

//         createElement(
//             'button',
//             {
//                 className: 'action-btn edit',
//                 onclick: editEventHandler,
//                 textContent: 'edit',
//             },
//             applicationLi
//         );

//         createElement(
//             'button',
//             {
//                 className: 'action-btn apply',
//                 onclick: applyEventHandler,
//                 textContent: 'apply',
//             },
//             applicationLi
//         );

//         nextBtn.disabled = true;
//         [email, event, location].forEach((input) => (input.value = ''));

//         console.log(
//             document.querySelector('.application>article>h4').textContent
//         );

//         console.log(
//             document.querySelectorAll('.application>article>p')[0].textContent
//         );
//         console.log(
//             document.querySelectorAll('.application>article>p')[1].textContent
//         );
//     }

//     function editEventHandler(e) {
//         const entry = e.target.parentNode;
//         previewList.removeChild(entry);

//         email.value = entry.querySelector('h4').textContent;
//         const paragraphs = entry.querySelectorAll('p');

//         email.value = entry.querySelector('h4').textContent;
//         event.value = paragraphs[0].textContent.replace('Event:', '');
//         location.value = paragraphs[1].textContent.replace('Location:', '');

//         nextBtn.disabled = false;
//     }

//     function applyEventHandler(e) {
//         const entry = e.target.parentNode;
//         previewList.removeChild(entry);

//         const li = createElement('li', { className: 'application' }, eventList);
//         const article = createElement('article', {}, li);
//         article.innerHTML = entry.querySelector('article').innerHTML;

//         nextBtn.disabled = false;
//     }
// }

// function solve() {
//     function createElement(tag, properties, container) {
//         const element = document.createElement(tag);

//         for (const key in properties) {
//             if (properties[key]) {
//                 element[key] = properties[key];
//             }
//         }

//         if (container) {
//             container.appendChild(element);
//         }

//         return element;
//     }

//     const nextBtn = document.querySelector('#next-btn');
//     const previewList = document.querySelector('#preview-list');
//     const eventList = document.querySelector('#event-list');
//     const emailInput = document.querySelector('#email');
//     const eventInput = document.querySelector('#event');
//     const locationInput = document.querySelector('#location');

//     nextBtn.addEventListener('click', nextEventHandler);

//     function nextEventHandler(e) {
//         e.preventDefault();

//         if (!emailInput.value || !eventInput.value || !locationInput.value) {
//             return; // Do nothing if any input is empty
//         }

//         const applicationLi = createElement(
//             'li',
//             { className: 'application' },
//             previewList
//         );
//         const article = createElement('article', {}, applicationLi);

//         createElement('h4', { textContent: emailInput.value }, article);
//         const p1 = createElement('p', {}, article);
//         const p2 = createElement('p', {}, article);

//         p1.innerHTML = `<strong>Location:</strong><br>${location.value}`;
//         p2.innerHTML = `<strong>Location:</strong><br>${eventInput.value}`;

//         createElement(
//             'button',
//             {
//                 className: 'action-btn edit',
//                 textContent: 'edit',
//                 onclick: editEventHandler,
//             },
//             applicationLi
//         );

//         createElement(
//             'button',
//             {
//                 className: 'action-btn apply',
//                 textContent: 'apply',
//                 onclick: applyEventHandler,
//             },
//             applicationLi
//         );

//         nextBtn.disabled = true;
//         emailInput.value = '';
//         eventInput.value = '';
//         locationInput.value = '';
//     }

//     function editEventHandler(e) {
//         const entry = e.target.parentElement;
//         previewList.removeChild(entry);

//         emailInput.value = entry.querySelector('h4').textContent;
//         const paragraphs = entry.querySelectorAll('p');
//         eventInput.value = paragraphs[0].textContent
//             .replace('Event:', '')
//             .trim();
//         locationInput.value = paragraphs[1].textContent
//             .replace('Location:', '')
//             .trim();

//         nextBtn.disabled = false;
//     }

//     function applyEventHandler(e) {
//         const entry = e.target.parentElement;
//         previewList.removeChild(entry);

//         const li = createElement('li', { className: 'application' }, eventList);
//         const article = createElement('article', {}, li);
//         article.innerHTML = entry.querySelector('article').innerHTML;

//         // Remove the edit and apply buttons
//         const buttons = li.querySelectorAll('button');
//         buttons.forEach((button) => button.remove());

//         nextBtn.disabled = false;
//     }
// }

function solve() {
    const emailInput = document.querySelector('#email');
    const eventInput = document.querySelector('#event');
    const locationInput = document.querySelector('#location');

    // const [emailInput, eventInput, locationInput] = Array.from(
    //     document.querySelectorAll('.registerEvent input[type="text"]')
    // );
    const nextButton = document.querySelector('#next-btn');
    const previewList = document.querySelector('#preview-list');
    const eventList = document.querySelector('#event-list');

    nextButton.addEventListener('click', () => {
        const email = emailInput.value.trim();
        const event = eventInput.value.trim();
        const location = locationInput.value.trim();

        if (!email || !event || !location) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'application';

        const pEmail = document.createElement('h4');
        pEmail.textContent = email;
        li.appendChild(pEmail);

        const pEvent = document.createElement('p');
        pEvent.innerHTML = `<strong>Event:</strong><br>${event}`;
        li.appendChild(pEvent);

        const pLocation = document.createElement('p');
        pLocation.innerHTML = `<strong>Location:</strong><br>${location}`;
        li.appendChild(pLocation);

        const editButton = document.createElement('button');
        editButton.className = 'action-btn edit';
        editButton.textContent = 'Edit';
        li.appendChild(editButton);

        const applyButton = document.createElement('button');
        applyButton.className = 'action-btn apply';
        applyButton.textContent = 'Apply';
        li.appendChild(applyButton);

        previewList.appendChild(li);

        nextButton.disabled = true;

        [emailInput, eventInput, locationInput].forEach((input) => {
            input.value = '';
        });

        editButton.addEventListener('click', () => {
            emailInput.value = email;
            eventInput.value = event;
            locationInput.value = location;

            nextButton.disabled = false;
            li.remove();
        });

        applyButton.addEventListener('click', () => {
            li.remove();
            editButton.remove();
            applyButton.remove();

            eventList.appendChild(li);

            nextButton.disabled = false;
        });
    });
}
