export function renderGoblin(goblins) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');
    const hpEl = document.createElement('p');

    div.classList.add('gooblin');

    nameEl.textContent = goblins.name;
    hpEl.textContent = goblins.goblinHP;
    if (goblins.goblinHP === 5) {
        emojiEl.textContent = '👹';
    }
    if (goblins.goblinHP === 4) {
        emojiEl.textContent = '👺';
    }
    if (goblins.goblinHP === 3) {
        emojiEl.textContent = '😈';
    }
    if (goblins.goblinHP === 2) {
        emojiEl.textContent = '👿';
    }
    if (goblins.goblinHP === 1) {
        emojiEl.textContent = '🤡';
    }
    if (goblins.goblinHP === 0) {
        emojiEl.textContent = '👻';
    }
    div.append(nameEl, hpEl, emojiEl);
    return div;
}
