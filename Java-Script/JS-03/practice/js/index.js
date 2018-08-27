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


//======================
/*
function sumArg() {
    console.log(arguments);
    // arguments = 1, 5, 9, 12, 1, 100;
    // return arguments;
    // console.log(arguments[1]);
    // let arr = Array.from(arguments);
    // console.log('Array arguments', arr);
    // let sum = '';
    // for (let item of arr) {
    //     sum += item + ' ';
    // }
    // return sum;
}

//
console.log(sumArg(1, 5, 9, 12, 1, 100.56));
console.log(sumArg(5, 9));
*/

//============================ замыкание . первый пример прятать пароль, второй пример индивидуальынй счетчик

/*function secretPassword() {
    let password = 'xh38sk';

    function guessPassword(guess) {
        if (guess === password) {
            return true;
        } else {
            return false;
        }
    }

    return guessPassword;
}

let passwordGame = secretPassword();
// console.log(passwordGame);
let tryOne = passwordGame('heyisthisit?');
let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);*/



/*
function counter() {
    let count = 0;
    function increment() {
        count +=1;
        return count;
    }
    return increment;
}
let user1 = counter();
console.log(user1);
let first = user1();
let user2 = counter();
let user2First = user2();
let user2Second = user2();
let user2Third = user2();
let user2Fourth = user2();
console.log('first user counter',first);
console.log('second user counter',user2Fourth);*/


//================ callback function


// const printString = function (cb) {
//     let str = cb();
//     let sum = 5 + 6;
//     return str + sum;
// };
//
// function hello() {
//     return 'Hello World';
// }
//
// console.log(printString(hello));

//=================================  recursion

// const pow = (base, exponent) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// };
//
// const pow = (2,3) =>{
//     if (3 === 0 ) return 1;
//     return 2 * pow(2,2) => {
//         if (2 === 0 ) return 1;
//         return 2 * pow(2,1) => {
//             if (1 === 0 ) return 1;
//             return 2 * pow(2,0) => {
//                 if (0 === 0 ) return 1;
//             }
//         }
//     }
// }


// 0! = 1
// 1! = 1
// 2! = 1·2 = 2
// 3! = 1·2·3 = 6
// 4! = 1·2·3·4 = 24
// 5! = 1·2·3·4·5 = 120
// 6! = 1·2·3·4·5·6 = 720
// 7! = 1·2·3·4·5·6·7 = 5040
// 8! = 1·2·3·4·5·6·7·8 = 40320
// 9! = 1·2·3·4·5·6·7·8·9 = 362880
// 10! =1·2·3·4·5·6·7·8·9·10 = 3628800

// ============================поиск факториала
/*
function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return (num * factorial(num - 1));
}
console.log(factorial(3));
*/

// Написати ф-ю що приймає аргументом строку формата '160px' і вертає строку формата '10rem'

// let pixels = prompt ('Введите пиксели для преобразования');

/*function rem(pixel) {
    resultNum = parseInt(pixel);
    let result = resultNum / 16;
    return `${result}rem`;
}
console.log(rem(pixels));
console.log(rem('160px')); // 10rem
console.log(rem('16px')); // 1rem
console.log(rem('80px')); // 5rem
console.log(rem('8px')); // 0.5rem*/


// написати ф-ї що приймає 2 параметра (розмір елемента і розмір контейнера) і повертає розмір елемента в %

/*
function prc(block, container) {
    resultBlock = parseFloat(block);
    resultContainer = parseFloat(container);
    let result = resultBlock / resultContainer *100;
    return `${result}%`;
}
console.log(prc('160px','1600px')); // 10%
console.log(prc('16px','1600px')); // 1%
console.log(prc('80px','1600px')); // 5%
console.log(prc('8px','1600px')); // 0.5%
*/

// Написаьи ф-ю що приймає 3 параметра:
// 1) Розмір елемента - string
// 2) Розмір контейнера - string
// 3 ) одиниці виміру в які треба конвертувати - 'rem' or 'prc'

// function rem(pixel) {
//     resultNum = parseInt(pixel);
//     let result = resultNum / 16;
//     return `${result}rem`;
// }
//
// function prc(block, container) {
//     resultBlock = parseFloat(block);
//     resultContainer = parseFloat(container);
//     let result = resultBlock / resultContainer *100;
//     return `${result}%`;
// }

