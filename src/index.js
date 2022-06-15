const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://kishan_31:4GdZARnCyGUbPKKw@cluster0.d5f50qs.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("HELLO MR. KISHAN MongoDb is connected"))
    .catch(err => console.log(err))


app.use('/', route)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
