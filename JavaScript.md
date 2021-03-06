# JavaScript

# `Типы данных`

### Примитивы:

* `number` \\ 1, 5.65
* `string` \\ 'hello'
* `boolean` \\ true, false
* `null` \\ null
* `undefined` \\ undefined -
* `symbol` \\ Symbol(id)
* `BigInt` \\ 1234567890123456789012345678901234567890n

### Ссылочный тип:

* `Object`  
  Оператор `typeof` возвращает тип данных. Результатом `typeof` является строка, содержащая тип:

```JS
typeof undefined    // undefined
typeof 0    // number
typeof 1n   // bigint
typeof true   // boolean
typeof 'hello'   // string
typeof Symbol()   // symbol
typeof {}   // object
typeof null   // object - признанная ошибка, которая сохраняется для совместимости (null - это не объект, а тип данных)
typeof function () {
}   // function - это подвид объекта, но typeof выделяет функции отдельно (на практике для легкого определения)
typeof typeof number // string, т.к. оператор typeof вовзращает тип в виде строки
```

# `Array methods`

* `.map()` - метод, вызывающий переданную ей функцию для каждого элемента массива и возвращает **новый массив**
  результатов этой функции

```JS 
let arr = [1, 2, 3, 4, 5]
let newArray = arr.map( i => i * 2 )    // result: [ 2, 4, 6, 8, 10 ]
```

* `.filter()` - метод, вызывающий переданную ей функцию для каждого элемента массива, и возвращает **новый массив**, в
  который войдут только те элементы, которые функция вернула **true**:

```JS
let arr = [10, 10, 20, 20, 10, 30, 40, 50]
let filteredArr = arr.filter(n => n === 10)
console.log(filteredArr) // [10, 10, 10]
```

* `.sort()` - метод, сортирующий массив на месте

```JS
let arr = [1, 2, 7, 9, 4, 5, 3, 6, 8, 0] // новый массивчик, с неупорядоченными числами 
arr.sort() // вызываем метод сортировки, сортирует на месте, мутирует
console.log(arr) // ВЫВОД: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

* `.push()` - добавляет элементы в конец

```JS
let arr = [1, 2, 3]
arr.push('ELEMENT') // пушим ELEMENT  в конец массива, мутируем
console.log(arr) // ВЫВОД: [1, 2, 3, "ELEMENT"]
```

* `.pop()` - извлекает элемент из конца

```JS
let arr = [1, 2, 3]
let popNumber = arr.pop() // извлекаем последний элемент массивчика и сохраняем в переменной popNumber
console.log(arr) // ВЫВОД: [1, 2]
console.log(popNumber) // ВЫВОД: 3
```

* `.shift()` - извлекает элемент из начала

```JS
let arr = [1, 2, 3]
let shiftNumber = arr.shift() // извлекаем первый элемент массивчика и сохраняем в переменной shiftNumber
console.log(arr) // ВЫВОД: [2, 3]
console.log(shiftNumber) // ВЫВОД: 1
```

* `.unshift()` - добавляет элементы в начало

```JS
let arr = [1, 2, 3]
arr.unshift('ELEMENT') // добавляем ELEMENT  в начало массивчика
console.log(arr) // ВЫВОД: ["ELEMENT", 1, 2, 3]
```  

# `addEventListener` - зачем нужен и у кого он есть

Метод `addEventListener` нужен для регистрации определенного отработчика события.

* Новый обработчик события **не переписывает** уже существующие обработчики событий
* Мы можем добавлять **сколько угодно** обработчиков событий одного типа ('click')
* Метод **addEventListener** мы можем повесить **на что угодно**: на button, div и даже на окно.
  `Синтаксис:`:

```JS
element.addEventListener(event, function () {
}, useCapture);
```

# `Методы функций call(), apply() и bind()`

В языке JS функции - это тоже объекты, и поэтому у них тоже есть методы:

* `.call()` - это метод, который вызывает функцию с указанным значением **this**:

```JS
// создаем объект:
let man = {
    age: 32
}

// пишем функцию:
function showAge() {
    console.log(this.age) // если мы вызовем функцию без call, то ничего не получится
}

// вызываем функцию:
showAge.call(man)  // ВЫВОД: 33 

```  

* `.aplly()` - это метод, который работат аналогичсно методу `call`, но принимает массив аргумента вместо списка:

```JS
// создаем объект:
let man = {
    name: 'Eugene',
    age: 18
}

// пишем функцию:
function showMan(sex, city) { // обратите внимание, функция принимает аргументы
    console.log(this.name + ' | ' + this.age + ' | ' + sex + ' | ' + city)
}

// вызов функции:
showMan.apply(man, ['man', 'Minsk']) // ВЫВОД: "Eugene | 18 | man | Minsk"
```  

* `.bind()` - просто **'байндит'** указанную функцию, не вызывая ее:

```JS
let user = {
    name: "Eugene"
};

