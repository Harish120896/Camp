var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var Camp = require('../models/camps');

/* GET home page. */
router.get('/', function(req, res, next) {
      res.json({"Message":"Welcome to CampSearch"});
});
router.get('/search/:camptype/:location', function(req, res, next) {
   Camp.find({camptype:req.params.camptype,location:req.params.location})
        .exec(function (err, camp) {
        if (err) throw err;
        res.json(camp);
    });
});
router.post('/post', function (req, res, next) {
    Camp.create(req.body, function (err, camp) {
        if (err) throw err;
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Registered Successfully');
    });
})


module.exports = router;
