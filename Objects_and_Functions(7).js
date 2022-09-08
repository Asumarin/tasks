// Напишите функцию, которая определяет является ли число простым или нет

function check(num){
    if(num === 0) return false
    if(num === 1) return true

    for(i=2; i<num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

console.log(check(33));