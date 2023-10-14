'use strict';

// let guess = document.querySelector('.guess').value;
// let check = document.querySelector('.check').textContent;
// console.log(check);
// console.log(guess);
// let number = document.querySelector('.number');
// let score = document.querySelector('.score');

//Creating a seceret number outside the check event to avoid generating new secret number whenever check event is clicked
let secrectNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secrectNumber);

//declaring score and high score
let score = 20;
let highScore = 0;

//function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Selecting the check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);
  //game Logic
  if (!guess) {
    displayMessage(' No Number!!');
  } else if (guess === secrectNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secrectNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secrectNumber) {
    if (score > 1) {
      displayMessage(guess > secrectNumber ? '📈 Too High' : '📉 To Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost The Game');
      document.querySelector('.score').textContent = '0';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secrectNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
});
