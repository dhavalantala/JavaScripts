// //
// let sum = function(num1, num2) {
//     return num1 + num2;
// }

// // let newSum = sum;

// // console.log(sum(3, 2))
// // console.log(newSum(4, 5))

// let sumThreeNumbers = function(num1, num2, num3, sumTwoNumbers){
//     let sum1 = sumTwoNumbers(num1, num2);
//     return sumTwoNumbers(sum1, num3);
// }

// console.log(sumThreeNumbers(4, 5, 9, sum));
// console.log(typeof sumThreeNumbers)

// // Arrow Function
// let sum = (num1, num2) => {
//     return num1 + num2
// };

// console.log(sum(4, 5));

// let square = (num) => {
//     return num * num
// }

// console.log(square(6))
// console.log(square(60))
// console.log(square(9))

// let square = num => num * num;

// console.log(square(9));

// let alarm = function() {
//     console.log(`Subahaa ho gayi, uth jaao!`);
// };
// setTimeout(alarm, 2000)
// console.log("Alaram Set");

// let timerID = setTimeout(() => {
//     console.log(`Subahaa ho gayi, uth jaao!`);
// }, 2000)
// console.log("Set")
// clearTimeout(timerID)

// // setInterval
// let alarm = function() {
//     console.log(`Subahaa ho gayi, uth jaao!`);
// };

// setInterval(alarm, 1000);

// let buttonElement = document.querySelector('#my-button');
// buttonElement.addEventListener('click', e => console.log(`I am clicked!`))

// let foods = ['bread', 'rice', 'meat', 'pizza'];

// foods.forEach(function(food) {
//     console.log(food)
// })

// foods.forEach((food) => {
//     console.log(food)
// })

// foods.forEach((food) => console.log(food) )


// let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newOdds = arr.filter((num, index) => {
//     return num % 2 === 1;
// })

// console.log(newOdds)

// let arr = [1, 2, 3, 4, 5]
// let square = arr.map((num)=> num *num)

// console.log(square)