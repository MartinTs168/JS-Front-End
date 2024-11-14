function jsonToObject(string) {
    let obj = JSON.parse(string);
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}
