//4 Преобразовать числовой массив в Boolean

let nums = [-135, 12564, undefined, 536, -1255, 1];
let toBool = nums.map(item => Boolean(item));
console.log(toBool);

//5 Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
//6 Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let arr = [1,6,7,8,3,4,5,6];
console.log(arr.sort((a,b) => b-a));
console.log(arr.filter(item => item > 3));

//7 Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

let nArr = [1, 5, 0, 24, 25, -1, 40, -28];
function findInd (arr, num){
    return arr.indexOf(num);
};
console.log(findInd(nArr, 0));