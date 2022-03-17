// import functions and grab DOM elements
import { renderGoblin } from './render-utils.js';

const goblinListEl = document.getElementById('goblin-list');
const goblinKillCount = document.getElementById('goblin-counter');
const playerHealthBar = document.getElementById('health-bar');
const playerSprite = document.getElementById('sprite');
const goblinNameInput = document.getElementById('goblin-input');
const goblinAddButton = document.getElementById('add-goblin-button');
// let state
let playerHP = 10;
let goblinsDefeated = 0;
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
    goblinNameInput.value = '';
    displayGoblins();
});

function displayGoblins() {
    goblinListEl.textContent = '';
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        if (goblin.goblinHP > 0) {
            goblinEl.addEventListener('click', () => {
      //player hit
                if (Math.random() > .5) {
                    goblins.goblinHP--;
                    playerSprite.src = '#############';
                    alert('you hit ' + goblins.name + '!!');
                } else {
                    alert('Oh noes you missed OwO!!');
                }
                  //goblin hits
                if (Math.random() < .33) {
                    playerHP--;
                    playerHealthBar.textContent = `You have ${playerHP} left!!`;
                    alert(goblins.name + 'hit you!');
                } else {
                    alert(goblins.name + 'missed!!');
                }
                    //goblins defeated
                if (goblins.goblinHP === 0) {
                    goblinsDefeated++;
                    goblinKillCount.textContent = `You have defeated ${goblinsDefeated} goblins!`;
                }
            });
        }
        goblinListEl.append(goblinEl);
    }
}
displayGoblins();