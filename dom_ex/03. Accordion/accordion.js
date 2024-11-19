function toggle() {
    const button = document.querySelector('.button:nth-of-type(1)');
    const textContainer = document.querySelector('#extra');
    textContainer.style.display =
        textContainer.style.display === 'none' ? 'block' : 'none';

    button.textContent =
        textContainer.style.display === 'none' ? 'More' : 'Less';
}
