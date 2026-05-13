// let mul = (num1, num2) => num1 * num2;

// console.log(mul(5, 6));

// let printGreeting = () => console.log('Namaste');

// let runTwice = inputFunction => {
//     inputFunction();
//     inputFunction();
// }

// console.log(runTwice(printGreeting))

// function doubleTheSize() {
//     let buttonElement = document.querySelector('.btn-sub')
//     buttonElement.classList.add('js-size-double')
// }

// let buttonElement = document.querySelector('.btn-sub');
// buttonElement.addEventListener('click', event => {
//     setTimeout(doubleTheSize, 2000);
// })
let arr = [1, 2, 3, 4, 5]
// let sum = 0;

// arr.forEach(num => sum += num)
// console.log(sum)

let squares = arr.map(num => num * num)
console.log(squares)