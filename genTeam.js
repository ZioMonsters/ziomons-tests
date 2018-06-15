'use strict';

const { genMonster } = require('./genMonster.js');

//1, 21, 41, 61, 81

const getSquad = (level) => {
  const squad = [];
  for(let i = 0; i < 5; i++) {
    squad.push(genMonster(level));
  }
  return squad;
};

//returna un array con 5 oggetti rappresentanti la squadra di mostri
module.exports = () => {
  switch (Math.floor((Math.random() * 5) + 1)) {
    case 1:
      return getSquad(1);
    case 2:
      return getSquad(21);
    case 3:
      return getSquad(41);
    case 4:
      return getSquad(61);
    case 5:
      return getSquad(81);
  }
};
