const matchmaking = require('./matchmaking.js'); //[[squadra1], [squadra2]]
const fs = require('fs');

let counter1 = 0, counter2 = 0;

  const battle = () => {
    const teams = matchmaking();
    const team1 = teams[0];
    const team2 = teams[1];
    const results = [];
    let score1 = 0, score2 = 0;

    for(let i = 0; i<team1.length; i++){
      if(team1[i].speed > team2[i].speed){
        if (team1[i].attackPower > team2[i].defensePower) results.push(1);
        else results.push(2);
      } else if (team1[i].speed < team2[i].speed){
        if (team2[i].attackPower > team1[i].defensePower) results.push(2);
        else results.push(1);
      } else {
        if (team1[i].attackPower > team2[i].attackPower) results.push(1);
        else if (team1[i].attackPower < team2[i].attackPower) results.push(2);
        else {
          if (team1[i].defensePower > team2[i].defensePower) results.push(1);
          else if (team1[i].defensePower < team2[i].defensePower) results.push(2);
          else results.push('-');
        }
      }
    }
  results.forEach((e) => {
      if ( e === 1 ) score1++;
      else if ( e === 2 ) score2++;
    });


  const output = `${results.toString()} winner is: ${(score1>score2)? 1:2} percentage winning: ${(score1>score2)? score1/5*100:score2/5*100}%\n`
  fs.appendFileSync('./data.txt', output);
  if(score1>score2) counter1++
  else counter2++;
  }

const matches = 400;

for(let i = 0; i<matches; i++){
  battle();
}

fs.appendFileSync('./data.txt', `winning ${(counter1>counter2)? 1:2} in ${(counter1>counter2)? counter1/matches*100:counter2/matches*100}%`);
