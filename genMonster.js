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

  }

};

function statGenerator(level, rarity) {
  const rarityModifiers = [0, 10, 20, 40];
  if (level <=  10) return Math.floor((Math.random() * 6) + 1) + rarityModifiers[rarity - 1];
  if (level <=  20) return Math.floor((Math.random() * 6) + 7) + rarityModifiers[rarity - 1];
  if (level <=  30) return Math.floor((Math.random() * 6) + 13) + rarityModifiers[rarity - 1];
  if (level <=  40) return Math.floor((Math.random() * 6) + 19) + rarityModifiers[rarity - 1];
  if (level <=  50) return Math.floor((Math.random() * 6) + 25) + rarityModifiers[rarity - 1];
  if (level <=  60) return Math.floor((Math.random() * 6) + 31) + rarityModifiers[rarity - 1];
  if (level <=  70) return Math.floor((Math.random() * 6) + 37) + rarityModifiers[rarity - 1];
  if (level <=  80) return Math.floor((Math.random() * 6) + 43) + rarityModifiers[rarity - 1];
  if (level <=  90) return Math.floor((Math.random() * 6) + 49) + rarityModifiers[rarity - 1];
  if (level <=  100) return Math.floor((Math.random() * 6) + 55) + rarityModifiers[rarity - 1];
}

/* -- Testing --
for (let i = 0; i < 10; i++) {
  console.log(App.genMonster(Math.floor((Math.random() * 100) + 1)));
}
*/
