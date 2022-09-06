//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
let str = 'kek';
let bool = true;
let num = 5;

console.log(str + bool);
console.log(str + num);
console.log(num + bool);

//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)

console.log(str * bool);
console.log(str * num);
console.log(num * bool);

//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)

console.log(str / bool);
console.log(str / num);
console.log(num / bool);


//Выполнить явное преобразование(number, string, boolean)
console.log(String(bool))
console.log(Boolean(num))
console.log(Number(str))