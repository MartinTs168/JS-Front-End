function sumTable() {
    // debugger;
    const numCols = document.querySelectorAll('tbody tr > td:nth-child(2)');
    const sum = Array.from(numCols).reduce(
        (acc, num) => acc + Number(num.innerText),
        0
    );

    document.querySelector('#sum').innerText = sum;
}
