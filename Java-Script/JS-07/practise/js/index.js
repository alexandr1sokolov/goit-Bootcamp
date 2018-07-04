// let movement = [];
// for (let i = 100; i <= 175; i += 75) {
//     for (let k = 25; k <= 925; k += 100) {
//         movement.push({left: k, top: i});
//     }
// }
//
// console.log(movement);

//////////////============================================= DOM
// // ======================================OLD /СТАРЫЕ методы доступа к элементам
// console.log(document.getElementsByClassName('text'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementById('title'));
//
// //======================================= NEW /НОВЫЕ методы доступа к эелементам
// let title = document.querySelector('#title');
// let li = document.querySelectorAll('.item');

// object.classList - выдает список классов объекта
//.contains - как includes, но для псевдомасивва

// ==============================classList

const text = document.querySelector('.text');
console.log(text);
// console.log(text.classList);                    //выдает список классов объекта в виде псевдомассива
// console.log(text.classList.contains('par'));    // как includes, но для псевдомасивва
// text.classList.add('big');                         // добавляет указанный класс объекту
// console.log(text.classList);
// console.log(text.classList.contains('big'));
// title.classList.add('small');
// console.log(title.classList);
// text.classList.remove('big');                     //удаляет указанный класс объекта
// console.log(title.classList.contains('big'));
// text.classList.toggle('big');                     // если есть указзаный класс - удаляет, если нет - добавляет
// console.log(title.classList.contains('big'));

// =============================================attr

// const a = document.querySelector('a');
// console.log(a);
// console.log(a.hasAttribute('href'));                  //проверка наличия атрибута - выдает true или false
// console.log(a.getAttribute('href'));                  //выводит создержание элемента в виде строки
// a.setAttribute('title', 'super link');                // добавляет атрибут, имеет 2 параметра, первый аргументом идет название, вторым наполнение
// a.setAttribute('id', 'link-one');
// console.log(a);
// console.log(a.attributes);
// a.removeAttribute('title');                            //удаляет атрибут
// console.log(a.attributes);
// console.log(a.href);
// console.log(a.title);
// console.log(a.title = 'test');

//================================================= create
// const title = document.createElement('h1');                //создает элемент разметки
// h1.textContent = 'I am created from JS';                   // записывает в текстовой контент указанную строку
// console.log(h1);
// document.querySelector('div').innerHTML = h1;               