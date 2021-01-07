'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').style.display = 'none';

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'Please Type A Number';
  } else if (guess === secretNumber) {
    if (score) {
      document.querySelector('.message').textContent = 'Correct!';
      document.querySelector('.number').style.display = 'Block';
      setTimeout(() => {
        document.querySelector('.message').textContent = 'Next Guess!';
      }, 1500);
      score++;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.message').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.message').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
    } else {
      document.querySelector('.message').textContent = 'Game Over!';
      document.querySelector('.message').textContent = 0;
    }
  }
});
