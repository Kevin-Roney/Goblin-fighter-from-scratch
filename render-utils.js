export function renderGoblin(goblins) {
    const div = document.createElement('div');
    const nameEl = document.createElement('p');
    const emojiEl = document.createElement('p');

    div.classList.add('gooblin');
    nameEl.classList.add('name');
    emojiEl.classList.add('emoji');

    nameEl.textContent = goblins.name;
    if (goblins.goblinHP === 5) {
        emojiEl.textContent = '👹';
    }
    if (goblins.goblinHP === 4) {
        emojiEl.textContent = '👺';
    }
    if (goblins.goblinsHP === 3) {
        emojiEl.textContent = '😈';
    }
    if (goblins.goblinsHP === 2) {
        emojiEl.textContent = '👿';
    }
    if (goblins.goblinsHP === 1) {
        emojiEl.textContent = '🤡';
    }
    if (goblins.goblinHP === 0) {
        emojiEl.textContent = '👻';
    }
    div.append(nameEl, emojiEl);
    return div;
}
