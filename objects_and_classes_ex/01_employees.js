function solve(arr) {
    const employees = {};

    arr.forEach((employee) => {
        employees[employee] = employee.length;
    });

    for (const [name, personalNum] of Object.entries(employees)) {
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal',
]);
