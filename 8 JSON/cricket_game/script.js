let scoreStr = localStorage.getItem('Score');
let score;

function resetScore(scoreStr) {
    score = scoreStr ? JSON.parse(scoreStr) : {
        win : 0,
        lost : 0,
        tie : 0,
    };

    score.displayScore = function() {
        return `No of matches Won: ${this.win}, Lost: ${this.lost}, Tie: ${this.tie}`
    };
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
    localStorage.setItem('Score', JSON.stringify(score))
    alert(`${userChoiceMessage}, ${computerChoicemsg}, and ${resultMsg}. ${score.displayScore()}`);
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

function rest() {
    resetScore();
    return localStorage.clear()
}