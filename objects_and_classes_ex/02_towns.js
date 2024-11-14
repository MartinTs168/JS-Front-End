function solve(arr) {
    arr.forEach((row) => {
        const [town, latitude, longitude] = row.split(' | ');
        console.log({
            town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        });
    });
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
