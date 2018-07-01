// ================ Функциональные методы массивов //functional methods of arrays


// ========= Метод MAP - cоздает новый массив в который попадет результат работы функции ==============================



// let numbers = [0,2,4];
// let newNumbersArr = numbers.map(function (item,index,arr) {
//     return item * 2;
// });
//
// let arrowNumbers = numbers.map(item => item*2); //стрелочный вариант
//
// console.log(numbers);
// // console.log(newNumbersArr);
// console.log(arrowNumbers);

// к значению массива добавим значение позиции этого числа

// const numbers = [0, 2, 4, 6, 8, 10];
//
// let addArr = number.map((item,index)=> item+index);

// const addOne = arr.map(n => n + 1);
// console.log(addOne); // [1, 3, 5]
// к значению массива добавим значение позиции этого числа
// const numbers = [0, 2, 4, 6, 8, 10];
// const flipFlop = numbers.map(function (element, index) {
//     return element + index
// });
// console.log(flipFlop);
// const flipFlop = numbers.map((element, index) => element + index);
// console.log(flipFlop);
//
// const addPosition = odd.map((n, i) => n + i);
// console.log(addPosition); // [0, 3, 6, 9, 12, 15]


// ======================== Метод FILTER - создает новый массив в который помещает элементы прошедшие проверку ===============
// ============elem/filter/arr



// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filteredArr = numbers.filter(function (item) {
//     if (item > 5) {
//         return item
//     }
// });
//
// let updateFilter = numbers.filter(item => item > 5 ? item : null);
//
// console.log(filteredArr);
// console.log(numbers);

// ======================== Метод FIND - перебирает массив и возвращает первый совпавший элемент
//======= если не находит возвращает undefiend ==================================================================



// const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// let findLogin = logins.find(function (el) {
//     return el === 'Newton';
// });
//
// let arrowFind = logins.find(el => el === 'Newton');
//
// console.log(findLogin);



// ======================== Метод EVERY - проверяет все ли элементы массива соответствуют условию,
// результат работы true или false ===============================================================================


// const money = [100, 500, 150, 250, 5]; //[true, true, false, true]
// const go1 = money.every(function (element) {
//     return element > 0;
// });
// console.log(go1);




// ======================== Метод SOME - проверяет есть ли хоть один элемент соответствующий условиям
// результат работы true или  ===================================================================================

// const money2 = [100, 500, 300, 250];
// const go = money2.some(function (element) {
//     return element >= 1000
// });
// console.log(go);

// ======================== Метод SORT мутирует существующий массив, меняя порядок раположения элемнтов в массиве
// если проверка возвращает отрицательное значение идет сортировка в возрастающем пордке
// если проверка возвращает положительное значение идет сортировка в убывающем пордке==============================


// let numbers2 = [4, 2, 5, 1, 3, 11];
//
// numbers2.sort(function (a, b) {
//     return a - b;    // сортировка по возрастающей =>
//     return b - a;      // сортировка по убывающей <=
// });
//
// console.log(numbers2);

//=========================== соритровка строк =============================================================
// const logins = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
// logins.sort();           // пустые скобки по возрастающей
// logins.sort().reverse(); // в обратном поряке
// console.log(logins);


// ================дурацкая двойная сортировка ==================================================================
// let arr = [
//     {name: 'A', price: 500},
//     {name: 'C', price: 700},
//     {name: 'B', price: 800},
//     {name: 'B', price: 50}
// ];
//
// arr.sort(function (el1, el2) {
//     return el1.name > el2.name;
// }).sort(function (el1, el2) {
//     if (el1.name === el2.name) {
//         return el1.price > el2.price;
//     }
//
// });
// console.log(arr);


// ======================== Метод REDUCE ========================================================================
// Аккумулирующая функция, используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
// перебирает, не мутирует исходные данные
// const hoursWorkedPerWeek = [
//     {day: 'M',number: 9},
//     {day: 'T',number: 10},
//     {day: 'W',number: 11},
//     {day: 'T',number: 5},
//     {day: 'F',number: 12}
// ];
// let sum = 0;
// for (let el of hoursWorkedPerWeek) {
//     sum +=el
// }
// console.log(sum);

// let result = hoursWorkedPerWeek.reduce(function (acc, el) {
//     return acc + el.number;
// },0);
// let arrResult = hoursWorkedPerWeek.reduce((acc, el) => acc + el.number, 0);
// console.log(result);

