// Итератор = это...

const arr = [1, 2, 3, 4, 5]

// ===== for if под капотом: =====
// const iter = arr[Symbol.iterator]()

// while (true){
//     const current = iter.next()
//     if (current.done){
//         break;
//     }else{
//         console.log(current.value)
//     }
// }
// ========== ***** ==========

// for (let n of arr) {
//     console.log(n)
// }

// create iterator
// next() => isDone: true
//

const range = {
    from: 0,
    to: 5
}

for (let n of range) {
    console.log(n)
}

