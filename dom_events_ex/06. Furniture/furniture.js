document.addEventListener('DOMContentLoaded', solve);

function solve() {
    document.querySelector('form#input').addEventListener('submit', (e) => {
        e.preventDefault();

        const objList = JSON.parse(e.target.querySelector('textarea').value);
        //console.log(objList);
        const tableBody = document.querySelector('table tbody');

        objList.forEach((obj) => {
            const tr = document.createElement('tr');

            const tdImg = document.createElement('td');
            const img = document.createElement('img');
            img.src = obj.img;
            tdImg.appendChild(img);

            const tdName = document.createElement('td');
            const pName = document.createElement('p');
            pName.textContent = obj.name;
            tdName.appendChild(pName);

            const tdPrice = document.createElement('td');
            const pPrice = document.createElement('p');
            pPrice.textContent = obj.price;
            tdPrice.appendChild(pPrice);

            const tdDecF = document.createElement('td');
            const pDecF = document.createElement('p');
            pDecF.textContent = obj.decFactor;
            tdDecF.appendChild(pDecF);

            const tdMark = document.createElement('td');
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            tdMark.appendChild(input);

            tr.append(tdImg, tdName, tdPrice, tdDecF, tdMark);

            tableBody.appendChild(tr);
        });
    });

    document.querySelector('form#shop').addEventListener('submit', (e) => {
        e.preventDefault();
        const tableRows = document.querySelectorAll(
            'tr:has(input[type="checkbox"]:checked)'
        );
        let totalPrice = 0;
        const decFactors = [];
        const productNames = [];

        tableRows.forEach((tr) => {
            totalPrice += Number(tr.children[2].children[0].textContent);
            productNames.push(tr.children[1].children[0].textContent);
            decFactors.push(Number(tr.children[3].children[0].textContent));
        });

        const decAvg =
            decFactors.reduce((a, b) => a + b, 0) / decFactors.length;

        const textArea = document.querySelector('form#shop textarea');
        textArea.value = `Bought furniture: ${productNames.join(
            ', '
        )}\nTotal price: ${totalPrice}\nAverage decoration factor: ${decAvg}\n`;
    });
}
