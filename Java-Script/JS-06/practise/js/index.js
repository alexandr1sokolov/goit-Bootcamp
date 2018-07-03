'use strict';
//Класс – функция конструтора; это способ описания сущности, определяющий состояние и поведение, зависящее от этого состояния, а также правила для взаимодействия с данной сущностью (контракт).

//Интерфейс – это набор методов класса, доступных для использования другими классами.

//Абстрагирование – это способ выделить набор значимых характеристик объекта, исключая из рассмотрения незначимые. Соответственно, абстракция – это набор всех таких характеристик.

//Инкапсуляция – это свойство системы, позволяющее объединить данные и методы, работающие с ними, в классе и скрыть детали реализации от пользователя.

//Наследование – это свойство системы, позволяющее описать новый класс на основе уже существующего с частично или полностью заимствующейся функциональностью. Класс, от которого производится наследование, называется базовым или родительским. Новый класс – потомком, наследником или производным классом.

//Полиморфизм – это свойство системы использовать объекты с одинаковым интерфейсом без информации о типе и внутренней структуре объекта. Позволяет переопределять в классах наследниках реализации методов базового класса.

/* Терминология

Пространство имён
    Контейнер, который позволяет разработчикам связать весь функционал под уникальным, специфичным для приложения именем.
Класс
    Определяет характеристики объекта. Класс является описанием шаблона свойств и методов объекта.
Объект
    Экземпляр класса.
Свойство
    Характеристика объекта, например, цвет.
Метод
    Возможности объекта, такие как ходьба. Это подпрограммы или функции, связанные с классом.
Конструктор
    Метод, вызываемый в момент создания экземпляра объекта. Он, как правило, имеет то же имя, что и класс, содержащий его.
Наследование
    Класс может наследовать характеристики от другого класса.
Инкапсуляция
    Способ комплектации данных и методов, которые используют данные.
Абстракция
    Совокупность комплексных наследований, методов и свойств объекта должны адекватно отражать модель реальности.
Полиморфизм
    Поли означает "много", а морфизм "формы". Различные классы могут объявить один и тот же метод или свойство. */


// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
//
// let dog = Object.create(animal); // в скобках указан отцовский объект
// dog.canBark = true;
// dog.canSwim = true;

// let dog = {
//     canBark: true,
//     canSwim: true,
// };
//
// let buldog = {
//     canSluna: true,
//     canJump: false,
// };

// console.log('animal',animal);
// console.log('dog',dog);
// console.log(dog.canBark);
// console.log(dog.canEat);
// console.log(buldog);

// [[Prototype]] это запись __proto__ в спецификации ECMAScript

// Для создания объекта без прототипа в отцовский объект указываем null ======  let newObject = Object.create(null);

// let dog = Object.create(null);
// dog.age = 25;
// console.log(dog);


// let animal = {
//     canEat: true,
//     canSleep: true,
//     canWalk: true,
// };
// let dog = Object.create(animal);
// dog.age = 25;
// dog.canBark = true;
// dog.canSwim = true;
//
// // console.log('animal',animal);
// console.log('dog',dog);
// console.log('dog proto',dog.__proto__); // proto ссылка на отцовский объект



// function Human(name, age) {
//     // this ={}
//     // Human.prototype = {}
//     this.name = name;
//     this.age = age;
//     // return this
// }
// // Human.prototype.hello = 'Hello Max';
// Human.prototype.eat = function () {
//     console.log(`${this.name} can eat`);
// };
// Human.prototype.great = function () {
//     console.log(`Hello my name is ${this.name}`);
// };
// Human.prototype.friends = ['Jack', 'Ravshan', 'Nasalnika', 'Bambucha'];
//
// let max = new Human('Max',12);
// max.great();
// // console.log(max.__proto__ === Human.prototype);
// // max.__proto__.test = 'test';
// // console.log('Max proto', max.__proto__);
// // console.log('human.prototype',Human.prototype);
// let jane = new Human('Jane', 25);
// jane.friends.pop();
// console.log(jane.friends);
// console.log(max.friends);
// console.log(jane);
// console.log(max);
// max.great();
// max.eat();

