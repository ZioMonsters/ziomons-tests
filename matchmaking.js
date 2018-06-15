const genTeam = require('./genTeam.js');

const { log } = console;

//20 level zones
const teams = [];

for (let i = 0; i < 32767; i++) {
  const t0 = genTeam();
  const l0 = t0.reduce(({level}) => acc+level, 0)/5;
  teams[l0/5].push(t0);
}

log(teams);
log(teams.map(e => e.reduce(() => acc++, 0)));

/*
* returns array of arrays:
* [
*   [{(pokemon1)}, {(pokemon2)}, {(pokemon3)}, {(pokemon4)}, {(pokemon4)}],
*   [{(pokemon1)}, {(pokemon2)}, {(pokemon3)}, {(pokemon4)}, {(pokemon5)}]
* ] //(See pokemon json format form genMonster.js
* */
module.exports = () => {
  return teams[randInt(0, 20)].slice(0, 2);
};

const randInt = (min, max) => {
  return Math.random() * (max - min) + min;
}
