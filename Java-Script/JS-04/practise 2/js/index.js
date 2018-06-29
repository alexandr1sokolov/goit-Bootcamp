'use strict';
// Написати об'єкт tank який буде мати такі властивості і методи.
// 1) coordinate 10 координати Х
// 2)CoordinateY 10 координати по У
// 3) life 100 здоровя
// 4) ammunition 5  кількість патронів
// 5) engineStatus true статус двигуна
// 6) moveToX(x) рухається до точки х
// 6) moveToY(у) рухається до точки у
// 7) fireTo(x, y) стріляє в точку х, у
// 8) canFire() перевірка чи є патрони
// 9) checkHealth() перевірка чи є неповне здоров'я
// 10) heal(x) додає здоровя
// 11) checkEngine() перевірка статусу двигуна
// 12) repairEngine() починка двигуна
// 13) showCoordinate() показує координати танка
// 14)  name імя гравця
// 15) color

// const tank = {
//     coordinateX: 10,
//     coordinateY: 10,
//     life: 100,
//     ammunition: 5,
//     engineStatus: true,
//     moveToX(x){
//         if (this.engineStatus === false){
//             return alert('Engine needs repair');
//         } else {
//             return this.coordinateX+=x;
//         }
//     },
//     moveToY(y){
//         if (this.engineStatus === false){
//             return alert('Engine needs repair');
//         } else {
//             return this.coordinateY+=y;
//         }
//     },
//     fireTo(x, y){
//         if (this.canFire()) {
//             return this.ammunition -= 1;
//         } else {
//             return alert("Out of ammo! Reload!");
//         }
//     },
//     canFire(){
//         return this.ammunition>0;
//     },
//     checkLife(){
//         // if(this.life){
//         //     alert('Need immediate repair');
//         //     return this.life;
//         // } else {
//         //     return this.life;
//         // }
//         return this.life>0 && this.life<100;
//     },
//     heal(x){
//         if (this.checkLife()) {
//             this.life += x;
//         }
//     },
//     checkEngine(){
//         if (this.engineStatus !== true){
//             alert('Need immediate repair, engine kaput');
//             return false;
//         } else {
//             return true;
//         }
//     },
//     repairEngine(){
//         if (!this.checkEngine()) {
//             this.engineStatus = true;
//         }
//     },
//     showCoordinate(){
//         return `${this.coordinateX}, ${this.coordinateY}`;
//     },
//     name: 'name',
//     color: 'green',
// };
// tank.moveToX(20);
// tank.moveToX(50);
// tank.moveToY(30);
// tank.moveToY(40);
// tank.moveToY(10);
// tank.fireTo(10,90);
// tank.fireTo(10,90);
// tank.fireTo(1,90);
// tank.fireTo(10,90);
// tank.fireTo(10,90);
// tank.fireTo(10,90);
// tank.life -=50;
// tank.engineStatus = false;
// tank.repairEngine();
// tank.heal(2350);
// console.log(tank);
//======================================================================================================================================================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function Tank(name,coordinatesX,coordinateY,tankColor){
//         this.coordinateX =coordinatesX;
//         this.coordinateY = coordinateY;
//         this.life = 100;
//         this.ammunition = 5;
//         this.engineStatus = true;
//         this.moveToX = function(x){
//             if (this.engeStatus === false){
//                 return alert('Engine needs repair');
//             } else {
//                 return this.coordinateX+=x;
//             }
//         };
//         this.moveToY = function(y) {
//             if (this.engineStatus === false){
//                 return alert('Engine needs repair');
//             } else {
//                 return this.coordinateY+=y;
//             }
//         };
//         this.fireTo = function(x,y) {
//             if (this.canFire()) {
//                 return this.ammunition -= 1;
//             } else {
//                 return alert("Out of ammo! Reload!");
//             }
//         };
//         this.canFire = function() {
//             return this.ammunition>0;
//         };
//         this.checkLife =  function(){
//             return this.life>0 && this.life<100;
//         };
//         this.heal = function(x) {
//             if (this.checkLife()) {
//                 this.life += x;
//             }
//         };
//         this.checkEngine = function(){
//             if (this.engineStatus !== true){
//                 alert('Need immediate repair, engine kaput');
//                 return false;
//             } else {
//                 return true;
//             }
//         };
//         this.repairEngine = function(){
//             if (!this.checkEngine()) {
//                 this.engineStatus = true;
//             }
//         };
//         this.showCoordinate= function(){
//             return `${this.coordinateX}, ${this.coordinateY}`;
//         };
//         this.name = name;
//         this.color= tankColor;
// }
// const first = new Tank('Vasya',50,50,'red');
// console.log(first);

//================================================================================================================================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// call

