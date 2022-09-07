//На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

let storage = {
    apples : 10,
    pearls : 5,
    sum() {
        return this.apples + this.pearls
    }
}

console.log(storage.sum());