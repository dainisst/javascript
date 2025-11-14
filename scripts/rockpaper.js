let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
  score = savedScore;
}

updateScoreboard();

function playGame(playerMove) {
  const computerSelection = computerMove();
  let result = "";

  if (playerMove === computerSelection) {
    result = "It' a tie.";
    score.ties++;
  } else if (
    playerMove === "rock" && computerSelection === "scissors" ||
    playerMove === "paper" && computerSelection === "rock" ||
    playerMove === "scissors" && computerSelection === "paper"
  ) {
    score.wins++;
    result = "You win!";
  } else {
    score.losses++;
    result = "You lose!";
  }

  updateScoreboard();
  showResult(result, playerMove, computerSelection);
  localStorage.setItem('score', JSON.stringify(score));
}

function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScoreboard();
  document.getElementById("win-loose").textContent = "";
  document.getElementById("moves").textContent = "";
  localStorage.removeItem('score');
}

function showResult(result, playerMove, computerMove) {
  document.getElementById("win-loose").textContent = result;

  document.getElementById("moves").innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"><img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function updateScoreboard() {
  document.getElementById("score-board").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties:  ${score.ties}`;
}

function computerMove() {
  const moveIndex = Math.floor(Math.random() * 3);
  const moves = ['rock', 'paper', 'scissors'];
  return moves[moveIndex];
}