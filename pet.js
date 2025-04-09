class Pet {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }

    greet() {
        console.log('Hello world')
    }

    speak() {
        console.log(`${this.name} says ${this.sound} ${this.sound}`)
    }
}


const pet1 = new Pet('Milo', 'Woof');
const pet2 = new Pet('Lita', 'woof');
const pet3 = new Pet('Figaro', 'miau');
const pet4 = new Pet('Jimmy', 'woof');

console.log(pet1)
console.log(pet2)
console.log(pet3)
console.log(pet4)

pet1.greet()
pet3.greet()
pet2.greet()


pet1.speak()
pet2.speak()
pet3.speak()
pet4.speak()