/*function pixelConvert(el,cont, unit) {

    if (unit === 'rem') {
        resultNum = parseInt(el);
        let result = resultNum / 16;
        return `${result}rem`;
    } else {
        resultBlock = parseFloat(el);
        resultContainer = parseFloat(cont);
        let result = resultBlock / resultContainer *100;
        return `${result}%`;
    }
}*/

// function pixelConvert(el, cont, unit) {
//     switch (unit) {
//         case 'rem': {
//             resultNum = parseFloat(el);
//             let result = resultNum / 16;
//             return `${result}rem`;
//         }
//         case 'prc': {
//             resultBlock = parseFloat(el);
//             resultContainer = parseFloat(cont);
//             let result = resultBlock / resultContainer * 100;
//             return `${result}%`;
//         }
//         default:
//             return 'Error';
//     }
// }
//
// console.log(pixelConvert('160px', null, 'rem')); // 10rem
// console.log(pixelConvert('160px', '1600px', 'prc')); // 10%


//========================конвертор валют

// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.

// let fromCurrency = prompt('Please, choose currency you wish to convert (USD,EUR,UAH):').toUpperCase();
// let toCurrency = prompt('Please, choose currency you wish to obtain(USD,EUR,UAH):').toUpperCase();
// let summToConvert = prompt('Please, indicate summ you wish to convert');
//
// function currencyCourses() {
//     let USDUAH = 26.3;
//     let USDEUR = 0.85;
//     let EURUAH = 30.7;
//     let EURUSD = 1.17;
//     let UAHUSD = 0.038;
//     let UAHEUR = 0.032;
//
//     function currencyExchange(fromCurrency, toCurrency, summToConvert) {
//         switch (fromCurrency + toCurrency) {
//             case 'USDUAH':
//                 return (parseInt(summToConvert) * USDUAH).toFixed(2) + ' UAH';
//             case 'EURUSD':
//                 return (parseInt(summToConvert) * EURUSD).toFixed(2) + ' USD';
//             case 'EURUAH':
//                 return (parseInt(summToConvert) * EURUAH).toFixed(2) + ' UAH';
//             case 'USDEUR':
//                 return (parseInt(summToConvert) * USDEUR).toFixed(2) + ' EUR';
//             case 'UAHUSD':
//                 return (parseInt(summToConvert) * UAHUSD).toFixed(2) + ' USD';
//             case 'UAHEUR':
//                 return (parseInt(summToConvert) * UAHEUR).toFixed(2) + ' EUR';
//             default:
//                 return "Error";
//         }
//     }
//     return currencyExchange;
// }
// let result = currencyCourses();
// if (!summToConvert > 0) {
//     alert('Error');
// } else {
//     alert(`You will get ${result(fromCurrency, toCurrency, summToConvert)}`);
// }

/*
  Есть массив уникальных чисел uniqueNumbers.

  Написать функцию, addUniqueNumbers(...),
  которая получает произвольное кол-во чисел как аргументы,
  и добавляет в массив uniqueNumbers только уникальные,
  а те которые в массиве уже есть игнорирует.
*/

// const uniqueNumbers  = [2, 1, 4, 9];
//
// function addUniqueNumbers(...numbers){
//     for(let el of numbers) {
//         if (!uniqueNumbers.includes(el))
//         {
//             uniqueNumbers.push(el);
//         }
//     }
// }

// // Вызовы функции для проверки
// addUniqueNumbers(1, 2, 3);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3]
//
// addUniqueNumbers(12, 2, 3, 19);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19]

// addUniqueNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//     uniqueNumbers
// ); // [2, 1, 4, 9, 3, 12, 19, 5, 8]


/*
  Создайте функцию removeFromArray(arr),
  которая получает 1 параметр, исходный массив arr.

  При вызове функции, первым аргументом всегда будет массив чисел,
  за которым следуют один или несколько аргументов, тоже чисел.

  Удалите все элементы из исходного массива,
  которые имеют такое же значение, что и аргументы.
*/


// function removeFromArray(arr, ...num) {
//         return arr = arr.filter(el =>(!num.includes(el)? el:null));
// }
//
//
// // Вызовы функции для проверки
// console.log(
//     removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // [1, 3, 5]
// //
// console.log(
//     removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // [12, 8, 17]

let arr = [{answer:"a"},{answer:"b"},{answer:"c"}];
let arr2 = [{answer:"a"},{answer:"d"},{answer:"c"}];

let result =arr.map((el,index)=>el.answer === arr2[index].answer);
console.log(result);







