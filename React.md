# React, Redux and more #

## This page about React, Redux and more

# `React`

`React` - это **библиотека** для создания пользовательских интерфейсов (**не фреймворк!**). React нужен для эффективной
отрисовки приложения, и для этого у него есть `**Virtual DOM**`. Virtual DOM сравнивается с DOM-ом браузера, и если он
находи различия - происходит замена узла, а не всей страницы.

# `Virtual DOM`

`Virtual DOM` - 'облегченный' DOM - это набор техник\алгоритмов, которые позволяют нам улучшить производительность,
избегая работы с DOM. Virtual DOM хранится в памяти компьютера и синхронизируется с настоящим DOM при помощи **React
DOM**.  
Процесс сравнения Virtual DOM c DOM называется **согласованием** (**reconciliation**).

# `Component`

`Component` - компонента - это функция, принимающая **props** и возвращающая **jsx** разметку. Состоите из двух частей:
верхняя (над return) и нижняя (внутри return).

# `Hooks`

`Хуки` - это функции, с помощью которых вы можете «подцепиться» к состоянию и методам жизненного цикла React из
функциональных компонентов. Хуки не работают внутри классов — они дают вам возможность использовать React без классов.

`Правила хуков:`

* использовать хуки можно только на верхнем уровне
* нельзя вызывать внутри циклов, условных операторов и вложенных функций
* используются только в функциональных компонентах

### `Хуки:`

* `useState` - хук состояния. Хранит в себе состояние и функцию для изменения состояния.

```JS
const [count, setCount] = useState(10)
```

* `useEffect` - дает возможность выполнить побочные эффекты в функциональных компонентах и перехватить изменения. Есть
  зависимости, если зависимости не указываем, то функция отработает один раз при отрисовке компоненты.

```typescript jsx
useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
});

```

* `useContext` - позволяет подписывать на контекст React
* `useReducer` - позволяет управлять сложным состоянием компонентов
* `useCallback` - управление функциями обратного вызова
* `useMemo` - управление 'мемоизированными' значениями

# `Redux`

**`Redux`** - менеджер состояний - библиотека, предназначенная для управления состоянием приложения.

* используются для **средних** и **крупных** приложений
* можно и без него
* эффективное управление **state**
* **простым** приложениям он не нужен

### **`Использование:`**

`Action` - описывает действие (т.е. что будем делать) - объект, который имеет как минимум свойство **type**:

```typescript
const AddTaskAction: ExampleType = {
    type: 'ADD_TASK',
//    может быть что-то еще
    newText: 'Какая-то строка',
}
```  

`Action Creators` - создатель действия - это функции, которые создают действия. Могут принимать аргументы.

```typescript
    const AddTaskActionCreator = (newText: string): ExampleType => {
    return {type: 'ADD_TASK', newText}
}
```  

`Reducer` - это **чистая** функция, принимающая **state** и **action** и возвращающая преобразованную копию **state**.  
Обращаю внимание, что **reducer** - это _**чистая функция**_, а следовательно она _**детерминирована**_, _**
идемпотентна**_ и _**имутабельна**_.

```typescript
export const ExampleReducer = (state = initState, action: ActionType): ExampleTypeState => { // к нам приходит state и action
    switch (action.type) { // в каждом action сидит type. Их и смотрим
        case 'ADD_TASK':  // если type соотв. action.type
            return {...state, tasks: action.task} // это пример. Возвращает имзенененную копию state
        default:
            return state
    }
}
```  

`Store` - это объект-хранилище.

* Содержит состояние приложения
* отображает их через **getState()**
* обновляется через **dispatch()**
* можно уведомлять через **subscriber()**

`combineReducer` - возвращает "большую" функцию - метод, позволяющий нам создавать большой редюсер для всего состояния
сразу, разбивая его на отдельные модули.

**Источники:**

