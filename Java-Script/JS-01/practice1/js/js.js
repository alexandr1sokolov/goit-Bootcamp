/*
let ageInYears = prompt('Сколько лет?');
console.log(ageInYears);

let days = 365;
let month =12;
let hours = 24;
let minutes = 60;
let seconds = 60;

let ageInDays = ageInYears * days;
console.log(ageInDays + ' дней');

let ageInHours = days * month *hours;
console.log(ageInHours + ' часов');

let ageInMinutes = days * month *hours *minutes;
console.log(ageInMinutes + ' минут');

let ageInSeconds = days * month *hours *minutes *seconds;
console.log(ageInSeconds + ' секунд');
*/

/*
  - Объявите две переменные: guest и name
  - В переменную name запишите строку 'Mango'
  - Скопируйте значение из name в guest
  - Выведите в консоли значение переменной guest (должно вывести 'Mango')
*/

// let guest;
// let name = 'Mango';
// guest = name;
// console.log(guest);

/*
  Есть три переменные содержащие день, месяц, и год.
  Необходимо получить строку день\месяц\год
  в формате xx\xx\xxxx
*/

/*const day = 18;
const month = 6;
const year = 2018;

const date = day + '\\' + '0' +month + '\\' + year;

    console.log(date); // 18\06\2018*/
/*
let a = 'qwertyuiop';
let b = 'asdfghjkl';
let c = 'zxcvbnm';
console.log( b[5], a[2], b[8], b[8], a[8]);*/

/*
  Напишите скрипт который:
  - при загрузке страницы спрашивает имя пользователя (используйте prompt)
  - после того как было введено имя показывает alert с тем что ввели в prompt
*/

/*let name = prompt('Имя?');
alert(name);*/

/*
  Есть две переменные name и date, roomType, содержащие
  имя гостя, дату его прибытия на отдых и тип комнаты отеля.

  Используя шаблонные строки необходимо записать
  в перменную message сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".

  Найти ошибки в коде и исправить их, при верном решении
  в консоль будет выведена строка идентичная той что
  напротив console.log
*/

/*const name = 'Mango';
const date = '14/08/2031';
const roomType = 'люкс';

const message = `${name} прибывает на отдых ${date} в ${roomType}`;

console.log(message); // Mango прибывает на отдых 14/08/2031 в люкс.*/

/*
  Есть 3 переменные в которых хранится  размер составляющих
  блочной модели в формате Npx, где N это целое число.

  Используя эти переменные, запишите в переменную totalWidth
  общую ширину блока в формате Npx.

  К примеру "сумма" '20px' и '30px' будет равна '50px'.

  Если все верно, то в консоли будет выведена строка '125px'
*/

/*const padding = "20px";
const border = "5px";
const contentWidth = "100px";

let totalWidth = parseInt(padding) + parseInt(border) + parseInt(contentWidth) + 'px';

console.log(totalWidth); // '125px'*/


/*let time= prompt('What time is it now?');
if (time >= 14 && time <= 15) {
    alert('Jrachka time!!!');
} else {
    alert('Rabotat Negri!!!');
}*/

/*
let money = prompt('Укажите бюджет');
if (money >= 500){
    alert('Едем в Египет!!!');
} else {
    alert('Нищеброды сидят дома!');
}
*/

/*let money = prompt('Укажите бюджет');

if (money >= 500){
    alert('Едем в Египет!!!');
}

else if (money > 1000){
    alert('Едем в Таиланд!!!');
}

else if (money > 500 && money <= 1000){
    alert('Едем в Турцию!!!');
}

else {
    alert('Нищеброды сидят дома!');
}*/
/*

let month = prompt('Введите месяц словами').toLowerCase();

if (month === 'январь' || month === 'февраль' || month === 'декабрь') {
    alert ('Зима');
} else if (month === 'март' || month === 'апрель' || month === 'май') {
    alert ('Весна');
} else if (month === 'июнь' || month === 'июль' || month === 'август') {
    alert('Лето');
} else if (month === 'сентябрь' || month === 'октябрь' || month === 'ноябрь') {
    alert('осень');
}
else {
    alert('Ты дурак!')
}
*/

/*let luckyNumber = 1;
if (luckyNumber === 1) {
    console.log('more');
} else if (luckyNumber === 3) {
    console.log('little more');
} else if (luckyNumber === 7) {
    console.log('You win');
} else {
    console.log('try again');
}*/

/*
let luckyNumber = 1;
switch (luckyNumber) {
    case 1:
    case 2: // если надо вбить несколько условий
        console.log('more');
        break;
    case 3:
        console.log('little more');
        break;
    case 7:
        console.log('You win');
        break;
    default:
        console.log('try again');
        break;
}
*/

/*let month = prompt('Введите месяц словами').toLowerCase();

switch (month) {
    case 'январь':
    case 'февраль':
    case 'декабрь':
        alert('Зима');
        break;

    case 'март':
    case 'апрель':
    case 'май':
        alert('Весна');
        break;

    case 'июнь':
    case 'июль':
    case 'август':
        alert('Лето');
        break;

    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        alert('Осень');
        break;

    default:
        alert('Неверный ввод');
}*/

let num = 5;
let result = num === '5' ? 'Evrika' : num == 5 ? 'Loser' : 'Fail';

