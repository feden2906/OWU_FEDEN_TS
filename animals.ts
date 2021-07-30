interface Animal {
    animalSounds: string;
    typeOfMovement: string;

    animalInfo(): string;
}

class Cat implements Animal {
    animalSounds: string;
    typeOfMovement: string;

    constructor(animalSounds: string, typeOfMovement: string) {
        this.animalSounds = animalSounds;
        this.typeOfMovement = typeOfMovement;
    }

    animalInfo(): string {
        return `animalSounds: ${this.animalSounds}, typeOfMovement: ${this.typeOfMovement}`;
    }
}

class Bird implements Animal {
    animalSounds: string;
    typeOfMovement: string;
    name: string

    constructor(animalSounds: string, typeOfMovement: string, name: string) {
        this.animalSounds = animalSounds;
        this.typeOfMovement = typeOfMovement;
        this.name = name;
    }

    animalInfo(): string {
        return `name: ${this.name}, animalSounds: ${this.animalSounds}, typeOfMovement: ${this.typeOfMovement}`;
    }
}

class Fish implements Animal {
    animalSounds: string;
    typeOfMovement: string;
    age: number;

    constructor(animalSounds: string, typeOfMovement: string, age: number) {
        this.animalSounds = animalSounds;
        this.typeOfMovement = typeOfMovement;
        this.age = age;
    }

    animalInfo(): string {
        return `age: ${this.age}, animalSounds: ${this.animalSounds}, typeOfMovement: ${this.typeOfMovement}`;
    }
}

const rudy = new Cat('Meaw!', 'walks');
rudy.animalInfo()

const kesha = new Bird('Karrr', 'flies', 'Kesha');
kesha.animalInfo();

const nemo = new Fish('Bulk', 'swims', 2);
nemo.animalInfo()




//   4.   1) написать интерфейс Animal который описывает:
// тип движения животного(плавает, ходит, бегает) типа стринг
// что говорит тип стринг
// и функцию которая возвращает информацию о животном
// создать три класса Cat, Bird, Fish и имплементировать для каждого интерфейс Animal


// interface Animal {
//     typeOfAnimal: string;
//     environment: string;
//     action: () => string;
// }
//
// function actionAnimal(qwer: Animal) {
//     const action = qwer.action()
//     console.log(action)
// }
//
// actionAnimal({
//     typeOfAnimal: 'cat',
//     environment: 'ground',
//     action: function () {
//         return 'running';
//     }
// })
//
// actionAnimal({
//     typeOfAnimal: 'bird',
//     environment: 'sky',
//     action: function () {
//         return 'flying';
//     }
// })
//
// actionAnimal({
//     typeOfAnimal: 'fish',
//     environment: 'water',
//     action: function () {
//         return 'swimming';
//     }
// })


// enum Movement {
//     FLYING = 'flying',
//     RUNNING = 'running',
//     SWIMMING = 'swimming'
// }
// enum Environment {
//     GROUND = 'ground',
//     SKY = 'sky',
//     WATER = 'water'
// }
//
// class Animal {
//     typeOfAnimal: string;
//     environment: Environment;
//     action: Movement;
// }
//
// class Cat implements Animal {
//     typeOfAnimal: string;
//     environment: Environment;
//     action: Movement.RUNNING;
//
//     constructor(typeOfAnimal: string, environment: Environment, action: Movement.RUNNING) {
//         this.typeOfAnimal = typeOfAnimal;
//         this.environment = environment;
//         this.action = action;
//     }
//
//     showInfo(): void {
//         console.log(`ця тварина вміє ${this.action}`);
//     }
// }
//
// class Bird implements Animal {
//     typeOfAnimal: string;
//     environment: Environment;
//     action: Movement.FLYING;
//
//     constructor(typeOfAnimal: string, environment: Environment, action: Movement.FLYING) {
//         this.typeOfAnimal = typeOfAnimal;
//         this.environment = environment;
//         this.action = action;
//     }
//
//     showInfo(): void {
//         console.log(`ця тварина вміє ${this.action}`);
//     }
// }
//
// class Fish implements Animal {
//     typeOfAnimal: string;
//     environment: Environment;
//     action: Movement.SWIMMING;
//
//     constructor(typeOfAnimal: string, environment: Environment, action: Movement.SWIMMING) {
//         this.typeOfAnimal = typeOfAnimal;
//         this.environment = environment;
//         this.action = action;
//     }
//
//     showInfo(): void {
//         console.log(`ця тварина вміє ${this.action}`);
//     }
// }
//
// let cat = new Cat('cat', Environment.GROUND, Movement.RUNNING);
// let bird = new Bird('bird', Environment.SKY, Movement.FLYING);
// let fish = new Fish('fish', Environment.WATER, Movement.SWIMMING);
//
// console.log(cat);
// console.log(bird);
// console.log(fish);
//
// cat.showInfo();
// bird.showInfo();
// fish.showInfo();
