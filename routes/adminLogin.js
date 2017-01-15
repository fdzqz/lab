var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

router.get('/', function(req, res) {
    res.render('admin-login');
});

router.post('/login', function(req, res){
    var u = req.body;
    // console.log('Login Success!');
    // console.log(11);
    if(req.body.userName == 1 && req.body.password == 1) {
        // console.log(11);
        // 重定向
        // res.status(302);
        // res.setHeader('Cache-Control', 'no-cache');
        res.redirect(301, '/admin');
        // res.json({
        //     status: '1',
        //     msg: 'aaaaa'
        //     // msg: req.body.userName
        // });
        // console.log(11);
    } else {
        res.json({
            status: '0',
            msg: 'bbbbb'
        });
        // console.log(u);
    }

});

module.exports = router;