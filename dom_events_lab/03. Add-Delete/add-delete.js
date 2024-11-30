function addItem() {
    const listItems = document.querySelector('#items');
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = '#';
    newLink.textContent = '[Delete]';
    newLink.addEventListener('click', () => {
        newItem.remove();
    });

    newItem.textContent = document.querySelector('#newItemText').value;
    newItem.appendChild(newLink);
    listItems.appendChild(newItem);
}
