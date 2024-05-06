const express = require('express');
const router = express.Router();
const data = require('../data');
const helpers = require('../helpers');

/* GET home page. */
router.use(function(req,res,next){
    res.locals= {
        navLinks: data.navLinks
    }
    next();
})
router.get('/', function (req, res) {
    const homeImage = helpers.firstFromList(data.artImageList)
    console.log({
        pr: process.env.hygraphUrl
    })
    res.render('pages/home', {title: 'Gerald x Cannon', homeImage});
});
router.get('/works', function (req, res) {
    const imageList = helpers.listWithoutFirst(data.artImageList);
    const {listTwo, listOne} = helpers.breakListInTwo(imageList, 9);
    res.render('pages/works', {
        artImages: {
            top: [...listOne],
            middle: [...listTwo]
        }
    });
});
router.get('/contact', function (req, res) {
    res.render('pages/contact');
});
router.get('/*', function (req, res) {
    res.redirect('/');
});

module.exports = router;
