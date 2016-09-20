var express = require('express');
var session = require('express-session');
var router = express.Router();

var conn = require('./connection');
var connection = conn.connection();

var data;

connection.query('SELECT * FROM node_shopping.products', function (err, rows) {
    if (err) throw err;
    data = rows;
});


router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));


router.get('/', function (req, res) {

    var cart = req.session.cart;
    var ids = Object.keys(cart);

    connection.query('SELECT * FROM node_shopping.products WHERE id IN (' + ids + ')', function (err, rows) {
        if (err) throw err;
        cart_data = rows;
        res.render('index', {title: 'Node Shopping', data: data, currency: 'Rs. ', cart_data: rows, cart: cart});
    });
    res.render('index', {title: 'Checkout', currency: 'Rs. ', cart_data: cart_data});
});
module.exports = router;