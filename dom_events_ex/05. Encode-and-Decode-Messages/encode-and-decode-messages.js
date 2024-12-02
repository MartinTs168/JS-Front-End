document.addEventListener('DOMContentLoaded', solve);

function solve() {
    function encode(message) {
        result = '';
        [...message].forEach((char) => {
            const newCharCode = char.charCodeAt(0) + 1;
            result += String.fromCharCode(newCharCode);
        });

        return result;
    }

    function decode(message) {
        result = '';
        [...message].forEach((char) => {
            const newCharCode = char.charCodeAt(0) - 1;
            result += String.fromCharCode(newCharCode);
        });

        return result;
    }

    const encodeForm = document.querySelector('form#encode');
    encodeForm.addEventListener('submit', encodeAndSendEvnt);

    const decodeForm = document.querySelector('form#decode');
    decodeForm.addEventListener('submit', decodeAndReadEvnt);

    function encodeAndSendEvnt(event) {
        event.preventDefault();
        const encodeFormTextarea = encodeForm.querySelector('textarea');
        const newMessage = encode(encodeFormTextarea.value);

        decodeForm.querySelector('textarea').value = newMessage;
        encodeFormTextarea.value = '';
    }

    function decodeAndReadEvnt(event) {
        event.preventDefault();
        const decodeFormTextarea = decodeForm.querySelector('textarea');
        const newMessage = decode(decodeFormTextarea.value);
        decodeFormTextarea.value = newMessage;
    }
}
