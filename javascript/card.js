class Card {
    id;
    name;
    level;
    description;
    power;
    attack;
    armor;
    damage;
    mitigation;
    played;
    victory;
    defeat;
    draw;


    constructor(data) {
        Object.assign(this, data);
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPower() {
        return this.power;
    }

    getAttack() {
        return this.attack;
    }

    getArmor() {
        return this.armor;
    }

    getPlayed() {
        return this.played;
    }

    getVictory() {
        return this.victory;
    }



}