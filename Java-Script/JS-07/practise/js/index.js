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

// const text = document.querySelector('.text');
// console.log(text);
// console.log(text.classList);                    //выдает список классов объекта в виде псевдомассива
// console.log(text.classList.contains('par'));    // как includes, но для псевдомасивва
// text.classList.add('big');                      // добавляет указанный класс объекту
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
// a.setAttribute('id', 'link-one');                      // первым указывает вид атрибута, вторым имя атрибута
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


//================================================ add on page

// const title = document.createElement('h1');
// title.textContent = 'Title created from JS';
// const container = document.querySelector('div');
// container.appendChild(title);                              //добавляет элемент в конец контейнера
// const article = document.querySelector('article');
// container.insertBefore(title,article);                    //имеет 2 параметра первым аргументом - что вставляем, вторым перед чем
// container.append(title);                                  // вставляет в конец контейнера, новая форма записи  container.appendChild
// container.prepend(title);                                 // вставляет в самое начало контейнера
// article.after(title);                                     // ставит тайтл после артикла
// article.before(title);                                    // ставит тайтл перед артикла
// article.replaceWith(title);                                //меняет артикл на тайтл

//=============================================== remove
// const title = document.createElement('h1');
// title.textContent = 'Title created from JS';
// const container = document.querySelector('div');
// container.appendChild(title);
// title.remove();                                              // удаляет тайтл

// =============================================== inner.HTML
// при каждом использование перерисовывает страницу заново

// const div = document.querySelector('div');
// div.textContent = 'hello world';            // затрет все содержание и впихнет строку
// console.log(div);
// div.innerHTML = '<p>Hello World!</p>';
// div.innerHTML += '<p>Hello World!</p>';

// ============================================ document fragment
// вставляет много всего за один раз

// const frag =document.createDocumentFragment();
// let root = document.querySelector('.container');
// // // const frag = document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//     let box = document.createElement('div');
//     box.classList.add('box');
//     frag.append(box);
// }
// // root.append(frag);

// let root = document.querySelector('.container');
// let str = '';
// for (let i = 0; i< 100; i++) {
//     str += '<div class="box"></div>'
// }
// root.innerHTML = str;


//=========================================== insertAdjacentHTML,insertAdjacentText, insertAdjacentElement
//+++++++ adjacent - соседний


// const ul = document.querySelector('ul');
// const text = '<li>Hello World!</li>';
// // ul.insertAdjacentHTML('beforebegin', text); // перед
// // ul.insertAdjacentHTML('afterend', text); // после
// // ul.insertAdjacentHTML('afterbegin', text); // внутри вначале
// // ul.insertAdjacentHTML('beforeend', text); // внутри в конце

//================================================ clone
//++++++++++++++++++++++++ false - копирует тег, true - копируте со всем наполнением

// const article = document.querySelector('.article');
// const cloneArticle = article.cloneNode(true);
// console.log(cloneArticle);


//==================================================  event listener

// const one = document.querySelector('#one');
// const many = document.querySelector('#many');

// function first() {
//     alert(`I am action from first button`);
// }
//
// one.addEventListener('click', first);      // первым аргументом указывается событие на котрое необходимо реагировать, вторым - что делать

// function second() {
//     alert(`I am action from second button`);
//
// }
//
// function hello() {
//     alert(`I am action from second button and hello function`);
//
// }
// many.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);
//
// many.addEventListener('click', function () {
//     first();
//     second();
//     hello();
// });

// function withRemoveListener() {
//     alert(`I am action from first button and i remove after end`);
//     one.removeEventListener('click', withRemoveListener);
//
// }
//
// one.addEventListener('click', withRemoveListener);
//
//
// function clickCount() {
//     let clickNumber = 0;
//     let limit = 3;
//     let fake = clickNumber;
//     function increment() {
//         fake += 1;
//         if (fake > limit) {
//             alert('Не балуйся, йди на роботу');
//         }
//         console.log(clickNumber);
//     }
//
//     return increment;
// }
//
// let counter = clickCount();
// console.log(counter);
//
// let firstButton = document.querySelector('#one');
//
// firstButton.addEventListener('click', counter);

//==========================================================
// 'use strict';
// function classAdd() {
//     this.classList.toggle('bigBtn');
// }
//
// // showThis();
//
// let one = document.querySelector('#one');
//
// one.addEventListener('click', classAdd);
//===========================================================================
//+++++++++++++++++++++++++++++++++++ простмотр информации о событии
// function showEvent(e) {
//     console.log(e);
//     // console.log(event.target);
//     // console.log(event.currentTarget);
//     // console.log(this);
// }
//
// let one = document.querySelector('#one');
// one.addEventListener('click', showEvent);
//
// window.addEventListener('keypress', showEvent);

//======================================================== всплытие (делегирование) bubbling
// function resizeFont(e) {
//     console.log('this',this);
//     console.log('target',e.target);
//     e.target.classList.toggle('bigText');
// }
// // bad practice
// // let listItem = document.querySelectorAll('.item');
// // listItem.forEach(el => el.addEventListener('click', resizeFont));
// // console.log(listItem);
//
// // good
//
// let list = document.querySelector('.list1');
// list.addEventListener('click', resizeFont);

//================================================== остановка всплытия
// event.stopPropagation();

//================================================= навигация по DOM
// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);                               // выберает всё наполнение элемента
// console.log(body.children);                                 // выбирает теги с содержимым
// console.log(body.firstChild);                                  // первый элемент блока
// console.log(body.firstElementChild);                        // первый дочерний элемент
// console.log(body.lastChild);                                // последний элемент
// console.log(body.lastElementChild);                         // последний дочерний элемент
// const div = body.children[0];                               // можно выбрать тег по номеру индекса в псевдомассиве
// console.log(p.previousElementSibling);                      // пердыдущий соседний элемент
// console.log(p.previousSibling);                             // доступ к переносу строки (текст контент)
// console.log(p.nextElementSibling);                          // следующий соседнй элемент
// console.log(p.nextSibling);                                 // доступ к переносу строки (текст контент)
// console.log(p.parentNode);                                  // доступ к отцовскому контейниру в котором элемент расположен
// console.log(p.style);                                          // доступ к стилям
// p.style.fontSize = '50px';

// const userName = document.querySelector('.name');
// const btn = document.querySelector('#send');
// btn.addEventListener('click', function (event) {                // функция которая отслеживает события
//     event.preventDefault();                                     // отменяет стандартное поведение, в данном случае не происходит автоматическая отправка
//     console.log(userName.value);                                // value туда сохраняется то, что вводится в форму
//     userName.value = '';                                        // обнуляем строку ввода
// });