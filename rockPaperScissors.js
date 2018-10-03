const userChoice = userInput => {

 userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
  else {
    console.log('Error!')
  }
}
function computerChoice() {
 let randomMath = Math.floor(Math.random() * 3);
  
  if (randomMath === 0) {
    console.log('rock')
  }
  else if (randomMath === 1) {
    console.log('paper')
  }
  else if (randomMath === 2) {
    console.log('scissors')
  }
}
console.log(computerChoice());
console.log(userChoice('paper'));
function determineWinner(UserChoice,ComputerChoice) {
  if (userChoice === computerChoice ) {
    console.log('This is a tie!')
  }
}