import './style.css';

const counterBoard = document.getElementById('counter-board');
let counterValue = 0;

const incrementButton = document.getElementById('increase-btn');
const increaseCounter = () => {
  counterBoard.innerHTML = ++counterValue;
};
incrementButton.addEventListener('click', increaseCounter);

const decrementButton = document.getElementById('decrease-button');
const decreaseCounter = () => {
  counterBoard.innerHTML = --counterValue;
};
decrementButton.addEventListener('click', decreaseCounter);

const resetButton = document.getElementById('reset-button');
const resetCounter = () => {
  counterBoard.innerHTML = 0;
  counterValue = 0;
};
resetButton.addEventListener('click', resetCounter);
