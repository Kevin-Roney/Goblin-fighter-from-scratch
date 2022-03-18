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
        name: 'Jimothy The Destroyer of Worlds',
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
function resetImage(){
    playerSprite.src = './assets/before.png';
}
function displayGoblins() {
    goblinListEl.textContent = '';
    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);
        if (goblin.goblinHP > 0 && playerHP > 0) {
            goblinEl.addEventListener('click', () => {
                resetImage();
                if (Math.random() > .5) {
                    goblin.goblinHP--;
                    playerSprite.src = './assets/after.png';
                    alert('you hit ' + goblin.name + '!!');
                } else {
                    alert('Oh noes you missed OwO!!');
                }
                  //goblin hits
                if (Math.random() > .33) {
                    playerHP--;
                    playerHealthBar.textContent = `You have ${playerHP} HP left!!`;
                    alert(goblin.name + ' hit you!');
                } else {
                    alert(goblin.name + ' missed!!');
                }
                    //goblins defeated
                if (goblin.goblinHP === 0) {
                    goblinsDefeated++;
                    goblinKillCount.textContent = `You have defeated ${goblinsDefeated} goblins!`;
                }
                if (playerHP === 0) {
                    alert('Game Over, Try Again!');
                }
                displayGoblins();
            });
        }
        goblinListEl.append(goblinEl);
        
    }
}

displayGoblins();