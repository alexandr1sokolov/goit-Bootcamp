/*
  Напишите скрипт, для авторизации администратора в панели управления.

  При загрузке страницы у посетителя запрашивается логин через prompt:

    - Если посетитель нажал Cancel — показыать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы ADMIN_LOGIN,
       показывать alert с текстом 'Доступ запрещен!'
    - Если был введен логин совпадающий со значением константы ADMIN_LOGIN, спрашивать пароль через prompt.

  При вводе пароля:

      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Доступ запрещен!'
      - Если введён пароль который совпадает со значением константы ADMIN_PASSWORD,
        показывать alert с текстом 'Добро пожаловать!'

  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/

// const ADMIN_LOGIN = 'admin';
// const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';



/*const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';

let login = prompt('Enter login');
let cancelAlert = 'Отменено пользователем!';
let successAlert = 'Добро пожаловать!';
let accessDenied = 'Доступ запрещен!';

if (login === null){
    alert(cancelAlert);
} else if (ADMIN_LOGIN !== login) {
    alert(accessDenied);
} else if (ADMIN_LOGIN === 'admin'){
    let passwordPrompt = prompt('Введите пароль');
        if (passwordPrompt === null) {
        alert(cancelAlert);
        } else if (ADMIN_PASSWORD !== passwordPrompt){
            alert(accessDenied);
        } else if (ADMIN_PASSWORD === passwordPrompt) {
            alert(successAlert);
        }
}*/

/*
  ⚠️ ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах):
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом.

    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом
      "Ошибка ввода" и больше ничего не делает.
    - В случае верного ввода, последовательно проверить кол-во мест в группах,
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому,
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'

  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

let sharm = 15;
let hurgada = 25;
let taba = 6;

let clientReservation = +prompt ('Введите желаемое количество мест для бронирования');
if (Number.isNaN(clientReservation) || !Number.isInteger(clientReservation) || clientReservation <=0){
    alert('Ошибка ввода');
}

else if (clientReservation <= taba ) {
    let offerTaba = 'taba';
    let acceptOfferTaba = confirm(`есть место в ${offerTaba} желаете быть включенным в группу?`);
    console.log(acceptOfferTaba);
    if (acceptOfferTaba === false) {
        alert('Нам очень жаль, приходите еще!');

    } else if (acceptOfferTaba === true) {
        alert(`Приятного путешествия в группе ${offerTaba}`);
    }
}
else if (clientReservation <= sharm ) {
    let offerSharm= 'sharm';
    let acceptOfferSharm =confirm(`есть место в ${offerSharm} желаете быть включенным в группу?`);
    if (acceptOfferSharm === false) {
        alert('Нам очень жаль, приходите еще!');

    } else if (acceptOfferSharm === true) {
        alert(`Приятного путешествия в группе ${offerSharm}`);
    }
}
else if (clientReservation <= hurgada ) {
    let offerHurgada= 'hurgada';
    let acceptOfferHurgada =confirm(`есть место в ${offerHurgada} желаете быть включенным в группу?`);
    if (acceptOfferHurgada === false) {
        alert('Нам очень жаль, приходите еще!');

    } else if (acceptOfferHurgada === true) {
        alert(`Приятного путешествия в группе ${offerHurgada}`);
    }
}
else if (clientReservation > 25) {
    alert('Извините, столько мест нет ни в одной группе!');
}




