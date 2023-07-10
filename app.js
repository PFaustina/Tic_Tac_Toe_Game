//Retrieve the buttons by ID
//retrive rock button
const rockBtn = document.getElementById('rockBtn');

//retrive paper button
const paperBtn = document.getElementById('paperBtn');

//retrive scissors button
const scissorsBtn = document.getElementById('scissorsBtn');


//Interaction - add click event listeners to each button. 
//An event listener listens for a specific event to occur and execut a function when that event occurs.
//add click button for rock
rockBtn.addEventListener('click', function() {
    play('rock');
});

//add click button for paper
paperBtn.addEventListener('click', function() {
        play('paper');
    });

 //add click button for scissors  
scissorsBtn.addEventListener('click', function() {
        play('scissors');
    });


    //updates the result message on the page

function updateResult(result) {

    const resultMessageElement = document.querySelector('#resultMessage');

        resultMessageElement.textContent = result;
     }

//options of possible choices
const options = {

  //possible choice 1
    rock: {beats: 'scissors', message: 'Rock crushes scissors.'},
 //possible choice 2
    paper: {beats: 'rock', message: 'Paper covers rock.'},
 //possible choice 3
    scissors: {beats: 'paper', message: 'Scissors cut paper.'}
};
  
//Possible options & all the outcome of the game

  function play(playerChoice) {
    const choices = Object.keys(options);

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  
    let result;
  //when both players choose the same choice
    if (playerChoice === computerChoice) {
      result = 'Draw';
    //rock & scissors  
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
      result = 'Rock crushes scissors! You win!';
   
    //paper & rock
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
      result = 'Paper covers rock! You win!';

    //scissors & papers
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
      result = 'Scissors cut paper! You win!';

    } else {
      result = 'You lose!';
     }
  
    updateResult(result);
  }
