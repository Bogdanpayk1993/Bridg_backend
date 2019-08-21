const mongoose = require('mongoose')
const Game = require('../models/game')

const sendJSONResponse = (res, status, content) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.status(status).json(content)
}

module.exports.getGame = function(req, res) {
    const filter = req.body.filter || {}
    Game.find(filter)
    .exec((err, game) => {
        if (err) {
            sendJSONResponse(res, 404, {message: "Game not found"})
            return
        }
        if (game.length == 0) {
            sendJSONResponse(res, 404, {message: "Game not found (empty)"})
            return
        }
        sendJSONResponse(res, 200, game)
    })
}

module.exports.addGame = function(req, res) {
    if (!req.body || !req.body.names || !req.body.status || !req.body.accountU || !req.body.accountC) {
        sendJSONResponse(res, 400, {message:"No data"})
        return
    }
    
    const newGame = new Game({
        names:req.body.names,
        status:req.body.status,
        accountU:req.body.accountU,
        accountC:req.body.accountC
    })

    newGame.save((err) => {
        if (err) {
            sendJSONResponse(res, 500, {message:arr})
            return
        }
        sendJSONResponse(res, 200, {message: 'added'})
    })
}