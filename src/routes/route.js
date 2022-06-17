const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require('../controllers/waetherController');
const memeController = require('../controllers/memeController');



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

// Assignments
router.get("/cowin/getSession", CowinController.getSessionByDistrict)
// waether Api Assignment
router.get("/weather/londonWeather", weatherController.getWeatherLondon)
router.get("/weather/londonTemp", weatherController.getTempLondon)
router.get("/weather/cityWithWeather", weatherController.cityWithWeather)

router.post("/meme/memeGenrator", memeController.craeteMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;