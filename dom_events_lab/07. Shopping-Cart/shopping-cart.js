document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const textarea = document.querySelector('textarea');
    const checkoutButton = document.querySelector('button.checkout');
    const shoppingCartEl = document.querySelector('.shopping-cart');
    const addButtons = document.querySelectorAll('button.add-product');
    const cartObj = {};

    function addItemEvent(event) {
        if (
            event.target.tagName === 'BUTTON' &&
            event.target.classList.contains('add-product')
        ) {
            const parent = event.target.parentElement.parentElement;
            //console.log(parrent);
            const title = parent.querySelector('.product-title').textContent;
            //console.log(title);
            const price = Number(
                parent.querySelector('.product-line-price').textContent
            ).toFixed(2);
            if (!cartObj[title]) {
                cartObj[title] = 0;
            }
            cartObj[title] += Number(price);
            textarea.value += `Added ${title} for ${price} to the cart.\n`;
        }
    }

    function checkoutEvent() {
        const productList = Object.keys(cartObj);
        const total = Object.values(cartObj).reduce((a, b) => a + b, 0);
        const message = `You bought ${productList.join(
            ', '
        )} for ${total.toFixed(2)}.`;
        textarea.value += message;

        addButtons.forEach((button) => {
            button.disabled = true;
        });
        checkoutButton.disabled = true;
    }

    shoppingCartEl.addEventListener('click', addItemEvent);
    checkoutButton.addEventListener('click', checkoutEvent);
}