function func() {
    console.log(this.name);
}

let funcName = func.bind(user);
funcName(); // ВЫВОД: 'Eugene'
```  

# `async | defer`

`async` и `defer` - это атрибуты HTML-тега **script**.  
Современные сайты содержать в себе тяжелые скрипты (тяжелее HTML документа), и при отрисовке DOM, когда очередь доходит
до тега **script**, он не будет продолжать строить **DOM**, пока скрипт не загрузится и не отработает.

#### Какие из этого следуют минусы:

* Скрипты не видят DOM-элементы ниже себя
* если вверху страницы "тяжелый" скрипт, он блокирует загрузку страницы, пока скрипт не загрузится и не отработает

```JS
<p>=== содержимое перед скриптом ===</p>
<script src='...'></script>
<!-- внизу не отобразится, пока скрипт не загрузится -->
<p>=== соедржимое после скрипта ===</p>

```  

Можно конечно поставить все скрипты внизу страницы, но если HTML-страница длинная - может быть ощутимая задержка.  
Но есть два атрибута, которые решают эту проблему: <span style='color: red'>async</span> и <span style='color: red'>
defer</span>.

### Атрибут `defer` говорит браузеру:

* строй DOM-дерево дальше, не жди меня
* я пока что буду загружаться в фоновом режиме
* когда DOM-дерево построится - я запущусь и отработаю (но до события `DOMContentLoaded`)

<small>`DOMContentLoaded` - это событие: когда браузер полностью загрузил HTML и было построено DOM-дерево, но картинки
например могут быть еще не загружены.</small>

### Атрибут `async` говорит браузеру:

* я ни от кого не зависим
* не буду ждать никого, как загружусь - так сразу и отработаю
* я не жду другие `async` скрипты, а другие `async` скрипты не будут ждать меня

Источник: [learn.javascript.ru](https://learn.javascript.ru/script-async-defer#async)

# `stopPropagation`

`.stopPropagation()` - это метод, позволящий нам остановить всплытие событий. Всплытие идет от элемента прямо наверх. По
умолчанию событие будет всплывать до тега `html`, затем до `document`, а потом и вовсем до `window`, вызывая все
обработчики на своем пути. Но это можно остановить при помощи `.stopPropagation()`.

```JS
<body onclick="alert(`сюда всплытие не дойдёт`)">
    <button onclick="event.stopPropagation()">Click me!</button>
</body>
```  

В каких случаях не стоит использовать это метод, пример:

* **Представим ситуацию:** мы делаем вложенное меню. Каждое подменю обрабатывает клики на своих элементах и делает для
  них `stopPropagation`, чтобы не срабатывало внешнее меню
* Потом мы решили отслеживать все клики для статистики при помощи `document.addEventListener('click'…)`
* Наша аналитика не будет работать над областью, где клики прекращаются `stopPropagation`, и получится **"мертвая
  зона"**.

ИСТОЧНИК: [`learn.javascript.ru`](https://learn.javascript.ru/bubbling-and-capturing)

# Class

#### `class` - в JavaScript это надстройка над функцией.

Т.е. **class** в JS по своей сущности - это функция (у него есть **call**, **apply**, **bind**).
> "В ООП, **class** – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы)." - **Википедия**.  
Классы появились в JS в __ECMAScript 2015__. Это **синтаксический сахар**. По своей сущности это всего лишь синтаксическая надстройка над функциями и объектами.

## Синтаксис:

```JS
class ClassName {
    // для того, чтобы добавить какую-то логику, мы вызываем метод constructor
    constructor() {
        // ... описываем объект
    }

    exampleMethod() {
    } // здесь мы указываем методы класса
}
```  

#### `constructor` - это метод, который служит для создания и инициализации объектов, созданных при помощи __class__.

> Если мы при создании класса не передаем в него __constructor__, то по дефолту вызывается пустая функция, которая ничего не принимает и ничего не делает.

## Создание класса:

```JS
class Test { // название класса принято писать с большой буквы
    constructor(name, age) { // описываем структуру будущего экземпляра
        this.name = name
        this.age = age
    }

    // описывем методы класса
    sayName() {
        console.log(`My name is ${this.name}`)
    }

