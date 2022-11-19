//8 Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10

function toTen(a) {
    while (a > 10) {
        console.log(a);
        a--;
    }
}
toTen(15);

//9 Реализовать цикл, который выводит в консоль простые числа

function isSimple(a) {
    for (let i = 0; i <= a; i++) {
        if (isNumSimple(i)) {
            console.log(i);
        }
    }
}

function isNumSimple(num) {
    if (num === 1 || num === 0) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (!Boolean(num % i)) {
            return false;
        }
    }
    return true;
}

isSimple(100);

//10 Реализовать цикл, который выводит в консоль нечетные числа

function isOdd(a) {
    for (let i = 0; i <= a; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
isOdd(10);