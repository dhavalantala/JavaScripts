function generateComputerChoice(){
    let randomNumber = Math.random() * 3;

    if (randomNumber <= 1) {
        return 'Bat';
    } else if (randomNumber <= 2){
        return 'Ball';
    } else {
        return'Stump';
    }
}

function getResult(userMove, computerMove) {
    if (userMove === `Ball`) {
        if (computerMove === "Ball") {
            return `It's a tie` 
        } else if (computerMove == 'Bat') {
            return `Computer has won!`
        } else if (computerMove == 'Stump') {
            return `User won.`
        }
    }else if (userMove === `Bat`) {
        if (computerMove === "Ball") {
            return `User won.`
        } else if (computerMove == 'Bat') {
            return `It's a tie`
        } else if (computerMove == 'Stump') {
            return `Computer has won!`
        }
    }else { 
        if (computerMove === "Ball") {
            return `Computer has won!`
        } else if (computerMove == 'Bat') {
            return `User won.`
        } else if (computerMove == 'Stump') {
            return`It's a tie` 
        }
    }
}

function showMethod(userChoiceMessage, computerChoicemsg, resultMsg){
    alert(`${userChoiceMessage}, ${computerChoicemsg}, and ${resultMsg}`)
}

function bat(){
    const userChoiceMessage =  'You have choosen Bat!'

    let computerChoice = generateComputerChoice()
    const computerChoicemsg = `Computer choice is ${computerChoice}!`;

    let resultMsg = getResult(userMove = `Bat`, computerChoice);
    
    showMethod(userChoiceMessage, computerChoicemsg, resultMsg)
}

function ball(){
    const userChoiceMessage =  'You have choosen Ball!'

    let computerChoice = generateComputerChoice()
    const computerChoicemsg = `Computer choice is ${computerChoice}!`;

    let resultMsg = getResult(userMove = `Ball`, computerChoice);

    showMethod(userChoiceMessage, computerChoicemsg, resultMsg)
}

function stump(){
    const userChoiceMessage =  'You have choosen Stump!'

    let computerChoice = generateComputerChoice()
    const computerChoicemsg = `Computer choice is ${computerChoice}!`;
    
    let resultMsg = getResult(userMove = `Stump`, computerChoice);
    
    showMethod(userChoiceMessage, computerChoicemsg, resultMsg)
}