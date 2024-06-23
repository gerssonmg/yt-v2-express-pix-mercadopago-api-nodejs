var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("GET v1 REQ.body WEBHOOK")
    console.log(req.body)

    res.send("GET v1 OK");
});

router.post('/', function(req, res, next) {
    console.log("POST V1 REQ.body WEBHOOK")
    console.log(req.body)
    res.send("POST v1 OK");
});

module.exports = router;