* [`habr.com`](https://habr.com/ru/post/498860/)
* [`redux-ru.js.org`](https://redux-ru.js.org/#documentation)
* [`redux.js.org`](https://redux.js.org/introduction/getting-started)

# `React-redux`

`React-redux` - это пакет для подключения `react` к `redux`. После установки все наше дерево компонентов в react имеет
доступ к **store** и может подписываться на него. Для того, чтобы **store** можно было использовать в компонентах,
у `react-redux` есть специальный метод `Provider`:

```typescript jsx
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
```  

После этого в дочерних компонентах мы можем использовать данные из `store`.  
Способ "взятия" данных зависит от компоненты:

* В __функциональных__ компонентах мы используем хук `useSelector`, и для отправки **action** используем `useDispatch`
* В __классовых__ компонентах мы используем `connect()`, `mapStateToProps` и `mapDispatchToProps`.

![table-connect](./assets/about_connect.png)

# `HOC`

`HOC` - **High order component** - компонента высшего порядка - это функция, которая принимает компоненту и возвращает
новую компоненту. Задача `HOC` - принять однку компоненту, а вернуть другую, наделенную какими-то способностями.

![HOC1](./assets/HOC1.png)

# `Redux-thunk`

`Redux-thunk` - **"санки"** - это функция, позволяющая выполнять несколько асинхронных операций. Её можно диспатчить
в **store**, где она сама потом диспатчит в него **action**.  
"Санки" нужны, чтобы избежать общения **UI** и **DAL**, а также чтобы передавать несколько **action** сразу и выполнять
асинхронные операции.

### Установка:

```shell
yarn add redux-thunk
```  

### Применение:

1. `applyMiddleware` - это предложенный **redux** способ добавления усилителей (т.е. различных **Middleware**).  
   `Middleware` - это всегда функция, которая всегда возвращает функцию (если нет цели прервать цепочку вызовов).  
   В файле с нашим **redux-store** мы ипортируем **applyMiddleware** из **redux** и наш промежуточный уровень
    - `thunkMiddleware`:

```js
import {createStore, combineReducer, applyMiddleware} from 'redux'
// обратите внимание, что applyMiddleware импортируется из redux
import thunkMiddleware from 'redux-thunk'
```  

2. Добавляем функцию **applyMiddleware** с параметром **thunkMiddleware** туда, где мы объявляем **store** с **
   редюсерами** (т.е. параметром к функции **createStore**):

```JS
let store = createStore(reducers, applyMiddleware(thunkMiddleware))
// передали в createStore вторым параметром applyMiddleware(thunkMiddlware)
```  

3. В файле с целевым редюсером (например **tasksReducer**) создаем **thunkCreator** (по аналогии с **actionCreator**):  
   <small>Пример написан с использованием typescirt</small>

```Typescript
const getTasksThunkCreator = (todolistId: string) => { // создаем наш thunk creator
    return (dispatch: Dispatch) => {
        todolistAPI.getTasks(todolistId) // запрос через API по ID тудулиста
            .then(resp => { // обработка промиса
                const tasks = resp.data.items // таски с сервера
                const action = setTasksAC(tasks, todolistId) // action
                dispatch(action) // диспатчим экшн
            })
    }
}
```  

4. После этого в нашей компоненте мы используем эту "САНКУ":  
   <small>Пример написан с использованием функциональной компоненты и с использование TypeScript</small>

```typescript jsx
type PropsType = {
    todolistId: string
}
export const ExampleComponentTodolist = (props: PropsType) => {
    const dispatch = useDispatch() // используем диспатч

    // всю асинхронные действия функц.компоненты мы выполняем в useEffect:
    useEffect(() => {
        dispatch(getTasksThunkCreator(props.todolistId))
        // диспатчим санку с id нашего тудулиста
    }, [props.todolistId]) // не забываем указывать зависимости для useEffect

    return (
        <div>
            ...
            Отрисовка
            JSX
            ...
        </div>
    )
}
```  

**Источники:**

* [`it-shpora`](http://it-shpora.pp.ua/thunk-redux-%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-%D0%B7%D0%B0%D1%87%D0%B5%D0%BC-%D0%BA%D0%B0%D0%BA-%D0%B2%D0%BA%D0%BB%D1%8E%D1%87%D0%B8%D1%82%D1%8C-%D0%B8-%D0%BA%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB/)
* [`habr.com`](https://habr.com/ru/post/483314/)
* [`digitalocean.com`](https://www.digitalocean.com/community/tutorials/redux-redux-thunk-ru)

# Reconciliation

`Reconciliation` - **СОГЛАСОВАНИЕ** - механизм, работающий в паре с __Virtual DOM__. Когда состояние меняется, этот
механизм проходит по virtual dom, определяя, какие узлы изменились.  
Т.е. это процесс, посредством которого React обновляет DOM. Когда состояние компонента изменится - перерисуй.

### Алгоритм:

* **Элементы различных типов**. Старые элементы удаляются, и вложенные дочерние тоже:

```jsx
<div>
    <span>HI!!!</span>
</div>

// сравниваем с этим кодом:

<header>
    <span>HI!!!</span>
</header>

// div поменялся на header, значит этот узел нужно перерисовать. Дочерний элемент span тоже.

```  

* **DOM-элементы одного типа**:

```jsx
<div clasName='before' title='stuff'/>
// сравниваем
<div clasName='after' title='stuff'/>

// в теге div атрибут className изменился, значит модифицируем только className
```  

* **Компоненты одного типа**. Когда компонент обновляется, его экземпляр остаётся прежним, поэтому его состояние
  сохраняется между рендерами. React обновляет пропсы базового экземпляра компонента для соответствия новому элементу.
* Рекурсия по дочерним элементам
* Ключи: `key`

**Источник:** [`ru.reactjs.org`](https://ru.reactjs.org/docs/reconciliation.html)



