var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.get('/', function(req, res) {
    res.render('admin-login');
});

router.post('/login', function(req, res){
    // console.log('Login Success!');
    // console.log(11);
    if(req.body.userName == 1 && req.body.password == 1) {
        // console.log(11);
        // res.json({
        //     status: '1',
        //     msg: 'aaaaa'
        //     // msg: req.body.userName
        // });
        console.log(11);
    } else {
        // res.json({
        //     status: '0',
        //     msg: 'bbbbb'
        // });
        console.log(req.body.userName);
    }

});

module.exports = router;