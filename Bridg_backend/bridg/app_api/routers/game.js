const express = require('express')
const router = express.Router()
const ctrGame = require('../controllers/game')
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/game', ctrGame.getGame);
router.post('/game', urlencodedParser, ctrGame.addGame);

module.exports = router