// 1.Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
// 2.Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
// 3.Получить день, месяц и год текущей даты и по отдельности вывести в консоль

let str1 = 'ahb acb aeb aeeb adcb axeb';
const reg1 = /a[a-z]b/g;
console.log(str1.match(reg1));

let str2 = '2+3 223 2223';
const reg2 = /2\+3/g;
console.log(str2.match(reg2));

new Date().toLocaleDateString().split('.').forEach(item => console.log(item))
