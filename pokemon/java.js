const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const textBox = document.querySelector('#text-box p');

const pokemon = [
    {
        name: "Pikachu",
        health: 90,
        maxHealth: 90,
        sprites: {
            front: "images/pikachu-front.png",
            back: "images/pikachu-back.png"
        },
        moves: {
            move1: { name: "Thunderbolt", damage: 40, type: "Electric" },
            move2: { name: "Quick Attack", damage: 20, type: "Normal" },
            move3: { name: "Iron Tail", damage: 35, type: "Steel" },
            move4: { name: "Electro Ball", damage: 25, type: "Electric" }
        }
    },
    {
        name: "Charizard",
        health: 150,
        maxHealth: 150,
        sprites: {
            front: "images/charizard-front.png",
            back: "images/charizard-back.png"
        },
        moves: {
            move1: { name: "Flamethrower", damage: 45, type: "Fire" },
            move2: { name: "Wing Attack", damage: 30, type: "Flying" },
            move3: { name: "Slash", damage: 25, type: "Normal" },
            move4: { name: "Dragon Rage", damage: 40, type: "Dragon" }
        }
    },
    {
        name: "Blastoise",
        health: 160,
        maxHealth: 160,
        sprites: {
            front: "images/blastoise-front.png",
            back: "images/blastoise-back.png"
        },
        moves: {
            move1: { name: "Hydro Pump", damage: 50, type: "Water" },
            move2: { name: "Bite", damage: 20, type: "Dark" },
            move3: { name: "Skull Bash", damage: 40, type: "Normal" },
            move4: { name: "Water Pulse", damage: 25, type: "Water" }
        }
    },
    {
        name: "Venusaur",
        health: 155,
        maxHealth: 155,
        sprites: {
            front: "images/venusaur-front.png",
            back: "images/venusaur-back.png"
        },
        moves: {
            move1: { name: "Solar Beam", damage: 55, type: "Grass" },
            move2: { name: "Razor Leaf", damage: 25, type: "Grass" },
            move3: { name: "Tackle", damage: 15, type: "Normal" },
            move4: { name: "Sludge Bomb", damage: 35, type: "Poison" }
        }
    },
    {
        name: "Gengar",
        health: 120,
        maxHealth: 120,
        sprites: {
            front: "images/gengar-front.png",
            back: "images/gengar-back.png"
        },
        moves: {
            move1: { name: "Shadow Ball", damage: 40, type: "Ghost" },
            move2: { name: "Sludge Bomb", damage: 35, type: "Poison" },
            move3: { name: "Dark Pulse", damage: 30, type: "Dark" },
            move4: { name: "Dream Eater", damage: 50, type: "Psychic" }
        }
    }
];

let playerActive;
let opponentActive;

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);
    return pokemon[randomIndex];
}

function renderOpponent(poke) {
    const opponentDiv = document.querySelector('#opponent');
    opponentDiv.innerHTML = `
        <div class="health-box" id="opponent-health">
            <p><strong>${poke.name}</strong></p>
            <p>HP: ${poke.health} / ${poke.maxHealth}</p>
        </div>
        <div class="sprite-platform" id="opponent-platform">
            <img src="${poke.sprites.front}" alt="${poke.name} front sprite" class="front-sprite">
            <div class="platform-base">A</div>
        </div>
    `;
}

function renderPlayer(poke) {
    const playerDiv = document.querySelector('#you');
    playerDiv.innerHTML = `
        <div class="sprite-platform" id="player-platform">
            <img src="${poke.sprites.back}" alt="${poke.name} back sprite" class="back-sprite">
            <div class="platform-base">A</div>
        </div>
        <div class="health-box" id="player-health">
            <p><strong>${poke.name}</strong></p>
            <p>HP: ${poke.health} / ${poke.maxHealth}</p>
        </div>
    `;
}

function renderInterface(poke) {
    textBox.textContent = `What will ${poke.name} do?`;
    btn1.textContent = poke.moves.move1.name;
    btn2.textContent = poke.moves.move2.name;
    btn3.textContent = poke.moves.move3.name;
    btn4.textContent = poke.moves.move4.name;
}

function turnSummaryTemplate(move) {
    let html = `<strong>${playerActive.name} used ${move.name}!</strong><br>`;
    html += `Dealt ${move.damage} damage to ${opponentActive.name}!`;

    if (opponentActive.health === 0) {
        html += `<br><span class="victory">🏆 ${opponentActive.name} fainted! You win!</span>`;
    }
    return html;
}

function opponentSummaryTemplate(move) {
    let html = `<br><br><strong>Foe ${opponentActive.name} used ${move.name}!</strong><br>`;
    html += `It dealt ${move.damage} damage to your ${playerActive.name}!`;

    if (playerActive.health === 0) {
        html += `<br><span class="defeat">❌ Your ${playerActive.name} fainted! Game Over.</span>`;
    }
    return html;
}

const actionButtons = [btn1, btn2, btn3, btn4];
actionButtons.forEach(function(button) {
    button.addEventListener('click', handleAttack);
});

// --- Game Logic Controllers ---
function handleAttack(event) {
    const clickedId = event.target.id;
    let selectedMove;

    if (clickedId === 'btn-1') {
        selectedMove = playerActive.moves.move1;
    } else if (clickedId === 'btn-2') {
        selectedMove = playerActive.moves.move2;
    } else if (clickedId === 'btn-3') {
        selectedMove = playerActive.moves.move3;
    } else if (clickedId === 'btn-4') {
        selectedMove = playerActive.moves.move4;
    }

    if (opponentActive.health <= 0 || playerActive.health <= 0) {
        textBox.textContent = "The battle is over!";
        return; 
    }

    opponentActive.health -= selectedMove.damage;
    if (opponentActive.health < 0) {
        opponentActive.health = 0;
    }

    renderOpponent(opponentActive);
    textBox.innerHTML = turnSummaryTemplate(selectedMove);

    opponentTurn();
}

function opponentTurn() {
    if (opponentActive.health <= 0) {
        return;
    }

    const moves = ['move1', 'move2', 'move3', 'move4'];
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    const selectedMove = opponentActive.moves[randomMove];

    playerActive.health -= selectedMove.damage;
    if (playerActive.health < 0) {
        playerActive.health = 0;
    }

    renderPlayer(playerActive);
    textBox.innerHTML += opponentSummaryTemplate(selectedMove);
}

function Battle() {
    playerActive = getRandomPokemon();
    
    do {
        opponentActive = getRandomPokemon();
    } while (opponentActive === playerActive && pokemon.length > 1);

    renderOpponent(opponentActive);
    renderPlayer(playerActive);
    renderInterface(playerActive);
}

Battle();

