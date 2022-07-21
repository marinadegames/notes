// IIFE - immediate invoked function expression
// Это нектороый function expression, который моментально выполняется

let result = []
// for (var i = 0; i < 5; i++) {
//     result.push(function() {
//         console.log(i)
//     })
// }



for(var i = 0; i < 5; i++) {
    (function() {
        var j = i
        result.push(function (){
            console.log(j)
        })
    })
}

result[4]()
result[2]()