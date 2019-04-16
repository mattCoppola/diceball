const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const {
    DATABASE_URL,
    PORT
} = require('./config');

const app = express();

const {
    Game,
} = require('./models/user');

app.use(morgan('common'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('docs'));

////////////////////
// POST Endpoints //
////////////////////

// Create new results
app.post('/api/results', (req, res) => {
    console.log('POSTing New Results');

    const newResults = {
    	gameName: req.body.gameName,
    	gameStats: {
    		inning: req.body.gameStats.inning,
    		outs: req.body.gameStats.outs,
    		balls: req.body.gameStats.balls,
    		strikes: req.body.gameStats.strikes
    	},
     gameScore: {
    		homeTeam: req.body.gameScore.homeTeam,
    		awayTeam: req.body.gameScore.awayTeam
    	}
    }

    console.log('New Results: ', newResults);

    Game.create(newResults)
        .then(created => {
            res.status(201).json(created);
        })
        .catch(err => {
            console.log('Error: ', err);
            return res.status(500).json({
                error: 'internal server error'
            });
        });
});

/////////////////////////////
//Authorized PUT Endpoints //
/////////////////////////////
app.put('/api/update-results/:id', (req, res) => {

    Game.findByIdAndUpdate(req.params.id, {
        $set: {
        	"gameName": req.body.gameName,
        	"gameStats.inning": req.body.gameStats.inning,
        	"gameStats.outs": req.body.gameStats.outs,
        	"gameStats.balls": req.body.gameStats.balls,
        	"gameStats.strikes": req.body.gameStats.strikes,
        	"gameScore.homeTeam": req.body.gameScore.homeTeam,
        	"gameScore.awayTeam": req.body.gameScore.awayTeam
        	}
    }).then(function (result) {
        return res.status(204).end();
    }).catch(function (err) {
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    });
});

////////////////////////////////
//Authorized DELETE Endpoints //
////////////////////////////////

app.delete('/api/delete-results/:id', (req, res) => {
    console.log('Deleting ID: ', req.params.id);

    Game.findByIdAndRemove(req.params.id)
        .then(function (result) {
            return res.status(200).end();
        }).catch(function (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        });
});


///////////////////
// GET Endpoints //
///////////////////

app.get('/api/results/:_id', (req, res) => {
    Game.find()
        .then(function (results) {
            let resultsOutput = [];
            results.map(function (result) {

                    resultsOutput.push(result);

            });
            res.json({
                resultsOutput
            });
        })
        .catch(function (err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            });
        });
});


let server;

// this function connects to our database, then starts the server
function runServer(databaseUrl, port = PORT) {
    return new Promise((resolve, reject) => {
        mongoose.connect(databaseUrl, err => {
            if (err) {
                return reject(err);
            }
            server = app.listen(port, () => {
                    console.log(`Your app is listening on port ${port}`);
                    resolve();
                })
                .on('error', err => {
                    mongoose.disconnect();
                    reject(err);
                });
        });
    });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
    return mongoose.disconnect().then(() => {
        return new Promise((resolve, reject) => {
            console.log('Closing server');
            server.close(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
    runServer(DATABASE_URL).catch(err => console.error(err));
}

module.exports = {
    runServer,
    app,
    closeServer
};
