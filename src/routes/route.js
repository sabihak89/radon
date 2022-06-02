const express = require('express');
const annu = require('../logger/logger')
const annubansal = require('../util/helper')
const annu1 = require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    annu.welcome()
    annubansal.printDate()
    annubansal.printMonth()
    annubansal.getBatchInfo()

    console.log(annu1.case1)
    console.log(annu1.case2)
    console.log(annu1.case3)

    
    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason