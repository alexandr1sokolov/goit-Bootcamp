/*
  Создайте скрипт приложения-секундомера.

  Изначально в HTML есть разметка:

  <div class="stopwatch">
    <p class="time js-time">00:00.0</p>
    <button class="btn js-start">Start</button>
    <button class="btn js-take-lap">Lap</button>
    <button class="btn js-reset">Reset</button>
  </div>
  <ul class="laps js-laps"></ul>

  Добавьте следующий функционал:

  - При нажатии на кнопку button.js-start, запускается таймер, который считает время
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).

    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.

  - Когда секундомер запущен, текст кнопки button.js-start меняется на 'Pause',
    а функционал при клике превращается в оставновку секундомера без сброса
    значений времени.

    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.

  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, таймер продолжает отсчет времени
    как будто паузы небыло, а текст меняется на 'Pause'. То есть если во время нажатия
    'Pause' прошло 6 секунд со старта, при нажатии 'Continue' 10 секунд спустя, секундомер
    продолжит отсчет времени с 6 секунд и дальше, а не с 16.

    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.

  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.

  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/
const timeToDisplay = document.querySelector('.js-time');
const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');
const laps = document.querySelector('.js-laps');

let startTime = new Date();
let deltaTime =0;
let pauseTime =0;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let timerIsActive = false;
let lapArr=[];
let id;

function start(){
    if (!timerIsActive){
        startTime = Date.now()- pauseTime;
        timerIsActive = true;
        console.log(timerIsActive);
        id = setInterval(function(){
            let currentTime = Date.now();
            deltaTime = currentTime - startTime;
            let time = new Date(deltaTime);
            milliseconds =Number.parseInt(time.getMilliseconds()/100);
            seconds = time.getSeconds();
            minutes = time.getMinutes();
            minutes = minutes < 10 ? '0' + time.getMinutes() : minutes;
            seconds = seconds < 10 ? '0' + time.getSeconds() : seconds;
            startBtn.textContent = 'Pause';
            timeToDisplay.textContent = `${minutes}:${seconds}.${milliseconds}`;
        }, 100);
    }
    else {
        clearInterval(id);
        timerIsActive = false;
        console.log(timerIsActive);
        pauseTime = deltaTime;
        startBtn.textContent = 'Continue';
    }
}
startBtn.addEventListener('click',start);

function reset() {
    if (startBtn.textContent !== 'Start'){
        clearInterval(id);
        timerIsActive = false;
        deltaTime = 0;
        pauseTime = 0;
        startBtn.textContent = 'Start';
        lapArr =[];
        timeToDisplay.textContent = `00:00.0`;
        // laps.childNodes.remove(); не пашет
    }
}
resetBtn.addEventListener('click',reset);

function lap() {
    lapArr.push(timeToDisplay.textContent);
    console.log(lapArr);
    laps.innerHTML = lapArr.reduce((acc,el)=> acc+=`<li>"${el}"</li>`,``);
}
lapBtn.addEventListener('click',lap);

function lapUpdate(lapArr){

}






