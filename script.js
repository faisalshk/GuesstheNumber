'use strict';
//DOM Manipulation

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number';
document.querySelector('.number').textContent = '13';
document.querySelector('.score').textContent = '10';

document.querySelector('.guess').value = '23';
console.log(document.querySelector('.guess').value);*/
////////////////////////////////////////////////////
//handling click events
/*document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);/*
  /*if (guess.value == null || guess.value == 0) {
    document.querySelector('.message').textContent = 'No Number';
  }*/
/*if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else {
    document.querySelector('.message').textContent = 'Start guessing...';
  }
});*/
//////////////////////////////////////////////
//Implementation of game logic

//generating a random number
//Math.random() will generate a random  number from 0 to 1 thats why we multiply it by 20, But still it will give a random number with decimal point and to remove decimal we use Math.trunc().
let secrectNumber = Math.trunc(Math.random() * 20) + 1;

//Creating a var for score
let score = 20;

//Creating a var for highscore
let highScore = 0;

// Creating a function  to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);
  /*if (guess.value == null || guess.value == 0) {
    document.querySelector('.message').textContent = 'No Number';
  }*/

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';
    displayMessage('No Number');
  }

  // When the player wins the game
  else if (guess === secrectNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');

    //display the number in the page
    document.querySelector('.number').textContent = secrectNumber;

    // Changing the background color when player wins the game
    //1) Selecting the body
    document.querySelector('body').style.backgroundColor = '#60b347';
    //2) increasing the with of the secretNumber
    document.querySelector('.number').style.width = '30rem';

    // updating the highScore
    if (score > highScore) {
      highScore = score;
      console.log(highScore);
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guess is wrong
  else if (guess !== secrectNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secrectNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secrectNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = ' You Lost the game!!';
      displayMessage('You Lost the Game!!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When guess is too high
/*else if (guess > secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You Lost the game!!';
      document.querySelector('.score').textContent = 0;
    }
  } */

// When guess is too Low
/*else if (guess < secrectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You Lost the game!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
