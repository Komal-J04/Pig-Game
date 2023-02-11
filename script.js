'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

//Initial conditions
score0El.textContent = 0; //JS automatically converts them to strings to display them on the page
score1El.textContent = 0;
diceEl.classList.add('hidden');
