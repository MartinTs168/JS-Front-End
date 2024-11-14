function phoneBook(arr) {
    const phoneBook = {};

    for (const line of arr) {
        const [name, number] = line.split(' ');
        phoneBook[name] = number;
    }

    for (const [name, number] of Object.entries(phoneBook)) {
        console.log(`${name} -> ${number}`);
    }
}
