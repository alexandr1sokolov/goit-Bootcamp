/*const COFFEE = {
    name: 'Latte',
    price:3,
    size: 'medium',
    sort: 'Arabica',
    isMilk: true,
    calories: 135,
    caffeine:true,
    syrup: ['caramel','chocolate','cherry'],
};

let user = {
    id: 123456789,
    private: {
        login: 'user',
        email: 'user@sky.net',
        tel: '123-456-789',
        'credit card': 123123123123,
        password: 'qwerty123',
    },
    public: {
        name: 'Vasya',
        last_name: 'Pupkin',
        sex: 'male',
        photos: [],
        likes: 0,
    },
};

console.log(user.id);
console.log(user.private);
console.log(user.private['credit card']);

function showValue(object, property, property1){
    return obj[property][property1];
}

console.log(user['private']['login']);*/


// ===== проверка наличия ключа в объекте

/*
const hotel = {
    name : "Resort Hotel",
    stars: 5,
};

let hasName = 'name' in hotel; // новый способ записи
let hasStars = hotel.hasOwnProperty('stars'); //старый способ записи
let hasPool = 'pool' in hotel;
//
console.log(hasName); // true
console.log(hasStars); // true
console.log(hasPool); // false
*/


// ================= записи функции в объекте
// const hotel = {
//     name : "Resort Hotel",
//     stars: 5,
//     capacity: 100,
//
//     getName: function () { // старый метод записи
//         return hotel.name;
//     },
//
//     getName() {
//         return hotel.name; // современный метод записи
//     },
//     getStars: () => hotel.stars, //стрелочный метод записи, пока не пользоваться
    //
    // changeCapacity(value) {
    //   hotel.capacity += value;
    // },
    // createKey(value) {
    //     hotel.address = value
    // }
// };


// // ====================================== Object.assign
// const first = {name: 'Tony'};
// const last = {lastName: 'Stark'};
// //
// // Object.assign(first, last); // мутация первого объекта в который вливается второй
// const copy = Object.assign({}, first, last); // создание одного нового объекта в который засовываются данные двух других
// // console.log(person);
// //
// console.log(first);
// console.log(last);
// console.log(copy);

// ============== обновление данных объекта
// const defaultSettings = {
//     name: "Mango",
//     age: 2,
//     status: "happy",
//     isActive: false,
//     isAdmin: false,
// };
//
// const updatedSettings = {
//     age: 3,
//     status: "cheerful",
//     isActive: true,
// };
//
// Object.assign(defaultSettings, updatedSettings);

//==================== Оператор spread ... три точки

// const a = {x: 1, y: 2};
// const b = {x: 0, z: 3};
//
// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}
//
// // То же самое используя оператор spread ...
// const c = { ...a, ...b };
//
// console.log(c); // {x: 0, y: 2, z: 3}