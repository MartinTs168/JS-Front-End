function createCatsFromArr(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    arr.forEach((element) => {
        const [name, age] = element.split(' ');
        let cat = new Cat(name, age);
        cat.meow();
    });
}

createCatsFromArr(['Mellow 2', 'Tom 5']);
