const qwertyDiv = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
const startGameBtn = document.querySelector('.btn__reset');
const ul = document.querySelector('ul');
const header = document.querySelector('.header');
const keyrow1 = document.querySelector('.keyrow1');
const keyrow2 = document.querySelector('.keyrow2');
const keyrow3 = document.querySelector('.keyrow3');
const scoreboard = document.querySelector('#scoreboard');
const overlay = document.getElementById('overlay');
var listItem = document.createElement('li');
const howTo = document.querySelector('.how-to')
var missed = 0;
keyrow1.style.display = 'none';
keyrow2.style.display = 'none';
keyrow3.style.display = 'none';
phraseDiv.style.display = 'none';
header.style.display = 'none';
scoreboard.style.display = 'none';
