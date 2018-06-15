const genTeam = require('./genTeam.js');

const { round } = Math;

module.exports = () =>  {
  const t0 = genTeam();
  const l0 = round(t0.reduce((acc, {level}) => acc+level, 0)/5);
  while (true) {
    const t1 = genTeam();
    const l1 = round(t1.reduce((acc, {level}) => acc+level, 0)/5);
    if (l1 === l0)
      return([t0, t1]);
  }
};
