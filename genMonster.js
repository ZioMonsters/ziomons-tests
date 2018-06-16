module.exports = {
  
  genMonster: (level) => {
    const maxRarity = 4;
    const rarity = Math.floor((Math.random() * maxRarity) + 1);
    monster = {
      level,
      attackPower: statGenerator(level, rarity),
      defensePower: statGenerator(level, rarity),
      speed: Math.floor((Math.random() * 100) + 1),
      rarity
    };
    return monster;
    
    /** Restituisce un oggetto con chiavi: **/
    /** level (1-100), attackPower (1-100), defensePower (1-100), speed (1-100), rarity (1-4) **/

  },

  levelUpMonster: (monster) => {
    // todo
    
    /** Restituisce il mostro livellato di 1 in un parametro casuale **/
  
  },
};

/* -- Testing --
for (let i = 0; i < 10; i++) {
  console.log(App.genMonster(Math.floor((Math.random() * 100) + 1)));
}
*/
