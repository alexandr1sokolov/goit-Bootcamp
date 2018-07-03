
 /* Класс, объекты которого описывают параметры гамбургера.
 */
class Hamburger {
    /**
     * @constructor
     * @param {String} size - Размер
     * @param {String} stuffing - Начинка
     */
    constructor(size, stuffing) {
        this.size = {
            size_small: {
                name: 'SIZE_SMALL',
                price: 30,
                calories: 50,
            },
            size_large: {
                name: 'SIZE_LARGE',
                price: 50,
                calories: 100,
            },
        };
        this.stuffing = {
            cheese: {
                price: 15,
                calories: 20,
            },
            salad: {
                price: 20,
                calories: 5,
            },
            meat: {
                price: 35,
                calories: 15,
            },
        };
        this.topping = {
            spices: {
                price: 10,
                calories: 0,
            },
            sauce: {
                price: 10,
                calories: 5,
            },
        };
        //OrderArr [[size0][stuffing1][topping2]]
        this.order =[[],[],[]];
        const SIZE_SMALL = this.size.size_small;
        const SIZE_LARGE = this.size.size_large;
        const STUFFING_CHEESE = this.stuffing.cheese;
        const STUFFING_SALAD = this.stuffing.salad;
        const STUFFING_MEAT = this.stuffing.meat;
        const TOPPING_SPICE = this.topping.spices;
        const TOPPING_SAUCE = this.topping.sauce;
    }

    /**
     * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
     * @param {String} topping - Тип добавки
     */
    addTopping(topping){
        if(!this.order.includes(topping)){
            return this.order[2].push(topping);
        } else {
            alert(`You can add only one topping of this type`)
        }
    }

    /**
     * Убрать topping, при условии, что она ранее была добавлена
     * @param {String} topping - Тип добавки
     */
    removeTopping(topping) {
        if(this.order.includes(topping)){
            let toppingIndex = this.order.indexOf(topping);
            this.order.splice(toppingIndex,1);
        } else {
            alert(`There is nothing to remove`);
        }
    }

    /**
     * Получить список toppings
     * @returns {Array} - Массив добавленных topping, содержит значения констант Hamburger.TOPPING_*
     *
     * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
     */
    getToppings() {}
}

