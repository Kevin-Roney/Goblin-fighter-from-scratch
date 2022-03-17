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
        name: 'Doctor Stromboli',
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
goblinAddButton.addEventListener('click', () => {
    const randomEntryInt = Math.ceil(Math.random() * 999);
    const newGoblin = {
        name: goblinNameInput.value || `Goblin #${randomEntryInt}`,
        goblinHP: Math.ceil(Math.random() * 5)
    };
    goblins.push(newGoblin);
    displayGoblins();
    
});