let score = {
    win : 0,
    lost : 0,
    tie : 0,
};

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
            score.tie++;
            return `It's a tie` 
        } else if (computerMove == 'Bat') {
            score.lost++;
            return `Computer has won!`
        } else if (computerMove == 'Stump') {
            score.win++;
            return `User won.`
        }
    }else if (userMove === `Bat`) {
        if (computerMove === "Ball") {
            score.win++;
            return `User won.`
        } else if (computerMove == 'Bat') {
            score.tie++;
            return `It's a tie`
        } else if (computerMove == 'Stump') {
            score.lost++;
            return `Computer has won!`
        }
    }else { 
        if (computerMove === "Ball") {
            score.lost++;
            return `Computer has won!`
        } else if (computerMove == 'Bat') {
            score.win++;
            return `User won.`
        } else if (computerMove == 'Stump') {
            score.tie++;
            return`It's a tie` 
        }
    }
}

function showMethod(userChoiceMessage, computerChoicemsg, resultMsg){
    alert(`${userChoiceMessage}, ${computerChoicemsg}, and 
${resultMsg}.

Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`)
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