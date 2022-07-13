// Типы данных:
// null
// undefined
// boolean
// number
// string
// Object - не примитив
// Symbol

// Оператор typeof
// console.log(typeof 0)
// console.log(typeof 'Hello')
// console.log(typeof undefined)
// console.log(typeof true)
// console.log(typeof {})
// console.log(typeof Symbol('JS'))

// Неточности
// console.log(typeof null) // неточность (это все равно null)
// console.log(typeof function(){}) // это все равно объект
// console.log(typeof NaN) // это число
// console.log(typeof 1/0) // NaN
// console.log(1/0) // Infinity
// console.log(undefined * 1) // NaN

// Приведение типов
// let language = 'JavaScript'
// if (language){ //  приводится к true, т.к. строчка существует
//     console.log('The best language is: ' + language)
// }

// false values:
// '', 0, null, undefined, NaN, false
// console.log(Boolean(NaN)) // false
// console.log(Boolean(false)) // false
// console.log(Boolean('some string')) // true
// console.log(Boolean('0')) // true, это не пустая строка
// console.log(Boolean(0)) // false
// console.log(Boolean([])) // true, приводится к true
// console.log(Boolean({})) // true, приводится к true
// console.log(Boolean(function(){})) // true, приводится к true

// Строки и числа
// console.log(1 + '2') // 12, это string
// console.log('' + 1 + 0) // 10, string
// console.log('' - 1 + 0) // -1, number
// console.log('3' * '8') // 24, number
// console.log(4 + 10 + 'px') // '14px', string
// console.log('px' + 5 + 10) // 'px510', string
// console.log('42' - 40) // 2, number
// console.log('42px' - 2) // NaN, т.е. невозможно преобразовать '42px'
// console.log(null + 2) // 2, null при приведении будет равен 0
// console.log(undefined + 42) // NaN, undefined не приводится к числу

// == vs ===
// console.log(2 == '2') // true, приводит к одному типу
// console.log(2 === '2') // false. не приводит, сравнение по значению
// console.log(undefined == null) // true
// console.log(undefined === null) // false
// console.log(undefined === null) // false
// console.log('0' == false) // true, приводит к типу
// console.log('0' === false) // false
// console.log(0 == 0) // true


// ===============
// console.log(false == '') // true
// console.log(false == []) // true
// console.log(false == {}) // false
// console.log('' == 0 ) // true
// console.log('' == [] ) // true
// console.log('' == {} ) // false
// console.log(0 == []) // true
// console.log(0 == {}) // false
// console.log(0 == null) // false
