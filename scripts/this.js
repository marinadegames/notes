// this - это объект, который используется для доступа к информации в объектах
// (или по контексту)



let user = {
    name: 'Bob',
    age: 25,
    sayName() {
        return `Hello, my name is ${this.name}`
    }
}


user.sayName() // 'Bob'

console.log(user.sayName())