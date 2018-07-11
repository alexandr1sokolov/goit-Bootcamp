


// 1) Створити в HTML 5 кнопок
// 2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
// 3) Нова позиція кнопок має бути випадковою
// 4) Кнопки не повинні виїжати за межі екрану
// 5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
// 6) Переміщення кнопок зробити плавним за допомогою transition
// 7) Визначати кнопку на якій відбулася подія двома способами:
//     7.1) event
// 7.2) this
// 8) Корисні команди:
// window.innerWidth
// window.innerHeight
// clientHeight
// clientWidth
// mouseenter

// let btns = document.querySelectorAll('.btn');
// // let container = document.querySelector('.container');
// console.log(btns);
//
// function moveBtn (event){
//    let btnH =event.target.clientHeight;
//    let btnW = event.target.clientWidth;
//    let randomTop =  Math.floor(Math.random() * (window.innerHeight - btnH));
//    let randomLeft = Math.floor(Math.random() * (window.innerHeight - btnW));
//    event.target.style.top = `${randomTop}px`;
//    event.target.style.left = `${randomLeft}px`;
//    //event.target =this
// }
//
// btns.forEach(el=>el.addEventListener('mouseenter', moveBtn));

// let listItems = document.querySelectorAll('.list__item');
// let list = document.querySelector('.list');
// let listArr = Array.from(listItems);
//
// function liClick(event) {
//     // console.log(listArr.indexOf(event.target) +1);
//     // listArr[listArr.indexOf(event.target)].classList.toggle('toggle');
//     event.target.classList.toggle('toggle');
// }
//
// list.addEventListener('click', liClick);

// let buttonEl = document.querySelector('.btn');
// function turnListOn() {
//     listContainer.classList.toggle('list-dissapear');
// }
//
// buttonEl.addEventListener('click', turnListOn);


