let age = 4;
let gender = 'Male';
let finalDiscount;

if (age < 5) {
    finalDiscount = 100% 
    console.log("Your are eligible for cost free ticket!");
} else if (gender === 'Female' || age <= 8) {
    finalDiscount = 50%
    console.log("Your are eligible for 50% Discount!");
} else if (age >= 65){
    finalDiscount = 30%
    console.log("Your are eligible for 30% Discount!");
} else {
    finalDiscount = 0%
    console.log("Your have to buy full ticket!");
}