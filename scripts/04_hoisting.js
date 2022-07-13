// HOISTING - это когда JS при интерпретации
// какого-либо файла перемещает определение
// сущностей в начало файла
//
// console.log(sum(1, 41))
//
// function sum(a, b) {
//     return a + b
// }
// var i;
// console.log(i)
// i = 42
// console.log(i)

// const и let не подвержены хоистингу
console.log(num) // будет ошибка. c var ошибки не будет
const num = 42
console.log(num)


// Function expression & Function declaration

// function declaration
// console.log(square(25))
// function square(num) {
//     return num ** 2
// }

// function expression
// const square = function(num){
//     return num ** 2
// }
// console.log(square(25))


// function getArgsCount(fn) {
//     return  fn.length
// }
//
// console.log(getArgsCount((a, b) => {})); // 2
// console.log(getArgsCount((a) => {})); // 1

// return  fn.length
// Евгений Бобер11:18
// const print = (/*???*/) => {
//     console.log(/*?*/)
// }
//
// print(1, 2, 3); // 1, 2, 3
// print({a: 1}, "b"); // {...}, "b"
// Вы11:19
// const print = (...props) => {
//     console.log(...props)
// }
// Евгений Бобер11:20
// data && <div>123</div>
// Евгений Бобер11:22
// const data = 5;
// console.log(data && 3)
// console.log(null || 5)
// Евгений Бобер11:23
// console.log(null && 5)
// const data = 5;
// console.log(null && 5)

// setTimeout(() => console.log(1), 0);
// Promise
//     .resolve()
//     .then(() => console.log(2))
//     .then(() => console.log(3));
// new Promise((resolve, reject) => {
//     console.log(4);
//     setTimeout(() => console.log(5), 0);
//     resolve();
// })
// setTimeout(() => console.log(6), 0);
// console.log(7);
// function delay(milliseconds) {
//
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res()
//         }, milliseconds)
//     })
//
// };
//
// async function main() {
//     console.log(1);
//
//     await delay(1000);
//
//     console.log(2);
// }
// main()

```
const Parent = () => {
  const [user, set] = useState({name: "Вася"});
  
  const changeName = (newName) => {
    set({name: newName})
  }
 
  return <>
    <button onClick={() => changeName('петя'))}/>
    <Children user={user}/>
  </>
};

const Children = ({user}) => {
  useEffect(() => {
    console.log("Called")
  }, [user]);
}
```
