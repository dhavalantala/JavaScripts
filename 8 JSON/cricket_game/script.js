let scoreStr = localStorage.getItem('Score');
let score;

function resetScore(scoreStr) {
  score = scoreStr ? JSON.parse(scoreStr) : { win: 0, lost: 0, tie: 0 };
  
  score.displayScore = function() {
    return `No of matches Won: ${this.win}, Lost: ${this.lost}, Tie: ${this.tie}`;
  };
  
  // Passed empty strings so it doesn't break on initial load
  showMethod('', '', ''); 
}

resetScore(scoreStr);

function generateComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber <= 1) {
    return 'Bat';
  } else if (randomNumber <= 2) {
    return 'Ball';
  } else {
    return 'Stump';
  }
}

function getResult(userMove, computerMove) {
  if (userMove === 'Ball') {
    if (computerMove === 'Ball') {
      score.tie++;
      return "It's a tie";
    } else if (computerMove === 'Bat') {
      score.lost++;
      return 'Computer has won!';
    } else if (computerMove === 'Stump') {
      score.win++;
      return 'User won.';
    }
  } else if (userMove === 'Bat') {
    if (computerMove === 'Ball') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Bat') {
      score.tie++;
      return "It's a tie";
    } else if (computerMove === 'Stump') {
      score.lost++;
      return 'Computer has won!';
    }
  } else {
    if (computerMove === 'Ball') {
      score.lost++;
      return 'Computer has won!';
    } else if (computerMove === 'Bat') {
      score.win++;
      return 'User won.';
    } else if (computerMove === 'Stump') {
      score.tie++;
      return "It's a tie";
    }
  }
}

function showMethod(userChoiceMessage, computerChoicemsg, resultMsg) {
  localStorage.setItem('Score', JSON.stringify(score));
  
  document.querySelector('#user-move').innerText = userChoiceMessage ? `${userChoiceMessage}` : '';
  document.querySelector('#computer-move').innerText = computerChoicemsg ? `${computerChoicemsg}` : '';
  document.querySelector('#result').innerText = resultMsg ? `${resultMsg}` : '';
  document.querySelector('#score').innerText = `${score.displayScore()}`;
  
  // Only alert if there is an actual message to display
  if (userChoiceMessage && computerChoicemsg && resultMsg) {
    alert(`${userChoiceMessage}, ${computerChoicemsg}, and ${resultMsg}. ${score.displayScore()}`);
  }
}

function bat() {
  const userChoiceMessage = 'You have chosen Bat!';
  let computerChoice = generateComputerChoice();
  const computerChoicemsg = `Computer choice is ${computerChoice}!`;
  let resultMsg = getResult('Bat', computerChoice);
  showMethod(userChoiceMessage, computerChoicemsg, resultMsg);
}

function ball() {
  const userChoiceMessage = 'You have chosen Ball!';
  let computerChoice = generateComputerChoice();
  const computerChoicemsg = `Computer choice is ${computerChoice}!`;
  let resultMsg = getResult('Ball', computerChoice);
  showMethod(userChoiceMessage, computerChoicemsg, resultMsg);
}

function stump() {
  const userChoiceMessage = 'You have chosen Stump!';
  let computerChoice = generateComputerChoice();
  const computerChoicemsg = `Computer choice is ${computerChoice}!`;
  let resultMsg = getResult('Stump', computerChoice);
  showMethod(userChoiceMessage, computerChoicemsg, resultMsg);
}

function rest() {
  localStorage.clear();
  resetScore(null); // Reset the local variable after clearing storage
}
