const express = require('express');
const router = express.Router();
const data = require('../data');
const helpers = require('../helpers');

/* GET home page. */
router.get('/', function (req, res) {
    const homeImage = helpers.firstFromList(data.artImageList)
    res.render('pages/home', {title: 'Gerald x Cannon', homeImage});
});
router.get('/works', function (req, res) {
    const imageList = helpers.listWithoutFirst(data.artImageList);
    const {listTwo, listOne} = helpers.breakListInTwo(imageList, 10);
    res.render('pages/works', {
        artImages: {
            top: [...listOne],
            middle: [...listTwo]
        }
    });
});
router.get('/contact', function (req, res) {
    res.render('pages/contact', {title: 'Gerald x Cannon'});
});
router.get('/*', function (req, res) {
    res.redirect('/');
});

module.exports = router;
