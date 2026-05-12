function bat(){
    const userChoiceMessage =  'You have choosen Bat!'

    let randomNumber = Math.random() * 3;

    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2){
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    const computerChoicemsg = `Computer choice is ${computerChoice}!`;

    let resultMsg;
    if (computerChoice === "Ball") {
        resultMsg = `User won.`
    } else if (computerChoice == 'Bat') {
        resultMsg = `It's a tie`
    } else if (computerChoice == 'Stump') {
        resultMsg = `Computer has won!`
    }

    alert(`${userChoiceMessage}, ${computerChoicemsg}, and ${resultMsg}`)
}

function ball(){
    const userChoiceMessage =  'You have choosen Ball!'

    let randomNumber = Math.random() * 3;

    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2){
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    const computerChoicemsg = `Computer choice is ${computerChoice}!`;

    let resultMsg;
    if (computerChoice === "Ball") {
        resultMsg = `It's a tie` 
    } else if (computerChoice == 'Bat') {
        resultMsg = `Computer has won!`
    } else if (computerChoice == 'Stump') {
        resultMsg = `User won.`
    }

    alert(`${userChoiceMessage}, ${computerChoicemsg}, and ${resultMsg}`)
}

function stump(){
    const userChoiceMessage =  'You have choosen Stump!'

    let randomNumber = Math.random() * 3;

    let computerChoice;

    if (randomNumber > 0 && randomNumber <= 1) {
        computerChoice = 'Bat';
    } else if (randomNumber > 1 && randomNumber <= 2){
        computerChoice = 'Ball';
    } else {
        computerChoice = 'Stump';
    }

    const computerChoicemsg = `Computer choice is ${computerChoice}!`;

    let resultMsg;
    if (computerChoice === "Ball") {
        resultMsg = `Computer has won!`
    } else if (computerChoice == 'Bat') {
        resultMsg =  `User won.`
    } else if (computerChoice == 'Stump') {
        resultMsg = `It's a tie` 
    }

    alert(`${userChoiceMessage}, ${computerChoicemsg}, and ${resultMsg}`)
}