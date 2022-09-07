// Создать объект car, добавить к нему свойство color со значением 'черный'
// Изменить свойство color объекта car на 'зеленый'
// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

let car = {
    color : 'black',
    carPower : '9000',

    power(){
        return car.carPower;
    }
};

car.color = 'green';

console.log(car.power());
console.log(car.color);