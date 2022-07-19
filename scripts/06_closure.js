// Замыкание - момент, когда функция имеет доступ
// к переменным из вышестоящего scope

function sayHelloTo(name) {
    const message = 'Hello, ' + name
    return function () {
        console.log(message)
    }
}

const helloToElina = sayHelloTo('Elina')
const helloToEugene = sayHelloTo('Eugene')


