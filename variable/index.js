let welcomeMessage = "Hello Friends";


let jeansPrice = (2499 - (0.41*2499) - 29);
let bagPrice = (15599 - (0.1*15599) - 272);

let bagValue = Math.round((jeansPrice + bagPrice + 25 + 20) * (118/100));

let bagSummary = `Your final Myntra Bag amount is ₹ ${bagValue}`;



console.log(welcomeMessage)
console.log(2+3)
console.log(20+'3')
console.log("Hello" * 3)
console.log(20 * '3')
console.log(bagSummary)