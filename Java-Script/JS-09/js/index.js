//==============================================================================================


// let cont = document.querySelector('.cont');
// let bodyPaste = document.querySelector('body');
//
// function gallery(event) {
//     event.target.dataset;
//     let overlay = document.createElement('div');
//     let img = document.createElement('img');
//     img.classList.add('big-img');
//     overlay.classList.add('overlay');
//     img.setAttribute('src', event.target.dataset.big);
//     img.setAttribute('alt', 'picture');
//     overlay.append(img);
//     bodyPaste.prepend(overlay);
//     overlay.addEventListener('click', function (event) {
//         if (event.target === this) {
//             this.remove();
//         }
//     })
// }
//
// cont.addEventListener('click', gallery);

// let galleryArr = [
//     {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
//     {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
//     {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
//     {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
//     {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
//     {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
//     {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
//     {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
//     {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
//     {small: 'https://placeimg.com/480/240/nature/grayscale', big: 'https://placeimg.com/960/480/nature/grayscale'},
// ];
// const container = document.querySelector('.cont');
//
// const createImg = ({small,big})=>`<img src="${small}" alt="picture" data-big="${big}">`;
// const createGallery = arr => arr.reduce((acc, img) => acc + createImg(img),``);
// container.insertAdjacentHTML('afterbegin',createGallery(galleryArr));
//
//
// let cont = document.querySelector('.cont');
// let bodyPaste = document.querySelector('body');
//
// function gallery(event) {
//     event.target.dataset;
//     let overlay = document.createElement('div');
//     let img = document.createElement('img');
//     img.classList.add('big-img');
//     overlay.classList.add('overlay');
//     img.setAttribute('src', event.target.dataset.big);
//     img.setAttribute('alt', 'picture');
//     overlay.append(img);
//     bodyPaste.prepend(overlay);
//     overlay.addEventListener('click', function (event) {
//         if (event.target === this) {
//             this.remove();
//         }
//     })
// }
// cont.addEventListener('click', gallery);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//=====================================Timeout   Interval=========================================================================
// setTimeout(callback, delay); // код выполнятеся единожды с указанно задержкой
// setInterval(callback, delay); //код выполняется бесчисленное количествр раз через указзаный интервал
//
// function sayHello() {
//     console.log("Hello!");
// }

// // const ID = setTimeout(sayHello, 5000);
// const ID = setInterval(sayHello, 100);
// console.log(ID);
// let btn = document.querySelector('.stop');
// btn.addEventListener('click', function () {
//     // clearTimeout(ID);
//     clearInterval(ID);
//     console.log('timer stop');
// });
//

//======================================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++DATE встроенная в JS функция конструтор хранящий дату++++++++++++++++++++++++++++++++++++++++++++
// let date = new Date();
// // console.log(date);
// // console.log(date.getMonth());
// // console.log(date.getFullYear());
// // console.log(date.getHours());
// let year = prompt('enter year');
// let month = prompt('enter month');
// let day = prompt('enter day');
// let fullDate = `${year} ,${month} ${day}`;
// let days =['Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота','Неділя'];
// console.log(days[date.getDay(fullDate)]);


// const options = {
//     weekday: 'long',
//     year    : 'numeric',
//     month   : 'short',
//     day     : 'numeric',
//     hour    :'2-digit',
//     minute  :'2-digit'
// };
//
// Україна
// let localeUa = date.toLocaleString('UA-ua', options);
// console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42
//
// let localeUs = date.toLocaleString("en-US", options);
// console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM

//==================================================moments https://momentjs.com/docs/ =========================
// let today = moment().format('DD.MMMM.YYYY');
// console.log(today);

//===========================================================================================================================
// Promise (обещание, промис) - объект, представляющий текущее состояние асинхронной операции. Удобный способ организации асинхронного кода.

// let myPromise = new Promise(function (ok, fatal) {
//     let isDone = true;
//
//     if(isDone){
//         ok('this is done'); // да
//     } else {
//         fatal('error') // нет
//     }
// });
//
// myPromise.then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.log(error);
// });


// const promise = new Promise((resolve, reject)=> {
//     if (status > 200 && status < 300) {
//         resolve(response);
//         console.log('resolve',resolve);
//     }
//
//     if (status > 400 && status < 500) {
//         reject("no data back from server, there was an error")        console.log('resolve',resolve);
//     }
// });
// // //
// promise
//     .then(response => console.log(response))
//     .catch(error => console.log(error));

// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 2000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });

// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 1000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });
//
// promiseNames
//     .then(answer => {
//         let result = answer.map(el => el.toUpperCase());
//         return result
//     })
//     .then(result => {
//         for (let el of result) {
//             console.log(el);
//         }
//     })
//     .catch(error => console.log(error));

//========================================================================Promise.all
//
// Promise.all([promise1, promise2, ...]) - статический метод, получает массив промисов и ждет их исполнения, возвращает промис.

// const promiseNames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Homer', 'Bender', 'Filip']);
//     }, 1000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 3000);
// });
//
// promiseNames
//     .then(answer => {
//         let result = answer.map(el => el.toUpperCase());
//         return result
//     })
//     .then(result => {
//         for (let el of result) {
//             console.log(el);
//         }
//     })
//     .catch(error => console.log(error));
//
// const promiseSurnames = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(['Simpson', 'Rodriges', 'Fry']);
//     }, 3000);
//
//     setTimeout(() => {
//         reject("no data back from server, there was an error")
//     }, 5000);
// });

// =========================================================== Promise.race([promise1, promise2, ...])
// - статический метод, получает массив промисов и возвращает обещание. Когда хотябы одно обещание в массиве исполнилось, исполнится возвращаемый промис.