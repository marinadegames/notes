// // SCOPE
//
// let d = 1000
// function funcA() {
//     let a = 1
//
//     function funcB() {
//         let b = 2
//
//         function funcC() {
//             let c = 3
//             console.log('func C: ', a,b,c, d)
//         }
//
//         funcC()
//         console.log('func B: ', a, b)
//     }
//
//     funcB()
//     console.log('func A: ', a)
// }
//
// funcA()
//
// {
//     var vvv = 1000 // у var нет блочной области видимости
// }
// for (let i = 0; i < 999 ; i++) {
//
// }
// console.log(i)
// console.log(vvv)