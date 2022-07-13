const id = Symbol('id')

const user = {}
user[id] = 1
user.id = 2

for(let k in user){
    console.table(k)
}

const global = Symbol.for('global')
const globalAgain = Symbol.for('global')

console.log(globalAgain === global)
console.log(Symbol.keyFor(global))
console.log(Symbol.keyFor(id))




