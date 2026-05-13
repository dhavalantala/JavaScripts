// let arr = [5, 6]

// arr.unshift(4)          // unshift add element at the start
// arr.push(7)             // Push add element at the end

// console.log(arr)

let arr = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// function findElement(array, position) {
//    console.log(array[position - 1])
// }

// findElement(arr, 6)

let arrSlice = arr.slice()

console.log(arrSlice)

// function findPrimeNumber(numbers){
//     let count = 0
//     let num = 2;             // Because less than 1 is not prime number
    
//     while (count < numbers){
//         let isPrime = true;
//         let i = 2;

//         while (i * i <= num) {
//             if (num % i === 0){
//                 isPrime = false;
//                 break;
//             }
//             i++
//         }
//         if (isPrime) {
//             console.log(num);
//             count++
//         }
//         num++
//     }
// }

// findPrimeNumber(10)


// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = array.length -1; i >= 0; i--){
//     console.log(array[i])
// }

// let array = [1, -6, 5, 7, -98]

// for (let i = 0; i < array.length; i++) {
//     if (array[i] < 0){
//         continue
//     }
//     console.log(array[i])
// }


let array = ['KG', 'Coding','JavaScript', 'Course', 'is', 'Best']

// // Method 1:
// let resultSpace = array.join(" ");
// console.log(resultSpace)

// // Method 2:
// let resultingString = ' ';
// let i = 0;

// while (i < array.length) {
//     resultingString += array[i] + ' ';
//     i++;
// }
// console.log(resultingString)

// Method 3:
// let result = array.reduce((accumulator, current) => accumulator + current + ' ', " ");

// console.log(result);

// for (let i = 0; i < 11; i++) {
//     console.log(10 - i)
// }