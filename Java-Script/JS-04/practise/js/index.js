/*const COFFEE = {
    name: 'Latte',
    price:3,
    size: 'medium',
    sort: 'Arabica',
    isMilk: true,
    calories: 135,
    caffeine:true,
    syrup: ['caramel','chocolate','cherry'],
};

let user = {
    id: 123456789,
    private: {
        login: 'user',
        email: 'user@sky.net',
        tel: '123-456-789',
        'credit card': 123123123123,
        password: 'qwerty123',
    },
    public: {
        name: 'Vasya',
        last_name: 'Pupkin',
        sex: 'male',
        photos: [],
        likes: 0,
    },
};

console.log(user.id);
console.log(user.private);
console.log(user.private['credit card']);

function showValue(object, property, property1){
    return obj[property][property1];
}

console.log(user['private']['login']);*/


// ===== проверка наличия ключа в объекте

/*
const hotel = {
    name : "Resort Hotel",
    stars: 5,
};

let hasName = 'name' in hotel; // новый способ записи
let hasStars = hotel.hasOwnProperty('stars'); //старый способ записи
let hasPool = 'pool' in hotel;
//
console.log(hasName); // true
console.log(hasStars); // true
console.log(hasPool); // false
*/


// ================= записи функции в объекте
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//
//     getName: function () { // старый метод записи
//         return hotel.name;
//     },
//
//     getName() {
//         return hotel.name; // современный метод записи
//     },
//     getStars: () => hotel.stars, //стрелочный метод записи, пока не пользоваться
//
// changeCapacity(value) {
//   hotel.capacity += value;
// },
// createKey(value) {
//     hotel.address = value
// }
// };


// // ====================================== Object.assign
// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};
// //
// // Object.assign(first, last); // мутация первого объекта в который вливается второй
// const copy = Object.assign({}, first, last); // создание одного нового объекта в который засовываются данные двух других
// // console.log(person);
// //
// console.log(first);
// console.log(last);
// console.log(copy);

// ============== обновление данных объекта
// const defaultSettings = {
//     name: "Mango",
//     age: 2,
//     status: "happy",
//     isActive: false,
//     isAdmin: false,
// };
//
// const updatedSettings = {
//     age: 3,
//     status: "cheerful",
//     isActive: true,
// };
//
// Object.assign(defaultSettings, updatedSettings);

//==================== Оператор spread ... три точки

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
//
// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}
//
// // То же самое используя оператор spread ...
// const c = { ...a, ...b };
//
// console.log(c); // {x: 0, y: 2, z: 3}

// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };

//   // Перебор ключей key объекта hotel
//   for (let key in hotel) {
//     // console.log('Key: ', key);
//     //   console.log(hotel[key])
//       console.log(`Key = ${key}, value = ${hotel[key]}`)
//   }

//================= правильный способ перебора ключей объекта
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// // console.log(hotel);
// for (const key in hotel) {
//     let hasKey = hotel.hasOwnProperty(key); // для того чтобы переберались ключи объетка, а не прототипа
//     if (hasKey) {
//         console.log('Value: ', hotel[key]);
//     }
// }
// // console.log(hotel);


// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
//
//   const keys = Object.keys(hotel); //выдает все ключи объекта
//   const values = Object.values(hotel); //выдает значения ключей объекта
//   const entries = Object.entries(hotel); // выдает ключи и значения объекта
//   console.log(keys);
//   console.log(values);
//   console.log(entries);


// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//   };
// let name = hotel.name;
// let stars = hotel.stars;
// let capacity = hotel.capacity;

// const { name, stars, status ,capacity } = hotel;
// console.log(name);
//   // Объявим переменные и присвоим им значения из объекта


//=========================== деструктуризация объекта
// const hotel = {
//     name: "Resort Hotel",
//     stars: 5,
//     capacity: 100,
// };
// //
// const {name = "hotel", stars = 3, status = "empty"} = hotel; // значнеия по умолчанию, еслм такого значния нет, то записывается указанное
//
// console.log(name);
// console.log(stars);
// console.log(status);

// let dog = {
//     name: 'Mango',
//     age: 5,
//     isHappy: true,
// };


// деструктуризации деструктуризация объекта

// function showObjVal(obj) {
//     console.log(obj.name);
//     console.log(obj.age);
//     console.log(obj.isHappy);
// }

// function showObjVal({name, age, isHappy}) {
//     // console.log(name);
//     // console.log(age);
//     // console.log(isHappy);
//     return `dog name is ${name} age is ${age} happy ${isHappy}`;
// }
//
// console.log(showObjVal(dog));


// let {name, stars, status} = hotel;

// =====================  dest arr
// let strNum = ['one', 'two', 'three'];
// let [a, b, c, d] = strNum;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// let numb = [5, 10, 20];

