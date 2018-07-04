//=====================начальный вариант, окончательный вариант начинается с 93 строки==========
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  /* Класс, объекты которого описывают параметры гамбургера.
//  */
// class Hamburger {
//     /**
//      * @constructor
//      * @param {String} size - Размер
//      * @param {String} stuffing - Начинка
//      */
//     constructor(size, stuffing) {
//         this.size = {
//             size_small: {
//                 name: 'SIZE_SMALL',
//                 price: 30,
//                 calories: 50,
//             },
//             size_large: {
//                 name: 'SIZE_LARGE',
//                 price: 50,
//                 calories: 100,
//             },
//         };
//         this.stuffing = {
//             cheese: {
//                 price: 15,
//                 calories: 20,
//             },
//             salad: {
//                 price: 20,
//                 calories: 5,
//             },
//             meat: {
//                 price: 35,
//                 calories: 15,
//             },
//         };
//         this.topping = {
//             spices: {
//                 price: 10,
//                 calories: 0,
//             },
//             sauce: {
//                 price: 10,
//                 calories: 5,
//             },
//         };
//         //OrderArr [[size0][stuffing1][topping2]]
//         this.order =[[],[],[]];
//         const SIZE_SMALL = this.size.size_small;
//         const SIZE_LARGE = this.size.size_large;
//         const STUFFING_CHEESE = this.stuffing.cheese;
//         const STUFFING_SALAD = this.stuffing.salad;
//         const STUFFING_MEAT = this.stuffing.meat;
//         const TOPPING_SPICE = this.topping.spices;
//         const TOPPING_SAUCE = this.topping.sauce;
//     }
//
//     /**
//      * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//      * @param {String} topping - Тип добавки
//      */
//     addTopping(topping){
//         if(!this.order.includes(topping)){
//             return this.order[2].push(topping);
//         } else {
//             alert(`You can add only one topping of this type`)
//         }
//     }
//
//     /**
//      * Убрать topping, при условии, что она ранее была добавлена
//      * @param {String} topping - Тип добавки
//      */
//     removeTopping(topping) {
//         if(this.order.includes(topping)){
//             let toppingIndex = this.order.indexOf(topping);
//             this.order.splice(toppingIndex,1);
//         } else {
//             alert(`There is nothing to remove`);
//         }
//     }
//
//     /**
//      * Получить список toppings
//      * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
//      *
//      * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//      */
//     getToppings() {}
// }
//====================================================================================================================
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Hamburger {
    constructor(size,stuffing){
        this._size=size;
        this._stuffing=stuffing;
        this._topping=[];
    }
    addTopping(topping){
        if(!this._topping.includes(topping)){
            this._topping.push(topping);
        } else {
            alert(`You can add only one topping of this type`)
        }
    }
    removeTopping(topping){
        if(this._topping.includes(topping)){
            // let toppingIndex = this.topping.indexOf(topping);
            // this.topping.splice(toppingIndex,1);
            this._topping = this._topping.filter((element)=>{
                if(element!==topping){
                   return element;
                }
            });
        } else {
            alert(`Sorry, this topping cannot be removed because of its absence`);
        }
    }
    get getToppings(){
        return this._topping;
    }
    get getSize(){
        return this._size;
    }
    get getStuffing(){
        return this._stuffing;
    }
    calculatePrice(){
        let price1=Hamburger.SIZES[this.getSize].price;
        let price2=Hamburger.STUFFINGS[this.getStuffing].price;
        let price3= this.getToppings.map((strng)=>Hamburger.TOPPINGS[strng].price).reduce((acc,item)=> acc+item,0);
        return price1+price2+price3;

    }
    calculateCalories() {
        let calories1=Hamburger.SIZES[this.getSize].calories;
        let calories2=Hamburger.STUFFINGS[this.getStuffing].calories;
        let calories3= this.getToppings.map((strng)=>Hamburger.TOPPINGS[strng].price).reduce((acc,item)=> acc+item,0);
        return calories1+calories2+calories3;
    }
}
Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';
Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
Hamburger.SIZES = {
    [Hamburger.SIZE_SMALL]: {
        price: 30,
        calories: 50,
    },
    [Hamburger.SIZE_LARGE]: {
        price: 50,
        calories: 100,
    },
};
Hamburger.STUFFINGS = {
    [Hamburger.STUFFING_CHEESE]: {
        price: 15,
        calories: 20,
    },
    [Hamburger.STUFFING_SALAD]: {
        price: 20,
        calories: 5,
    },
    [Hamburger.STUFFING_MEAT]: {
        price: 35,
        calories: 15,
    },
};
Hamburger.TOPPINGS = {
    [Hamburger.TOPPING_SPICE]: {
        price: 10,
        calories: 0,
    },
    [Hamburger.TOPPING_SAUCE]: {
        price: 15,
        calories: 5,
    },
};

// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// console.log(hamburger);
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);
// hamburger.calculatePrice();
// hamburger.calculateCalories();

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1
