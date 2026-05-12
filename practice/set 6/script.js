function isOdd(number){

    if (number % 2 == 0) {
        return `${number} is even!`
    } else {
        return `${number} is odd!`
    }
}

console.log(isOdd(number=5))


function largerNumber(number1, number2){
    if (number1 > number2){
        return `${number1} is bigger than ${number2}`
    } else if (number2 > number1){
        return `${number2} is bigger than ${number1}`
    } else {
        return `${number1} and ${number2} both are equal!`
    }
}

console.log(largerNumber(9, 8))

function convertCelsiusToFahrenheit(t) {
    f = (9 / 5) * t + 32
    return `${t} is converted in to Fahrenheit is ${f}!`
}

console.log(convertCelsiusToFahrenheit(32))