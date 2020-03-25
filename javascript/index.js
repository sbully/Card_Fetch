var tab = document.getElementById("table");
var container = document.getElementById("carteContainer")


fetch("https://arfp.eu/dataset/cards.json").then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data);
    tablePopulate(data);
});

function tablePopulate(json) {
    var listCard = new Array();
    var tabkey = Object.keys(json[0]);
    createHeaderTab(tabkey);
    /*     console.log(obj); */

    json.forEach(function(card) {
        listCard.push(new Card(card));
        addRow(card);
    });

    /* listCard.sort("attack"); */
    var cardAtk = listCard.sort(compareAtk).reverse()[0];
    createCard(cardAtk, "attaque")

    var cardArmor = listCard.sort(compareArmor).reverse()[0];
    createCard(cardArmor, "armor")

    var cardPlayed = listCard.sort(comparePlayed).reverse()[0];
    createCard(cardPlayed, "played")

    var cardVictory = listCard.sort(compareVictory).reverse()[0];
    createCard(cardVictory, "Victory")

    /*  console.log(listCard); */
    /*     console.log(cardAtk);
        console.log(cardArmor);
        console.log(cardPlayed);
        console.log(cardVictory); */

}

function addRow(card) {
    var tr = document.createElement('tr');

    Object.entries(card).forEach(([key, value]) => {
        /*  console.log(`${key} ${value}`); */
        var td = document.createElement('td');
        td.innerHTML = value;
        tr.appendChild(td);
    });
    tab.appendChild(tr);
}

function createHeaderTab(tabkey) {
    var tr = document.createElement('tr');
    tabkey.forEach(function(key) {
        var th = document.createElement('th');
        th.innerHTML = key;
        tr.appendChild(th);
    })
    tab.appendChild(tr);
}

function MaxAtk(cardA, cardB) {


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
    var article = document.createElement('article');
    article.id = "card";
    container.appendChild(article);

    if (card instanceof Card) {

        /*Titre de le carte */
        var titre = document.createElement('p')
        titre.id = "cardtitle";
        titre.innerHTML = title;
        article.appendChild(titre);

        /*         
                var div = document.createElement('div');
                div.id = "cardid";
                article.appendChild(div);
         */
        /*numero de la carte (id) */
        var numcard = document.createElement('p');
        numcard.id = "numcard";
        numcard.innerHTML = card.getId();
        /* div.appendChild(numcard); */
        article.appendChild(numcard);


        //#region div d en tete avec nom de la carte played et victory 
        var divEnTete = document.createElement('div');
        divEnTete.id = "diventete";
        article.appendChild(divEnTete);

        /*nom de la carte */
        var namecard = document.createElement('p');
        namecard.id = "namecard";
        namecard.innerHTML = card.getName();
        divEnTete.appendChild(namecard);

        var divscore = document.createElement('div');
        divscore.id = "divscore";
        divEnTete.appendChild(divscore)

        var played = document.createElement('p');
        played.id = "playedcard";
        played.innerHTML = " Played :" + card.getPlayed();
        divscore.appendChild(played);

        var victorycard = document.createElement('p');
        victorycard.id = "victorycard";
        victorycard.innerHTML = "Victory :" + card.getVictory();
        divscore.appendChild(victorycard);
        //#endregion


        var imgcard = document.createElement('img');
        imgcard.id = "imgcard";
        imgcard.src = "./img/icone.png";
        article.appendChild(imgcard);

        var divPower = document.createElement('div');
        divPower.id = 'divpower';
        article.appendChild(divPower);


        var powerP = document.createElement('h2');
        powerP.id = 'powerP';
        powerP.innerHTML = "Power";
        divPower.appendChild(powerP);

        var powerValue = document.createElement('h2');
        powerValue.id = 'powerValue';
        powerValue.innerHTML = card.getPower();
        divPower.appendChild(powerValue);

        var divAtk = document.createElement('div');
        divAtk.id = 'divAtk';
        article.appendChild(divAtk);


        var atkP = document.createElement('h2');
        atkP.id = 'atkP';
        atkP.innerHTML = "Attack";
        divAtk.appendChild(atkP);

        var atkValue = document.createElement('h2');
        atkValue.id = 'atkValue';
        atkValue.innerHTML = card.getAttack();
        divAtk.appendChild(atkValue);

        var divArmor = document.createElement('div');
        divArmor.id = 'divArmor';
        article.appendChild(divArmor);

        var armorP = document.createElement('h2');
        armorP.id = 'armorP';
        armorP.innerHTML = "Armor";
        divArmor.appendChild(armorP);

        var armorValue = document.createElement('h2');
        armorValue.id = 'armorValue';
        armorValue.innerHTML = card.getArmor();
        divArmor.appendChild(armorValue);

        var divfooter = document.createElement('div');
        divfooter.id = "divfoot";
        article.appendChild(divfooter);

    }

}


/* id name level description power 
attack armor damage mitigation played 
victory defeat draw */