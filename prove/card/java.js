const Card = {
    img: "image.webp",
    name: "Gatergard",
    class: "Barbarian",
    level: 2,
    health: 100,

    levelUp: function() {
        this.level++;
        renderCard(this);
    },

    attacked: function() {
        this.health -= 20;
        if (this.health <= 0) {
            this.health = 0;
            alert("Gatergard has Died");
        };
        renderCard(this);
    }
};

function cardTemplate(card) {
    return `
        <article class="card">

            <img class="image" src="${card.img}" alt="${card.name} character card" fetchpriority="high">

            <h2 class="name">${card.name}</h2>

            <section class="stats">
                <p>Class: ${card.class}</p>
                <p>Level: ${card.level}</p>
                <p>Health: ${card.health}</p>
            </section>

            <div class="buttons">
                <button type="button" id="attacked">Attacked</button>
                <button type="button" id="levelUp">Level Up</button>
            </div>

        </article>
    `;
}

function renderCard(card) {
    document.querySelector("#card").innerHTML = cardTemplate(card);

    document.querySelector("#attacked").addEventListener("click", function () {
        Card.attacked();
    });
    
    document.querySelector("#levelUp").addEventListener("click", function () {
        Card.levelUp();
    });
    };

renderCard(Card);
    
