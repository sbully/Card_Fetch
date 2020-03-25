let tab = document.getElementById("table");
let container = document.getElementById("carteContainer")


fetch("https://arfp.eu/dataset/cards.json").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    tablePopulate(data);
});

function tablePopulate(json) {
    let listCard = new Array();
    let tabkey = Object.keys(json[0]);
    createHeaderTab(tabkey);
    /*     console.log(obj); */

    json.forEach(function(card) {
        listCard.push(new Card(card));
        addRow(card);
    });

    let cardAtk = listCard.sort(compareAtk).reverse()[0];
    createCard(cardAtk, "attaque")

    let cardArmor = listCard.sort(compareArmor).reverse()[0];
    createCard(cardArmor, "armor")

    let cardPlayed = listCard.sort(comparePlayed).reverse()[0];
    createCard(cardPlayed, "played")

    let cardVictory = listCard.sort(compareVictory).reverse()[0];
    createCard(cardVictory, "Victory")



}

function addRow(card) {
    let tr = document.createElement('tr');

    Object.entries(card).forEach(([key, value]) => {
        /*  console.log(`${key} ${value}`); */
        let td = document.createElement('td');
        td.innerHTML = value;
        tr.appendChild(td);
    });
    tab.appendChild(tr);
}

function createHeaderTab(tabkey) {
    let tr = document.createElement('tr');
    tabkey.forEach(function(key) {
        let th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    })
    tab.appendChild(tr);
}

function compareAtk(cardA, cardB) {
    if (cardA instanceof Card && cardB instanceof Card) {
        if (cardA.getAttack() > cardB.getAttack()) {
            return 1;
        }
        if (cardA.getAttack() < cardB.getAttack()) {
            return -1;
        }
        if (cardA.getAttack() == cardB.getAttack()) {
            return 0;
        }
    }
}

function compareArmor(cardA, cardB) {
    if (cardA instanceof Card && cardB instanceof Card) {
        if (cardA.getArmor() > cardB.getArmor()) {
            return 1;
        }
        if (cardA.getArmor() < cardB.getArmor()) {
            return -1;
        }
        if (cardA.getArmor() == cardB.getArmor()) {
            return 0;
        }
    }
}

function compareVictory(cardA, cardB) {
    if (cardA instanceof Card && cardB instanceof Card) {
        if (cardA.getVictory() > cardB.getVictory()) {
            return 1;
        }
        if (cardA.getVictory() < cardB.getVictory()) {
            return -1;
        }
        if (cardA.getVictory() == cardB.getVictory()) {
            return 0;
        }
    }
}

function comparePlayed(cardA, cardB) {
    if (cardA instanceof Card && cardB instanceof Card) {
        if (cardA.getPlayed() > cardB.getPlayed()) {
            return 1;
        }
        if (cardA.getPlayed() < cardB.getPlayed()) {
            return -1;
        }
        if (cardA.getPlayed() == cardB.getPlayed()) {
            return 0;
        }
    }
}

function createCard(card, title) {
    let article = document.createElement('article');
    article.id = "card";
    container.appendChild(article);

    if (card instanceof Card) {

        /*Titre de le carte */
        let titre = document.createElement('p')
        titre.id = "cardtitle";
        titre.innerHTML = title;
        article.appendChild(titre);

        /*numero de la carte (id) */
        let numcard = document.createElement('p');
        numcard.id = "numcard";
        numcard.innerHTML = card.getId();
        /* div.appendChild(numcard); */
        article.appendChild(numcard);


        //#region div d en tete avec nom de la carte played et victory 
        let divEnTete = document.createElement('div');
        divEnTete.id = "diventete";
        article.appendChild(divEnTete);

        /*nom de la carte */
        let namecard = document.createElement('p');
        namecard.id = "namecard";
        namecard.innerHTML = card.getName();
        divEnTete.appendChild(namecard);

        let divscore = document.createElement('div');
        divscore.id = "divscore";
        divEnTete.appendChild(divscore)

        let played = document.createElement('p');
        played.id = "playedcard";
        played.innerHTML = " Played :" + card.getPlayed();
        divscore.appendChild(played);

        let victorycard = document.createElement('p');
        victorycard.id = "victorycard";
        victorycard.innerHTML = "Victory :" + card.getVictory();
        divscore.appendChild(victorycard);
        //#endregion


        let imgcard = document.createElement('img');
        imgcard.id = "imgcard";
        imgcard.src = "./img/icone.png";
        article.appendChild(imgcard);

        let divPower = document.createElement('div');
        divPower.id = 'divpower';
        article.appendChild(divPower);


        let powerP = document.createElement('h2');
        powerP.id = 'powerP';
        powerP.innerHTML = "Power";
        divPower.appendChild(powerP);

        let powerValue = document.createElement('h2');
        powerValue.id = 'powerValue';
        powerValue.innerHTML = card.getPower();
        divPower.appendChild(powerValue);

        let divAtk = document.createElement('div');
        divAtk.id = 'divAtk';
        article.appendChild(divAtk);


        let atkP = document.createElement('h2');
        atkP.id = 'atkP';
        atkP.innerHTML = "Attack";
        divAtk.appendChild(atkP);

        let atkValue = document.createElement('h2');
        atkValue.id = 'atkValue';
        atkValue.innerHTML = card.getAttack();
        divAtk.appendChild(atkValue);

        let divArmor = document.createElement('div');
        divArmor.id = 'divArmor';
        article.appendChild(divArmor);

        let armorP = document.createElement('h2');
        armorP.id = 'armorP';
        armorP.innerHTML = "Armor";
        divArmor.appendChild(armorP);

        let armorValue = document.createElement('h2');
        armorValue.id = 'armorValue';
        armorValue.innerHTML = card.getArmor();
        divArmor.appendChild(armorValue);

        let divfooter = document.createElement('div');
        divfooter.id = "divfoot";
        article.appendChild(divfooter);

    }

}