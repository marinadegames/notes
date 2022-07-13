// Descriptors - это...

// const user = {
//     name: 'Eugene'
// }
//
// Object.defineProperties(user, {
//     name: {
//         value: 'Elina',
//         configurable: true,
//         writable: false,
//         enumerable: true
//     },
//     age: {
//         value: 18,
//         configurable: true,
//         writable: true,
//         enumerable: true
//     }
// })

// const user = Object.create(Object.prototype, {
//     name: {
//         value: 'Alex',
//         writable: false, // можно ли перезаписать
//         enumerable: true, // итерируемость
//         configurable: true // изменение дескрипторов
//     }
// })

// изменение дестрипторов
// Object.defineProperty(user, 'name', {
//     value: 'Bob',
//     configurable: true,
//     writable: true
// })

