//Retrieve the buttons
const rockBtn = document.getElementById('rockBtn');

const paperBtn = document.getElementById('paperBtn');

const scissorsBtn = document.getElementById('scissorsBtn');


//Interaction
rockBtn.addEventListener('click', function() {
    play('rock');
});
paperBtn.addEventListener('click', function() {
        play('paper');
    });
scissorsBtn.addEventListener('click', function() {
        play('scissors');
    });


function updateResult(result) {

    const resultMessageElement = document.querySelector('#resultMessage');

        resultMessageElement.textContent = result;
     }

//result display message
const options = {
    rock: {beats: 'scissors', message: 'Rock crushes scissors.'},

    paper: {beats: 'rock', message: 'Paper covers rock.'},

    scissors: {beats: 'paper', message: 'Scissors cut paper.'}
};
  
//Possible options & outcome
  function play(playerChoice) {
    const choices = Object.keys(options);

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result;
  
    if (playerChoice === computerChoice) {
      result = 'Draw';
      
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      result = 'Rock crushes scissors! You win!';
   

    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      result = 'Paper covers rock! You win!';

    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      result = 'Scissors cut paper! You win!';

    } else {
      result = 'You lose!';
     }
  
    updateResult(result);
  }
