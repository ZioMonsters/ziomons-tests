module.exports = {
  
  genMonster: (level) => {
    const maxStats = 80;
    const maxRarity = 4;
    const rarity = Math.floor((Math.random() * maxRarity) + 1);
    monster = {
      level: level,
      attackPower: App.statGenerator(level, rarity),
      defensePower: App.statGenerator(level, rarity),
      speed: App.statGenerator(level, rarity),
      rarity: rarity
    };

    return monster;
    
    /*
      Restituisce un oggetto con chiavi:
      level (1-100), attackPower (1-100), defensePower (1-100), speed (1-100), rarity (1-4)
    */
  },

  levelUpMonster: (monster) => {
    //monster[Object.keys(monster)[Math.floor(Math.random() * 4)]];

    /*
      Restituisce il mostro livellato di 1 in un parametro casuale
    */
  },

  statGenerator: (level, rarity) => {
    const rarityModifiers = [5, 10, 15, 20]
    if (level <= 20) {
      return Math.floor((Math.random() * 16) + 1) + rarityModifiers[rarity - 1];
    } else if (level <= 40) {
      return Math.floor((Math.random() * 32) + 1) + rarityModifiers[rarity - 1];
    } else if (level <= 60) {
      return Math.floor((Math.random() * 48) + 1) + rarityModifiers[rarity - 1];
    } else if (level <= 80) {
      return Math.floor((Math.random() * 64) + 1) + rarityModifiers[rarity - 1];
    } else if (level <= 100) {
      return Math.floor((Math.random() * 80) + 1) + rarityModifiers[rarity - 1];
    }
  }

};

/*
for(let i = 0; i < 10; i ++) {
  const monster = App.genMonster(Math.floor((Math.random() * 100) + 1));
  console.log(monster);
}
*/