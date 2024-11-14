function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age,
    };

    return person;
}

const person = personInfo('Peter', 'Pan', 20);
console.log(person.age);
