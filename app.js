// import functions and grab DOM elements
const goblinKillCount = document.getElementById('goblin-counter');
const playerHealthBar = document.getElementById('health-bar');
const playerSprite = document.getElementById('sprite');
const goblinNameInput = document.getElementById('goblin-input');
const goblinAddButton = document.getElementById('add-goblin-button');
// let state
let playerHP = 10;
const goblins = [
    {
        name: 'Jimothy',
        goblinHP: 4
    },
    {
        name: 'Doctor Garbage',
        goblinHP: 2
    },
    {
        name: 'Maestro Fabreezio',
        goblinHP: 3
    }
];
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