// function showArrVal(arr) {
//     console.log(arr[0]);
//     console.log(arr[1]);
//     console.log(arr[2]);
// }

// function showArrVal([a, b, c]) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// //
// //
// showArrVal(numb);

/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
// };

// user.mood = 'happy';
// console.log(user);
//
// user.hobby = 'javascript';
// console.log(user);
//
// delete user.premium;
//
// for (let key in user) {
//     console.log(`${key}:${user[key]}`)
// }
// let keysArr = Object.keys(user);
// console.log(keysArr);
//
// for (let elem of keysArr){
//     console.log(`${elem}:${user[elem]}`);
// }

// let entriesArr = Object.entries(user);
// console.log(entriesArr);
//
// for (let arrElem of entriesArr){
//     console.log(`${arrElem[0]}:${arrElem[1]}`);
// }

/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
// };

// let max = 0;
// let name = '';
// for (let key in tasksCompleted) {
//     if (tasksCompleted[key] > max) {
//         name = key;
//         max = tasksCompleted[key];
//     }
// }
// console.log(name);

// let values = Object.values(tasksCompleted);
// let users = Object.keys(tasksCompleted);
// // console.log(values);
// console.log(users);
// // console.log(Math.max(...values));
// // Math.max([29, 35, 1, 99]) // Math.max(values)
// // let maxTask = Math.max(29, 35, 1, 99); // Math.max(...values)
// let maxTask = Math.max(...values);
// let winnerIndex = values.indexOf(maxTask);
// let winner = users[winnerIndex];
// console.log(winner);

/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// function countProps(obj) {
//     let objArr = Object.values(obj);
//     return objArr.length;
// }
//
// // let countProps = obj => Object.values(obj).length;
//
// // Вызовы функции для проверки
// console.log(
//     countProps({})
// ); // 0
//
// console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
// ); // 3

// Создайте функцию isObjectEmpty(obj), которая получает
// один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
//
// Возвращает true если объект пустой, false если не пустой.

// function isObjectEmpty(obj) {
//     let objArr = Object.values(obj);
//     return objArr.length === 0;
// }

// let isObjectEmpty =obj => Object.values(obj).length === 0;



// function isObjectEmpty(obj) {
//     return obj.hasOwnProperty(''); // не пашет
// }

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
// ); // true
//
// console.log(
//     isObjectEmpty({a: 1})
// ); // false
//
// console.log(
//     isObjectEmpty({a: 1, b: 2}));
// // ); // false

/*
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/
//
// function countTotalSalary(salaries) {
//     let sum = 0;
//     for (let elem in salaries) {
//         sum += salaries[elem];
//     }
//     return sum;
// }
//
// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
// ); // 0
//
// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80
//     })
// ); // 330


/*
  Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
// ];
//
// console.log(users[0]);
//
// function getAllPropValues(arr, prop){
//     let objArr =[];
//     for (obj of arr){
//
//     }
// }

// // Вызовы функции для проверки
// console.log(
//     getAllPropValues(users, 'name')
// ); // ['Poly', 'Mango', 'Ajax']
//
// console.log(
//     getAllPropValues(users, 'mood')
// ); // ['happy', 'blissful', 'tired']
//
// console.log(
//     getAllPropValues(users, 'active')
// ); // []


//====================== SPREAD & REST =================================
// =====================// add the elements of an existing array into a new array
// let certsToAdd = ['Algorithms', 'Front End'];
// let certifications = ['Web Design', ...certsToAdd,'Data Visualization', 'APIs', 'Information Security'];
// console.log(certifications);

//==================== // pass elements of an array as arguments to a function
// function addThreeNumbers(x, y, z) {
//     console.log(x + y + z)
// }
//
//=================== // variant #1
// let salary = [100, 200, 500, 800];
// addThreeNumbers(salary[0],salary[1],salary[2]);
// ==================// variant #2
// let salary = [100, 200, 500, 800];
// let [a, b, c] = salary;
// addThreeNumbers(a, b, c)
// ==================variant #3
// let salary = [100, 200, 500, 800];
// console.log(addThreeNumbers(...salary));
// console.log(addThreeNumbers(100, 200, 500, 800));

//=================== // copy arrays

// let arr = [1, 2, 3];
// let arr2 = [...arr]; // like arr.slice()
// arr2.push(4);
// console.log(arr);
// console.log(arr2);
//
//
//=================== // concatenate arrays
// let arr1 = [0, 1, 2];
// let arr2 = [3, 4, 5];
// // let arr3 = arr1.concat(arr2);
// arr1 = ["BootCamp",...arr2,...arr1];
// // console.log(arr3);
// console.log(arr1);
//
//
// REST: condense multiple elements into an array
// function multiply(multiplier,...theArgs) {
//     console.log('multiplier', multiplier);
//     console.log('theArgs', theArgs);
// }
//  multiply(2, 1, 2, 3, 8, 9);