    arrowFunc = () => {
    } // стрелочные функции в классах никогда не уходят в прототип. Это сделано для того, чтобы не потерять контекст
}
```

## Создание экземпляра класса

#### `Экземпляр класса` - это описание какого-либо объекта в памяти.

Термины `экземпляр класса` и `объект` - взаимозаменяемы.

Для того чтобы создать **экземпляр класса**, мы используем ключевое слово `new`:

```JS
const exampleObj = new Test('Eugene', 15)
```   

#### `new` - это ключевое слово для создания `экземпляра класса`. При использовании `new` на выходе мы получаем объект, который является экземпляром класса. Когда мы вызываем **
new**, экземпляр получает ссылку на __prototype__ класса (родителя).

Мы можем в наш класс добавить функциональности при помощи ключевого слова `extends`.

#### `extends` - en. 'расширяет' - ключевое слово, которое используется для создания дочернего класса для уже существующего класса или встроенного объекта.

```JS
class Test2 extends Test { // расширяем класс Test (Test - это родитель для Test2)
    // если мы расширяем родительский класс, то мы обязательно должны прописать в конструторе super
    constructor(name, age, city) {
        super(name, age) // !!! ВСЕГДА В НАЧАЛЕ КОНСТРУТОРА !!!
        this.city = city // расширили класс
    }
}
```  

### Что такое `super`?

* `super` появляется только при наследовании (когда мы расширяем класс). Это ключевое слово используется для вызова
  функций, принадлежащих родителю объекта. Его нужно обязательно писать, если это расширяемый класс.
* `Расширяемый класс` теряет способность создавать экземпляр объекта (лишение такой возможности сделано в целях **наследования**).
* `Наследование` - один из принципов ООП, в JS - это создание новых «классов» на основе существующих (прототипное
  наследование).
* `Цепочка прототипов` - это своего рода реализация наследования: поиск происходит по всей цепочке прототипов, пока не
  упрется в null.

### Источники:

* [learn.javascript.ru](https://learn.javascript.ru/classes)
* [Tproger](https://tproger.ru/articles/nasledovanie-v-javascript-osnovnye-pravila/#part9)
* [developer.mozilla.org](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/class)

# Типизация классов Typescript

### Терминология

* `interface` - сущность, которая указывает, какой структуры должен быть класс, чтобы удовлетворить нашему интерфейсу.
* `implements` - **"имплементирует"** - реализует некоторый интерфейс
* `Модификаторы доступа` позволяют сокрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию.
  В TypeScript три модификатора: `public`, `protected` и `private`.

```Typescript
// === TYPESCRIPT ===

interface TestType { // создали интерфейс
    name: string
    age: number
}

class Test implements TestType { // класс Test имплементирует интерфейс TestType
    // перед constructor типизируем входящие переменные
    name: string
    age: number

    // затем описываем контруктор
    constructor(name: string, age: number) { // здесь тоже типизируем
        this.name = name
        this.age = age
    }
} 
```     


# IndexedDB  
`IndexedDB` - это встренная база данных в браузере, более мощная, чем localStorage.  
* Можно хранить любые ключи\значения (почти)
* Поддерживает транзакции для надежности
* Можно хранить больше данных, чем в localStorage
* noSQL

### Открыть базу данных:  
```JS
  let openRequest = indexedDB.open(name, version)
// name - название баззы данных.
// version - версия бд, положительное число.

openRequest.onupgradeneeded = function() {
  // срабатывает, если на клиенте нет базы данных
  // ...выполнить инициализацию...
};

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
  let db = openRequest.result;
  // продолжить работу с базой данных, используя объект db
};
```

#### ИСТОЧНИК: [learn.javascript.ru](https://learn.javascript.ru/indexeddb)


# Пару задачек на `__proto__` и `prototype`  

```js
let exp1 = ({}).prototype === ({}).__proto__ // false
// будет false, т.е. prototype есть только у class и function

function foo1() {}
let exp2 = foo1.prototype === foo1.__proto__ // false
// будет false, т.к. prototype и __proto__ не равны между собой

function example() {}
function test() {}

let exp3 = example.__proto__ === test.__proto__ // true
// будет true, т.к. обе функции были созданы при помощи
// одного класса - new Function()
// т.е. ссылаются на один и тот же __proto__

let exp4 = example.prototype === test.prototype // false
// будет false, т.к. два объекта prototype не могут быть равны между собой

let Component = (props) => {
    return `<div>Hello, world!</div>`
}
let exp5 = Component.prototype === Object.prototype // false
// прототипы есть только у функций и классов.
// Но прототипа нет у стрелочных функций

let age = 18
let exp6 = age.prototype === Number.prototype // false
// прототипы есть только у функций и классов.

let exp7 = age.__proto__ === Number.prototype // true
// здесь age создается при помощи Number
// соответственно __proto__ переменной age - это Number

class Hacker {}
let exp8 = Hacker.__proto__ === Function.prototype // true
// будет true, т.к. class создается при помощи new Function

function hi() {}
let exp9 = hi.__proto__ === Function.prototype // true
// true, т.к. функция hi() была слоздана при помощи new Function

const count = 12
let exp10 = count.__proto__ === Number.prototype // true
// true, т.к. count (число) было слоздано при помощи new Number

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello(){alert(this.name)}
}
let shogun = new Samurai('Eugene')
let exp11 = shogun.__proto__.__proto__ === Samurai.prototype.__proto__ // true

let exp12 = shogun.__proto__.constructor.__proto__ === Samurai.prototype.constructor.__proto__ // true
let exp13 = shogun.__proto__.__proto__.__proto__ === Samurai.prototype.__proto__.__proto__ // true
```