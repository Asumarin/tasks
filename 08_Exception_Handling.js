// В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’.
// При выполнении 1/0 выводить ошибку 'на ноль делить нельзя'

// function task(){
//     try{
//         console.log(a);
//         let a = 3;
//     }
//     catch(err){
//         throw new Error('let перед использованием нужно объявить');
//     }
// }

// task();
let a = 1;
let b = 0;
try {
    let result = a / b;

    if (result === Infinity) {
        throw new Error('на ноль делить нельзя')
    }
} catch (error) {
   throw new Error(error);
}
