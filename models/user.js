const mongoose = require('mongoose');
// const moment = require('moment');

const gameInfo = new mongoose.Schema({
  gameName: {
    type: String,
    required: false
  },
  gameStats: {
    inning: {
      type: Number
    },
    outs: {
      type: Number
    },
    balls: {
      type: Number
    },
    strikes: {
      type: Number
    }
  },
  gameScore: {
    homeTeam: {
      type: Number
    },
    awayTeam: {
      type: Number
    }
  }
});

const Game = mongoose.model('Game', gameInfo);

module.exports = {
  Game
};
