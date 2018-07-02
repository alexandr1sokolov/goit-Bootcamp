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

