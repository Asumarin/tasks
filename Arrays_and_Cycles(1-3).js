//1 Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

let arrMovies = ['movie1', 'movie2', 'movie3', 'movie4', 'movie5'];
for(let key of arrMovies){
    console.log(key);
}

//2 Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let arrCars = ['cars1','cars2','cars3', 'cars4'];
let carToString = arrCars.toString(arrCars);
let reverse = carToString.split(',');
console.log(carToString);
console.log(reverse); 
//3 Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let friends = ['Mark', 'Dima', 'Nikita', 'Vnk'];
friends = friends.map(item => 'Hello ' + item);
console.log(friends);