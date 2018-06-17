'use strict';

const { readFileSync } = require('fs');
const battle = require('./battle.js');

const nTest = 2000;
const nameFile = 'test.txt';

module.exports = () => {
  battle(nameFile, nTest);
  const raws = readFileSync(`./${nameFile}`)
    .toString()
    .split('\n');
  return {
    winners: raws
      .map(raw => raw.split(' ')[3])
      .slice(0, nTest - 1),
    tests: raws
      .map((raw, index) => index + 1)
      .slice(0, nTest - 1)
  };
};
