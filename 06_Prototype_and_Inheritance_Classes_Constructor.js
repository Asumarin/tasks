// Создать 2 объекта: animal и cat, в объект animal добавить свойство move, объект cat должен наследовать свойство move, реализовать и через прототипы и через классы.

// let animal = {
//     move: true
// };
// let cat = {};

// cat.__proto__ = animal;
// console.log(cat.move);

class animal {
    constructor(name){
        this.name = name;
    }
    move(name){
        console.log(`${this.name} slapped the door`);
    }
}

class cat extends animal{
    scratch(){
        console.log(`${this.name} scratches chest`);
    }
}

let mk = new cat ('Mikee');

mk.move();
mk.scratch();