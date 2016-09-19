var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var session = require('express-session');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'eranda',
    password: 'password'
});

connection.connect();

var data, cart = 5;

connection.query('SELECT * FROM node_shopping.products', function (err, rows, fields) {
    if (err) throw err;
    data = rows;
});

connection.end();


var app = express();


app.use(function (req, res, next) {
    cart = req.session.myCart;
    if (!cart) {
        cart = req.session.myCart = {};
    }
    cart['prod'] = (cart['prod'] || 0) + 1;
    next();

});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Node Shopping', data: data, currency: 'Rs. ', cart: cart});
});

router.post('/', function (req, res) {
    console.log(req);
    res.send('Came');
});

module.exports = router;
