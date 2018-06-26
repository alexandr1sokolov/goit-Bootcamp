//========================конвертор валют

// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.

let fromCurrency = prompt('Please, choose currency you wish to convert (USD,EUR,UAH):').toUpperCase();
let toCurrency = prompt('Please, choose currency you wish to obtain(USD,EUR,UAH):').toUpperCase();
let summToConvert = prompt('Please, indicate summ you wish to convert');

function currencyCourses() {
    let USDUAH = 26.3;
    let USDEUR = 0.85;
    let EURUAH = 30.7;
    let EURUSD = 1.17;
    let UAHUSD = 0.038;
    let UAHEUR = 0.032;

    function currencyExchange(fromCurrency, toCurrency, summToConvert) {
        switch (fromCurrency + toCurrency) {
            case 'USDUAH':
                return (parseInt(summToConvert) * USDUAH).toFixed(2) + ' UAH';
            case 'EURUSD':
                return (parseInt(summToConvert) * EURUSD).toFixed(2) + ' USD';
            case 'EURUAH':
                return (parseInt(summToConvert) * EURUAH).toFixed(2) + ' UAH';
            case 'USDEUR':
                return (parseInt(summToConvert) * USDEUR).toFixed(2) + ' EUR';
            case 'UAHUSD':
                return (parseInt(summToConvert) * UAHUSD).toFixed(2) + ' USD';
            case 'UAHEUR':
                return (parseInt(summToConvert) * UAHEUR).toFixed(2) + ' EUR';
            default:
                return "Error";
        }
    }
    return currencyExchange;
}
let result = currencyCourses();
if (!summToConvert > 0) {
    alert('Error');
} else {
    alert(`You will get ${result(fromCurrency, toCurrency, summToConvert)}`);
}