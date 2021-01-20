// Make Team info 
const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    },
    {
      firstName: 'Luis',
      lastName: 'Will',
      age: 13
    },
    {
      firstName: 'Sein',
      lastName: 'Mike',
      age: 12
    }
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    },
    {
      opponent: 'Jangos',
      teamPoints: 33,
      opponentPoints: 39
    },
    {
      opponent: 'Dudes',
      teamPoints: 22,
      opponentPoints: 17
    }
  ],
  // retrieve new players info
  get players() {
    return this._players;
  },
  //retrieve new games info
  get games() {
    return this._games;
  },

  // add Player info to team array
  addNewPlayerToTeam(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    return this.players.push(player);
  },
  // add games result to team array
  addGame(opponentName, teamPoints, opponentPoints){
    const game = {
      opponent: opponentName,
      teamPoints,
      opponentPoints
    };
    return team.games.push(game);
  }
};

team.addNewPlayerToTeam('Steph', 'Curry', 28);
team.addNewPlayerToTeam('Lisa', 'Leslie', 44);
team.addNewPlayerToTeam('Bugs', 'Bunny', 76);

team.addGame('Dragons', 50, 40);
team.addGame('Savers', 12, 30);
team.addGame('Rabbits', 30, 29);

console.log(team.players);
console.log(team.games);

