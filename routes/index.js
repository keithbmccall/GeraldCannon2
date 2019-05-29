const express = require('express');
const router = express.Router();
const data = require('../data');
const helpers = require('../helpers')


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('pages/home', {title: 'Gerald x Cannon'});
});
router.get('/works', function (req, res, next) {
    const {listTwo, listOne} = helpers.breakListInTwo(data.artImageList, 10);
    res.render('pages/works', {
        artImages: {
            top: [...listOne],
            middle: [...listTwo]
        }
    });
});
router.get('/contact', function (req, res, next) {
    res.render('pages/contact', {title: 'Gerald x Cannon'});
});

module.exports = router;
