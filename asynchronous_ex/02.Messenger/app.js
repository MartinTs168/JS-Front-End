function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const outputEl = document.querySelector('#messages');
    const inputs = document.querySelectorAll('#controls input[name');
    const submitBtnEl = document.querySelector('#submit');
    const refreshBtnEl = document.querySelector('#refresh');

    submitBtnEl.addEventListener('click', (e) => {
        const [author, content] = [...inputs].map((field) => field.value);

        if (!author || !content) {
            return;
        }

        const body = { author, content };

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((result) => {
                refreshBtnEl.click();
            });
    });

    refreshBtnEl.addEventListener('click', (e) => {
        outputEl.textContent = '';

        fetch(baseUrl)
            .then((res) => res.json())
            .then((messages) => {
                const messagesInfo = Object.values(messages).map(
                    (message) => `${message.author}: ${message.content}`
                );

                outputEl.textContent = messagesInfo.join('\n');
            })
            .catch((err) => console.error(err));
    });
}

attachEvents();
