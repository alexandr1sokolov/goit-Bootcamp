/*function sum() {

    console.log(5 + 6);
}
sum();*/

/*function sum(num1, num2){
    console.log(num1 + num2);
}

sum(10, 20);
sum(30,30);
sum(200, -300);*/





/*function showText() {
    let str = 'I am function';
    return str;
}
console.log(showText());*/


/*function calculator(a, b) {
    let sum = a + b; // 15
    let mult = a * b; // 50
    let minus = a - b; // 5
    let div = a/b;
    let result = sum + mult + minus + div; // 72
    return result;
}
console.log(calculator(10,5));*/


/*function calculator(a, b) {
    let sum = a + b; // 15
    let mult = a * b; // 50
    let minus = a - b; // 5
    let div = a / b; // 2
    let result = sum + mult + minus + div; // 72
    return ['сума ' + sum, mult, minus, div, result];
}
console.log(calculator(10,5));*/




/*
  Напишите функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
/*console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'*/

//проверка на кратность 2

/*function checkNumberType(num) {
    if (num%2 === 1) {
        return 'odd';
    } else {
        return 'even';
    }
}*/
//то же самое тернарным оператором

/*
function checkNumberType(num) {
    return num%2 === 1 ?  'odd' : 'even';
}
*/

/*
  Напишите функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/

// Вызовы функции для проверки
/*console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
); // вернется оригинальная строка

console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
); // вернется форматированная строка

console.log(
    formatString("Curabitur ligula sapien.")
); // вернется оригинальная строка

console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
); // вернется форматированная строка

function formatString(text) {
    return text <= 40 ? text : `${text.slice(0, 40)}...`;
}*/

/*
function formatString(text){
    if (text.length <= 40) {
        return text;
    } else {
        return `${text.slice(0,40)}...`;
    }
}
*/

/*
  Напишите функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/

// Вызовы функции для проверки
/*
console.log( checkForSpam('Latest technology news') ); // false

console.log( checkForSpam('JavaScript weekly newsletter') ); // false

console.log( checkForSpam('Get best sale offers now!') ); // true

console.log( checkForSpam('[SPAM] How to earn fast money?') ); // true
*/

/*function checkForSpam(str) {
    str = str.toLowerCase();
    if (str.indexOf('spam') === -1 && str.indexOf('sale') === -1) {
        return false;
    } else {
        return true;
    }
}*/

//то же самое, но короче

/*
function checkForSpam(str) {
    str = str.toLowerCase();
    return !(str.indexOf('spam') === -1 && str.indexOf('sale') === -1);
}
*/

//стрелочные функции
/*function sum(a, b) { //обычная запись
    return a + b;
}

let sum = (a, b) => {  // запись когда есть несколько параметров
    return a + b
};

let sum = (a, b) => a + b;*/  // короткая запсиь когда есть только один параметр






/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/

/*let getPx = str => typeof str === "string" ? parseFloat(str) : null; //короткая запись стрелочной функции
// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null*/

/*function getPx(str) {
    if (typeof str === 'string') {
        return parseFloat(str)
    } else {
        return null
    }
}*/





/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

/*function findLongestWord(str) {
    let arr = str.split(' ');
    let longestWord = '';
    for ( let element of arr) {
        element.length > longestWord.length ? longestWord = element : null;
    } return longestWord;
}

// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
    findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
    findLongestWord("May the force be with you")
); // вернет 'force'*/





/*
  Создайте функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*/

/*
// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
    findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
    findLargestNumber([31, 128, 14, 74])
); // вернет 128


function findLargestNumber(numbers) {
    let largestNumber = 0;
    for (element of numbers) {
    element > largestNumber ? largestNumber = element : null;
    } return largestNumber;
}
*/



// 1) Написати функцію spliceElement() що вирізає з массива третій елемент
// 2) Написати функцію checkExist() що перевіряє чи є цей вирізаний елемент в базі
// 3) Якщо його немає додати його, якщо є нічого не робити addNumber()

/*let dataBase = [5, 10, 25, 68, 75, 43];
let workArr = [10, 20, 30, 40];

function spliceElement(arr,position) {
    return arr.splice(position,1)[0];
}

function checkExist(arr,number) {
    return arr.includes(number);
}

function addNumber (arr){
    let result = spliceElement(workArr,2);
    if (!checkExist(arr,result)){
        arr.push(result);
    }
}

addNumber(dataBase);
console.log(dataBase);*/

/*console.log(spliceElement(workArr, 2));
console.log(workArr);*/