// const Hero = function(name, level) {
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function() {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// //   const Alister = new Hero('Alister', 1);
// // Alister.greet();
//
// //   /*
// //     Warrior class, extends Hero
// //   */
// const Warrior = function(name, level, weapon) {
//     Hero.call(this, name, level); // вызов конструктора хиро
//
//     this.weapon = weapon;
// };
//
// Warrior.prototype = Object.create(Hero.prototype); //конструктор вариор будет наследовать от конструктора хиро, указываем цепочку наследования
// Warrior.prototype.constructor = Warrior; // при записи наследования, всегда явно указываем конструтор
//
// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };
//
// let alister = new Warrior('Alister', 1, 'sword');
// console.log(alister);

// const Hero = function(name, level) {
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function() {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// //   const Alister = new Hero('Alister', 1);
// // Alister.greet();
//
// //   /*
// //     Warrior class, extends Hero
// //   */
// const Warrior = function(name, level, weapon) {
// //     Hero.call(this, name, level);
//
//     this.weapon = weapon;
// };
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
//
// Warrior.prototype.attack = function() {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };
//
// let alister = new Warrior('Alister', 1, 'sword');
// console.log(alister);


// const Hero = function (name, level) {
//     // this = {}
//     // Hero.prototype = {}
//     this.name = name;
//     this.level = level;
// };
//
// Hero.prototype.greet = function () {
//     console.log(`Hello, I'm ${this.name}`);
// };
//
// //   const Alister = new Hero('Alister', 1);
// // Alister.greet();
//
// //   /*
// //     Warrior class, extends Hero
// //   */
// const Warrior = function (name, level, weapon) {
//     // this = {}
//     // Warrior.prototype = {}
//     // Hero.prototype = {}
//     Hero.call(this, name, level);
//     this.weapon = weapon;
//     // {name, level, weapon,}
//
// };
//
// Warrior.prototype = Object.create(Hero.prototype);
// Warrior.prototype.constructor = Warrior;
//
// Warrior.prototype.attack = function () {
//     console.log(`${this.name} attacks with an ${this.weapon}.`);
// };
//
// const Swordman = function (name, level, weapon, ability) {
//     Warrior.call(this, name, level, weapon);
//     this.ability = ability;
// };
//
// Swordman.prototype = Object.create(Warrior.prototype);
// Swordman.prototype.constructor = Swordman;
// Swordman.prototype.rush = function () {
//     console.log(`Attack aaaaaaaaaaahhhhhhhhhhhh!!!!!!!`);
// };
// Swordman.prototype.fatal = function () {
//     console.log(`You are dead`);
// };
// let archibald = new Swordman('Archi', 5, 'sword', '100 gram');
//
// // archibald.rush();
// console.log(archibald);
// console.log(Swordman.prototype);


// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`${this.name} can eat`);
//     }
//
//     great() {
//         console.log(`Hello my name is ${this.name}`);
//     }
// }
//
// class Warrior extends Human {
//     constructor(name, age, weapon) {
//         super(name, age);
//         this.weapon = weapon;
//     }
//
//     attack() {
//         console.log(`Attack ${this.name}`);
//     }
// }
//
// class Knight extends Warrior {
//     constructor(name, age, weapon, horse) {
//         super (name, age, weapon);
//         this.horse = horse;
//     }
//
//     static showMoney(){
//         console.log(`${this.name} have many golden coins`);
//     }
//
//     move() {
//         console.log(`${this.horse} move`);
//     }
// }
//
//
// let lanselot = new Knight('Lanselot', 25, 'Sword', 'Plotva');
// lanselot.move();
// lanselot.attack();
// lanselot.eat();
// Knight.showMoney();


/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

// function Account(login, email,friendsCount){
//     this.login = login;
//     this.email =email;
//     this.friendsCount = friendsCount;
// }
// Account.prototype.getAccountInfo = function (){
//     console.log(`Login: ${this.login}, E-mail: ${this.email}, Friends: ${this.friendsCount}`)
// };
//
// let vasya = new Account('Vasya','vasya@vasya.com',100);
// console.log(vasya);
//
// vasya.getAccountInfo();
//
//
// class Account {
//     constructor(login,email,friendsCount) {
//         this.login =login;
//         this.email =email;
//         this.friendsCount = friendsCount;
//     }
//     getAccountInfo(){
//         console.log(`Login: ${this.login}, E-mail: ${this.email}, Friends: ${this.friendsCount}`)
//     };
// }
//
// let vasya = new Account('Vasya','vasya@vasya.com',100);
// console.log(vasya);
// vasya.getAccountInfo();
// let masha = new Account('Masha','masha@vasya.com',100);
// console.log(masha);
// masha.getAccountInfo();

//=======================================================================================================================
/*
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/


// function StringBuilder(string = "") {
//     this.value = string;
// }
//
// StringBuilder.prototype.getValue = function(){
//     console.log(this.value)
// };
//
// StringBuilder.prototype.append = function(str){
//     console.log(this.value=this.value+str)
// };
//
// StringBuilder.prototype.prepend = function(str){
//     console.log(this.value=str+this.value)
// };
//
// StringBuilder.prototype.pad = function(str){
//     console.log(this.value =str+this.value+str)
// };
//
// StringBuilder.prototype.showValue = function(){
//     console.log(this.value)
// };
//
// const myString = new StringBuilder('.');
//
// myString.append('^');
// myString.showValue(); // '.^'
//
// myString.prepend('^');
// myString.showValue(); // '^.^'
//
// myString.pad('=');
// myString.showValue(); // '=^.^='


/*
  Создайте класс Car с указанными полями и методами.
*/

// class Car {
//     constructor(maxSpeed) {
//
//         // Добавьте свойства:
//         //   - speed - для отслеживания текущей скорости, изначально 0.
//         this.speed = 0;
//         //   - maxSpeed - для хранения максимальной скорости
//         this.maxSpeed = maxSpeed;
//         //   - running - для отслеживания заведен ли автомобиль,
//         //     возможные значения true или false. Изначально false.
//         this.running = false;
//         //
//         //   - distance - содержит общий киллометраж, изначально с 0
//         this.distance = 0;
//     }
//
//     turnOn() {
//         this.running = true;
//         // Добавьте код для того чтобы завести автомобиль
//         // Просто записывает в свойство running значание true
//     }
//
//     turnOff() {
//         // Добавьте код для того чтобы заглушить автомобиль
//         // Просто записывает в свойство running значание false
//          this.running = false;
//     }
//
//     accelerate(spd) {
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed
//         if (spd <= this.maxSpeed) {
//              this.speed = spd;
//         }
//
//     }
//
//     decelerate(spd) {
//         // Записывает в поле speed полученное значение, при условии что
//         // оно не больше чем значение свойства maxSpeed и не меньше нуля
//         if (spd <= this.maxSpeed && spd > 0) {
//              this.speed = spd;
//         }
//     }
//
//     drive(hours) {
//         // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
//         // но только в том случае если машина заведена!
//         if (this.running = true) {
//              this.distance = hours * this.speed;
//         }
//     }
//
//     static getSpecs(car) {
//         console.log(`Maximum speed ${car.maxSpeed}, is running ${car.running} its distance is ${car.distance}`);
//     }
// }
//
//
//   // Добавьте к классу Car из предыдущего задания статический
//   // метод getSpecs, который получает объект-машину как аргумент
//   // и выводит в консоль значения полей maxSpeed, running и distance.
//   //
//   // Использование будет выглядеть следующим образом:
//
//   const someCar = new Car(100);
//   someCar.turnOn();
//   someCar.accelerate(50);
//   someCar.drive(2);
// console.log(someCar);
//
// Car.getSpecs(someCar); // maxSpeed: 100, running: true, distance: 200
//
//
// /*
//   Добавьте классу Car свойство value - цена автомобиля.
//
//   Добавьте классу Car использование геттеров и сеттеров для свойства value.
//
//   Геттер вернет текущей значение поля this._value
//   Сеттер запишет в поле this._value то что ему присвоят
//
//   PS: имя геттера и сеттера не может совпадать с полем, поэтому используйте
//     не this.value а this._value
//
//   Использование выглядит следующим образом:
//
//   const myCar = new Car(50, 2000);
//
//   myCar.value; // 2000
//   myCar.value = 4000;
//   myCar.value; // 4000
// */
//
// class Car {
//     constructor(maxSpeed, value) {
//         // ... код
//         this._value = value;
//     }
//     // ... код
// }

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

// class Tank {
//     constructor(name, coordinatesX, coordinateY, tankColor) {
//         this.name = name;
//         this.color= tankColor;
//         this.coordinateX = coordinatesX;
//         this.coordinateY = coordinateY;
//         this.life = 100;
//         this.ammunition = 5;
//         this.engineStatus = true;
//
//     }
//
//     moveToX(x) {
//         if (this.engineStatus === false) {
//             return alert('Engine needs repair');
//         } else {
//             return this.coordinateX += x;
//         }
//     };
//
//     moveToY(y) {
//         if (this.engineStatus === false) {
//             return alert('Engine needs repair');
//         } else {
//             return this.coordinateY += y;
//         }
//     };
//
//     fireTo(x, y) {
//         if (this._canFire()) {
//             return this.ammunition -= 1;
//         } else {
//             return alert("Out of ammo! Reload!");
//         }
//     };
//
//     _canFire() {
//         return this.ammunition > 0;
//     };
//
//     _checkLife() {
//         return this.life > 0 && this.life <=100;
//     };
//
//     heal(x) {
//         if (this._checkLife()) {
//             this.life += x;
//         }
//     };
//
//     _checkEngine() {
//         if (this.engineStatus !== true) {
//             alert('Need immediate repair, engine kaput');
//             return false;
//         } else {
//             return true;
//         }
//     };
//
//     repairEngine() {
//         if (!this._checkEngine()) {
//             this.engineStatus = true;
//         }
//     };
//
//     showCoordinate() {
//         return `${this.coordinateX}, ${this.coordinateY}`;
//     };
// }
//
// const first = new Tank('Vasya',50,50,'red');
// console.log(first);


// class User {
//     constructor(name, surname) {
//         // this.name = name;
//         // this.surname = surname;
//         // private
//         this._name = name;
//         this._surname = surname;
//     }
//
//     getFullName() {
//         return `${this._name} ${this._surname}.`
//     }
//
//     // getFullName() {
//     //     return `${this.name} ${this.surname}.`
//     // }
//
//     // // getter
//     //
//     get name() {
//         return this._name;
//     }
//     //
//     // //
//     // // get surname() {
//     // //     return this._surname;
//     // // }
//     // // // setter
//     // //
//     set age(age) {
//         this._age = age;
//     }
//
//     get age() {
//         return this._age;
//     }
//     //
//     // set setName(name) {
//     //     this._name = name;
//     // }
//     //
//     // //
//     // get age() {
//     //     return this._age;
//     // }
// }

// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

// class Worker {
//     constructor(name,surname,rate,days){
//         this._name=name;
//         this._surname =surname;
//         this._rate= rate;
//         this._days = days;
//     }
//     getSalary(){
//         return this.days*this.rate;
//     }
//     set rate(rate){
//         return this._rate= rate;
//     }
//
//     set days(days){
//         return this._days = days;
//     }
//
//     get name(){
//         return this._name;
//     }
//
//     get surname(){
//         return this._surname;
//     }
//
//     get rate(){
//         return this._rate;
//     }
//
//     get days(){
//         return this._days
//     }
// }
//
// let vasya = new Worker('Vasya','Pupkin',1000,7);
// console.log(vasya.getSalary());
// console.log(vasya);
// vasya.rate =2000;
// vasya.days =30;
// console.log(vasya);
// console.log(vasya.getSalary());
//
// let masha = new Worker('Masha','Pupkin',500,7);
// console.log(masha.getSalary());
// console.log(masha);
// masha.rate =1000;
// masha.days =31;
// console.log(masha);
// console.log(masha.getSalary());


// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран

// class User{
//     constructor(name,surname){
//         this.name = name;
//         this.surname = surname;
//     }
//     getFullName(){
//         return`${this.name} ${this.surname}`
//     }
// }
//
// class Student extends User{
//     constructor(name,surname,yearIn){
//         super(name,surname);
//         this.yearIn=yearIn;
//     }
//     getCourse(){
//         return 2018-this.yearIn;
//     }
//
//     getFullInfo(){
//         return`${super.getFullName()} ${this.getCourse()}`
//         // console.log(this.getFullName());
//         // console.log(this.getCourse());
//     }
// }
//
// let student = new Student('vasya','pupkin', 2016);
// console.log(student.getCourse());
//
// console.log(student.getFullInfo());



