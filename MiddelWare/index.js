const express = require('express');
app = express()
const moment = require('moment');


app.get("/home", function (req, res, next) {
    const today = moment();
    console.log(today.format("YYYY-MM-DD HH:MM:SS") + " " + req.ip + " ," + req.path);
    res.send("mass")
});

app.listen(8000)



