const matchmaking = require('./matchmaking.js'); //[[squadra1], [squadra2]]
const fs = require('fs');

  const battle = () => {
    const teams = matchmaking();
    const team1 = teams[0];
    const team2 = team2[1];
    const results = [];

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

  fs.writeFileSync('./data.txt', results, utf8);
  results.forEach((e) => {
    if ( e === 1 ) score1++;
    else if ( e === 2 ) score2++;
  });
  return (score1>score2)? score1:score2;
  }

for(let i = 0; i<30; i++){
  battle();
}
