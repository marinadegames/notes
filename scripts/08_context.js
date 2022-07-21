// не путать со sсope
// (scope указывает на видимость определенный переменных)
//
// context - определяет, как функция была вызвана.
// указывает на this

const person = {
    surname: 'Старк',
    knows: function(what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
    }
}
const john = {surname: 'Сноу'}
person.knows('все', 'Бран')
person.knows.call(john, 'ничего не', 'Джон')
person.knows.apply(john, ['ничего не', 'Джон'])
person.knows.bind(john, 'ничего не', 'Джон')()
// =======

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}

const Eugene = new Person('Eugene', 25)

