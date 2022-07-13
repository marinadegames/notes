let num1 = 10 // num1.__proto__ -> Number.prototype
let num2 = 20// num1.__proto__ -> Number.prototype

let obj1 = {} //
let obj2 = {} //

Number.prototype.myMap = function() {
    return 'HELLO'
}


let exp1 = ({}).prototype === ({}).__proto__ // false
// будет false, т.е. prototype есть только у class и function

function foo1() {}
let exp2 = foo1.prototype === foo1.__proto__ // false
// будет false, т.к. prototype и __proto__ не равны между собой

function example() {}
function test() {}

let exp3 = example.__proto__ === test.__proto__ // true
// будет true, т.к. обе функции были созданы при помощи
// одного класса - new Function()
// т.е. ссылаются на один и тот же __proto__

let exp4 = example.prototype === test.prototype // false
// будет false, т.к. два объекта prototype не могут быть равны между собой

let Component = (props) => {
    return `<div>Hello, world!</div>`
}
let exp5 = Component.prototype === Object.prototype // false
// прототипы есть только у функций и классов.
// Но прототипа нет у стрелочных функций

let age = 18
let exp6 = age.prototype === Number.prototype // false
// прототипы есть только у функций и классов.

let exp7 = age.__proto__ === Number.prototype // true
// здесь age создается при помощи Number
// соответственно __proto__ переменной age - это Number

class Hacker {}
let exp8 = Hacker.__proto__ === Function.prototype // true
// будет true, т.к. class создается при помощи new Function

function hi() {}
let exp9 = hi.__proto__ === Function.prototype // true
// true, т.к. функция hi() была слоздана при помощи new Function

const count = 12
let exp10 = count.__proto__ === Number.prototype // true
// true, т.к. count (число) было слоздано при помощи new Number

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello(){alert(this.name)}
}
let shogun = new Samurai('Eugene')
let exp11 = shogun.__proto__.__proto__ === Samurai.prototype.__proto__ // true

let exp12 = shogun.__proto__.constructor.__proto__ === Samurai.prototype.constructor.__proto__ // true
let exp13 = shogun.__proto__.__proto__.__proto__ === Samurai.prototype.__proto__.__proto__ // true
