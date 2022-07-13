// Хинт - 'string' 'number' <=> 'default'

// const user = {}
//
// console.log(user) // string
// user + "" // string
//
// user + user //
// user - user //
// user / user //
// user * user //
// user > user //

// 1 - try to call -> Symbol.toPrimitive
// 2 - if hint === string -> toString() -> valueOf()
// 3 - if hint === number | default -> valueOf() -> toString()

// ========== EXAMPLES ==========

const user = {
    name: 'Eugene',
    age: 25,
}

user[Symbol.toPrimitive] = function (hint) {
    if (hint === 'string') {
        return `{name: '${this.name}'`
    }
    return this.age
}
console.log(user + 2)

