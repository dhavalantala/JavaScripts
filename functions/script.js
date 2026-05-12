// function printAge() {
//     console.log(`Your age is ${age}!`);
// }


// let age = 21;
// // console.log(`Your age is ${age}!`);
// printAge()

// age = 76;
// // console.log(`Your age is ${age}!`);
// printAge()

// age = 1;
// // console.log(`Your age is ${age}!`);
// printAge()


// // Function return
// function generateRandomMove() {
//     let random = Math.random();

//     let randomMove = random * 3

//     return randomMove
// }

// let randomeMove = generateRandomMove()

// console.log(generateRandomMove())
// console.log(generateRandomMove())
// console.log(generateRandomMove())
// console.log(generateRandomMove())
// console.log(generateRandomMove())

// function determineDriveStatus() {
//     let age = 21;

//     if (age === undefined) {
//         return `Aap avtaar hain!`
//     }
//     let status;
//     if (age > 18) {
//         return `You can drive!`;
//     } else {
//         return `Use a BiCycle!`;
//     }

//     return status
// }

// console.log(determineDriveStatus())


// // ParaMeter Functions
// function sum(a, b) {
//     let c = a + b
//     return c
// }

// console.log(sum(4, 5))
// console.log(sum(41, 55))
// console.log(sum(0, 0))
// console.log(sum(-4, 5))
// console.log(sum(4, -5))
// console.log(sum(14, 5))
// console.log(sum(4, 50))
// console.log(sum(-4, -5))

function greeting(name) {
    console.log(`Namste ${name} Uncle!`)
}

greeting(name = 'Dhaval')

function greeting(name = `payaare`) {
    console.log(`Namste ${name} Uncle!`)
}

greeting()