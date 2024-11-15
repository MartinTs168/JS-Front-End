function colorize() {
    const tableEvenRows = document.querySelectorAll('tbody tr:nth-child(even)');
    tableEvenRows.forEach((row) => (row.style.backgroundColor = 'teal'));
}
