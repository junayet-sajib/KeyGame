// function play(){
// //    Hide the home screen with hidden
// //Show the playground

// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// const playGroundSection = document.getElementById('play-ground');

// playGroundSection.classList.remove('hidden');

// }

function continueGame(){
//step 1 Generate random alphabet;
const alphabet = getArandomAlphabet();
// console.log(alphabet);

//Show the alphabet to the screen

const currentAlphabetElement = document.getElementById('current-alphabet');

currentAlphabetElement.innerText = alphabet;

//Set backgroundColor
setBackgroundColor(alphabet);
}



function handleKeyboardButtonPress(event){
    // console.log(event.key);
    const playerPrassed = event.key;
console.log(playerPrassed);
  if(playerPrassed === 'Escape'){
    gameOver();
  }

    const currentAlphabetElement = document.getElementById('current-alphabet');

  const currentAlphabet =  currentAlphabetElement.innerText;
  const expactedAlphabet = currentAlphabet.toLowerCase();
  
  //Check Match Or not

  if(playerPrassed === expactedAlphabet){
    console.log('You get a point');


    const currentScore = getTextElementValueById('current-score');
    // console.log(currentScore);

    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);
    // //Update score
    // //get the current score
    // const currentScoreELement = document.getElementById('current-score');

    // const currentScoreText = currentScoreELement.innerText;
    // const currentScore = parseInt(currentScoreText);

    // console.log(currentScore);

    
    // //increase the score by 1
    const newScore = currentScore + 1;

    // //Show the updated score

    // currentScoreELement.innerText = newScore;

    //Start a new round




    removeBackgroundClor(expactedAlphabet);
    continueGame();

  }else{
    console.log('You missed, you lost a life');

    const currentLife = getTextElementValueById('current-life');

    const updatedLife = currentLife - 1;

    setTextElementValueById('current-life', updatedLife);

    if(updatedLife === 0){
      gameOver();
    }

    // const currentLifeElement = document.getElementById('current-life');

    // const currentLifeText = parseInt(currentLifeElement.innerText);

    // const newLife = currentLifeText -1;

    // currentLifeElement.innerText = newLife;
    
    
  }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //resest Score and life

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}


function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  //Update Final Score
  //Get the final Score

  const lastScore = getTextElementValueById('current-score');
  // console.log(lastScore); 
  setTextElementValueById('final-game-score', lastScore);

  //clear last selected alphabet
  const currentAlphabet = getElementText('current-alphabet');

  // console.log(currentAlphabet);

  removeBackgroundClor(currentAlphabet);
}