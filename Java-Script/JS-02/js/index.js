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
}
// // вивести в консоль випадкову тваринку з масиву*/



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

// console.log(); // 'oko' true
// console.log(); // 'test' false

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



