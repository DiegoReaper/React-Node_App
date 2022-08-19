var express = require("express");
var router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get("/", function(req, res, next) {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
        .then(result => result.json())
        .then(json => {
            res.send({"message" : json});
        })
});

module.exports = router;

