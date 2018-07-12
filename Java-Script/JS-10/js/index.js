// //=================================================================
// const req = new XMLHttpRequest();
// // console.log(req);
// // settings
// // req.open(method, URL, async);
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', false); //синхронный код
// req.setRequestHeader('Content-Type', 'application/json');
// // req.send([body])
// req.send();
//
// // req.abort()
//
// // status
// // https://developer.mozilla.org/ru/docs/Web/HTTP/Status
//
// if (req.status !== 200) {
//     console.error(`${req.status}: ${req.statusText} `)
// } else {
//     console.log(JSON.parse(req.response));
// }
// console.log(`test`);

//===============================================================================================
// readystatechange - отслеживает состояние запроса
// 0 - начало
// 1 - визваный open
// 2 - получены заголовки
// 3 - получаем данные
// 4 - запрос окончен


// const req = new XMLHttpRequest();
// req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);//открываем соединение //асинхронный код
// req.setRequestHeader('Content-Type', 'application/json');           // Метод XMLHttpRequest.setRequestHeader() устанавливает значения HTTP заголовков.
// req.send();                                                         //Метод XMLHttpRequest.send() отправляет запрос. Если запрос асинхронный (каким он является по-умолчанию), то возврат из данного метода происходит сразу после отправления запроса. Если запрос синхронный, то метод возвращает управление только после получения ответа. отправка запроса


//XMLHttpRequest.onreadystatechange = callback;
//Обработчик события (EventHandler), который вызывается всякий раз, когда изменяется состояние свойства readyState. Свойство XMLHttpRequest.onreadystatechange содержит обработчик события, вызываемый когда происходит событие readystatechange, всякий раз  когда свойство readyState запроса XMLHttpRequest изменяется. Функция обратного вызова запускается из потока пользовательского интерфейса.
// req.onreadystatechange = function () {                              //onreadystatechange ключ благодаря котрому функция запускается каждый раз при смене ключей
//     if (req.readyState !== 4) {
//         console.log(req.readyState);
//         return
//     }
//
//     if (req.status !== 200) {
//         console.error(`${req.status}: ${req.statusText} `)
//     } else {
//         console.log(JSON.parse(req.response));
//     }
// };
//
// console.log(`test`);

//=========================================================================================================================================
// +++++++++++++++++++++Fetch API — предоставляет интерфейс, набор методов и объектов запроса и ответа, для получения ресурсов от сервера.
//++++++++++++++++++++++window.fetch() — это XMLHttpRequest нового поколения. Он предоставляет улучшенный интерфейс для составления запросов к серверу. Построен на обещаниях.
// CRUD
// POST - CREATE
// GET - READ
// PUT - UPDATE
// DELETE - DELETE


// fetch(url, options)  //url — обязательный, путь к данным которые вы хотите получить.
//options — необязатльнный, объект настроек запроса. Содержит служебную информацию: метод, заголовки и т.д.
//Возвращает промис, который содержит ответ сервера.

// let id = 152;
// fetch(url,{
//     method: 'DELETE',
//     body: JSON.stringify(id),
//     headers: new Headers({
//         'Content-Type': 'application/json',
//     }),
// });

// let div = document.querySelector('#container');
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         if (response.ok) {
//             return response.json()
//         }
//     })
//     .then(data => data.map(el => el.email))
//     .then(mapResult => mapResult.sort())
//     .then(sortResult => createUl(sortResult, div))
//     .catch(error => console.log(error));
//
// function createUl(arr, container) {
//     let result = arr.reduce((acc, el)=> acc + `<li>${el}</li>`, '');
//     let list =`<ul>${result}</ul>`;
//     container.innerHTML = list;
// }

//============================================ Web API
// endpoint - точка входа
// resources - ресурс к котрому мы обращаемся
// ? - говорит о том что после идут параметры запроса
// & - используется для указания смыслового 'и', он связывает множественные параметры запроса

// let div = document.querySelector('#container');
// let url = 'https://pixabay.com/api?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=popular&per_page=9';
// fetch(url)
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//     })
//     .then(data => createLi(data.hits,div));
//     // .then(data => console.log(data));
//
// function createLi(arr, container) {
//     let result = arr.reduce((acc, el)=> acc + `<li><img src="${el.previewURL}" alt="photo"></li>`, '');
//
//     container.innerHTML = `<ul class="img-cont">${result}</ul>`;
// }
//===================================================================================================================


// let btn = document.querySelector('.btn');
// let galleryContainer = document.querySelector('#container');
// function galleryCreate(arr,container){
//     let result =arr.reduce((acc, el)=> acc +`<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`, '');
//     container.innerHTML = result;
// }
//
// function getValue(){
//     let input = document.querySelector('.cars').value;
//     let url = `https://pixabay.com/api?key=5018958-ed49ccd90878e6614abdf24a6&q=${input}&per_page=200`;
//     fetch(url)
//         .then(response=> response.ok? response.json():null)
//         .then(data=> data.hits)
//         .then(imgArr=> galleryCreate(imgArr,galleryContainer));
//     console.log(input);
//     document.querySelector('.cars').value ='';
// }
//
// btn.addEventListener('click',getValue );
// window.addEventListener('keypress', function(event){
//     if (event.key === 'Enter'){
//         getValue();
//     }
//     }
//     );

// Globs
const btn = document.querySelector("#js-btn");
const tBody = document.querySelector("#js-tbody");
const htmlTpl = document.querySelector("#table-row").textContent.trim();
const compiled = _.template(htmlTpl);

// Получает массив объектов валют и используя LoDash шаблон рендерит результат
const updateView = currencies => {
    let htmlString = "";

    currencies.forEach(currency => {
        htmlString += compiled(currency);
    });

    tBody.innerHTML = htmlString;
};

// Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url
const getCurrencyRates = () =>
    fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .catch(err => {
            console.error("Error: ", err);
        });

// При клике вызовем getCurrencyRates и после того как обещание выполнятся, внутри then отрендерим результат по шаблону
const onClick = () => {
    getCurrencyRates().then(currencies => {
        updateView(currencies);
    });
};

btn.addEventListener("click", onClick);