const matchmaking = require('./matchmaking.js'); //[[squadra1], [squadra2]]
const fs = require('fs');

module.exports = {

  battle: () => {
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

  //fs.writeFileSync('data.txt', )
  }

}