// ==================== использование нескольких методов сразу =====================================================
// let superArr = [[1, 5, 10, 11], [12, 15, 16, 17], [25, 65, 47, 89]];
// let flatArr = superArr
//     .reduce((acc, arr) => acc.concat(arr),[])
//     .sort((a, b) => a - b)
//     .filter(el => el > 16);



/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/
// const findGreaterThan = (num, arr) => {
//     const result = [];
//
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         if (arr[i] > num) {
//             result.push(arr[i]);
//         }
//     }
//
//     return result;
// };

// function findGreaterThen(num, arr) {
//     return arr.filter(item=> item>num);
// }
//
// findGreaterThen =(num, arr) => arr.filter(item=> item>num); // в одну строчку
//
// console.log( findGreaterThen(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
// console.log( findGreaterThen(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
// console.log( findGreaterThen(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]

/*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*/
// const multiplyBy = (num, arr) => {
//     let result = [];
//
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         result.push(arr[i] * num);
//     }
//
//     return result;
// };


// function multiplyBy(num, arr) {
//     return arr.map(function (item) {
//         return item * num;
//     });
// }

// const multiplyBy = (num, arr) => arr.map(item =>item * num);


//
// console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
// console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
// console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

/*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*/
// function summAllNumbers(...args) {
//     let accumulator = 0;
//
//     for (let i = 0, max = args.length; i < max; i += 1) {
//         accumulator += args[i];
//     }
//
//     return accumulator;
// }

// function summAllNumbers(...args){
//    return args.reduce(function(accum, item){
//         return accum+item;
//     })
// }
//
//
// const summAllNumbers = (...args) => args.reduce((accum, item) => accum+item,0);
//
// console.log( summAllNumbers(1, 2, 3) ); // 6
// console.log( summAllNumbers(1, 2, 3, 4) ); // 10
// console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

/*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*/
// const findEvery = (num, arr) => {
//     for (let i = 0, max = arr.length; i < max; i += 1) {
//         if (arr[i] < num) {
//             return false;
//         }
//     }
//
//     return true;
// };
//
// function findEvery(num,arr){
//    return arr.every(function(item){
//        return item>=num;
//    })
// }

// const findEvery = (num,arr) => arr.every((item) => item>=num);
//
// //
// console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
// console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
// console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true




/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
//
// // function getPropValues(arr, prop) {
// //     return arr.map(elem => elem[prop]);
// // }
//
// const getPropValues = (arr, prop) => arr.map(elem => elem[prop]);
//
//
// // Вызовы функции для проверки
// console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
//
// console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
//
// console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]


/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const users = [
//     { name: 'Mango', inactiveDays: 15, isActive: true },
//     { name: 'Poly', inactiveDays: 8, isActive: false },
//     { name: 'Ajax', inactiveDays: 32, isActive: false },
//     { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];
//
// function setGuestState(guests, period){
//     return users.map(elem => period <elem.inactiveDays ? {...elem, isActive: false} : {...elem, isActive: true});
// }
//
//
//
//
// // Вызовы функции для проверки
// console.log(
//     setGuestState(users, 10)
// ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
//
// console.log(
//     setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
//
// console.log(
//     setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
// const getActiveGuests = (guests) => {
//     return guests.filter(function(el) {
//     if (el.isActive === true){
//         return el;
//     }
//     })
// };
//
// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax

/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { name: "Mango", age: 20, isActive: true },
//     { name: "Poly", age: 18, isActive: false },
//     { name: "Ajax", age: 30, isActive: true },
//     { name: "Chelsey", age: 45, isActive: false }
// ];
//
//
// const getGuestsOlderThan = (guests, age) => {
//     return guests.filter(function(el){
//         if (el.age > age){
//             return el;
//         }
//     })
// };
//
//
//
//
// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
//
// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
//
// console.log(getGuestsOlderThan(guests, 55)); // []


/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
// ];


// function getGuestById(guests, id){
//     return guests.find(function (obj){
//     return obj.id === id;
//     })
// }

// let getGuestById =(guests, id) => guests.find((obj)=>obj.id === id);

// // Вызовы функции для проверки
// console.log(
//     getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}
//
// console.log(
//     getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}
//
// console.log(
//     getGuestById(guests, 5)
// ); // undefined

/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
// };
//
// const arr = Object.values(order);
// // console.log(arr);
// const total = arr.reduce((acc, value) => acc + value, 0);
//
//
// console.log(total);
// // console.log(...); // 150

/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

// const products = {
//     bread: 10,
//     milk: 15,
//     apples: 20,
//     cheese: 30,
//     chicken: 40
// };
//
// const orderA = {
//     bread: 2,
//     apples: 4,
//     chicken: 1
// };
//
// const orderB = {
//     bread: 1,
//     milk: 2,
//     cheese: 3
// };
//
// // Вызовы функции для проверки
// console.log(getTotalPrice(products, orderA)); // 140
//
// console.log(getTotalPrice(products, orderB)); // 130


/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//     { id: 1, name: 'Mango', age: 20 },
//     { id: 2, name: 'Poly', age: 18 },
//     { id: 3, name: 'Ajax', age: 30 },
//     { id: 4, name: 'Chelsey', age: 45 }
// ];
//
// function getGuestById(guests, id){
//     return guests.find(function (obj){
//         return obj.id === id;
//     })
// }
//
// // Вызовы функции для проверки
// console.log(
//     getGuestById(guests, 3)
// ); // {id: 3, name: 'Ajax', age: 30}
//
// console.log(
//     getGuestById(guests, 1)
// ); // {id: 1, name: 'Mango', age: 20}
//
// console.log(
//     getGuestById(guests, 5)
// ); // undefined


/*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*/
// const order = {
//     bread: 10,
//     apples: 25,
//     chicken: 60,
//     milk: 15,
//     cheese: 40
// };
//
// let orderItemArr = Object.values(order);
// console.log(orderItemArr);
// let result = orderItemArr.reduce(function (acc,item,){
//     return acc+item;
// });
//
// console.log(result); // 150

/*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
};

const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
};

const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
};

// function getTotalPrice (products,order ){
//     let total=0;
//     return total = products.filter(function (order){
//         if (order.element === products.element){
//            return order.element.value * products.element.value;
//         }
//     });
//     let orderTotal = Object.values(total);
//     let result = orderItemArr.reduce(function (acc,item){
//         return acc+item;
//     });
//
// }
// Вызовы функции для проверки
function getTotalPrice (products,order){
    const ARR = [];
    for (let item in order) {
        if (order.hasOwnProperty(item)) {
            let sum = order[item] * products[item];
            ARR.push(sum);
        }
    }
    return ARR.reduce(function (acc,item){
        return acc+item;
    });
}


//=========== в одну строку
// let getTotalPrice = (products, order) =>{
//     return Object.keys(order).map(item => products[item] * order[item]).reduce((acc, item)=> acc +item)};



console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130

/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

// const guestsA = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: false },
//     { name: "Ajax", isActive: true }
// ];
//
// const guestsB = [
//     { name: "Mango", isActive: true },
//     { name: "Poly", isActive: true },
//     { name: "Ajax", isActive: true }
// ];
//
// // function allGuestsActive(guests){
// //     return guests.every(function(object){
// //         if(object.isActive === true){
// //             return true;
// //         }
// //     })
// // }
//
// const allGuestsActive = (guests) => guests.every((object) => object.isActive === true);
//
// // Вызовы функции для проверки
// console.log(allGuestsActive(guestsA)); // false
//
// console.log(allGuestsActive(guestsB)); // true

this.countTotalPrice = function(order){
    const arr = [];
    for (let item in order) {
        if (order.hasOwnProperty(item)) {
            let sum = order[item] * this.productsDatabase[item];
            arr.push(sum);
        }
    }
    let total = arr.reduce(function (acc,item){
        return acc+item;
    });
    return this.totalPrice = total;
};














function Cashier(name, productsDatabase) {
    this.name = name;
    this.productsDatabase = productsDatabase;
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    this.greet = function(){
        console.log(`Здравствуйте, вас обслуживает ${this.name}`);
    };
    this.onSuccess = function(){
        return this.changeAmount === 0? console.log(`Спасибо за покупку`) : `Спасибо за покупку, ваша сдача ${this.changeAmount}`
    };
    this.onError= function(){
        console.log('Очень жаль, вам не хватает денег на покупки');
    };
    this.countTotalPrice = function(order){
        const arr = [];
        for (let item in order) {
            if (order.hasOwnProperty(item)) {
                let sum = order[item] * this.productsDatabase[item];
                arr.push(sum);
            }
        }
        let total = arr.reduce(function (acc,item){
            return acc+item;
        });
        return this.totalPrice = total;
    };
    this.getCustomerMoney = function(value){
        this.customerMoney =value;
    };
    this.countChange =function (){
        if ( this.customerMoney>this.totalPrice){
            return this.changeAmount = this.customerMoney - this.totalPrice;
        } else {
            return null;
        }
    };
    this.reset =function(){
        return `${this.totalPrice=0}, ${this.customerMoney =0}, ${this.changeAmount =0}`;
    }







