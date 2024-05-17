function getComputerChoice(){
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random()*arrOfChoices.length);
        return arrOfChoices[randomNum];
}

function getHumanChoice(){
    let humanChoice = prompt('Choose your throw', 'rock, paper, scissors');
        return humanChoice.toLowerCase()
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
   if(humanChoice === computerChoice){
        
        return 'You tied! You both picked {humanSelection}'
   }else if(humanChoice === 'rock' && computerChoice ==='scissors'){
        humanScore++
        return 'You won! rock crushes scissors'
   }else if(humanChoice === 'scissors' && computerChoice === 'rock'){
       computerScore++
        return 'You lost! rock crushes scissors'
   }else if(humanChoice === 'paper' && computerChoice === 'rock'){
        humanScore++
        return 'You won! paper covers rock'
   }else if(humanChoice === 'rock' && computerChoice === 'paper'){
        computerScore++
        return 'You lost! Paper covers rock'
   }else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++
        return 'You won! scissors cuts paper'
   }else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        computerScore++
        return 'You lost! scissors cuts paper'
   }
  } 
      
  function playGame(){
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        (playRound(humanSelection, computerSelection));

    }
    if(humanScore > computerScore){
        return 'You beat the computer! You are a Champs!'
    }else if(humanScore < computerScore){
        return 'You got beaten by the computer! Sorry!' 
    }else{
        return 'You tied with the computer! Play again'
    }
  }

  console.log(playGame());