// const hotel = {
//     name: 'Resort Hotel',
// };
// const hotel2 = {
//     name: '4 Seasons Hotel',
// };
//
// const hotel3 = {
//     name: '7 days Hotel',
// };
//
//
// function showName(name) {
//     console.log(`${name} name is ${this.name}`);
// }
// //вызов call указываем имя функции без круглых скобок, ставим точку, далее пишем call открываем круглые кавычки, в которых указываем обеъект в котром мы хотим запустить функцию, после запятой указывает аргумент передаваемый в параметр функции, в данном случае ShowName.
// showName.call(hotel3, 'Tony');
//
// //=============================================================================================================================================
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //===   apply
// // аргументы функции передаются массивом
//
// showName.apply(hotel,['Vasya','Magadan']);


//============================================================================================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//======= bind  делает копию функции и привязывет к контексту(объекту), сохраняешь в переменную и при вызове переменной она всегда будет запускаться в прописанном контексте

// const boundShowName = showName.bind(hotel);
// boundShowName();


//================================================================================================================================================================================
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// функции конструкторы именуются с заглавной буквы

// function Student(name, modules ) {
//     // this = {}
//     this.name = name;
//     this.modules = modules;
//     this.learn = function (theme) {
//         this.modules += 1;
//         return `Student ${this.name} passed ${theme}`;
//     };
//     this.isActive = true
//     // {
//     // name: nameArg,
//     // modules: modulesArg,
//     // learn: func,
//     // isActive: true
//     // }
//     // return this
// }
//
// const mick = new Student('Mick', 5); // {}
// const jane = new Student("Jane", 3);
// console.log(mick);
// console.log(jane);
// // объект созданный с помощью функции конструктора сохраняется в переменную.
// // Перед запуском функции конструктора необходимоиспользовать ключевое слово NEW
// const mick = new Student();

// function User(setting) { // obj with settings
//     this.age = setting.age;
//     this.name = setting.name;
//     this.isActive = setting.isActive;
//     this.isPremium = setting.isPremium;
//     this.likesCount = setting.likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }

//параметры передаем объектом, деструктуризируем его
// const jane = new User({age: 25,name: 'Jane',isActive: true,isPremium: true,likesCount: 500});
// const mick = new User({name: 'Mick',age: 30,likesCount: 150,isActive: false,isPremium: true});
// console.log(mick);
// console.log(jane);
//
//
// function User({age, name, isActive = false, isPremium = false, likesCount = 0}) {
//     this.age = age;
//     this.name = name;
//     this.isActive = isActive;
//     this.isPremium = isPremium;
//     this.likesCount = likesCount;
//
//     this.showLikes = function () {
//         return this.likesCount;
//     }
// }
// //
// const jane = new User({age: 25,name: 'Jane', isPremium: true});


/*
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей,
  необходимо передать как аргументы
  при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

// function User(name,isActive, age, friends){
//     this.name = name;
//     this.isActive = isActive;
//     this.age =age;
//     this.friens =friends;
//     this.getUserInfo = function(){
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.friens} friends`);
//     }
// }
//
// const vasya = new User('Vasya',true, '18', '2');
// vasya.getUserInfo();


// /*
//   Расставьте отсутствующие this
//   в методах объекта store
// */
//
// const store = {
//     products: ['bread', 'cheese', 'milk', 'apples'],
//     managers: ['poly', 'mango', 'ajax'],
//     addManager(manager) {
//         this.managers.push(manager);
//
//         console.log(this.managers);
//     },
//     removeManager(manager) {
//         const idx = this.managers.indexOf(manager);
//
//         this.managers.splice(idx, 1);
//
//         console.log(this.managers);
//     },
//     getProducts() {
//         console.log(this.products);
//
//         return this.products;
//     }
// };
// //
// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']
//
// store.removeManager('mango'); // ['poly', ajax', 'chelsey']
//
// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']
/*
//   Расставьте отсутствующие this в конструкторе объектов Account
// */

// function Account({ login, password, type = "regular" }) {
//     this.login = login;
//     this.password = password;
//     this.type = type;
//
//     this.changePassword = function(newPassword) {
//         this.password = newPassword;
//
//         return this.password;
//     };
//
//     this.getAccountInfo = function() {
//         return(`
//       Login: ${login},
//       Pass: ${password},
//       Type: ${type}
//     `);
//     };
// }
//
// const account = new Account({
//     login: "Mango",
//     password: "qwe123",
//     type: "premium"
// });
//
// console.log(account.login); // 'Mango'
// console.log(account.password); // 'qwe123'
// console.log(account.type); // 'premium'
//
// console.log(account.changePassword("asdzxc")); // 'asdzxc'
//
// console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'

