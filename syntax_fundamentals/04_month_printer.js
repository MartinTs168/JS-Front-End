function solve(num) {
    if (num < 1 || num > 12) {
        console.log('Error!');
    } else {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        console.log(months[num - 1]);
    }
}
