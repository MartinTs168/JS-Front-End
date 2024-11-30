function addItem() {
    const listItems = document.querySelector('#items');
    const newItem = document.createElement('li');
    newItem.textContent = document.querySelector('#newItemText').value;
    listItems.appendChild(newItem);
}
