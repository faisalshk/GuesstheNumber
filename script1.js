'use strict';
// creating a random number
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secrectNumber);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function (e) {
  // convert string to number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //game logic
  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secrectNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secrectNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game!!');
      document.querySelector('.score').textContent = '0';
    }
  }
  //  else if (guess > secrectNumber) {
  //     if (score > 1) {
  //       displayMessage('📈 Too High');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage('You Lost the Game!!');
  //       document.querySelector('.score').textContent = '0';
  //     }
  //   } else if (guess < secrectNumber) {
  //     if (score > 1) {
  //       displayMessage('📉 Too Low');
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       displayMessage('You Lost the Game!!');
  //       document.querySelector('.score').textContent = '0';
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
