function getComputerChoice() {
    choice = Math.floor(Math.random() * 3 + 1)
    if (choice === 1) {
      return "rock"
    } else if (choice === 2) { 
      return "paper"
    } else {
      return "scissors"
    }
  };
function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "scissors") {
      return "You Win! Rock Beats Scissors"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      return "You Lose! Paper Beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      return "You Win! Paper Beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
      return "You Lose! Scissors Beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
      return "You Win! Scissors Beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
      return "You Lose! Rock Beats Scissors"
    } else {return "It's a tie!"}
  }
let computerScore = 0
let playerScore = 0
let score = document.getElementById('score');
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let selection = document.getElementById('selection');
let reset = document.getElementById('reset');
reset.style.cssText = 'visibility:hidden'
rock.addEventListener("click", function(){
     if (computerScore + 1 == 5 || playerScore + 1 == 5){
        winner = computerScore > playerScore ? "Computer ": "You ";
        playerScore = playerScore > computerScore ? playerScore + 1: playerScore;
        computerScore = computerScore > playerScore ? computerScore + 1: computerScore;
        score.textContent = "You: " + playerScore + " Computer: " + computerScore
        reset.style.cssText = 'visibility:visible'
        return selection.textContent = winner + 'won the game!'
    } else if(computerScore == 5 || playerScore == 5){
        return selection.textContent = winner + 'won the game!'
    };
    let results = (playRound('rock'));
    if (results.includes('Win')){
        playerScore ++
        selection.textContent = results
        score.textContent = 'You: ' + playerScore + " Computer: " + computerScore
    } else if(results.includes('Lose')){
        computerScore ++
        selection.textContent = results
        score.textContent = 'You: ' + playerScore + " Computer: " + computerScore
    } else (selection.textContent = "Tie!")
});
paper.addEventListener("click", function(){
    if (computerScore + 1 == 5 || playerScore + 1 == 5){
        winner = computerScore > playerScore ? "Computer ": "You ";
        playerScore = playerScore > computerScore ? playerScore + 1: playerScore;
        computerScore = computerScore > playerScore ? computerScore + 1: computerScore;
        score.textContent = "You: " + playerScore + " Computer: " + computerScore
        reset.style.cssText = 'visibility:visible'
        return selection.textContent = winner + 'won the game!'
    } else if(computerScore == 5 || playerScore == 5){
        return selection.textContent = winner + 'won the game!'
    };
    let results = (playRound('paper'));
        if (results.includes('Win')){
            playerScore ++
            selection.textContent = results
            score.textContent = 'You: ' + playerScore + " Computer: " + computerScore
        } else if(results.includes('Lose')){
            computerScore ++
            selection.textContent = results
            score.textContent = 'You: ' + playerScore + " Computer: " + computerScore
        } else (selection.textContent = "Tie!")
});
scissors.addEventListener("click", function(){
    if (computerScore + 1 == 5 || playerScore + 1 == 5){
        winner = computerScore > playerScore ? "Computer ": "You ";
        playerScore = playerScore > computerScore ? playerScore + 1: playerScore;
        computerScore = computerScore > playerScore ? computerScore + 1: computerScore;
        score.textContent = "You: " + playerScore + " Computer: " + computerScore
        reset.style.cssText = 'visibility:visible'
        return selection.textContent = winner + 'won the game!'
    } else if(computerScore == 5 || playerScore == 5){
        return selection.textContent = winner + 'won the game!'
    };
    let results = (playRound('scissors'));
        if (results.includes('Win')){
            playerScore ++
            selection.textContent = results
            score.textContent = 'You: ' + playerScore + " Computer: " + computerScore
        } else if(results.includes('Lose')){
            computerScore ++
            selection.textContent = results
            score.textContent = 'You: ' + playerScore + " Computer: " + computerScore
        } else (selection.textContent = "Tie!")
});
reset.addEventListener('click', function(){
    computerScore = 0
    playerScore = 0
    reset.style.cssText = 'visibility:hidden'
    selection.textContent = ""
    score.textContent = "You:0 Computer:0"
})