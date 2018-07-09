/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// let list = document.querySelector('.categories');
// const listArr =Array.from(list.children);
// listArr.map(el => console.log(`Категория = ${el.firstChild.textContent}, кол-во ${el.firstElementChild.children.length}`))

/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/

// let listMenu = document.querySelector('.list');
// console.log(listMenu.firstElementChild);
// let first = listMenu.firstElementChild;
// first.style.color = 'red';
// console.log(listMenu.lastElementChild);
// let last = listMenu.lastElementChild;
// last.style.color='blue';


/*
  Дан ul склассом .list и массив строк.

  Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
//
// let listMenu = document.querySelector('.list');
// const frag = '';
// let result = function (arr) {
//     for (let item of arr) {
//         let menuItem = document.createElement('li');
//         menuItem.textContent = '${item}';
//         frag += menuItem;
//     }
// };
// result(elements);
// listMenu.insertAdjacentHTML('afterbegin', frag);

// const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
// let listMenu = document.querySelector('.list');
// const frag = document.createDocumentFragment();
// let result = function (arr) {
//     for (let item of arr) {
//         let menuItem = document.createElement('li');
//         menuItem.append(item);
//         frag.append(menuItem);
//     }
// };
// result(elements);
// listMenu.append(frag);
//=====================================================================================
/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/
// let list = document.querySelector('.list');
// let liItemCreator =function(){
//
//     do {
//         userText =prompt('add something here');
//         if (userText !== null){
//         let menuItem = document.createElement('li');
//         menuItem.textContent = `${userText}`;
//         list.append(menuItem);
//     }
//     } while (userText !== null)
// };
//
// liItemCreator();
//====================================================================================
/*
  Создайте функцию createPostCard(), которая
  создает и возвращает DOM-узел карточки поста.

  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.

  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/
// let list = document.querySelector('.container');
// let result =  function createPostCard() {
//     list.insertAdjacentHTML('afterbegin', `<div class="post">
//     <img class="post__image" src="http://via.placeholder.com/400x150" alt="post image">
//     <h2 class="post__title">Lorem ipsum dolor</h2>
//     <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!</p>
//
//     <a class="button" href="#">Read more</a>
// </div>`);
// };
// result();
// result();
//=====================================================================================
/*
  В HTML-документе уже есть тег с id="root" (вкладка HTML)

  Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

  Функция создает столько div, сколько указано в num и возвращает их в одном
  общем контейнере. После чего необходимо повесить результат работы функции
  в div с id="#root"

  Каждый div:
    - Имеет случайный rgb цвет фона
    - Размеры самого первого div - 30px на 30px.
    - Каждый следующий div после первого, должен быть шире и выше предыдущего
      на 10px
*/
// let colorArr =['red','green','blue','yellow','grey','gold'];
// let divRoot = document.querySelector('#root');
// let container = document.createElement('div');
// let result = function createBoxes(num){
//     quantity = num-1;
//     let units = 'px';
//     let startUnits =30;
//     for (i=0; i<=quantity; i++){
//         let box = document.createElement('div');
//         box.style.width = startUnits+units;
//         box.style.height = startUnits+units;
//         box.style.background =  colorArr[Math.floor(Math.random()*colorArr.length)];
//         startUnits += 10;
//         container.append(box);
//     }return container;
// };
//
// divRoot.append(container)
// result(10);
//=================================================================================
/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/
// let btn =document.querySelector('.button');
// let clickNumber = 0;
// let numChange =function(){
//     clickNumber += 1;
//     btn.textContent = `${clickNumber}`
// };
// btn.addEventListener('click', numChange);

//================================================================================
/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/
// let button =document.querySelector('.button');
//
// let sum =function (){
//     let firstNum = document.querySelector('#firstNum');
//     let secondNum = document.querySelector('#secondNum');
//     let sum = parseInt(firstNum.value)+parseInt(secondNum.value);
//     let result = document.querySelector('.result');
//     return result.textContent = sum;
// };
// button.addEventListener('click', sum);


//==============================================================================
/*
  Дан спан и кнопки +1, -1, которые будут увеличивать
  и уменьшать на 1 значение спана. Сделайте так, чтобы
  это значение не могло стать меньше нуля.
*/

// let btnMns =document.querySelector('.js-sub');
// let btnPls =document.querySelector('.js-add');
// let counter = document.querySelector('.js-value');
//
//
// let clickNumber = parseInt(counter.textContent);
//
// function numPlus() {
//     clickNumber += 1;
//     counter.textContent = clickNumber;
// }
// function numMinus() {
//     if (parseInt(counter.textContent) > 0) {
//         clickNumber -= 1;
//         counter.textContent = clickNumber;
//     }
// }
//
// btnPls.addEventListener('click', numPlus);
// btnMns.addEventListener('click', numMinus);

/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Send" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
// let radioBtn =document.querySelectorAll([type="radio"]);







