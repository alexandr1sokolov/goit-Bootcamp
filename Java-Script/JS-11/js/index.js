//=================================================MODULE 11===============================================

// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);
// const temp = Handlebars.compile(source);
// // console.log(temp);
// const context = {
//     "city": "London",
//     "street": "Baker Street",
//     "number": "221B"
// };
//
// const markup = temp(context);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

//====================================================================================================================


// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };
// const source = document.querySelector('#example-template').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(data);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;
//=====================================================================================
// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
// };
//
// const source = document.querySelector('#menu').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(menuData);
// const menu = document.querySelector('#menu-container');
// menu.innerHTML = markup;
//=====================================================================================
// const data = {
// //     animals:[
// //         {name: "cow", noise: "moooo"},
// //         {name: "cat", noise: "meow"},
// //         {name: "fish", noise: ""},
// //         {name: "farmer", noise: "Get off my property!"}
// //     ]
// // };
// // const source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
// // const template = Handlebars.compile(source);
// // const result = template(data);
// // const container = document.querySelector('.content-placeholder');
// // container.innerHTML = result;
//=====================================================================================

// const gallery = {
//     title: 'Gallery',
//     items: [
//         {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
//         {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
//         {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
//         {img: 'https://placeimg.com/300/150/people', text: 'people'},
//         {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
//         {img: 'https://placeimg.com/300/150/any', text: 'random'}
//     ]
// };
//
// const source = document.querySelector('#gallery').innerHTML.trim();
// const template = Handlebars.compile(source);
// const markup = template(gallery);
// const container = document.querySelector('.gallery-content');
// container.innerHTML = markup;
//=====================================================================================
let data = {
    phones: [
        {
            id: "1",
            categoryId: "1",
            name: "Apple iPhone 5c",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 823,
            image: "uploads/iphone5c-selection-hero-2013.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "2",
            categoryId: "1",
            name: "Apple iPhone 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 953,
            image: "uploads/51u6y9Rm8QL._SY300_.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "3",
            categoryId: "4",
            name: "Lenovo A6000",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 764,
            image: "uploads/_35%20(1).JPG",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "4",
            categoryId: "5",
            name: "Nokia Lumia 1520",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/Lumia1520-Front-Back-png.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "5",
            categoryId: "3",
            name: "HTC One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "6",
            categoryId: "2",
            name: "Samsung Galaxy S6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        }
    ]
};

const source = document.querySelector('#phones').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(data);
const container = document.querySelector('.phones-container');
container.innerHTML = markup;

const btn = document.querySelectorAll('.module-card-button');
let btnArr =Array.from(btn);
const open = document.querySelectorAll('.open');
let openArr = Array.from(open);
container.addEventListener('click',buttonHandler);

function buttonHandler({target}){
    const nodeName = target.nodeName;
    if (nodeName !== 'BUTTON') return;

    btnArr.map((el, index) => {
        if (target === el) {
            openArr[index].classList.toggle('hide');
            target.textContent = (target.textContent === 'See More') ? 'See Less' : 'See More';
        }
    });
}

// btn.forEach((el, index)=>{
//     if (el === target){
//         open[index].classList.remove('hide');
//     } else {
//         // open.forEach((el) => el.classList.add('hide'));
//     }
// })













// function hideOrShow(event) {
//
//     btnArr.some((el, idx) => {
//         if (event.target === el) {
//             hideArr[idx].classList.toggle('show')
//         }
//     })
// }


// function showHidden(){
//  open.forEach((el) => el.classList.add('hide'));
// }
// const cardContainer = document.querySelector('.container');
// cardContainer.innerHTML = result;
//
// // click event listeners
// cardContainer.addEventListener('click', (e) => {
//     e.target.classList.contains('module-card-button') ?
//         (e.target.previousElementSibling.classList.toggle('hide'),
//                 (e.target.textContent = (e.target.textContent === 'See More') ? 'See Less' : 'See More')
//         ) : null;
//     e.stopPropagation();
// });










const mail = document.querySelector('#mail');
// const pass = document.querySelector('#pass');
// const register = document.querySelector('#register');
// const page = document.querySelector('.page');
// const result = document.querySelector('.result');
// const final = document.querySelector('.final');
// //
//
// register.addEventListener('click',getResult);
// function getResult (){
//     let mailResult=false;
//     let passResult=false;
//     getMail1 ();
//     function getMail1 (){
//         let mailValidity= /(\.com$|\.ua$|\.net$)/;
//         let mailStatus = mailValidity.test(mail.value);
//         console.log(mailStatus);
//         if (mailStatus){
//             result.append=`<p>"Mail correct"</p>`;
//             mailResult=true;
//         }
//         else {
//             result.append=`<p>"Mail error"</p>`;
//         }
//     }
//     getPass();
//     function getPass(){
//         console.log('yes');
//         let passValidity1 = /[A-Z]/;
//         console.log(passValidity1);
//         let passValidity1Test =passValidity1.test(pass.value);
//         console.log(passValidity1Test);
//         let passValidity2 = /\d+/g;
//         let passValidity2Test =passValidity2.test(pass.value);
//         let passValidity3Test = pass.value.length<16 && pass.value.length>4;
//         if (passValidity1Test&&passValidity2Test&&passValidity3Test){
//             page.classList.add('hidePage');
//             passResult=true;
//             result.innerHTML=`<p>"Password correct"</p>`;
//         }
//         else {
//             result.innerHTML=`<p>"Password error"</p>`;
//         }
//     }
//     if (mailResult&&passResult){
//         final.innerHTML=`<p>"Congratulations, you have been successfully registered"</p>`;
//     }
//
// }
//
//
// //event.preventDefault();
//
//
// // let mailValidity= /(\.com$|\.ua$|\.net$)/;
// // let mailStatus = mailValidity.test(mail.value);
// // console.log(mailStatus);
// // if (mailStatus){
// //     result.innerHTML=`<p>"Mail correct"</p>`;
// // }
// // else if{
// //     result.innerHTML=`<p>"Mail error"</p>`;
// // }
// //
// //
// //
// // if (mailStatus){
// //     getPass();
// //     function getPass(){
// //         console.log('yes');
// //         let passValidity1 = /([A-Z])(\d+)/g;
// //         console.log(passValidity1);
// //         let passValidity1Test =passValidity1.test(pass.value);
// //         console.log(passValidity1Test);
// //         let passValidity2Test = pass.value.length<16 && pass.value.length>4;
// //         if (passValidity1Test&&passValidity2Test){
// //             page.classList.add('hidePage');
// //             result.innerHTML=`<p>"Congratulations, you have been successfully registered"</p>`;
// //         }
// //         else {
// //             result.innerHTML=`<p>"Password error"</p>`;
// //         }
// //     }
// // }


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
