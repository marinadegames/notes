function Cat(color, name) {
    this.color = color
    this.name = name
}

const cat = new Cat('black', 'Bob')
console.log(cat)

function myNew (constructor, ...args) {
    const obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    return constructor.apply(obj, args) || obj
}

const cat2 = myNew(Cat, 'white', 'Jack')
console.log(cat2)