// Замыкание - момент, когда функция имеет доступ
// к переменным из вышестоящего scope

function sayHelloTo(name) {
    const message = 'Hello, ' + name

    return function () {
        console.log(message)
    }
}

// const sayHelloToEugene = sayHelloTo("Eugene")
// const sayHelloToElina = sayHelloTo("Elina")
// sayHelloTo('Eugene')()
// sayHelloToElina()

function createFrameworkManager() {
    const fw = ['Angular', 'React']

    return {
        print: function() {
            console.log(fw.join(' '))
        },
        add: function (framework){
            fw.push(framework)
        }
    }
}

// const manager = createFrameworkManager()
// console.log(manager)
// manager.print()
// manager.add('Vue.js')
// manager.print()


// ====================================
const fib = [1,2,3,5,8,13]

for (let i = 0; i <fib.length ; i++) {
    setTimeout(() => {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}
