/*
let firstArray = [1,2,3];*/

/*let summerArray = ['июнь', 'июль', 'август'];
console.log(summerArray);*/

/*let arr = [[1,2,3],[5,',','qwerty'],[2.5,5.6,'/']];
console.log(arr);*/

/*
let firstArray = [1, 2, 3, 4];
let secondArr = [5, 6, 7];
let thirdArr = ['a', 'b', 'c'];
let first = firstArray.pop();
let second = secondArr.shift();
let third = thirdArr.pop();
let fourArr = [];
fourArr.push(first, third, second);*/
/*
let arr = [1, 5, 9, 8, 7, 10];*/
// delete
// let x = arr.splice(1, 3);
// console.log(arr);
// console.log(x);
// paste
/*arr.splice(4, 0, 'b');
arr.splice(1, 0, 'javascript');
console.log(arr);
// replace
arr.splice(5, 1, 'abc');
console.log(arr);
arr.splice(1, 4, 'java', 'script');
console.log(arr);*/

/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

/*
const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax*/

/* Есть массив имен пользователей */

/*const users = ["Mango", "Poly", "Ajax", "Chelsey"];

/!* Используя методы массива, последовательно выполнить следующие операции *!/
users.shift(1);
// Удалить из начала массива нулевой элемент
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
users.pop(1);
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift("добавленое имя")
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.splice(0,1,"добавленое ранее имя");
users.splice(3,0, "имя 1","имя 2");
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]*/

/*let animals = ["cat","dog","rabbit","bird","fish"];
let animalsArr = animals.length;
let random = Math.floor(Math.random()*animalsArr);
console.log(random);
console.log(animals[random]);
// // вивести в консоль випадкову тваринку з масиву*/

/*let animals = ["cat","dog","rabbit","bird","fish"];
let animalsArr = animals.length;
let random = Math.floor(Math.random()*animalsArr);
console.log(random);
let compVar = (animals[random]);
let userVar = prompt("Choose one of the following animals: cat, dog, rabbit, bird, fish");
if (compVar === userVar) {
    alert('You win!');
} else {
    alert('Better luck next time!');
}*/
// // вивести в консоль випадкову тваринку з масиву



// 1) Запропонувати користувачу ввести логін
// 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr

/*
let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];
let newUser = prompt('Enter login');
 if (loginArr.includes(newUser)) {
     alert('Login already exists, please choose another one');
 } else {
     alert('Your login has been registered. Congratulations!');
     loginArr.push(newUser);
     console.log(loginArr);
 }*/


// split
// reverse
// join
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
//
// 2)Зробити перевірку і вивести в консоль true or false

/* console.log(); // 'oko' true
 console.log(); // 'test' false*/

/*let str = 'oko';
let str2 = 'test';

let arrayOko = str.split('');
let rev = arrayOko.reverse();
let okoResult = rev.join('');
let result1 = (okoResult === str);

let arrayTest = str2.split('');
let rev2 = arrayTest.reverse();
let testResult = rev2.join('');
let result2 = (str2 === testResult);

console.log(result1);
console.log(result2);*/



/*let number = 0;
let arr = [];
while (number <= 9) {
    let numberToPush = Math.floor(Math.random()*10);
    arr.push(numberToPush);
    number++;
    console.log(arr);
}*/

/*let arr = [5, 10, 25, 68, 78, 95];

for (let counter = 0, max = arr.length; counter < max; counter++) {
    console.log(arr[counter] = Math.pow(arr[counter], 2));
}
console.log(arr);*/

// 1) спитатися в користувача скільки товарі він хоче купити в магазині
// 2) На основаі пункта 1 стільки разів має спрацювати цикл
// 3) Цикл має пропонувати користуівачу ввести назву покупки
// 4) Ці назви зберігати в масиві
// 5) Вивести масив з покупками по закінченю цикла в консоль.

/*
let goods = prompt('How many items would you like to purchase?');
let goodsArr = [];
for (let counter = goods; counter > 0; counter--) {
    let purchase = prompt('Name your item');
    goodsArr.push(purchase);
}
console.log(goodsArr);
*/


/*выводит четные числа

for (let i=1; i<11; i++){
    if (i%2 !==0) {
        continue
    }
    console.log(i);
}*/

/*
  Напишите цикл, который предлагает, через prompt, ввести число больше 100.

  Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100,
  либо не нажмёт кнопку Cancel.

  Предполагается, что посетитель вводит только числа, обрабатывать невалидный ввод
  вроде строк 'qweqwe' в этой задаче необязательно.

  PS: используйте цикл do...while
*/

/*let number = 0;

do {
    number = +prompt('enter number >100');
} while (number <= 100 && number !== null);*/

/*let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski',
    'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov',
    'Rotman', 'Scryagin', 'Humenchuk'];
let random = Math.floor(Math.random()*students.length);
console.log(random);
console.log(students[random]);*/


/*Напишите скрипт, который выводит через console.log все
числа от min до max, с двумя исключениями:

    - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'

- Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'

PS: используйте цикл for*/

/*    const min = 1;
    const max = 100;
    for (let i = min; i <= max; i++ ) {
        if (i%3 === 0) {
            console.log('Fizz');
        }
        else if (i%5 === 0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
    }*/

/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив newArray.

  В результате в массиве newArray будут все подходяшие числа.

  PS: используйте цикл for или for...of и оператор ветвления if
*/

/*const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
const num = 10;
const newArray = [];*/

/*for (let i=0; i<numbers.length; i++){
    if (numbers[i]>num){
        newArray.push(numbers[i]);
    }
}*/
// console.log(numbers);
// console.log(newArray);

/*
for (let arrEl of numbers) {
    arrEl > num ? newArray.push(arrEl):null;
}
console.log(numbers);
console.log(newArray);
*/

/*
  Напишите скрипт, который проверяет произвольную строку
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/

/*const string = "May the force be with you";
let longestWord = '';
let wordArr = string.split(' ');
for (let word of wordArr) {
    if (word.length >longestWord.length) {
        longestWord = word;
    }
}
console.log(longestWord);*/ // 'force'

/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.

  - Заканчивает запрашивать числа, как только посетитель введёт не число
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/

/*
let arrNum = [];
let num = 0;
let sum=0;
do{
    num = prompt('Enter number');
    if (!isNaN(num) && num !== null && num !== ''){
        arrNum.push(+num);
    }
} while (!isNaN(num) && num !== null);

for (let elm of arrNum) {
    if (arrNum.length !==0){
        sum+=elm;
    }
}
console.log(sum);
console.log(arrNum);

*/
