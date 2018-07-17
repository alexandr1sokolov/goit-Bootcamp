// =========================================================================Регулярки

// let pattern = /w/; // задаем внутри слэшей что искать
// const string = 'text windows win';
// // const  regV = /window/;
// console.log(string.match(pattern)); // выдает первое совпадение
// console.log(pattern.test(string)); // выдает буль false true

// =========================================================================  Флаги
// Флаги
// i - ігнорує регістр*
// g - глобальний погук а не перший збіг*
// m - багатостроковий пошук*

// let string = `Is that all there is?`;
// let reg =/is/;
// let reg2 = /is/i; //игнорировать регистр
// let reg3 =/is/g; //ищет все совпадения
// let reg4 =/is/ig; //ищет все без учета регистра
//
// console.log(string.match(reg4));

//================================================================ класссы
// let string = '12345, q5ww. www h - whwhwh',
//     reg = /\D\d/g;
// console.log(string.match(reg));

// Класи
// \d - numbers 0-9*
// \D - not numbers*
// \s - space*
// \S - not space*
// \w - word*
// \W - not word*
// \b - word boundary*
// \B - not word*

// let string = '12345, q5 wq w. www h - whwhwh',
//     reg = /\D\d/g,
//     reg2 = /\S\s/g,
//     reg3 = /\W/g,
//     reg4 = /\B\w\B/g;
// console.log(string.match(reg4));

//============================================================= границы
// let reg = /\d$/g;   $ - символ конца строки
// let reg = /^\d/g;   ^ - символ начала строки

// let string ='1 random text 5';
// let reg = /\d/g;
// console.log(string.match(reg));

//===============      . - любой символ
// let str = 'The car parked in the ga@age!.';
//
// let regV = /..age\./g;
// console.log(str.match(regV));

//==============================================================  + - один или больше
// let regV = /\d+/ig;
// let  str = '2597-7896-8974-3698';
// console.log(str.match(regV));

//============================================================  () - группа символов
// let str = 'The car is parked in the garage.';
// let regV = /\b(c|g|p)ar\b/g;
// console.log(str.match(regV));


//=========================================================== [] набор символов, в скобках указывать конкретные данные (символ или цифры)


// let str = 'The fat cat mat sat on the mat.';
// let reg = /([T|t]he\s)(fat|mat)/g;
//
// console.log(str.match(reg));

//===========================================================  ?<= перед котрым стоит
// let str = 'The fat cat mat sat on the mat.';
// let reg = /(?<=[T|t]he\s)(fat|mat)/g;
//
// console.log(str.match(reg));



//==================================================== проверка номера мобильного на соответствие
// \+\d{1,2}\(\d{3}\)\d{3}-\d{2}-\d{2}
//+38(095)958-98-78;
// +4(098)988-78-96;
// +87(032)654-87-96;

// [] - набір *
// - діапазон *
// ^ - в [] це виключення за межами набору це початок строки*
// {} - показник кількості*
// () - група символів*
// + - один або більше
//     ? - нуль або один
// * - нуль або більше
//     . - будь - який символ*
// $ - кінець строки*
// (?:) - виключення результату
// x(?=y) - відповідність
// x(?!y) - відплвідність якщо не йде у після х
// x|y - або
//     ?<=
//         ?<!

//=========================================================================================================================================================================

const mail = document.querySelector('#mail');
const pass = document.querySelector('#pass');
const register = document.querySelector('#register');
const page = document.querySelector('.page');
const mailR = document.querySelector('.mailR');
const passwordR = document.querySelector('.passwordR');
const final = document.querySelector('.final');
//

register.addEventListener('click',getResult);
function getResult (){
    let mailResult=false;
    let passResult=false;
    getMail1 ();
    function getMail1 (){
        let mailValidity= /(\.com$|\.ua$|\.net$)/;
        let mailStatus = mailValidity.test(mail.value);
        console.log(mailStatus);
        if (mailStatus){
            mailR.innerHTML=`<p>"Mail correct"</p>`;
            mailResult=true;
        }
        else {
            mailR.innerHTML=`<p>"Mail error"</p>`;
        }
    }
    getPass();
    function getPass(){
        console.log('yes');
        let passValidity1 = /[A-Z]/;
        console.log(passValidity1);
        let passValidity1Test =passValidity1.test(pass.value);
        console.log(passValidity1Test);
        let passValidity2 = /\d+/g;
        let passValidity2Test =passValidity2.test(pass.value);
        let passValidity3Test = pass.value.length<16 && pass.value.length>4;
        if (passValidity1Test&&passValidity2Test&&passValidity3Test){
            page.classList.add('hidePage');
            passResult=true;
            passwordR.innerHTML=`<p>"Password correct"</p>`;
        }
        else {
            passwordR.innerHTML=`<p>"Password error"</p>`;
        }
    }
    if (mailResult&&passResult){
        final.innerHTML=`<p>"Congratulations, you have been successfully registered"</p>`;
    }

}


//event.preventDefault();


// let mailValidity= /(\.com$|\.ua$|\.net$)/;
// let mailStatus = mailValidity.test(mail.value);
// console.log(mailStatus);
// if (mailStatus){
//     result.innerHTML=`<p>"Mail correct"</p>`;
// }
// else if{
//     result.innerHTML=`<p>"Mail error"</p>`;
// }
//
//
//
// if (mailStatus){
//     getPass();
//     function getPass(){
//         console.log('yes');
//         let passValidity1 = /([A-Z])(\d+)/g;
//         console.log(passValidity1);
//         let passValidity1Test =passValidity1.test(pass.value);
//         console.log(passValidity1Test);
//         let passValidity2Test = pass.value.length<16 && pass.value.length>4;
//         if (passValidity1Test&&passValidity2Test){
//             page.classList.add('hidePage');
//             result.innerHTML=`<p>"Congratulations, you have been successfully registered"</p>`;
//         }
//         else {
//             result.innerHTML=`<p>"Password error"</p>`;
//         }
//     }
// }