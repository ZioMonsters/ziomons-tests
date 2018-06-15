const genTeam = require('./genTeam.js');

const { log } = console;
const { round } = Math;

const teams = [];

for (let i = 0; i < 32767; i++) {
  const t0 = genTeam();
  const l0 = round(t0.reduce((acc, {level}) => acc+level, 0)/5);

  //25 level zones
  const zone = round(l0/4);
  if (teams[zone])
    teams[zone].push(t0);
  else
    teams[zone] = [t0];

}
//log(teams);
//log(teams.map(e => e.reduce((acc) => acc++, 0)));

/*
* returns array of arrays:
* [
*   [{(pokemon1)}, {(pokemon2)}, {(pokemon3)}, {(pokemon4)}, {(pokemon4)}],
*   [{(pokemon1)}, {(pokemon2)}, {(pokemon3)}, {(pokemon4)}, {(pokemon5)}]
* ] //(See pokemon json format form genMonster.js
* */
module.exports = () => teams[randInt(0, 20)].slice(0, 2);

function randInt(min, max) { return Math.random() * (max - min) + min }
