var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("GET REQ.body WEBHOOK")
    console.log(req.body)

    res.send("GET OK");
});

router.post('/', function(req, res, next) {
    console.log("POST REQ.body WEBHOOK")
    console.log(req.body)
    res.send("POST OK");
});

module.exports = router;