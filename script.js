const guessInput=document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const restartBtn = document.querySelector("#restartBtn");
const message = document.querySelector("#message");
const attempts = document.querySelector("#attempts");
const history = document.querySelector("#history");
const score = document.querySelector("#score");
const levelslt = document.querySelector("#level");

let SecretNumber;
let Attempts;
let MaxAttempts;
let Guesses;
let Score;

function setupGame(){
  const level=levelslt.value;
  if(level=="easy") {
    SecretNumber=randomNumber(1,10);
    MaxAttempts=3;
  }
  else if(level=="medium") {
    SecretNumber=randomNumber(1,50);
    MaxAttempts=7;
  }
  else {
    SecretNumber=randomNumber(1,100);
    MaxAttempts=10;
  }

Attempts=0;
Guesses=[];
Score=0;

updateUi();

message.className="message";
message.textContent="";
guessInput.disabled=false;
guessBtn.disabled=false;
}


function randomNumber(min,max) {
  return  Math.floor(Math.random()*(max-min+1))+min
}

guessBtn.addEventListener("click",function() {
  const guess=Number(guessInput.value);
  if(!guess) {
    message.textContent="PLease enter a valid number"
    message.className="message wrong"
    return;
  }
  Attempts++;
  Guesses.push(guess);
  attempts.textContent=Attempts;
  history.textContent=Guesses.join(",");

  if(guess==SecretNumber) {
    message.textContent="Correct! You have guessed the correct number";
    message.className="message correct";
    Score=(MaxAttempts - Attempts + 1)/(MaxAttempts) * 100;
    score.textContent=Score;
    endGame(); 
  }

  else if(guess > SecretNumber) {
    message.textContent="Too High! Try a lower number";
    message.className="message wrong";
  }

  else {   
    message.textContent="Too Low! Try a higher number";
    message.className="message wrong";
  }

  if(Attempts>=MaxAttempts && guess!=SecretNumber) {
    message.textContent=`Game Over! The number was ${SecretNumber}`;
    message.className="message wrong";
    endGame();
  }
  guessInput.value="";

})
restartBtn.addEventListener("click",setupGame);

function endGame() {
  guessInput.disabled=true;
  guessBtn.disabled=true;
  restartBtn.addEventListener("click",setupGame);
  levelslt.addEventListener("change",setupGame);
}

function updateUi() {
  attempts.textContent=Attempts;
  history.textContent="--";
  score.textContent=Score;
}

setupGame();